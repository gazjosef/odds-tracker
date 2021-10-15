export default function Search({
  displaySports,
  displayLeagues,
  findOdds,
  // sport,
  league,
  handleChange,
}) {
  return (
    <aside className="sidebar-search">
      <div className="sidebar-search__box">
        <h1 className="sidebar-search__heading">Search</h1>
        <select
          className="form-select"
          // defaultValue={sport}
          aria-label="Default select example"
          onChange={handleChange}
        >
          <option>--Select Sport--</option>
          {displaySports}
        </select>
        <select
          className="form-select"
          // defaultValue={league}
          aria-label="Default select example"
        >
          <option>--Select League--</option>
          {displayLeagues}
        </select>
        <select
          className="form-select"
          // defaultValue="--Select Markets--"
          aria-label="Default select example"
        >
          <option>--Select Markets--</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
        <button className="button" onClick={findOdds}>
          Search
        </button>
      </div>
    </aside>
  );
}
