import React from "react";
import Bet365 from "../img/bet365.svg";
import Betfair from "../img/betfair.svg";
import Betstar from "../img/betstar.svg";
import Bookmaker from "../img/bookmaker.svg";
import Ladbrokes from "../img/ladbrokes.svg";
import Neds from "../img/neds.svg";
import Pointsbetau from "../img/pointsbetau.svg";
import Sportsbet from "../img/sportsbet.svg";
import Sportsbetting from "../img/sportsbetting.svg";
import Tab from "../img/tab.svg";
import Unibet from "../img/unibet.svg";

export default function Event({ eventObject }) {
  // * BEST HOME ODDS

  // BEST HOME HEAD-TO-HEAD
  const bestHomeOdds = (bookmakers) => {
    let bestHome = 0;
    for (let i = 0; i < bookmakers.length; i++) {
      if (bookmakers[i].markets[0].outcomes[0].price > bestHome) {
        bestHome = bookmakers[i].markets[0].outcomes[0].price;
      }
    }
    return bestHome;
  };

  const bestHomeOddsBookmaker = (bookmakers) => {
    let bestHome = 0;
    let bestBookmaker = "";
    for (let i = 0; i < bookmakers.length; i++) {
      if (bookmakers[i].markets[0].outcomes[0].price > bestHome) {
        bestHome = bookmakers[i].markets[0].outcomes[0].price;
        bestBookmaker = bookmakers[i].key;
      }
    }
    return bestBookmaker;
  };

  // BEST HOME SPREAD
  const bestHomePoints = (bookmakers) => {
    console.log("BEST HOME SPREAD", bookmakers);
    let bestHomeTotal = 0;
    let bestPrice = 0;
    for (let i = 0; i < bookmakers.length; i++) {
      if (bookmakers[i].markets[0].outcomes[0].point > bestHomeTotal) {
        bestHomeTotal = bookmakers[i].markets[0].outcomes[0].point;
        bestPrice = bookmakers[i].markets[0].outcomes[0].price;
      } else {
        bestHomeTotal = bookmakers[i].markets[0].outcomes[0].point;
        bestPrice = bookmakers[i].markets[0].outcomes[0].price;
      }
    }
    return `${bestHomeTotal} ($${bestPrice})`;
  };

  const bestHomePointsBookmaker = (bookmakers) => {
    let bestHomeTotal = 0;
    let bestBookmaker = "";
    for (let i = 0; i < bookmakers.length; i++) {
      if (bookmakers[i].markets[0].outcomes[0].point > bestHomeTotal) {
        bestHomeTotal = bookmakers[i].markets[0].outcomes[0].point;
        bestBookmaker = bookmakers[i].key;
      } else {
        bestHomeTotal = bookmakers[i].markets[0].outcomes[0].point;
        bestBookmaker = bookmakers[i].key;
      }
    }
    return bestBookmaker;
  };

  // * BEST AWAY ODDS

  // BEST AWAY HEAD-TO-HEAD
  const bestAwayOdds = (bookmakers) => {
    let bestAway = 0;
    for (let i = 0; i < bookmakers.length; i++) {
      if (bookmakers[i].markets[0].outcomes[1].price > bestAway) {
        bestAway = bookmakers[i].markets[0].outcomes[1].price;
      }
    }
    return bestAway;
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
    return bestBookmaker;
  };

  // BEST AWAY SPREAD
  const bestAwayPoints = (bookmakers) => {
    console.log("bestAwayPoints", bookmakers);
    let bestAwayPoint = 0;
    let bestPrice = 0;
    for (let i = 0; i < bookmakers.length; i++) {
      if (bookmakers[i].markets[0].outcomes[1].point > bestAwayPoint) {
        bestAwayPoint = bookmakers[i].markets[0].outcomes[1].point;
        bestPrice = bookmakers[i].markets[0].outcomes[1].price;
      } else {
        bestAwayPoint = bookmakers[i].markets[0].outcomes[1].point;
        bestPrice = bookmakers[i].markets[0].outcomes[1].price;
      }
    }
    return `${bestAwayPoint} ($${bestPrice})`;
  };

  const bestAwayPointsBookmaker = (bookmakers) => {
    let bestAwayPoint = 0;
    let bestBookmaker = "";
    for (let i = 0; i < bookmakers.length; i++) {
      if (bookmakers[i].markets[0].outcomes[1].point > bestAwayPoint) {
        bestAwayPoint = bookmakers[i].markets[0].outcomes[1].point;
        bestBookmaker = bookmakers[i].key;
      } else {
        bestAwayPoint = bookmakers[i].markets[0].outcomes[1].point;
        bestBookmaker = bookmakers[i].key;
      }
    }
    return bestBookmaker;

    // return iconConverter(bestBookmaker);
  };

  // * BEST DRAW ODDS

  const bestDrawOdds = (bookmakers) => {
    let bestDraw = 0;
    for (let i = 0; i < bookmakers.length; i++) {
      if (bookmakers[i].markets[0].outcomes[2].price > bestDraw) {
        bestDraw = bookmakers[i].markets[0].outcomes[2].price;
      }
    }
    return bestDraw;
  };

  const bestDrawBookmaker = (bookmakers) => {
    let bestDraw = 0;
    let bestBookmaker = "";
    for (let i = 0; i < bookmakers.length; i++) {
      if (bookmakers[i].markets[0].outcomes[2].price > bestDraw) {
        bestDraw = bookmakers[i].markets[0].outcomes[2].price;
        bestBookmaker = bookmakers[i].key;
      }
    }
    return bestBookmaker;
  };

  // * CONVERT FROM ISO TO DATE

  const dateConverter = (date) => {
    return date.substring(0, 10);
  };

  // * COVERT TO ICON
  const iconConverter = (icon) => {
    const convertIcon = {
      bet365: <Bet365 />,
      betfair: <Betfair />,
      betstar: <Betstar />,
      bookmaker: <Bookmaker />,
      ladbrokes: <Ladbrokes />,
      neds: <Neds />,
      playup: "playup",
      pointsbetau: <Pointsbetau />,
      sportsbet: <Sportsbet />,
      sportsbetting: <Sportsbetting />,
      tab: <Tab />,
      unibet: <Unibet />,
    };
    return convertIcon[icon];
  };

  // * CONVERT TIME

  const timeConverter = (time) => {
    let isoDate = time;
    let result = isoDate.match(/\d\d:\d\d/);
    return result;
  };

  return (
    <table className="table">
      <thead>
        <tr>
          <th>Date</th>
          <th>Time</th>
          <th>Sports Title</th>
          <th>Team</th>
          <th></th>
          <th>Line</th>
          <th></th>
          <th>Total</th>
          <th></th>
          <th>Win</th>
        </tr>
      </thead>
      {eventObject &&
        eventObject.map((event, key) => {
          console.log("event", event);
          console.log("event TEST", event);
          if (
            event.h2h.length !== 0 &&
            event.h2h[0].markets[0].outcomes.length > 2
          ) {
            return (
              <tbody key={key}>
                <tr>
                  <td rowSpan="3">{dateConverter(event.commence_time)}</td>
                  <td rowSpan="3">{timeConverter(event.commence_time)}</td>
                  <td rowSpan="3">{event.sports_title}</td>
                  <td>{event.away_team}</td>
                  <td>
                    {event.spread.length !== 0
                      ? bestHomePointsBookmaker(event.spread)
                      : null}
                  </td>
                  <td>
                    {event.spread.length !== 0
                      ? bestHomePoints(event.spread)
                      : null}
                  </td>
                  <td>
                    {event.total.length !== 0
                      ? bestHomePointsBookmaker(event.total)
                      : null}
                  </td>
                  <td>
                    {event.total.length !== 0
                      ? "O" + bestHomePoints(event.total)
                      : null}
                  </td>
                  {/* <td>
                    <img src={Betfair} className="icons" alt="icons" />
                  </td> */}
                  <td>
                    {event.h2h.length !== 0
                      ? bestHomeOddsBookmaker(event.h2h)
                      : null}
                  </td>
                  <td>
                    {event.h2h.length !== 0
                      ? "$" + bestHomeOdds(event.h2h)
                      : null}
                  </td>
                </tr>
                <tr>
                  <td>{event.home_team}</td>
                  <td>
                    {event.spread.length !== 0
                      ? bestAwayPointsBookmaker(event.spread)
                      : null}
                  </td>
                  <td>
                    {event.spread.length !== 0
                      ? bestAwayPoints(event.spread)
                      : null}
                  </td>
                  <td>
                    {event.total.length !== 0
                      ? bestAwayPointsBookmaker(event.total)
                      : null}
                  </td>
                  <td>
                    {event.total.length !== 0
                      ? "O" + bestAwayPoints(event.total)
                      : null}
                  </td>
                  <td>
                    {event.h2h.length !== 0
                      ? bestAwayBookmaker(event.h2h)
                      : null}
                  </td>
                  <td>
                    {event.h2h.length !== 0
                      ? "$" + bestAwayOdds(event.h2h)
                      : null}
                  </td>
                </tr>
                <tr className="table__bottom-row">
                  <td>Draw</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>
                    {event.h2h.length !== 0
                      ? bestDrawBookmaker(event.h2h)
                      : null}
                  </td>
                  <td>
                    {event.h2h.length !== 0
                      ? "$" + bestDrawOdds(event.h2h)
                      : null}
                  </td>
                </tr>
              </tbody>
            );
          } else {
            return (
              <tbody key={key}>
                <tr>
                  <td rowSpan="2">{dateConverter(event.commence_time)}</td>
                  <td rowSpan="2">{timeConverter(event.commence_time)}</td>
                  <td rowSpan="2">{event.sports_title}</td>
                  <td>{event.away_team}</td>
                  <td>
                    {event.spread.length !== 0
                      ? bestHomePointsBookmaker(event.spread)
                      : null}
                  </td>
                  <td>
                    {event.spread.length !== 0
                      ? bestHomePoints(event.spread)
                      : null}
                  </td>
                  <td>
                    {event.total.length !== 0
                      ? bestHomePointsBookmaker(event.total)
                      : null}
                  </td>
                  <td>
                    {event.total.length !== 0
                      ? "O" + bestHomePoints(event.total)
                      : null}
                  </td>
                  {/* <td>
                    <img src={Betfair} className="icons" alt="icons" />
                  </td> */}
                  <td>
                    {event.h2h.length !== 0
                      ? bestHomeOddsBookmaker(event.h2h)
                      : null}
                  </td>
                  <td>
                    {event.h2h.length !== 0
                      ? "$" + bestHomeOdds(event.h2h)
                      : null}
                  </td>
                </tr>
                <tr className="table__bottom-row">
                  <td>{event.home_team}</td>
                  <td>
                    {event.spread.length !== 0
                      ? bestAwayPointsBookmaker(event.spread)
                      : null}
                  </td>
                  <td>
                    {event.spread.length !== 0
                      ? bestAwayPoints(event.spread)
                      : null}
                  </td>
                  <td>
                    {event.total.length !== 0
                      ? bestAwayPointsBookmaker(event.total)
                      : null}
                  </td>
                  <td>
                    {event.total.length !== 0
                      ? "O" + bestAwayPoints(event.total)
                      : null}
                  </td>
                  <td>
                    {event.h2h.length !== 0
                      ? bestAwayBookmaker(event.h2h)
                      : null}
                  </td>
                  <td>
                    {event.h2h.length !== 0
                      ? "$" + bestAwayOdds(event.h2h)
                      : null}
                  </td>
                </tr>
              </tbody>
            );
          }
        })}
    </table>
  );
}
