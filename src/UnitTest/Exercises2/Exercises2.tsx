import { DateWeekend, ServiceChargeMoney, WithdrawMoneyATM } from "../constants/enum";
import moment from "../constants/moment";
import { isTimeBetweenTime } from "../utils/isTimeBetweenTime";

const Exercises2 = ({ date, isUserVip = false, isHoliday = false }: WithdrawMoneyATM): number => {
  const DayName = moment(date).format("dddd");
  const TimeWithdraw = moment(date).format("HH:mm");

  if (isUserVip) return ServiceChargeMoney.Free;

  if (isHoliday || DayName === DateWeekend.Saturday || DayName === DateWeekend.Sunday) return ServiceChargeMoney.Pay;

  // 8:45 ~ 17:59
  if (isTimeBetweenTime("8:45", "18:00", TimeWithdraw)) return ServiceChargeMoney.Free;

  return ServiceChargeMoney.Pay;
};

export default Exercises2;
