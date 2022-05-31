import { useState, useEffect } from "react";

import Event from "@/components/Events/Event";
import Searchbar from "@/components/Searchbar/Searchbar";
import upcomingMarkets from "@/data/upcomingMarkets.json";

export default function Home() {
  const [events, setEvents] = useState(upcomingMarkets);
  const [upcoming, setUpcoming] = useState();
  const [sports, setSports] = useState([]);
  // Select Sports & League
  const [sport, selectSport] = useState([]);
  const [league, selectLeague] = useState("upcoming");

  const axios = require("axios");
  const apiKey = process.env.NEXT_PUBLIC_ODDS_API_KEY;
  const sportKey = "upcoming"; // use the sport_key from the /sports endpoint below, or use 'upcoming' to see the next 8 games across all sports
  const regions = "au"; // uk | us | eu | au. Multiple can be specified if comma delimited
  const markets = "h2h,spreads,totals"; // h2h | spreads | totals. Multiple can be specified if comma delimited
  const oddsFormat = "decimal"; // decimal | american
  const dateFormat = "iso"; // iso | unix

  // * GET DATA

  useEffect(() => {
    axios
      .get("https://api.the-odds-api.com/v4/sports/?outrights=false", {
        params: {
          apiKey,
        },
      })
      .then((response) => {
        console.log("Upcoming Sports", response.data);
        // Set Upcoming Events
        setUpcoming(response.data);
        // Check my usage
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
  }, []);

  useEffect(() => {
    console.log("upcomingMarkets", upcomingMarkets);
    // Set Sports in Sidebar
    if (upcoming && sports.length === 0) {
      const allTitles = upcoming.map((event) => {
        if (event.has_outrights === false) {
          return event.group;
        }
      });

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
  };

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
