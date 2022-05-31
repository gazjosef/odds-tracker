import { dateConverter, timeConverter, iconConverter } from "./Converter";

export default function EventTest({ events }) {
  const threeOutcomes = ["home", "away", "draw"];
  const twoOutcomes = ["away", "home"];
  // const markets = ["h2h", "spreads", "totals"];
  // const spreads = ["home", "away"];
  // const overUnder = ["home", "away"];

  const findBestOdds = (bookmakers, outcome, marketArguement) => {
    let nestedMarkets = findNestedMarkets(bookmakers, outcome, marketArguement);

    if (marketArguement === "spreads" || marketArguement === "totals") {
      return findBestPoints(nestedMarkets);
    }

    if (marketArguement === "h2h") {
      return findBestPrice(nestedMarkets);
    }
  };

  const findBestBookmaker = (bookmakers, outcome, marketArguement) => {
    let nestedMarkets = findNestedMarkets(bookmakers, outcome, marketArguement);

    if (marketArguement === "spreads" || marketArguement === "totals") {
      return findBestPointsBookmaker(nestedMarkets);
    }

    if (marketArguement === "h2h") {
      return findBestPriceBookmaker(nestedMarkets);
    }
  };

  const findNestedMarkets = (bookmakers, outcome, marketArguement) => {
    let nestedMarkets = [];

    for (let i = 0; i < bookmakers.length; i++) {
      // Find Nested Markets
      let nestedMarket = bookmakers[i].markets.find(
        (item) => item.key === marketArguement
      );
      let bookmaker = bookmakers[i].key;

      if (marketArguement === "spreads" && nestedMarket !== undefined) {
        // Find Spread
        let index = twoOutcomes.indexOf(outcome);
        let obj = {
          bookmaker: bookmaker,
          name: nestedMarket.outcomes[index].name,
          price: nestedMarket.outcomes[index].price,
          point: nestedMarket.outcomes[index].point,
        };

        nestedMarkets.push(obj);
      } else if (marketArguement === "totals" && nestedMarket !== undefined) {
        // Find Totals
        let index = twoOutcomes.indexOf(outcome);
        let obj = {
          bookmaker: bookmaker,
          name: nestedMarket.outcomes[index].name,
          price: nestedMarket.outcomes[index].price,
          point: nestedMarket.outcomes[index].point,
        };
        nestedMarkets.push(obj);
      } else if (
        marketArguement === "h2h" &&
        nestedMarket !== undefined &&
        nestedMarket.outcomes.length === 3
      ) {
        // Find H2H - Home, Away, Draw
        let index = threeOutcomes.indexOf(outcome);
        let obj = {
          bookmaker: bookmaker,
          name: nestedMarket.outcomes[index].name,
          price: nestedMarket.outcomes[index].price,
        };
        nestedMarkets.push(obj);
      } else if (
        marketArguement === "h2h" &&
        nestedMarket !== undefined &&
        outcome !== "draw"
      ) {
        // Find H2H - Away, Home
        let index = twoOutcomes.indexOf(outcome);
        let obj = {
          bookmaker: bookmaker,
          name: nestedMarket.outcomes[index].name,
          price: nestedMarket.outcomes[index].price,
        };
        nestedMarkets.push(obj);
      }
    }

    return nestedMarkets;
  };

  const findBestPoints = (array) => {
    if (array !== undefined && array.length === 1) {
      const bestSpread = array[0].point;
      const bestPrice = array[0].price;

      return `${bestSpread} ($${bestPrice})`;
    } else if (array !== undefined && array.length !== 0) {
      const bestSpread = array.reduce(
        (acc, bookmaker) =>
          (acc = acc >= bookmaker.point ? acc : bookmaker.point)
      );
      const bestPrice = array.reduce(
        (acc, bookmaker) =>
          (acc =
            acc > bookmaker.point && acc > bookmaker.price
              ? acc
              : bookmaker.price)
      );

      return `${bestSpread} ($${bestPrice})`;
    }
  };

  const findBestPointsBookmaker = (array) => {
    if (array !== undefined && array.length === 1) {
      return array[0].bookmaker;
    } else if (array !== undefined && array.length !== 0) {
      return array.reduce(
        (acc, bookmaker) =>
          (acc = acc > bookmaker.point ? acc : bookmaker.bookmaker)
      );
    }
  };

  const findBestPrice = (array) => {
    if (array !== undefined && array.length !== 0) {
      const bestPrice = array.reduce(
        (acc, bookmaker) =>
          (acc = acc > bookmaker.price ? acc : bookmaker.price),
        0
      );
      return `$${bestPrice}`;
    }
  };

  const findBestPriceBookmaker = (array) => {
    if (array !== undefined && array.length !== 0) {
      return array.reduce(
        (acc, bookmaker) =>
          (acc = acc > bookmaker.price ? acc : bookmaker.bookmaker),
        0
      );
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
      {events &&
        events.map((event, key) => {
          console.log("event", event);

          if (event.bookmakers[0].markets[0].outcomes.length > 2) {
            return (
              <tbody key={key}>
                <tr>
                  <td rowSpan="3" className="table__border-right">
                    {dateConverter(event.commence_time)}
                  </td>
                  <td rowSpan="3" className="table__border-right">
                    {timeConverter(event.commence_time)}
                  </td>
                  <td rowSpan="3" className="table__border-right">
                    {event.sport_title}
                  </td>
                  <td className="table__border-right">{event.home_team}</td>
                  <td>
                    {iconConverter(
                      findBestBookmaker(event.bookmakers, "home", "spreads")
                    )}
                  </td>
                  <td className="table__border-right">
                    {findBestOdds(event.bookmakers, "home", "spreads")}
                  </td>
                  <td>
                    {iconConverter(
                      findBestBookmaker(event.bookmakers, "home", "totals")
                    )}
                  </td>
                  <td className="table__border-right">
                    {findBestOdds(event.bookmakers, "home", "totals") &&
                      `O${findBestOdds(event.bookmakers, "home", "totals")}`}
                  </td>
                  <td>
                    {iconConverter(
                      findBestBookmaker(event.bookmakers, "home", "h2h")
                    )}
                  </td>
                  <td>{findBestOdds(event.bookmakers, "home", "h2h")}</td>
                </tr>
                <tr>
                  <td className="table__border-right">{event.away_team}</td>
                  <td>
                    {iconConverter(
                      findBestBookmaker(event.bookmakers, "away", "spreads")
                    )}
                  </td>
                  <td className="table__border-right">
                    {findBestOdds(event.bookmakers, "away", "spreads")}
                  </td>
                  <td>
                    {iconConverter(
                      findBestBookmaker(event.bookmakers, "away", "totals")
                    )}
                  </td>
                  <td className="table__border-right">
                    {findBestOdds(event.bookmakers, "away", "totals") &&
                      `U${findBestOdds(event.bookmakers, "away", "totals")}`}
                  </td>
                  <td>
                    {iconConverter(
                      findBestBookmaker(event.bookmakers, "away", "h2h")
                    )}
                  </td>
                  <td>{findBestOdds(event.bookmakers, "away", "h2h")}</td>
                </tr>
                <tr className="table__border-bottom">
                  <td className="table__border-right">Draw</td>
                  <td></td>
                  <td className="table__border-right"></td>
                  <td></td>
                  <td className="table__border-right"></td>
                  <td>
                    {iconConverter(
                      findBestBookmaker(event.bookmakers, "draw", "h2h")
                    )}
                  </td>
                  <td>{findBestOdds(event.bookmakers, "draw", "h2h")}</td>
                </tr>
              </tbody>
            );
          } else {
            return (
              <tbody key={key}>
                <tr>
                  <td rowSpan="2" className="table__border-right">
                    {dateConverter(event.commence_time)}
                  </td>
                  <td rowSpan="2" className="table__border-right">
                    {timeConverter(event.commence_time)}
                  </td>
                  <td rowSpan="2" className="table__border-right">
                    {event.sport_title}
                  </td>
                  <td className="table__border-right">{event.home_team}</td>
                  <td>
                    {iconConverter(
                      findBestBookmaker(event.bookmakers, "home", "spreads")
                    )}
                  </td>
                  <td className="table__border-right">
                    {findBestOdds(event.bookmakers, "home", "spreads")}
                  </td>
                  <td>
                    {iconConverter(
                      findBestBookmaker(event.bookmakers, "home", "totals")
                    )}
                  </td>
                  <td className="table__border-right">
                    {findBestOdds(event.bookmakers, "home", "totals") &&
                      `O${findBestOdds(event.bookmakers, "home", "totals")}`}
                  </td>
                  <td>
                    {iconConverter(
                      findBestBookmaker(event.bookmakers, "home", "h2h")
                    )}
                  </td>
                  <td>{findBestOdds(event.bookmakers, "home", "h2h")}</td>
                </tr>
                <tr className="table__border-bottom">
                  <td className="table__border-right">{event.away_team}</td>
                  <td>
                    {iconConverter(
                      findBestBookmaker(event.bookmakers, "away", "spreads")
                    )}
                  </td>
                  <td className="table__border-right">
                    {findBestOdds(event.bookmakers, "away", "spreads")}
                  </td>
                  <td>
                    {iconConverter(
                      findBestBookmaker(event.bookmakers, "away", "totals")
                    )}
                  </td>
                  <td className="table__border-right">
                    {findBestOdds(event.bookmakers, "away", "totals") &&
                      `U${findBestOdds(event.bookmakers, "away", "totals")}`}
                  </td>
                  <td>
                    {iconConverter(
                      findBestBookmaker(event.bookmakers, "away", "h2h")
                    )}
                  </td>
                  <td>{findBestOdds(event.bookmakers, "away", "h2h")}</td>
                </tr>
              </tbody>
            );
          }
        })}
    </table>
  );
}
