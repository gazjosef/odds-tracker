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
