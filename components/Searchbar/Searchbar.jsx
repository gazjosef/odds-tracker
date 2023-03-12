import { FaSearch } from "react-icons/fa";

function Searchbar({
  data,
  sport,
  sports,
  findOdds,
  selectSport,
  selectLeague,
}) {
  const displaySports = sports.map((sport, index) => (
    <option key={index}>{sport}</option>
  ));

  const handleSportChange = (e) => {
    selectSport(e.target.value);
  };

  const handleLeagueChange = (e) => {
    selectLeague(e.target.value);
  };

  return (
    <section className="search-bar2">
      <select
        className="select"
        aria-label="Default select example"
        onChange={handleSportChange}
      >
        <option>--Select Sport--</option>
        {displaySports}
      </select>
      <select
        className="select"
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
        <FaSearch />
      </button>
    </section>
  );
}

export default Searchbar;
