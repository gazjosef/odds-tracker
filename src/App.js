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

  const [eventObject, setEventObject] = useState([]);

  // * GET DATA

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
  }, [data, sports.length]);

  // console.log("h2hData", h2hData);

  // * FIND ODDS

  const findOdds = async (e) => {
    // e.preventDefault();
    // const markets = ["h2h", "spreads", "totals"];
    // for (let i = 0; i < markets.length; i++) {
    //   let market = markets[i];
    //   let api_call = await fetch(
    //     `https://api.the-odds-api.com/v4/sports/upcoming/odds/?apiKey=${APIkey}&regions=au&markets=${market}`
    //   );
    //   let apiData = await api_call.json();
    //   console.log("API forLoop", apiData);
    // }

    creatEventObject(h2hData, spreadData, totalData);
    console.warn("creatEventObject Completed");
  };

  // * CREATE EVENT OBJECT FUNCTION

  const creatEventObject = (h2h, spread, total) => {
    // Clear Event Objet
    setEventObject([]);

    const newObject = [];

    // Loop through H2H
    h2h.forEach((event) => {
      // Map Bookmmakes
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

      newObject.push(eventDetails);
    });

    // Loop through Spread
    spread.forEach((fixture) => {
      // Find same event
      let event = newObject.find((event) => event.id === fixture.id);

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
      let event = newObject.find((event) => event.id === fixture.id);

      // Avoid undefined error message
      if (event !== undefined) {
        // Add Spread Odds
        fixture.bookmakers.map((bookmaker) => {
          return event.total.push(bookmaker);
        });
      }
    });

    setEventObject(newObject);

    console.warn("Set Event Object Completed");
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
            <Event eventObject={eventObject} />
          </div>
        </main>
        <Search
          data={data}
          sport={sport}
          sports={sports}
          findOdds={findOdds}
          selectSport={selectSport}
          selectLeague={selectLeague}
        />
      </section>
    </>
  );
}

export default App;
