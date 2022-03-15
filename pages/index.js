// import "dotenv/config"; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
// import express from "express";

import { useState, useEffect } from "react";

import Event from "@/components/Event";
import Event2 from "@/components/Event2";
import Searchbar from "@/components/Searchbar";

import jsonData from "@/data/data.json";
import h2hData from "@/data/h2hData.json";
import spreadData from "@/data/spreadData.json";
import totalData from "@/data/totalData.json";
import upcomingData from "@/data/upcoming.json";
import upcomingMarkets from "@/data/upcomingMarkets.json";

export default function Home() {
  const [events, setEvents] = useState([]);
  // const [upcoming, setUpcoming] = useState();
  const [data, setData] = useState();
  const [sports, setSports] = useState([]);
  const [sport, selectSport] = useState([]);

  const [league, selectLeague] = useState([]);
  const [eventObject, setEventObject] = useState([]);

  // * GET DATA

  useEffect(() => {
    //* Load Odds
    const loadOdds = async () => {
      // let new_api_key = "0964ad4e3be969508766aef582e92012";
      // let api_call = await fetch(
      //   // `https://api.the-odds-api.com/v4/sports/upcoming/odds/?apiKey=${APIkey}&regions=au&markets=${market}`
      //   `https://api.the-odds-api.com/v4/sports/upcoming/odds/?apiKey=${new_api_key}&markets=h2h,spreads,totals&regions=au`
      // );
      // let allMarkets = await api_call.json();
      // console.log("API All Markets", allMarkets);
      // setEvents(upcomingMarkets);
      // console.log(upcomingMarkets);
      setEvents(upcomingMarkets);
      // if (upcoming) {
      //   console.log(upcoming);
      // }
      // console.log(upcoming);
    };
    loadOdds();

    //* Get Odds
    const getOdds = () => {
      setData(jsonData);
    };
    getOdds();

    // SET SPORTS
    if (data && sports.length === 0) {
      const allTitles = data.map((event) => event.group);
      const uniqueTitles = [...new Set(allTitles)];

      setSports(uniqueTitles);
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
    console.log(data);

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

  return (
    <div className="container">
      <main className="home">
        <section className="display-odds">
          <div>
            <h1 className="display-odds__title">Upcoming Events</h1>
          </div>

          <div className="display-odds__league"></div>

          <div className="display-odds__events">
            <Event2 events={events} />
            <Event eventObject={eventObject} />
          </div>
        </section>
      </main>
      <article className="article-display-odds">
        <div className="article-display-odds__title">
          <h1>Upcoming Events</h1>
        </div>
        <div className="article-display-odds__events"></div>
      </article>
      <aside className="aside">
        <Searchbar
          data={data}
          sport={sport}
          sports={sports}
          findOdds={findOdds}
          selectSport={selectSport}
          selectLeague={selectLeague}
        />
      </aside>
    </div>
  );
}
