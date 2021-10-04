import React from "react";

export default function Event() {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Wed 09 Jun</th>
          <th>Line</th>
          <th>Total</th>
          <th>Win</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>ATL Hawks</td>
          <td>+6.0</td>
          <td>O225.0</td>
          <td>$3.10</td>
        </tr>
        <tr>
          <td>PHI 76ers</td>
          <td>-6.0</td>
          <td>U225.0</td>
          <td>$1.40</td>
        </tr>
      </tbody>
    </table>
  );
}
