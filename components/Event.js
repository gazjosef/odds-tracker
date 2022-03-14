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

export default function Event({ eventObject }) {
  // * BEST HOME ODDS

  // -- BEST HOME HEAD-TO-HEAD
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
    return iconConverter(bestBookmaker);
  };

  // -- BEST HOME SPREAD
  const bestHomePoints = (bookmakers) => {
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
    return iconConverter(bestBookmaker);
  };

  // * BEST AWAY ODDS

  // -- BEST AWAY HEAD-TO-HEAD
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
    return iconConverter(bestBookmaker);
  };

  // -- BEST AWAY SPREAD
  const bestAwayPoints = (bookmakers) => {
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

    return iconConverter(bestBookmaker);
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
    return iconConverter(bestBookmaker);
  };

  // * CONVERT FROM ISO TO DATE

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

  // * COVERT TO ICON
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

  // * CONVERT TIME

  const timeConverter = (time) => {
    let isoDate = time;
    let result = isoDate.match(/\d\d:\d\d/);
    return result;
  };
  console.log(eventObject);

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
      {eventObject.map((event, key) => {
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
                    ? "U" + bestAwayPoints(event.total)
                    : null}
                </td>
                <td>
                  {event.h2h.length !== 0 ? bestAwayBookmaker(event.h2h) : null}
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
                  {event.h2h.length !== 0 ? bestDrawBookmaker(event.h2h) : null}
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
                    ? "U" + bestAwayPoints(event.total)
                    : null}
                </td>
                <td>
                  {event.h2h.length !== 0 ? bestAwayBookmaker(event.h2h) : null}
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
