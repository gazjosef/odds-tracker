import React from "react";

export default function Event({ h2h, spreads, totals }) {
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
        h2h.map((event) => {
          return (
            <tbody>
              <tr>
                <td rowSpan="2">Date</td>
                <td rowSpan="2">{event.sport_title}</td>
                <td>{event.away_team}</td>
                <td>+6.0</td>
                <td>O225.0</td>
                <td>$3.10</td>
              </tr>
              <tr>
                <td>{event.home_team}</td>
                <td>-6.0</td>
                <td>U225.0</td>
                <td>$1.40</td>
              </tr>
            </tbody>
          );
        })}
      {/* <tbody>
        <tr>
          <td rowSpan="2">Date</td>
          <td rowSpan="2">{event.sport_title}</td>
          <td>{event.away_team}</td>
          <td>+6.0</td>
          <td>O225.0</td>
          <td>$3.10</td>
        </tr>
        <tr>
          <td>{event.home_team}</td>
          <td>-6.0</td>
          <td>U225.0</td>
          <td>$1.40</td>
        </tr>
      </tbody> */}
    </table>
  );
}
