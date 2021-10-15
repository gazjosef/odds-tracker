import { useState, useEffect } from "react";
import "./App.scss";
import jsonData from "./data.json";

import Event from "./components/Event";
import Search from "./components/Search";

// API Key
// const APIkey = "0964ad4e3be969508766aef582e92012";

function App() {
  const [data, setData] = useState();

  const [sports, setSports] = useState([]);
  const [leagues, setLeagues] = useState([]);
  // const [markets, setMarkets] = useState([]);

  const [sport, selectSport] = useState([]);
  // const [league, selectLeague] = useState([]);
  // const [market, selectMarket] = useState("--Select Market--");

  // Get Data
  useEffect(() => {
    const getOdds = () => {
      setData(jsonData);
    };
    getOdds();
    console.log("useEffect");
  });

  console.log("1st/3rd", data);

  // Set Sports
  if (data !== undefined && sports.length === 0) {
    const allSports = data.map((event) => event.group);

    const uniqueSports = [...new Set(allSports)];

    setSports(uniqueSports);
    console.log("sports has been set");
    selectSport(uniqueSports[0]);
    // console.log("First Event", uniqueSports[0]);
    // setSports()
  }

  console.log("sports", sports);

  // Set Leagues
  if (data !== undefined && leagues.length === 0) {
    data.map((event) => {
      if (event.group === sport) {
        setLeagues((prevState) => [...prevState, event.title]);
      }
    });
  }
  console.log("Leagues", leagues);

  //     // jsonData.forEach((event) => {
  //     //   if (event.group === sport) {
  //     //     // allLeagues.push(event.title);
  //     //     setLeagues((prevState) => [...prevState, event.title]);
  //     //   }
  //     // });
  //     // console.log("Check Sports", sports);

  //     // console.log("Get Leagues", allLeagues);

  // * OLD USEEFFECT()
  // useEffect(() => {
  //   const getOdds = async (e) => {
  //     // const api_call = await fetch();
  //     // `https://api.the-odds-api.com/v3/sports?apiKey=${APIkey}`

  //     // const apiData = await api_call.json();
  //     console.log("Get Data", jsonData);

  //     setData(jsonData);

  //     let allEvents = [];
  //     let allSports = [];

  //     jsonData.forEach((event) => {
  //       allEvents.push(event.group);
  //     });

  //     console.log("Get Events", allEvents);

  //     allEvents.forEach((name) => {
  //       if (allSports.indexOf(name) === -1) {
  //         allSports.push(name);
  //         setSports((prevState) => [...prevState, name]);
  //       }
  //     });

  //     selectSport(sports[0]);

  //     // jsonData.forEach((event) => {
  //     //   if (event.group === sport) {
  //     //     // allLeagues.push(event.title);
  //     //     setLeagues((prevState) => [...prevState, event.title]);
  //     //   }
  //     // });
  //     // console.log("Check Sports", sports);

  //     // console.log("Get Leagues", allLeagues);

  //     // setLeagues(allLeagues);
  //   };
  //   getOdds();
  // }, []);

  // console.log("1st/3rd | Check Sports", sports);
  // console.log("1st/3rd | Check Sport", sport);

  // data.forEach((event) => {
  //   // console.log(event.group);
  //   if (event.group === sport) {
  //     // allLeagues.push(event.title);
  //     setLeagues((prevState) => [...prevState, event.title]);
  //   }
  // });
  // console.log("1st/3rd | Check Leagues", leagues);

  const displaySports = sports.map((sport, index) => (
    <option key={index}>{sport}</option>
  ));

  const displayLeagues = leagues.map((league, index) => (
    <option key={index}>{league}</option>
  ));

  const handleChange = (e) => {
    selectSport(e.target.value);
  };

  const findOdds = (e) => {
    e.preventDefault();
    console.log("Find Odds");
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
            <Event />
            <Event />
            <Event />
          </div>
        </main>
        <Search
          displaySports={displaySports}
          displayLeagues={displayLeagues}
          findOdds={findOdds}
          sport={sport}
          // league={league}
          handleChange={handleChange}
        />
      </section>
    </>
  );
}

export default App;
