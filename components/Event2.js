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
    console.log(events);
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

  // ! FIX
  const bestHomeSpreadBookmaker = (bookmakers) => {
    let bestHomeSpread = 0;
    let bestBookmaker = "";
    for (let i = 0; i < bookmakers.length; i++) {
      let homeArray = bookmakers[i].markets.find(
        (item) => item.key === "spreads"
      );
      if (homeArray !== undefined) {
        console.log("bestHomeSpreadBookmaker", homeArray);
        // if (homeArray.outcomes[0].price > bestPrice) {
        //   bestHomeSpread = homeArray.outcomes[0].point;
        //   bestPrice = homeArray.outcomes[0].price;
        // }
      }
    }
    return iconConverter(bestBookmaker);
  };

  const bestHomeSpread = (bookmakers) => {
    let bestHomeSpread = 0;
    let bestPrice = 0;
    for (let i = 0; i < bookmakers.length; i++) {
      let homeArray = bookmakers[i].markets.find(
        (item) => item.key === "spreads"
      );
      if (homeArray !== undefined) {
        if (homeArray.outcomes[0].price > bestPrice) {
          bestHomeSpread = homeArray.outcomes[0].point;
          bestPrice = homeArray.outcomes[0].price;
        }
        return `${bestHomeSpread} ($${bestPrice})`;
      }
    }
  };

  // ! FIX
  const bestAwaySpreadsBookmaker = (bookmakers) => {
    let bestAwaySpread = 0;
    let bestBookmaker = "";
    for (let i = 0; i < bookmakers.length; i++) {
      if (bookmakers[i].markets[0].outcomes[1]) {
        if (bookmakers[i].markets[0].outcomes[1].point > bestAwaySpread) {
          bestAwaySpread = bookmakers[i].markets[0].outcomes[1].point;
          bestBookmaker = bookmakers[i].key;
        }
      }
    }

    return iconConverter(bestBookmaker);
  };

  const bestAwaySpreads = (bookmakers) => {
    let bestAwaySpread = 0;
    let bestPrice = 0;
    for (let i = 0; i < bookmakers.length; i++) {
      let awayArray = bookmakers[i].markets.find(
        (item) => item.key === "spreads"
      );
      if (awayArray !== undefined) {
        if (awayArray.outcomes[1].price > bestPrice) {
          bestAwaySpread = awayArray.outcomes[1].point;
          bestPrice = awayArray.outcomes[1].price;
        }
        return `${bestAwaySpread} ($${bestPrice})`;
      }
    }
  };

  //* TOTAL LINE

  // ! FIX
  const bestHomeTotalBookmaker = (bookmakers) => {
    let bestHomeTotal = 0;
    let bestBookmaker = "";
    for (let i = 0; i < bookmakers.length; i++) {
      if (bookmakers[i].markets[2]) {
        if (bookmakers[i].markets[2].outcomes[0].point > bestHomeTotal) {
          // bestHomeTotal = bookmakers[i].markets[2].outcomes[0].point;
          // bestBookmaker = bookmakers[i].key;
        }
      }
    }
    return iconConverter(bestBookmaker);
  };

  const bestHomeTotal = (bookmakers) => {
    let bestHomeTotal = 0;
    let bestPrice = 0;
    for (let i = 0; i < bookmakers.length; i++) {
      let homeArray = bookmakers[i].markets.find(
        (item) => item.key === "totals"
      );

      if (homeArray !== undefined) {
        if (homeArray.outcomes[0].point > bestHomeTotal) {
          bestHomeTotal = homeArray.outcomes[0].point;
          bestPrice = homeArray.outcomes[0].price;
        }
        return `O${bestHomeTotal}($${bestPrice})`;
      }
    }
  };

  const bestAwayTotalBookmaker = (bookmakers) => {
    let bestAwayTotal = 0;
    let bestBookmaker = "";
    for (let i = 0; i < bookmakers.length; i++) {
      if (bookmakers[i].markets[0].outcomes[0].point > bestAwayTotal) {
        bestAwayTotal = bookmakers[i].markets[0].outcomes[0].point;
        bestBookmaker = bookmakers[i].key;
      }
    }
    return iconConverter(bestBookmaker);
  };

  const bestAwayTotal = (bookmakers) => {
    let bestAwayTotal = 0;
    let bestPrice = 0;
    for (let i = 0; i < bookmakers.length; i++) {
      let awayArray = bookmakers[i].markets.find(
        (item) => item.key === "totals"
      );

      if (awayArray !== undefined) {
        if (awayArray.outcomes[1].point > bestAwayTotal) {
          bestAwayTotal = awayArray.outcomes[1].point;
          bestPrice = awayArray.outcomes[1].price;
        }
        return `U${bestAwayTotal}($${bestPrice})`;
      }
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
                <td rowSpan="3">{dateConverter(events.commence_time)}</td>
                <td rowSpan="3">{timeConverter(events.commence_time)}</td>
                <td rowSpan="3">{events.sport_title}</td>
                <td>{events.home_team}</td>
                <td>
                  {bestHomeSpreadBookmaker(events.bookmakers)}
                  {/* {bestDrawBookmaker(events.bookmakers)} */}
                </td>
                <td>
                  {bestHomeSpread(events.bookmakers)}
                  {/* {bestDrawBookmaker(events.bookmakers)} */}
                </td>
                <td>
                  {bestHomeTotalBookmaker(events.bookmakers)}
                  {/* {bestDrawBookmaker(events.bookmakers)} */}
                </td>
                <td>
                  {bestHomeTotal(events.bookmakers)}
                  {/* {bestDrawBookmaker(events.bookmakers)} */}
                </td>
                <td>{bestHomeOddsBookmaker(events.bookmakers)}</td>
                <td>{bestHomeOdds(events.bookmakers)}</td>
              </tr>
              <tr>
                <td>{events.away_team}</td>
                <td>
                  {bestAwaySpreadsBookmaker(events.bookmakers)}
                  {/* {bestDrawBookmaker(events.bookmakers)} */}
                </td>
                <td>
                  {bestAwaySpreads(events.bookmakers)}
                  {/* {bestDrawBookmaker(events.bookmakers)} */}
                </td>
                <td>
                  {bestAwayTotalBookmaker(events.bookmakers)}
                  {/* {bestDrawBookmaker(events.bookmakers)} */}
                </td>
                <td>
                  {bestAwayTotal(events.bookmakers)}
                  {/* {bestDrawBookmaker(events.bookmakers)} */}
                </td>
                <td>{bestAwayBookmaker(events.bookmakers)}</td>
                <td>{bestAwayOdds(events.bookmakers)}</td>
              </tr>
              <tr className="table__bottom-row">
                <td>Draw</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>{bestDrawBookmaker(events.bookmakers)}</td>
                <td>{bestDrawOdds(events.bookmakers)}</td>
              </tr>
            </tbody>
          );
        } else {
          return (
            <tbody key={key}>
              <tr>
                <td rowSpan="2">{dateConverter(events.commence_time)}</td>
                <td rowSpan="2">{timeConverter(events.commence_time)}</td>
                <td rowSpan="2">{events.sport_title}</td>
                <td>{events.home_team}</td>
                <td>
                  {bestHomeSpreadBookmaker(events.bookmakers)}
                  {/* {bestDrawBookmaker(events.bookmakers)} */}
                </td>
                <td>
                  {bestHomeSpread(events.bookmakers)}
                  {/* {bestDrawBookmaker(events.bookmakers)} */}
                </td>
                <td>
                  {bestHomeTotalBookmaker(events.bookmakers)}
                  {/* {bestDrawBookmaker(events.bookmakers)} */}
                </td>
                <td>
                  {bestHomeTotal(events.bookmakers)}
                  {/* {bestDrawBookmaker(events.bookmakers)} */}
                </td>
                <td>{bestHomeOddsBookmaker(events.bookmakers)}</td>
                <td>{bestHomeOdds(events.bookmakers)}</td>
              </tr>
              <tr className="table__bottom-row">
                <td>{events.away_team}</td>
                <td>
                  {bestAwaySpreadsBookmaker(events.bookmakers)}
                  {/* {bestDrawBookmaker(events.bookmakers)} */}
                </td>
                <td>
                  {bestAwaySpreads(events.bookmakers)}
                  {/* {bestDrawBookmaker(events.bookmakers)} */}
                </td>
                <td>
                  {bestAwayTotalBookmaker(events.bookmakers)}
                  {/* {bestDrawBookmaker(events.bookmakers)} */}
                </td>
                <td>
                  {bestAwayTotal(events.bookmakers)}
                  {/* {bestDrawBookmaker(events.bookmakers)} */}
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
