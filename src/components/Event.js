import React from "react";

export default function Event({ eventObject }) {
  // TODO: MAP HIGHEST ODDS
  const bestOdds = (bookmakers) => {
    bookmakers.map((bookmaker) => {
      return console.log("works");
      // return console.log(
      //   bookmaker.title,
      //   bookmaker.markets[0].outcomes[0].name,
      //   bookmaker.markets[0].outcomes[0].price,
      //   bookmaker.markets[0].outcomes[1].name,
      //   bookmaker.markets[0].outcomes[1].price
      // );
    });
  };

  // TODO: MAP HIGHEST BOOKMAKER
  // const bestBookmaker = (bookmakers) => {
  //   bookmakers.map((bookmaker) => {
  //     return console.log(bookmaker.title);
  //   });
  // };

  // Convert from ISO to Date
  const dateConverter = (date) => {
    return date.substring(0, 10);
  };

  const timeConverter = (time) => {
    let isoDate = time;
    let result = isoDate.match(/\d\d:\d\d/);
    return result;
  };
  console.log("EVENT eventObject", eventObject);

  return (
    <table className="table">
      <thead>
        <tr>
          <th>Date</th>
          <th>Time</th>
          <th>Sports Title</th>
          <th>Team</th>
          <th>Line</th>
          <th>Total</th>
          <th>Win</th>
        </tr>
      </thead>
      {eventObject &&
        eventObject.map((event, key) => {
          return (
            <tbody key={key}>
              <tr>
                <td rowSpan="2">{dateConverter(event.commence_time)}</td>
                <td rowSpan="2">{timeConverter(event.commence_time)}</td>
                <td rowSpan="2">{event.sports_title}</td>
                <td>{event.away_team}</td>
                <td>+6.0</td>
                <td>O225.0</td>
                <td>{bestOdds(event.h2h)}</td>
              </tr>
              <tr className="table__bottom-row">
                <td>{event.home_team}</td>
                <td>-6.0</td>
                <td>U225.0</td>
                <td>$1.40</td>
              </tr>
            </tbody>
          );
        })}
    </table>
  );
}
