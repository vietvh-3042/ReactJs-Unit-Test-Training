import { Calendar, ColorCalendar } from "../constants/enum";
import moment from "../constants/moment";
import Exercises4 from "./Exercises4";

test("Calendar date", () => {
  const Calendar: Calendar = {
    isHoliday: false,
    date: new Date(moment("20/05/2022 12:59", "DD/MM/YYYY hh:mm").format()),
  };
  expect(Exercises4(Calendar)).toBe(ColorCalendar.Black);
});

test("Calendar date is Holiday", () => {
  const Calendar: Calendar = {
    isHoliday: true,
    date: new Date(moment("20/05/2022 12:59", "DD/MM/YYYY hh:mm").format()),
  };
  expect(Exercises4(Calendar)).toBe(ColorCalendar.Red);
});

test("Calendar date is Holiday, Saturday", () => {
  const Calendar: Calendar = {
    isHoliday: true,
    date: new Date(moment("21/05/2022 12:59", "DD/MM/YYYY hh:mm").format()),
  };
  expect(Exercises4(Calendar)).toBe(ColorCalendar.Red);
});

test("Calendar date is Holiday, SunDay", () => {
  const Calendar: Calendar = {
    isHoliday: true,
    date: new Date(moment("22/05/2022 12:59", "DD/MM/YYYY hh:mm").format()),
  };
  expect(Exercises4(Calendar)).toBe(ColorCalendar.Red);
});

test("Calendar date is not Holiday, Saturday", () => {
  const Calendar: Calendar = {
    isHoliday: false,
    date: new Date(moment("21/05/2022 12:59", "DD/MM/YYYY hh:mm").format()),
  };
  expect(Exercises4(Calendar)).toBe(ColorCalendar.Blue);
});

test("Calendar date is not Holiday, SunDay", () => {
  const Calendar: Calendar = {
    isHoliday: false,
    date: new Date(moment("22/05/2022 12:59", "DD/MM/YYYY hh:mm").format()),
  };
  expect(Exercises4(Calendar)).toBe(ColorCalendar.Red);
});
