import Exercises2 from "./Exercises2";
import { ServiceChargeMoney, WithdrawMoneyATM } from "../constants/enum";
import moment from "../constants/moment";

test("WithdrawMoneyATM with UserVip", () => {
  const WithdrawMoneyATM: WithdrawMoneyATM = {
    date: new Date(),
    isUserVip: true,
  };
  expect(Exercises2(WithdrawMoneyATM)).toBe(ServiceChargeMoney.Free);
});

test("WithdrawMoneyATM with Holiday", () => {
  const WithdrawMoneyATM: WithdrawMoneyATM = {
    date: new Date(),
    isHoliday: true,
  };
  expect(Exercises2(WithdrawMoneyATM)).toBe(ServiceChargeMoney.Pay);
});

test("WithdrawMoneyATM with isSaturday", () => {
  const Saturday = moment("21/05/2022 09:15:00", "DD/MM/YYYY hh:mm").format();
  const WithdrawMoneyATM: WithdrawMoneyATM = {
    date: new Date(Saturday),
  };
  expect(Exercises2(WithdrawMoneyATM)).toBe(ServiceChargeMoney.Pay);
});

test("WithdrawMoneyATM with isSunday", () => {
  const Sunday = moment("22/05/2022 09:15:00", "DD/MM/YYYY hh:mm").format();
  const WithdrawMoneyATM: WithdrawMoneyATM = {
    date: new Date(Sunday),
  };
  expect(Exercises2(WithdrawMoneyATM)).toBe(ServiceChargeMoney.Pay);
});

test("WithdrawMoneyATM with day not Saturday, Sunday 0:00", () => {
  const NotHoliDay = moment("20/05/2022 0:00", "DD/MM/YYYY hh:mm").format();
  const WithdrawMoneyATM: WithdrawMoneyATM = { date: new Date(NotHoliDay) };
  expect(Exercises2(WithdrawMoneyATM)).toBe(ServiceChargeMoney.Pay);
});

test("WithdrawMoneyATM with day not Saturday, Sunday 8:44", () => {
  const NotHoliDay = moment("20/05/2022 8:44", "DD/MM/YYYY hh:mm").format();
  const WithdrawMoneyATM: WithdrawMoneyATM = { date: new Date(NotHoliDay) };
  expect(Exercises2(WithdrawMoneyATM)).toBe(ServiceChargeMoney.Pay);
});

test("WithdrawMoneyATM with day not Saturday, Sunday 8:45", () => {
  const NotHoliDay = moment("20/05/2022 8:45", "DD/MM/YYYY hh:mm").format();
  const WithdrawMoneyATM: WithdrawMoneyATM = { date: new Date(NotHoliDay) };
  expect(Exercises2(WithdrawMoneyATM)).toBe(ServiceChargeMoney.Free);
});

test("WithdrawMoneyATM with day not Saturday, Sunday 17:59", () => {
  const NotHoliDay = moment("20/05/2022 17:59", "DD/MM/YYYY hh:mm").format();
  const WithdrawMoneyATM: WithdrawMoneyATM = { date: new Date(NotHoliDay) };
  expect(Exercises2(WithdrawMoneyATM)).toBe(ServiceChargeMoney.Free);
});

test("WithdrawMoneyATM with day not Saturday, Sunday 18:00", () => {
  const NotHoliDay = moment("20/05/2022 18:00", "DD/MM/YYYY hh:mm").format();
  const WithdrawMoneyATM: WithdrawMoneyATM = { date: new Date(NotHoliDay) };
  expect(Exercises2(WithdrawMoneyATM)).toBe(ServiceChargeMoney.Pay);
});

test("WithdrawMoneyATM with day not Saturday, Sunday 23:59", () => {
  const NotHoliDay = moment("20/05/2022 23:59", "DD/MM/YYYY hh:mm").format();
  const WithdrawMoneyATM: WithdrawMoneyATM = { date: new Date(NotHoliDay) };
  expect(Exercises2(WithdrawMoneyATM)).toBe(ServiceChargeMoney.Pay);
});
