import React from "react";

export default function Event({ h2h }) {
  // Convert from ISO to Date
  const dateConverter = (date) => {
    return date.substring(0, 10);
  };

  // Map highest Odds
  const bestHomeOdds = (bookmakers) => {
    // let homeObject = bookmakers;
    // console.log(Object.keys(homeObject));
    // bookmakers.map((bookmaker) => {
    // return console.log(
    //   bookmaker.title,
    //   bookmaker.markets[0].outcomes[0].name,
    //   bookmaker.markets[0].outcomes[0].price,
    //   bookmaker.markets[0].outcomes[1].name,
    //   bookmaker.markets[0].outcomes[1].price
    // );
    // return console.log();
    // });
  };

  console.log("h2h", h2h);

  return (
    <table className="table">
      <thead>
        <tr>
          <th>Date</th>
          <th>Sports Title</th>
          <th>Team</th>
          <th>Line</th>
          <th>Total</th>
          <th>Win</th>
        </tr>
      </thead>
      {h2h &&
        h2h.map((event, key) => {
          return (
            <tbody key={key}>
              <tr>
                <td rowSpan="2">{dateConverter(event.commence_time)}</td>
                <td rowSpan="2">{event.sport_title}</td>
                <td>{event.away_team}</td>
                <td>+6.0</td>
                <td>O225.0</td>
                <td>{bestHomeOdds(event.bookmakers)}</td>
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
