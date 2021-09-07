import "./App.scss";

import Events from "../src/components/Events";

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
          <div className="sidebar-sports__favourite">Favourite</div>
          <div className="sidebar-sports__list">Sports</div>
        </aside>
        <main className="sport-odds">
          <div className="sport-odds__title">
            <h1>Sport</h1>
          </div>
          <div className="sport-odds__league"></div>
          <div className="sport-odds__events">
            <Events />
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
