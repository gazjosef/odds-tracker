import { useState, useEffect } from "react";

import Event from "@/components/Event";
import Searchbar from "@/components/Searchbar";

import jsonData from "@/data/data.json";
import h2hData from "@/data/h2hData.json";
import spreadData from "@/data/spreadData.json";
import totalData from "@/data/totalData.json";

export default function Home() {
  const [data, setData] = useState();
  const [sports, setSports] = useState([]);
  const [sport, selectSport] = useState([]);

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

  // * CREATE EVENT OBJECT

  const creatEventObject = (h2h, spread, total) => {
    // Clear Event Objet
    setEventObject([]);

    // Create New Object
    const newObject = [];

    // * LOOP THROUGH H2H DATA
    h2h.forEach((event) => {
      // Map Bookmmakes
      let h2hBookmakers = event.bookmakers.map((bookmaker) => {
        return bookmaker;
      });

      // * CREATE EVENT DETAILS
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

    // * LOOP THROUGH SPREAD DATA
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

    // * LOOP THROUGH TOTAL DATA
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

  // console.log("eventObject", eventObject);

  return (
    <>
      <header className="header">
        <div className="header__title">
          <h1>Odds Tracker</h1>
        </div>
      </header>
      <main className="home">
        <section className="display-odds">
          <div className="display-odds__title">
            <h1>Sport</h1>
          </div>
          <div className="display-odds__league"></div>
          <div className="display-odds__events">
            <Event eventObject={eventObject} />
          </div>
        </section>
        <Searchbar
          data={data}
          sport={sport}
          sports={sports}
          findOdds={findOdds}
          selectSport={selectSport}
          selectLeague={selectLeague}
        />
      </main>
    </>
  );
}
