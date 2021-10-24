import React from "react";

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
        bestBookmaker = bookmakers[i].title;
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
      }
    }
    return `${bestHomeTotal}(${bestPrice})`;
  };

  const bestHomePointsBookmaker = (bookmakers) => {
    let bestHomeTotal = 0;
    let bestBookmaker = "";
    for (let i = 0; i < bookmakers.length; i++) {
      if (bookmakers[i].markets[0].outcomes[0].point > bestHomeTotal) {
        bestHomeTotal = bookmakers[i].markets[0].outcomes[0].point;
        bestBookmaker = bookmakers[i].title;
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
        bestBookmaker = bookmakers[i].title;
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
      }
    }
    return `${bestAwayPoint}(${bestPrice})`;
  };

  const bestAwayPointsBookmaker = (bookmakers) => {
    let bestAwayPoint = 0;
    let bestBookmaker = "";
    for (let i = 0; i < bookmakers.length; i++) {
      if (bookmakers[i].markets[0].outcomes[1].point > bestAwayPoint) {
        bestAwayPoint = bookmakers[i].markets[0].outcomes[1].point;
        bestBookmaker = bookmakers[i].title;
      }
    }
    return bestBookmaker;
  };

  // * CONVERT FROM ISO TO DATE

  const dateConverter = (date) => {
    return date.substring(0, 10);
  };

  // * CONVERT TIME

  const timeConverter = (time) => {
    let isoDate = time;
    let result = isoDate.match(/\d\d:\d\d/);
    return result;
  };

  // ! REMOVE
  // console.log("EVENT eventObject", eventObject);

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
          console.log("Map event", event);
          console.log("Map event h2h[0] --markets[0]", event.h2h[0]);
          return (
            <tbody key={key}>
              <tr>
                <td rowSpan="2">{dateConverter(event.commence_time)}</td>
                <td rowSpan="2">{timeConverter(event.commence_time)}</td>
                <td rowSpan="2">{event.sports_title}</td>
                <td>{event.away_team}</td>
                <td>{bestHomePointsBookmaker(event.spread)}</td>
                <td>{bestHomePoints(event.spread)}</td>
                <td>{bestHomePointsBookmaker(event.total)}</td>
                <td>O{bestHomePoints(event.total)}</td>
                <td>{bestHomeOddsBookmaker(event.h2h)}</td>
                <td>{bestHomeOdds(event.h2h)}</td>
              </tr>
              <tr className="table__bottom-row">
                <td>{event.home_team}</td>
                {/* <td>Bookmaker</td>
                <td>-6.0</td> */}
                <td>{bestAwayPointsBookmaker(event.spread)}</td>
                <td>{bestAwayPoints(event.spread)}</td>
                <td>{bestAwayPointsBookmaker(event.total)}</td>
                <td>U{bestAwayPoints(event.total)}</td>
                <td>{bestAwayBookmaker(event.h2h)}</td>
                <td>{bestAwayOdds(event.h2h)}</td>
              </tr>
            </tbody>
          );
        })}
    </table>
  );
}
