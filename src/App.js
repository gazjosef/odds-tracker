import "./App.scss";

import Event from "./components/Event";

function App() {
  return (
    <>
      <header className="header">
        <div className="header__title">
          <h1>Odds Tracker</h1>
        </div>
      </header>
      <section className="section-home">
        <aside className="sidebar-sports">
          <div className="sidebar-sports__favourites">
            <h1 className="sidebar-sports__heading">Favorites</h1>
            <ul>
              <li>Basketball</li>
              <li>Basketball</li>
              <li>Basketball</li>
              <li>Basketball</li>
              <li>Basketball</li>
            </ul>
          </div>
          <div className="sidebar-sports__list">
            <h1 className="sidebar-sports__heading">Full List</h1>
            <ul>
              <li>Basketball</li>
              <li>Basketball</li>
              <li>Basketball</li>
              <li>Basketball</li>
              <li>Basketball</li>
            </ul>
          </div>
        </aside>
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
        <aside className="sidebar-search">
          <div className="sidebar-search__box">search-box</div>
        </aside>
      </section>
    </>
  );
}

export default App;
