// Exercises1
export interface WithdrawMoneyATM {
  date: Date;
  isUserVip?: boolean;
  isHoliday?: boolean;
}

export enum ServiceChargeMoney {
  Free = 0,
  Pay = 110,
}

export enum DateWeekend {
  Saturday = "Saturday",
  Sunday = "Sunday",
}

// Exercises2
export enum ServiceChargeBeer {
  Manual = 490,
  Discount = 290,
  Voucher = 100,
}

export interface PaymentBeer {
  quantity: number;
  date: Date;
  isVoucher: boolean;
}

// Exercises3
export interface DiscountShopping {
  quantity: number;
  isShirt: boolean;
  isTie: boolean;
}

// Exercises4 Calendar
export interface Calendar {
  date: Date;
  isHoliday?: boolean;
}

export enum ColorCalendar {
  Black = "black",
  Red = "red",
  Blue = "blue",
}

// Exercises5 DiscountPizza
export interface DiscountPizza {
  totalPrice: number;
  homeDelivery: boolean;
  coupon: boolean;
}
