import Converter from "./Converter";

function Events({ events }) {
  const convertDate = new Converter().dateConverter;
  const covertTime = new Converter().timeConverter;
  const convertIcon = new Converter().iconConverter;

  //* MONEY LINE

  const findHomeH2hMarkets = (bookmakers) => {
    let homeH2hArray = [];

    // Find Bookmakers With Spread Market
    for (let i = 0; i < bookmakers.length; i++) {
      // Find Nested Array
      let h2h = bookmakers[i].markets.find((item) => item.key === "h2h");
      // Save Bookmaker
      let bookmaker = bookmakers[i].key;
      // Avoid Undefined Error && Create Home H2H Array For Home, Away, & Draw Markets
      if (h2h !== undefined && h2h.outcomes.length === 3) {
        let obj = {
          bookmaker: bookmaker,
          price: h2h.outcomes[0].price,
        };
        homeH2hArray.push(obj);
        // Avoid Undefined Error && Create Home H2H Array For Home & Away Markets
      } else if (h2h !== undefined && h2h.outcomes.length === 2) {
        let obj = {
          bookmaker: bookmaker,
          price: h2h.outcomes[1].price,
        };
        homeH2hArray.push(obj);
      }
    }

    return homeH2hArray;
  };

  const bestHomeOddsBookmaker = (bookmakers) => {
    let homeH2HArray = findHomeH2hMarkets(bookmakers);
    // Avoid Empty Array Error
    if (homeH2HArray.length !== 0) {
      const initialValue = 0;
      // Compare Home H2H Bookmakers
      const bestHomeH2HBookmaker = homeH2HArray.reduce(
        (previousValue, currentValue) =>
          previousValue.price > currentValue.price
            ? previousValue.bookmaker
            : currentValue.bookmaker,
        initialValue
      );

      return convertIcon(bestHomeH2HBookmaker);
    }
  };

  const bestHomeOdds = (bookmakers) => {
    let homeH2HArray = findHomeH2hMarkets(bookmakers);
    // Avoid Empty Array Error
    if (homeH2HArray.length !== 0) {
      const initialValue = 0;
      // Compare Home H2H Odds
      const bestHomeH2H = homeH2HArray.reduce(
        (previousValue, currentValue) =>
          previousValue.price > currentValue.price
            ? previousValue.price
            : currentValue.price,
        initialValue
      );

      return `$${bestHomeH2H}`;
    }
  };

  const findAwayH2hMarkets = (bookmakers) => {
    let awayH2HArray = [];
    // Find Bookmakers With Spread Market
    for (let i = 0; i < bookmakers.length; i++) {
      // Find Nested Array
      let h2h = bookmakers[i].markets.find((item) => item.key === "h2h");
      // Save Bookmaker
      let bookmaker = bookmakers[i].key;
      // Avoid Undefined Error && Create Home H2H Array For Home, Away, & Draw Markets
      if (h2h !== undefined && h2h.outcomes.length === 3) {
        let obj = {
          bookmaker: bookmaker,
          price: h2h.outcomes[1].price,
        };
        awayH2HArray.push(obj);
        // Avoid Undefined Error && Create Home H2H Array For Home & Away Markets
      } else if (h2h !== undefined && h2h.outcomes.length === 2) {
        let obj = {
          bookmaker: bookmaker,
          price: h2h.outcomes[0].price,
        };
        awayH2HArray.push(obj);
      }
    }

    return awayH2HArray;
  };

  const bestAwayH2HBookmaker = (bookmakers) => {
    let awayH2HArray = findAwayH2hMarkets(bookmakers);

    // Avoid Empty Array Error
    if (awayH2HArray.length !== 0) {
      const initialValue = 0;
      // Compare Away H2H Bookmakers
      const bestAwayH2HBookmaker = awayH2HArray.reduce(
        (previousValue, currentValue) =>
          previousValue.price > currentValue.price
            ? previousValue.bookmaker
            : currentValue.bookmaker,
        initialValue
      );

      return convertIcon(bestAwayH2HBookmaker);
    }
  };

  const bestAwayOdds = (bookmakers) => {
    let homeAwayArray = findAwayH2hMarkets(bookmakers);
    // Avoid Empty Array Error
    if (homeAwayArray.length !== 0) {
      const initialValue = 0;
      // Compare Away H2H Odds
      const bestAwayH2H = homeAwayArray.reduce(
        (previousValue, currentValue) =>
          previousValue.price > currentValue.price
            ? previousValue.price
            : currentValue.price,
        initialValue
      );

      return `$${bestAwayH2H}`;
    }
  };

  const findDrawH2hMarkets = (bookmakers) => {
    let drawH2HArray = [];
    // Find Bookmakers With Spread Market
    for (let i = 0; i < bookmakers.length; i++) {
      // Find Nested Array
      let h2h = bookmakers[i].markets.find((item) => item.key === "h2h");
      // Save Bookmaker
      let bookmaker = bookmakers[i].key;
      // Avoid Undefined Error && Create Draw H2H Array
      if (h2h !== undefined && h2h.outcomes.length === 3) {
        let obj = {
          bookmaker: bookmaker,
          price: h2h.outcomes[2].price,
        };
        drawH2HArray.push(obj);
      }
    }

    return drawH2HArray;
  };

  const bestDrawBookmaker = (bookmakers) => {
    let drawH2HArray = findDrawH2hMarkets(bookmakers);
    // Avoid Empty Array Error
    if (drawH2HArray.length !== 0) {
      const initialValue = 0;
      // Compare Draw Bookmakers
      const bestDrawH2HBookmaker = drawH2HArray.reduce(
        (previousValue, currentValue) =>
          previousValue.price > currentValue.price
            ? previousValue.bookmaker
            : currentValue.bookmaker,
        initialValue
      );

      return convertIcon(bestDrawH2HBookmaker);
    }
  };

  const bestDrawOdds = (bookmakers) => {
    let homeDrawArray = findDrawH2hMarkets(bookmakers);
    // Avoid Empty Array Error
    if (homeDrawArray.length !== 0) {
      const initialValue = 0;
      // Compare Draw Odds
      const bestDrawH2H = homeDrawArray.reduce(
        (previousValue, currentValue) =>
          previousValue.price > currentValue.price
            ? previousValue.price
            : currentValue.price,
        initialValue
      );

      return `$${bestDrawH2H}`;
    }
  };

  //* SPREAD LINE

  const findHomeSpreadsMarkets = (bookmakers) => {
    let homeSpreadsArray = [];
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
        homeSpreadsArray.push(obj);
      }
    }

    return homeSpreadsArray;
  };

  const bestHomeSpreadBookmaker = (bookmakers) => {
    let homeSpreadArray = findHomeSpreadsMarkets(bookmakers);
    // Avoid Empty Array Error
    if (homeSpreadArray.length !== 0) {
      const initialValue = -1000;
      // Compare Home Spread Bookmakers
      const bestHomeSpreadBookmaker = homeSpreadArray.reduce(
        (previousValue, currentValue) =>
          previousValue.spread > currentValue.spread &&
          previousValue.price > currentValue.price
            ? previousValue.bookmaker
            : currentValue.bookmaker,
        initialValue
      );

      return convertIcon(bestHomeSpreadBookmaker);
    }
  };

  const bestHomeSpread = (bookmakers) => {
    let homeSpreadArray = findHomeSpreadsMarkets(bookmakers);
    // Avoid Empty Array Error
    if (homeSpreadArray.length !== 0) {
      const initialValue = -1000;
      // Compare Home Spread
      const bestHomeSpread = homeSpreadArray.reduce(
        (previousValue, currentValue) =>
          previousValue.spread > currentValue.spread &&
          previousValue.price > currentValue.price
            ? previousValue.spread
            : currentValue.spread,
        initialValue
      );
      // Compare Home Spread Price
      const bestHomePrice = homeSpreadArray.reduce(
        (previousValue, currentValue) =>
          previousValue.spread > currentValue.spread &&
          previousValue.price > currentValue.price
            ? previousValue.price
            : currentValue.price,
        initialValue
      );
      return `${bestHomeSpread} ($${bestHomePrice})`;
    }
  };

  const findAwaySpreadsMarkets = (bookmakers) => {
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

    return awaySpreadArray;
  };

  const bestAwaySpreadsBookmaker = (bookmakers) => {
    let awaySpreadArray = findAwaySpreadsMarkets(bookmakers);
    // Avoid Empty Array Error
    if (awaySpreadArray.length !== 0) {
      const initialValue = -1000;
      // Compare Away Spread Bookmakers
      const bestAwaySpreadBookmaker = awaySpreadArray.reduce(
        (previousValue, currentValue) =>
          previousValue.spread > currentValue.spread
            ? previousValue.bookmaker
            : currentValue.bookmaker,
        initialValue
      );

      return convertIcon(bestAwaySpreadBookmaker);
    }
  };

  const bestAwaySpreads = (bookmakers) => {
    let awaySpreadArray = findAwaySpreadsMarkets(bookmakers);
    // Avoid Empty Array Error
    if (awaySpreadArray.length !== 0) {
      const initialValue = -1000;
      // Compare Away Spreads
      const bestAwaySpread = awaySpreadArray.reduce(
        (previousValue, currentValue) =>
          previousValue.spread > currentValue.spread &&
          previousValue.price > currentValue.price
            ? previousValue.spread
            : currentValue.spread,
        initialValue
      );
      // Compare Away Spread Prices
      const bestAwayPrice = awaySpreadArray.reduce(
        (previousValue, currentValue) =>
          previousValue.spread > currentValue.spread &&
          previousValue.price > currentValue.price
            ? previousValue.price
            : currentValue.price,
        initialValue
      );

      return `${bestAwaySpread} ($${bestAwayPrice})`;
    }
  };

  //* TOTAL LINE

  const findHomeTotalsMarkets = (bookmakers) => {
    let homeTotalsArray = [];
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
        homeTotalsArray.push(obj);
      }
    }

    return homeTotalsArray;
  };

  const bestHomeTotalBookmaker = (bookmakers) => {
    let homeTotalArray = findHomeTotalsMarkets(bookmakers);
    // Avoid Empty Array Error
    if (homeTotalArray.length !== 0) {
      const initialValue = 0;
      // Compare Home Total Bookmakers
      const bestHomeTotalBookmaker = homeTotalArray.reduce(
        (previousValue, currentValue) =>
          previousValue.totals > currentValue.totals &&
          previousValue.price > currentValue.price
            ? previousValue.bookmaker
            : currentValue.bookmaker,
        initialValue
      );

      return convertIcon(bestHomeTotalBookmaker);
    }
  };

  const bestHomeTotal = (bookmakers) => {
    let homeTotalArray = findHomeTotalsMarkets(bookmakers);
    // Avoid Empty Array Error
    if (homeTotalArray.length !== 0) {
      console.log("homeTotalArray", homeTotalArray);
      const initialValue = 0;
      // Compare Home Totals
      const bestHomeTotal = homeTotalArray.reduce(
        (previousValue, currentValue) =>
          previousValue.totals > currentValue.totals &&
          previousValue.price > currentValue.price
            ? previousValue.totals
            : currentValue.totals,
        initialValue
      );
      // Compare Home Total Prices
      const bestHomePrice = homeTotalArray.reduce(
        (previousValue, currentValue) =>
          previousValue.totals > currentValue.totals &&
          previousValue.price > currentValue.price
            ? previousValue.price
            : currentValue.price,
        initialValue
      );

      return `O${bestHomeTotal}($${bestHomePrice})`;
    }
  };

  const findAwayTotalsMarkets = (bookmakers) => {
    let awayTotalsArray = [];
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
        awayTotalsArray.push(obj);
      }
    }

    return awayTotalsArray;
  };

  const bestAwayTotalBookmaker = (bookmakers) => {
    let awayTotalArray = findAwayTotalsMarkets(bookmakers);
    // Avoid Empty Array Error
    if (awayTotalArray.length !== 0) {
      const initialValue = -1000;
      // Compare Away Total Bookmakers
      const bestAwayTotalBookmaker = awayTotalArray.reduce(
        (previousValue, currentValue) =>
          previousValue.totals > currentValue.totals
            ? previousValue.bookmaker
            : currentValue.bookmaker,
        initialValue
      );

      return convertIcon(bestAwayTotalBookmaker);
    }
  };

  const bestAwayTotal = (bookmakers) => {
    let awayTotalArray = findAwayTotalsMarkets(bookmakers);
    // Avoid Empty Array Error
    if (awayTotalArray.length !== 0) {
      console.log("awayTotalArray", awayTotalArray);
      const initialValue = -1000;
      // Compare Away Totals
      const bestAwayTotal = awayTotalArray.reduce(
        (previousValue, currentValue) =>
          previousValue.totals > currentValue.totals &&
          previousValue.price > currentValue.price
            ? previousValue.totals
            : currentValue.totals,
        initialValue
      );
      // Compare Away Total Prices
      const bestAwayPrice = awayTotalArray.reduce(
        (previousValue, currentValue) =>
          previousValue.totals > currentValue.totals &&
          previousValue.price > currentValue.price
            ? previousValue.price
            : currentValue.price,
        initialValue
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
      {events &&
        events.map((events, key) => {
          if (events.bookmakers[0].markets[0].outcomes.length > 2) {
            return (
              <tbody key={key}>
                <tr>
                  <td rowSpan="3" className="table__border-right">
                    {convertDate(events.commence_time)}
                  </td>
                  <td rowSpan="3" className="table__border-right">
                    {covertTime(events.commence_time)}
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
                  <td>{bestAwayH2HBookmaker(events.bookmakers)}</td>
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
                    {convertDate(events.commence_time)}
                  </td>
                  <td rowSpan="2" className="table__border-right">
                    {covertTime(events.commence_time)}
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
                  <td>{bestAwayH2HBookmaker(events.bookmakers)}</td>
                  <td>{bestAwayOdds(events.bookmakers)}</td>
                </tr>
              </tbody>
            );
          }
        })}
    </table>
  );
}

export default Events;
