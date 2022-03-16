import Bet365 from "@/svg/bet365.svg";
import Betfair from "@/svg/betfair.svg";
import Betstar from "@/svg/betstar.svg";
import Bookmaker from "@/svg/bookmaker.svg";
import Ladbrokes from "@/svg/ladbrokes.svg";
import Neds from "@/svg/neds.svg";
import Pointsbetau from "@/svg/pointsbetau.svg";
import Sportsbet from "@/svg/sportsbet.svg";
import Sportsbetting from "@/svg/sportsbetting.svg";
import Tab from "@/svg/tab.svg";
import Unibet from "@/svg/unibet.svg";

function Event2({ events }) {
  if (events.length !== 0) {
    console.warn("ran", events);
  }

  //* CONVERT FROM ISO TO DATE

  const dateConverter = (iso) => {
    let date = new Date(iso);
    let month = date.getMonth() + 1;
    let dt = date.getDate();

    if (dt < 10) {
      dt = "0" + dt;
    }
    if (month < 10) {
      month = "0" + month;
    }

    return dt + "-" + month;
  };

  //* CONVERT TIME

  const timeConverter = (time) => {
    let isoDate = time;
    let result = isoDate.match(/\d\d:\d\d/);
    return result;
  };

  //* COVERT TO ICON

  const iconConverter = (bookmaker) => {
    const convertIcon = {
      bet365: <Bet365 className="icons" />,
      betfair: <Betfair className="icons" />,
      betstar: <Betstar className="icons" />,
      bookmaker: <Bookmaker className="icons" />,
      ladbrokes: <Ladbrokes className="icons" />,
      neds: <Neds className="icons icons--neds" />,
      playup: <Neds className="icons icons--neds" />,
      pointsbetau: <Pointsbetau className="icons" />,
      sportsbet: <Sportsbet className="icons" />,
      sportsbetting: <Sportsbetting className="icons" />,
      tab: <Tab className="icons icons--tab" />,
      unibet: <Unibet className="icons" />,
    };
    return convertIcon[bookmaker];
  };

  //* MONEY LINE

  const bestHomeOddsBookmaker = (bookmakers) => {
    let bestHome = 0;
    let bestBookmaker = "";
    for (let i = 0; i < bookmakers.length; i++) {
      if (bookmakers[i].markets[0].outcomes[0].price > bestHome) {
        bestHome = bookmakers[i].markets[0].outcomes[0].price;
        bestBookmaker = bookmakers[i].key;
      }
    }
    return iconConverter(bestBookmaker);
  };

  const bestHomeOdds = (bookmakers) => {
    let bestHome = 0;
    for (let i = 0; i < bookmakers.length; i++) {
      if (bookmakers[i].markets[0].outcomes[0].price > bestHome) {
        bestHome = bookmakers[i].markets[0].outcomes[0].price;
      }
    }
    return `$${bestHome}`;
  };

  const bestAwayBookmaker = (bookmakers) => {
    let bestAway = 0;
    let bestBookmaker = "";
    for (let i = 0; i < bookmakers.length; i++) {
      if (bookmakers[i].markets[0].outcomes[1].price > bestAway) {
        bestAway = bookmakers[i].markets[0].outcomes[1].price;
        bestBookmaker = bookmakers[i].key;
      }
    }
    return iconConverter(bestBookmaker);
  };

  const bestAwayOdds = (bookmakers) => {
    let bestAway = 0;
    for (let i = 0; i < bookmakers.length; i++) {
      if (bookmakers[i].markets[0].outcomes[1].price > bestAway) {
        bestAway = bookmakers[i].markets[0].outcomes[1].price;
      }
    }
    return `$${bestAway}`;
  };

  const bestDrawBookmaker = (bookmakers) => {
    let bestDraw = 0;
    let bestBookmaker = "";
    for (let i = 0; i < bookmakers.length; i++) {
      if (bookmakers[i].markets[0].outcomes[2]) {
        if (bookmakers[i].markets[0].outcomes[2].price > bestDraw) {
          bestDraw = bookmakers[i].markets[0].outcomes[2].price;
          bestBookmaker = bookmakers[i].key;
        }
      }
    }
    return iconConverter(bestBookmaker);
  };

  const bestDrawOdds = (bookmakers) => {
    let bestDraw = 0;
    for (let i = 0; i < bookmakers.length; i++) {
      if (bookmakers[i].markets[0].outcomes[2]) {
        if (bookmakers[i].markets[0].outcomes[2].price > bestDraw) {
          bestDraw = bookmakers[i].markets[0].outcomes[2].price;
        }
      }
    }
    return `$${bestDraw}`;
  };

  //* SPREAD LINE

  const bestHomeSpreadBookmaker = (bookmakers) => {
    let homeSpreadArray = [];

    // Find Bookmakers With Spread Market
    for (let i = 0; i < bookmakers.length; i++) {
      // Find Nested Array
      let spreads = bookmakers[i].markets.find(
        (item) => item.key === "spreads"
      );
      // Save Bookmaker
      let bookmaker = bookmakers[i].key;

      // Avoid Undefined Error
      if (spreads !== undefined) {
        let obj = {
          bookmaker: bookmaker,
          spread: spreads.outcomes[0].point,
          price: spreads.outcomes[0].price,
        };
        homeSpreadArray.push(obj);
      }
    }

    // Avoid Empty Array Error
    if (homeSpreadArray.length !== 0) {
      let bestHomeSpreadBookmaker = "";

      // Compare Best Spreads && Best Prices Then Find Best Bookmaker
      homeSpreadArray.reduce((prev, current) =>
        prev.spread < current.spread && prev.price < current.price
          ? (bestHomeSpreadBookmaker = current.bookmaker)
          : (bestHomeSpreadBookmaker = prev.bookmaker)
      );

      return iconConverter(bestHomeSpreadBookmaker);
    }
  };

  const bestHomeSpread = (bookmakers) => {
    let homeSpreadArray = [];

    // Find Bookmakers With Spread Market
    for (let i = 0; i < bookmakers.length; i++) {
      // Find Nested Array
      let spreadArray = bookmakers[i].markets.find(
        (item) => item.key === "spreads"
      );
      // Save Bookmaker
      let bookmaker = bookmakers[i].key;

      // Avoid Undefined Error
      if (spreadArray !== undefined) {
        let obj = {
          bookmaker: bookmaker,
          spread: spreadArray.outcomes[0].point,
          price: spreadArray.outcomes[0].price,
        };
        homeSpreadArray.push(obj);
      }
    }

    // Avoid Empty Array Error
    if (homeSpreadArray.length !== 0) {
      let bestHomeSpread = "";
      let bestHomePrice;

      // Compare Best Spreads && Best Prices
      homeSpreadArray.reduce((prev, current) =>
        prev.spread < current.spread && prev.price < current.price
          ? (bestHomeSpread = current.spread) && (bestHomePrice = current.price)
          : (bestHomeSpread = prev.spread) && (bestHomePrice = prev.price)
      );

      return `${bestHomeSpread} ($${bestHomePrice})`;
    }
  };

  const bestAwaySpreadsBookmaker = (bookmakers) => {
    let awaySpreadArray = [];

    // Find Bookmakers With Spread Market
    for (let i = 0; i < bookmakers.length; i++) {
      // Find Nested Array
      let spreads = bookmakers[i].markets.find(
        (item) => item.key === "spreads"
      );
      // Save Bookmaker
      let bookmaker = bookmakers[i].key;

      // Avoid Undefined Error
      if (spreads !== undefined) {
        let obj = {
          bookmaker: bookmaker,
          spread: spreads.outcomes[1].point,
          price: spreads.outcomes[1].price,
        };
        awaySpreadArray.push(obj);
      }
    }

    // Avoid Empty Array Error
    if (awaySpreadArray.length !== 0) {
      let bestAwaySpreadBookmaker = "";

      // Compare Best Spreads && Best Prices Then Find Best Bookmaker
      awaySpreadArray.reduce((prev, current) =>
        prev.spread < current.spread && prev.price < current.price
          ? (bestAwaySpreadBookmaker = current.bookmaker)
          : (bestAwaySpreadBookmaker = prev.bookmaker)
      );

      return iconConverter(bestAwaySpreadBookmaker);
    }
  };

  const bestAwaySpreads = (bookmakers) => {
    let awaySpreadArray = [];

    // Find Bookmakers With Spread Market
    for (let i = 0; i < bookmakers.length; i++) {
      // Find Nested Array
      let spreadArray = bookmakers[i].markets.find(
        (item) => item.key === "spreads"
      );
      // Save Bookmaker
      let bookmaker = bookmakers[i].key;

      // Avoid undefined Error
      if (spreadArray !== undefined) {
        let obj = {
          bookmaker: bookmaker,
          spread: spreadArray.outcomes[1].point,
          price: spreadArray.outcomes[1].price,
        };
        awaySpreadArray.push(obj);
      }
    }

    // Avoid Empty Array Error
    if (awaySpreadArray.length !== 0) {
      let bestAwaySpread;
      let bestAwayPrice;

      // Compare Best Spreads && Best Prices
      awaySpreadArray.reduce((prev, current) =>
        prev.spread < current.spread && prev.price < current.price
          ? (bestAwaySpread = current.spread) && (bestAwayPrice = current.price)
          : (bestAwaySpread = prev.spread) && (bestAwayPrice = prev.price)
      );

      return `${bestAwaySpread} ($${bestAwayPrice})`;
    }
  };

  //* TOTAL LINE

  const bestHomeTotalBookmaker = (bookmakers) => {
    let homeTotalArray = [];

    // Find Bookmakers With Totals Market
    for (let i = 0; i < bookmakers.length; i++) {
      // Find Nested Totals Market
      let totalsObject = bookmakers[i].markets.find(
        (item) => item.key === "totals"
      );
      // Save Bookmaker
      let bookmaker = bookmakers[i].key;

      // Avoid Undefined Error
      if (totalsObject !== undefined) {
        let obj = {
          bookmaker: bookmaker,
          totals: totalsObject.outcomes[0].point,
          price: totalsObject.outcomes[0].price,
        };

        homeTotalArray.push(obj);
      }
    }

    // Avoid Empty Array Error
    if (homeTotalArray.length !== 0) {
      let bestBookmaker = homeTotalArray[0].bookmaker;

      // Compare Best Totals && Best Prices Then Find Best Bookmaker
      homeTotalArray.reduce((prev, current) =>
        prev.totals < current.totals && prev.price < current.price
          ? (bestBookmaker = current.bookmaker)
          : (bestBookmaker = prev.bookmaker)
      );

      return iconConverter(bestBookmaker);
    }
  };

  const bestHomeTotal = (bookmakers) => {
    let homeTotalArray = [];

    // Find Bookmakers With Totals Market
    for (let i = 0; i < bookmakers.length; i++) {
      // Find Nested Totals Market
      let totalsObject = bookmakers[i].markets.find(
        (item) => item.key === "totals"
      );
      // Save Bookmaker
      let bookmaker = bookmakers[i].key;

      // Avoid Undefined Error
      if (totalsObject !== undefined) {
        let obj = {
          bookmaker: bookmaker,
          totals: totalsObject.outcomes[0].point,
          price: totalsObject.outcomes[0].price,
        };

        homeTotalArray.push(obj);
      }
    }

    // Avoid Empty Array Error
    if (homeTotalArray.length !== 0) {
      let bestHomeTotal = homeTotalArray[0].totals;
      let bestHomePrice = homeTotalArray[0].price;

      // Compare Best Totals && Best Prices
      homeTotalArray.reduce((prev, current) =>
        prev.totals < current.totals && prev.price < current.price
          ? (bestHomeTotal = current.totals) && (bestHomePrice = current.price)
          : (bestHomeTotal = prev.totals) && (bestHomePrice = prev.price)
      );

      return `O${bestHomeTotal}($${bestHomePrice})`;
    }
  };

  const bestAwayTotalBookmaker = (bookmakers) => {
    let homeTotalArray = [];

    // Find Bookmakers With Totals Market
    for (let i = 0; i < bookmakers.length; i++) {
      // Find Nested Totals Market
      let totalsObject = bookmakers[i].markets.find(
        (item) => item.key === "totals"
      );
      // Save Bookmaker
      let bookmaker = bookmakers[i].key;

      // Avoid Undefined Error
      if (totalsObject !== undefined) {
        let obj = {
          bookmaker: bookmaker,
          totals: totalsObject.outcomes[1].point,
          price: totalsObject.outcomes[1].price,
        };

        homeTotalArray.push(obj);
      }
    }

    // Avoid Empty Array Error
    if (homeTotalArray.length !== 0) {
      let bestBookmaker = homeTotalArray[0].bookmaker;

      // Compare Best Totals && Best Prices Then Find Best Bookmaker
      homeTotalArray.reduce((prev, current) =>
        prev.totals < current.totals && prev.price < current.price
          ? (bestBookmaker = current.bookmaker)
          : (bestBookmaker = prev.bookmaker)
      );

      return iconConverter(bestBookmaker);
    }
  };

  const bestAwayTotal = (bookmakers) => {
    let awayTotalArray = [];

    // Find Bookmakers With Totals Market
    for (let i = 0; i < bookmakers.length; i++) {
      // Find Nested Totals Market
      let totalsObject = bookmakers[i].markets.find(
        (item) => item.key === "totals"
      );
      // Save Bookmaker
      let bookmaker = bookmakers[i].key;

      // Avoid Undefined Error
      if (totalsObject !== undefined) {
        let obj = {
          bookmaker: bookmaker,
          totals: totalsObject.outcomes[1].point,
          price: totalsObject.outcomes[1].price,
        };

        awayTotalArray.push(obj);
      }
    }

    // Avoid Empty Array Error
    if (awayTotalArray.length !== 0) {
      let bestAwayTotal = awayTotalArray[0].totals;
      let bestAwayPrice = awayTotalArray[0].price;

      // Compare Best Totals && Best Prices
      awayTotalArray.reduce((prev, current) =>
        prev.totals < current.totals && prev.price < current.price
          ? (bestAwayTotal = current.totals) && (bestAwayPrice = current.price)
          : (bestAwayTotal = prev.totals) && (bestAwayPrice = prev.price)
      );

      return `U${bestAwayTotal}($${bestAwayPrice})`;
    }
  };

  return (
    <table className="table">
      <thead>
        <tr>
          <th>Date</th>
          <th>Time</th>
          <th>Sports Title</th>
          <th>Team</th>
          <th colSpan="2">Line</th>
          <th colSpan="2">Total</th>
          <th colSpan="2">Win</th>
        </tr>
      </thead>
      {events.map((events, key) => {
        if (events.bookmakers[0].markets[0].outcomes.length > 2) {
          //   console.log("Length === 3", events);
          return (
            <tbody key={key}>
              <tr>
                <td rowSpan="3" className="table__border-right">
                  {dateConverter(events.commence_time)}
                </td>
                <td rowSpan="3" className="table__border-right">
                  {timeConverter(events.commence_time)}
                </td>
                <td rowSpan="3" className="table__border-right">
                  {events.sport_title}
                </td>
                <td className="table__border-right">{events.home_team}</td>
                <td>{bestHomeSpreadBookmaker(events.bookmakers)}</td>
                <td className="table__border-right">
                  {bestHomeSpread(events.bookmakers)}
                </td>
                <td>{bestHomeTotalBookmaker(events.bookmakers)}</td>
                <td className="table__border-right">
                  {bestHomeTotal(events.bookmakers)}
                </td>
                <td>{bestHomeOddsBookmaker(events.bookmakers)}</td>
                <td>{bestHomeOdds(events.bookmakers)}</td>
              </tr>
              <tr>
                <td className="table__border-right">{events.away_team}</td>
                <td>{bestAwaySpreadsBookmaker(events.bookmakers)}</td>
                <td className="table__border-right">
                  {bestAwaySpreads(events.bookmakers)}
                </td>
                <td>{bestAwayTotalBookmaker(events.bookmakers)}</td>
                <td className="table__border-right">
                  {bestAwayTotal(events.bookmakers)}
                </td>
                <td>{bestAwayBookmaker(events.bookmakers)}</td>
                <td>{bestAwayOdds(events.bookmakers)}</td>
              </tr>
              <tr className="table__border-bottom">
                <td className="table__border-right">Draw</td>
                <td></td>
                <td className="table__border-right"></td>
                <td></td>
                <td className="table__border-right"></td>
                <td>{bestDrawBookmaker(events.bookmakers)}</td>
                <td>{bestDrawOdds(events.bookmakers)}</td>
              </tr>
            </tbody>
          );
        } else {
          return (
            <tbody key={key}>
              <tr>
                <td rowSpan="2" className="table__border-right">
                  {dateConverter(events.commence_time)}
                </td>
                <td rowSpan="2" className="table__border-right">
                  {timeConverter(events.commence_time)}
                </td>
                <td rowSpan="2" className="table__border-right">
                  {events.sport_title}
                </td>
                <td className="table__border-right">{events.home_team}</td>
                <td>{bestHomeSpreadBookmaker(events.bookmakers)}</td>
                <td className="table__border-right">
                  {bestHomeSpread(events.bookmakers)}
                </td>
                <td>{bestHomeTotalBookmaker(events.bookmakers)}</td>
                <td className="table__border-right">
                  {bestHomeTotal(events.bookmakers)}
                </td>
                <td>{bestHomeOddsBookmaker(events.bookmakers)}</td>
                <td>{bestHomeOdds(events.bookmakers)}</td>
              </tr>
              <tr className="table__border-bottom">
                <td className="table__border-right">{events.away_team}</td>
                <td>{bestAwaySpreadsBookmaker(events.bookmakers)}</td>
                <td className="table__border-right">
                  {bestAwaySpreads(events.bookmakers)}
                </td>
                <td>{bestAwayTotalBookmaker(events.bookmakers)}</td>
                <td className="table__border-right">
                  {bestAwayTotal(events.bookmakers)}
                </td>
                <td>{bestAwayBookmaker(events.bookmakers)}</td>
                <td>{bestAwayOdds(events.bookmakers)}</td>
              </tr>
            </tbody>
          );
        }
      })}
    </table>
  );
}

export default Event2;
