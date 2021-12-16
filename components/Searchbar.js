export default function Search({
  data,
  sport,
  sports,
  findOdds,
  selectSport,
  selectLeague,
}) {
  // * DISPLAY SPORTS

  const displaySports = sports.map((sport, index) => (
    <option key={index}>{sport}</option>
  ));

  // * HANDLE ONCHANGE

  const handleSportChange = (e) => {
    selectSport(e.target.value);
    // console.log("handleSportChange", e.target.value);
  };

  const handleLeagueChange = (e) => {
    selectLeague(e.target.value);
    // console.log("handleLeagueChange", e.target.value);
  };

  return (
    <aside className="sidebar-search">
      <div className="sidebar-search__box">
        <h1 className="sidebar-search__heading">Search</h1>
        <select
          className="form-select"
          aria-label="Default select example"
          onChange={handleSportChange}
        >
          <option>--Select Sport--</option>
          {displaySports}
        </select>
        <select
          className="form-select"
          aria-label="Default select example"
          onChange={handleLeagueChange}
        >
          <option>--Select League--</option>
          {data &&
            data.map((event, index) => {
              if (event.group === sport) {
                console.log("worked");
                return (
                  <option key={index} value={event.key}>
                    {event.title}
                  </option>
                );
              } else {
                return console.log("failed");
              }
            })}
        </select>
        <button className="button" onClick={findOdds}>
          Search
        </button>
      </div>
    </aside>
  );
}
