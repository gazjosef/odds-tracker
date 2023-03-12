import Bet365 from "../../public/svg/bet365.svg";

import Betfair from "../../public/svg/betfair.svg";
import Betstar from "../../public/svg/betstar.svg";
import Bluebet from "../../public/svg/bluebet.svg";
import Bookmaker from "../../public/svg/bookmaker.svg";
import Ladbrokes from "../../public/svg/ladbrokes.svg";
import Neds from "../../public/svg/neds.svg";
import Pointsbetau from "../../public/svg/pointsbetau.svg";
import Sportsbet from "../../public/svg/sportsbet.svg";
import Sportsbetting from "../../public/svg/sportsbetting.svg";
import Tab from "../../public/svg/tab.svg";
import Unibet from "../../public/svg/unibet.svg";

//* CONVERT FROM ISO TO DATE

export const dateConverter = (iso) => {
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

export const timeConverter = (time) => {
  let isoDate = time;
  let result = isoDate.match(/\d\d:\d\d/);
  return result;
};

//* COVERT TO ICON

export const iconConverter = (bookmaker) => {
  const convertIcon = {
    bet365: <Bet365 className="icons" />,
    betfair: <Betfair className="icons" />,
    betstar: <Betstar className="icons" />,
    bluebet: <Bluebet className="icons icons--bluebet" />,
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
