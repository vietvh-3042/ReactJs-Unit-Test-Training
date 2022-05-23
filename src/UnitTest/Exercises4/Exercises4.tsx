import { Calendar, DateWeekend, ColorCalendar } from "../constants/enum";
import moment from "../constants/moment";

const Exercises4 = ({ date, isHoliday }: Calendar): string => {
  const DayName = moment(date).format("dddd");

  if (isHoliday || DayName === DateWeekend.Sunday) return ColorCalendar.Red;

  if (DayName === DateWeekend.Saturday) return ColorCalendar.Blue;

  return ColorCalendar.Black;
};

export default Exercises4;
