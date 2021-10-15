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

  useEffect(() => {
    const getOdds = async (e) => {
      // const api_call = await fetch();
      // `https://api.the-odds-api.com/v3/sports?apiKey=${APIkey}`

      // const apiData = await api_call.json();
      console.log("Get Data", jsonData);

      setData(jsonData);

      let allEvents = [];
      let allSports = [];

      jsonData.forEach((event) => {
        allEvents.push(event.group);
      });

      console.log("Get Events", allEvents);

      allEvents.forEach((name) => {
        if (allSports.indexOf(name) === -1) {
          allSports.push(name);
          setSports((prevState) => [...prevState, name]);
        }
      });

      selectSport(sports[0]);

      // jsonData.forEach((event) => {
      //   if (event.group === sport) {
      //     // allLeagues.push(event.title);
      //     setLeagues((prevState) => [...prevState, event.title]);
      //   }
      // });
      // console.log("Check Sports", sports);

      // console.log("Get Leagues", allLeagues);

      // setLeagues(allLeagues);
    };
    getOdds();
  }, []);

  console.log("1st/3rd | Check Sports", sports);
  console.log("1st/3rd | Check Sport", sport);

  // data.forEach((event) => {
  //   // console.log(event.group);
  //   if (event.group === sport) {
  //     // allLeagues.push(event.title);
  //     setLeagues((prevState) => [...prevState, event.title]);
  //   }
  // });
  console.log("1st/3rd | Check Leagues", leagues);

  // const displaySports = sports.map((sport, index) => (
  //   <option key={index}>{sport}</option>
  // ));

  // const displayLeagues = () => {
  //   if (league === undefined) {
  //     <option>-- Select League --</option>;
  //   }
  // };

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
          // displaySports={displaySports}
          // displayLeagues={displayLeagues}
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
