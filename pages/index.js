// import "dotenv/config"; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
// import express from "express";

import { useState, useEffect } from "react";

import Event from "@/components/Event";
import Searchbar from "@/components/Searchbar";

import upcomingMarkets from "@/data/upcomingMarkets.json";

export default function Home() {
  const [events, setEvents] = useState(upcomingMarkets);
  const [upcoming, setUpcoming] = useState();
  const [sports, setSports] = useState([]);
  // Select Sports & League
  const [sport, selectSport] = useState([]);
  const [league, selectLeague] = useState("upcoming");

  const axios = require("axios");
  // const apiKey = "YOUR_API_KEY";
  const apiKey = "0964ad4e3be969508766aef582e92012";
  const sportKey = "upcoming"; // use the sport_key from the /sports endpoint below, or use 'upcoming' to see the next 8 games across all sports
  const regions = "au"; // uk | us | eu | au. Multiple can be specified if comma delimited
  // const markets = "h2h,spreads,totals"; // h2h | spreads | totals. Multiple can be specified if comma delimited
  const markets = "h2h"; // h2h | spreads | totals. Multiple can be specified if comma delimited
  const oddsFormat = "decimal"; // decimal | american
  const dateFormat = "iso"; // iso | unix

  // * GET DATA

  useEffect(() => {
    /*
    First get a list of in-season sports
        the sport 'key' from the response can be used to get odds in the next request

*/
    axios
      .get("https://api.the-odds-api.com/v4/sports/?outrights=false", {
        params: {
          apiKey,
        },
      })
      .then((response) => {
        console.log(response.data);
        // Set Upcoming Events
        setUpcoming(response.data);
        // Check your usage
        console.log(
          "Remaining requests",
          response.headers["x-requests-remaining"]
        );
        console.log("Used requests", response.headers["x-requests-used"]);
      })
      .catch((error) => {
        console.log("Error status", error.response.status);
        console.log(error.response.data);
      });

    console.log("Axios Ran");
  }, []);

  useEffect(() => {
    // SET SPORTS
    if (upcoming && sports.length === 0) {
      const allTitles = upcoming.map((event) => {
        if (event.has_outrights === false) {
          return event.group;
        }
      });
      console.log("allTitles", allTitles);
      const uniqueTitles = [...new Set(allTitles)];

      setSports(uniqueTitles);
    }
  }, [upcoming, sports.length]);

  // * FIND ODDS

  const findOdds = async (e) => {
    e.preventDefault();

    axios
      .get(`https://api.the-odds-api.com/v4/sports/${league}/odds`, {
        params: {
          apiKey,
          regions,
          markets,
          oddsFormat,
          dateFormat,
        },
      })
      .then((response) => {
        console.log("Find Matches", response.data);
        // Set Events
        setEvents(response.data);

        // Check your usage
        console.log(
          "Remaining requests",
          response.headers["x-requests-remaining"]
        );
        console.log("Used requests", response.headers["x-requests-used"]);
      })
      .catch((error) => {
        console.log("Error status", error.response.status);
        console.log(error.response.data);
      });

    console.log("Select League", league);
  };

  console.log("upcoming", upcoming);
  console.log("events", events);

  return (
    <main className="container">
      <article className="article-display-odds">
        <section className="article-display-odds__title">
          <h1>Upcoming Events</h1>
        </section>
        <section className="article-display-odds__events">
          <Event events={events} />
        </section>
      </article>
      <aside className="aside">
        <Searchbar
          data={upcoming}
          sport={sport}
          sports={sports}
          findOdds={findOdds}
          selectSport={selectSport}
          selectLeague={selectLeague}
        />
      </aside>
    </main>
  );
}
