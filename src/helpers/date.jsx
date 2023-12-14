import moment from "moment";
import * as Global from "./global";

const shortDate = "DD-MM-YYYY";
const longDate = "DD MMM YYYY";
const shortTime = "HH:mm";

const Date = ({ date, format, add }) => {
  if (format === "shortDate") format = shortDate;
  else if (format === "longDate") format = longDate;
  else if (format === "shortTime") format = shortTime;

  date = add
    ? format
      ? moment(date)
          .add(add, "days")
          .format(format)
      : moment(date)
          .add(add, "days")
          .format(Global.DisplayDateFormate)
    : format
    ? moment(date).format(format)
    : moment(date).format(Global.DisplayDateFormate);
  return date;
};

export default Date;
