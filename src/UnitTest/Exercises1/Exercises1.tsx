import { PaymentBeer, ServiceChargeBeer } from "../constants/enum";
import moment from "../constants/moment";
import { isTimeBetweenTime } from "../utils/isTimeBetweenTime";

const Exercises1 = ({ quantity, date, isVoucher }: PaymentBeer): number => {
  const Time = moment(date).format("HH:mm");
  let totalPrice = 0;

  for (let index = 0; index < quantity; index++) {
    // 16:00 ~ 17:59
    if (isTimeBetweenTime("16:00", "18:00", Time)) totalPrice += ServiceChargeBeer.Discount;
    else totalPrice += ServiceChargeBeer.Manual;
  }

  if (totalPrice > 0 && isVoucher) totalPrice = totalPrice - ServiceChargeBeer.Voucher;

  return totalPrice;
};

export default Exercises1;
