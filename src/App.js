import { useState, useEffect } from "react";
import "./App.scss";

import jsonData from "./data.json";

import h2hData from "./h2hData.json";
import spreadData from "./spreadData.json";
import totalData from "./totalData.json";

import Event from "./components/Event";
import Search from "./components/Search";

// API Key
// const APIkey = "0964ad4e3be969508766aef582e92012";

function App() {
  const [data, setData] = useState();
  const [sports, setSports] = useState([]);

  const [sport, selectSport] = useState([]);
  // eslint-disable-next-line
  const [league, selectLeague] = useState([]);

  const [h2h, setH2H] = useState([]);

  const [eventObject, setEventObject] = useState([]);

  // * Get Data

  useEffect(() => {
    const getOdds = () => {
      setData(jsonData);
    };
    getOdds();

    // SET SPORTS

    if (data !== undefined && sports.length === 0) {
      const allSports = data.map((event) => event.group);

      const uniqueSports = [...new Set(allSports)];

      setSports(uniqueSports);
    }

    // Set Upc
    setH2H(h2hData);
    // ? setH2H Completed?
    console.warn("setH2HCompleted?");
  }, [data, sports.length]);

  // * Handle Sport & League onChange

  const handleSportChange = (e) => {
    selectSport(e.target.value);
  };

  const handleLeagueChange = (e) => {
    selectLeague(e.target.value);
  };

  // * Find Odds

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

    creatEventObject(h2hData);
    addSpreadAndTotal(spreadData, totalData);
    // ? creatEventObject & addSpreadAndTotal Completed?
    console.warn("creatEventObject & addSpreadAndTotal Completed?");

    console.log("Event Object", eventObject);
  };

  // * CREATE EVENT OBJECT FUNCTION
  const creatEventObject = (data) => {
    // ? creatEventObject RAN?
    console.warn("creatEventObject Ran?");

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

      // ? creatEventObject: COMPLETED?
      console.warn("creatEventObject Completed");
    });
  };

  const addSpreadAndTotal = (spread, total) => {
    // ? addSpreadAndTotal: RAN?
    console.warn("addSpreadAndTotal Ran");

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
    // ? addSpreadAndTotal: Completed?
    console.warn("addSpreadAndTotal Completed");

    setEventObject({ ...eventObject, mutableObject });
    console.warn("setEventObject Completed");
  };

  // console.log("Event Object", eventObject);

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
            <Event h2h={h2h} />
          </div>
        </main>
        <Search
          data={data}
          sport={sport}
          sports={sports}
          findOdds={findOdds}
          handleSportChange={handleSportChange}
          handleLeagueChange={handleLeagueChange}
        />
      </section>
    </>
  );
}

export default App;
