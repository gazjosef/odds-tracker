export default function Search({
  data,
  sport,
  displaySports,
  findOdds,
  handleSportChange,
  handleLeagueChange,
}) {
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
                return (
                  <option key={index} value={event.key}>
                    {event.title}
                  </option>
                );
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
