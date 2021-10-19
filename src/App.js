import { useState, useEffect } from "react";
import "./App.scss";

import jsonData from "./data.json";

import h2hData from "./h2hData.json";
import spreadData from "./spreadData.json";
import totalData from "./totalData.json";

import Event from "./components/Event";
import Search from "./components/Search";

// API Key
// eslint-disable-next-line
const APIkey = "0964ad4e3be969508766aef582e92012";

function App() {
  const [data, setData] = useState();
  const [sports, setSports] = useState([]);

  const [sport, selectSport] = useState([]);
  // eslint-disable-next-line
  const [league, selectLeague] = useState([]);

  const [h2h, setH2H] = useState([]);
  const [spread, setSpread] = useState([]);
  const [total, setTotal] = useState([]);

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

    // const markets = ["h2h", "spreads", "totals"];

    // for (let i = 0; i < markets.length; i++) {
    //   let market = markets[i];

    //   let api_call = await fetch(
    //     `https://api.the-odds-api.com/v4/sports/upcoming/odds/?apiKey=${APIkey}&regions=au&markets=${market}`
    //   );

    //   let apiData = await api_call.json();

    //   console.log("API forLoop", apiData);
    // }

    setH2H(h2hData);
    setSpread(spreadData);
    setTotal(totalData);

    creatEventObject(h2h);
    addSpreadAndTotal(spread, total);
  };

  // * CREATE EVENT OBJECT FUNCTION
  const creatEventObject = (data) => {
    // Clear Event Objet
    setEventObject([]);

    // Loop through Data
    data.forEach((event) => {
      // Loop through Bookmmakes
      let h2hBookmakers = event.bookmakers.map((bookmaker) => {
        return bookmaker;
      });

      // * CREATE EVENT OBJECT
      let eventDetails = {
        id: event.id,
        sports_title: event.sport_title,
        away_team: event.away_team,
        home_team: event.home_team,
        commence_time: event.commence_time,
        h2h: h2hBookmakers,
        spread: [],
        total: [],
      };

      setEventObject((prevArray) => [...prevArray, eventDetails]);
    });
  };

  const addSpreadAndTotal = (spread, total) => {
    // Create mutable object
    let mutableObject = eventObject;

    // Loop through Spread
    spread.forEach((fixture) => {
      // Find same event
      let event = mutableObject.find((event) => event.id === fixture.id);

      // Avoid undefined error message
      if (event !== undefined) {
        // Add Spread Odds
        fixture.bookmakers.map((bookmaker) => {
          return event.spread.push(bookmaker);
        });
      }
    });

    // Loop through Total
    total.forEach((fixture) => {
      // Find same event
      let event = mutableObject.find((event) => event.id === fixture.id);

      // Avoid undefined error message
      if (event !== undefined) {
        // Add Spread Odds
        fixture.bookmakers.map((bookmaker) => {
          return event.total.push(bookmaker);
        });
      }
    });

    console.log("mutableObject", mutableObject);
    // if (mutableObject !== undefined) {
    //   setEventObject(mutableObject);
    // }
    setEventObject(mutableObject);
  };

  console.log("Event Object", eventObject);

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
            <Event h2h={h2h} spread={spread} total={total} />
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
