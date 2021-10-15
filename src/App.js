import { useState, useEffect } from "react";
import "./App.scss";
import jsonData from "./data.json";
import secondData from "./secondData.json";

import Event from "./components/Event";
import Search from "./components/Search";

// API Key
const APIkey = "0964ad4e3be969508766aef582e92012";

function App() {
  const [data, setData] = useState();
  const [sports, setSports] = useState([]);

  const [sport, selectSport] = useState([]);
  const [league, selectLeague] = useState([]);

  const [h2h, setH2H] = useState();
  const [spreads, setSpreads] = useState();
  const [totals, setTotals] = useState();

  // * Get Data

  useEffect(() => {
    const getOdds = () => {
      setData(jsonData);
    };
    getOdds();
  });

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

  const findOdds = async (e) => {
    e.preventDefault();
    // console.log("Find Odds");

    // const api_call = await fetch(
    //   `https://api.the-odds-api.com/v4/sports/${league}/odds?regions=au&oddsFormat=decimal&apiKey=${APIkey}`
    // );

    // const apiData = await api_call.json();
    // console.log("Get Data", apiData);

    setH2H(secondData);
  };

  console.log(h2h);

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
            {/* <Event /> */}
            {/* <Event /> */}
            <Event h2h={h2h} />
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
