import { useState, useEffect } from "react";
import "./App.scss";

import jsonData from "./data.json";

import h2hData from "./h2hData.json";
import spreadData from "./spreadData.json";
import totalData from "./totalData.json";

import Event from "./components/Event";
import Search from "./components/Search";

// API Key
const APIkey = "0964ad4e3be969508766aef582e92012";

function App() {
  const [data, setData] = useState();
  const [sports, setSports] = useState([]);

  const [sport, selectSport] = useState([]);
  const [league, selectLeague] = useState([]);

  const [h2h, setH2H] = useState([]);
  const [spreads, setSpreads] = useState([]);
  const [totals, setTotals] = useState([]);

  const [eventObject, setEventObject] = useState([]);

  // * Get Data

  useEffect(() => {
    const getOdds = () => {
      setData(jsonData);
    };
    getOdds();
  });

  // console.log(jsonData);

  // * Set Sports

  if (data !== undefined && sports.length === 0) {
    const allSports = data.map((event) => event.group);

    const uniqueSports = [...new Set(allSports)];

    setSports(uniqueSports);
  }

  // * Handle Sport & League onChange

  const handleSportChange = (e) => {
    selectSport(e.target.value);
  };

  const handleLeagueChange = (e) => {
    selectLeague(e.target.value);
  };

  // * Display Elements

  const displaySports = sports.map((sport, index) => (
    <option key={index}>{sport}</option>
  ));

  // * Find Objects

  const findOdds = async (e) => {
    e.preventDefault();

    // Original
    // const api_call = await fetch(
    //   `https://api.the-odds-api.com/v4/sports/${league}/odds?regions=au&oddsFormat=decimal&apiKey=${APIkey}`
    // );

    // New
    // const markets = ["h2h", "spreads", "totals"];

    // for (let i = 0; i < markets.length; i++) {
    //   let market = markets[i];

    //   let api_call = await fetch(
    //     `https://api.the-odds-api.com/v4/sports/upcoming/odds/?apiKey=${APIkey}&regions=au&markets=${market}`
    //   );

    //   let apiData = await api_call.json();

    //   console.log("API forLoop", apiData);
    // }

    // setH2H(h2hData);
    // setSpreads(spreadData);
    // setTotals(totalData);

    creatEventObject(h2hData);
    addToEventObject(spreadData);
  };

  // console.log("H2H", h2hData);
  // console.log("Spread", spreadData);
  // console.log("Total", totalData);

  // * CREATE EVENT OBJECT FUNCTION
  const creatEventObject = (data) => {
    // Clear Event Objet
    setEventObject([]);

    // Loop through Data
    data.forEach((event) => {
      let bookmakersArray = [];

      // Loop through Bookmmakers
      event.bookmakers.forEach((bookmaker) => {
        let marketsArray = [];

        // Loop through Markets
        bookmaker.markets.forEach((market) => {
          // let odds = [];

          // // Loop through Outcomes
          // market.outcomes.forEach((outcome) => {
          //   odds.push(outcome);
          // });

          // Loop through Outcomes
          let odds = market.outcomes.map((outcome) => {
            return outcome;
          });

          console.log("odds", odds);
          // market.outcomes.forEach((outcome) => {
          //   odds.push(outcome);
          // });

          // * CREATE MARKET OBJECT
          let marketObject = {
            title: market.key,
            odds: odds,
          };

          marketsArray.push(marketObject);
        });

        // * CREATE BOOKMAKER OBJECT
        let newBookmaker = {
          title: bookmaker.title,
          markets: marketsArray,
        };

        bookmakersArray.push(newBookmaker);
      });

      // * CREATE EVENT OBJECT
      let eventDetails = {
        id: event.id,
        sports_title: event.sport_title,
        away_team: event.away_team,
        home_team: event.home_team,
        commence_time: event.commence_time,
        bookmakers: bookmakersArray,
      };

      setEventObject((prevArray) => [...prevArray, eventDetails]);
    });
  };

  // console.log("Event Object", eventObject.bookmakers);

  const addToEventObject = (data) => {
    // console.log("Spread Data", data);
    // console.log("Event Object", eventObject);
    // console.log("Event Object Bookmakers", eventObject.bookmakers);

    // Loop through Data
    data.forEach((fixture) => {
      // Find same event
      let sameEvent = eventObject.find((event) => event.id === fixture.id);

      console.log("Same Event", sameEvent);

      if (sameEvent !== undefined) {
        console.log("Same Event Bookmakers", sameEvent.bookmakers);
        console.log("Spread Bookmakers", fixture);
      }
      // console.log("Spread", fixture.bookmakers);
      // console.log(fixture);
    });
  };

  return (
    <>
      <header className="header">
        <div className="header__title">
          <h1>Odds Tracker</h1>
        </div>
      </header>
      <section className="section-home">
        <main className="sport-odds">
          <div className="sport-odds__title">
            <h1>Sport</h1>
          </div>
          <div className="sport-odds__league"></div>
          <div className="sport-odds__events">
            <Event h2h={h2h} spreads={spreads} totals={totals} />
          </div>
        </main>
        <Search
          data={data}
          sport={sport}
          displaySports={displaySports}
          findOdds={findOdds}
          handleSportChange={handleSportChange}
          handleLeagueChange={handleLeagueChange}
        />
      </section>
    </>
  );
}

export default App;
