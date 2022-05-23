import Exercises1 from "./Exercises1";
import { ServiceChargeBeer, PaymentBeer } from "../constants/enum";
import moment from "../constants/moment";

test("Price Beer manual not voucher", () => {
  const OrderBeers: PaymentBeer = {
    quantity: 1,
    date: new Date(moment("20/05/2022 12:59", "DD/MM/YYYY hh:mm").format()),
    isVoucher: false,
  };
  expect(Exercises1(OrderBeers)).toBe(ServiceChargeBeer.Manual);
});

test("Price 2 Beer manual not voucher", () => {
  const OrderBeers: PaymentBeer = {
    quantity: 2,
    date: new Date(moment("20/05/2022 12:59", "DD/MM/YYYY hh:mm").format()),
    isVoucher: false,
  };
  expect(Exercises1(OrderBeers)).toBe(980);
});

test("Price Beer manual voucher", () => {
  const OrderBeers: PaymentBeer = {
    quantity: 1,
    date: new Date(moment("20/05/2022 12:59", "DD/MM/YYYY hh:mm").format()),
    isVoucher: true,
  };
  expect(Exercises1(OrderBeers)).toBe(390);
});

test("Price 2 Beer manual voucher", () => {
  const OrderBeers: PaymentBeer = {
    quantity: 2,
    date: new Date(moment("20/05/2022 12:59", "DD/MM/YYYY hh:mm").format()),
    isVoucher: true,
  };
  expect(Exercises1(OrderBeers)).toBe(880);
});

test("Price Beer manual not voucher, time discount 16:00", () => {
  const OrderBeers: PaymentBeer = {
    quantity: 1,
    date: new Date(moment("20/05/2022 16:00", "DD/MM/YYYY hh:mm").format()),
    isVoucher: false,
  };
  expect(Exercises1(OrderBeers)).toBe(ServiceChargeBeer.Discount);
});

test("Price 2 Beer manual not voucher, time discount 16:00", () => {
  const OrderBeers: PaymentBeer = {
    quantity: 2,
    date: new Date(moment("20/05/2022 16:00", "DD/MM/YYYY hh:mm").format()),
    isVoucher: false,
  };
  expect(Exercises1(OrderBeers)).toBe(580);
});

test("Price Beer manual not voucher, time discount 17:59", () => {
  const OrderBeers: PaymentBeer = {
    quantity: 1,
    date: new Date(moment("20/05/2022 17:59", "DD/MM/YYYY hh:mm").format()),
    isVoucher: false,
  };
  expect(Exercises1(OrderBeers)).toBe(ServiceChargeBeer.Discount);
});

test("Price 2 Beer manual not voucher, time discount 17:59", () => {
  const OrderBeers: PaymentBeer = {
    quantity: 2,
    date: new Date(moment("20/05/2022 17:59", "DD/MM/YYYY hh:mm").format()),
    isVoucher: false,
  };
  expect(Exercises1(OrderBeers)).toBe(580);
});

test("Price Beer manual voucher, time discount 16:00", () => {
  const OrderBeers: PaymentBeer = {
    quantity: 1,
    date: new Date(moment("20/05/2022 16:00", "DD/MM/YYYY hh:mm").format()),
    isVoucher: true,
  };
  expect(Exercises1(OrderBeers)).toBe(190);
});

test("Price 2 Beer manual voucher, time discount 16:00", () => {
  const OrderBeers: PaymentBeer = {
    quantity: 2,
    date: new Date(moment("20/05/2022 16:00", "DD/MM/YYYY hh:mm").format()),
    isVoucher: true,
  };
  expect(Exercises1(OrderBeers)).toBe(480);
});

test("Price Beer manual voucher, time discount 17:59", () => {
  const OrderBeers: PaymentBeer = {
    quantity: 1,
    date: new Date(moment("20/05/2022 17:59", "DD/MM/YYYY hh:mm").format()),
    isVoucher: true,
  };
  expect(Exercises1(OrderBeers)).toBe(190);
});

test("Price 2 Beer manual voucher, time discount 17:59", () => {
  const OrderBeers: PaymentBeer = {
    quantity: 2,
    date: new Date(moment("20/05/2022 17:59", "DD/MM/YYYY hh:mm").format()),
    isVoucher: true,
  };
  expect(Exercises1(OrderBeers)).toBe(480);
});
