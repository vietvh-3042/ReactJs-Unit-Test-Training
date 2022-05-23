import { DiscountPizza } from "../constants/enum";
import Exercises5 from "./Exercises5";

test("Total Price > 1500, not homeDelivery", () => {
  const DiscountPizza: DiscountPizza = {
    totalPrice: 1501,
    homeDelivery: false,
    coupon: false,
  };
  expect(Exercises5(DiscountPizza)).toStrictEqual({
    freePotato: true,
    freeAddPizza: true,
  });
});

test("Total Price > 1500, homeDelivery, not coupon", () => {
  const DiscountPizza: DiscountPizza = {
    totalPrice: 1501,
    homeDelivery: true,
    coupon: false,
  };
  expect(Exercises5(DiscountPizza)).toStrictEqual({
    freePotato: true,
  });
});

test("Total Price > 1500, homeDelivery,  coupon", () => {
  const DiscountPizza: DiscountPizza = {
    totalPrice: 1501,
    homeDelivery: true,
    coupon: true,
  };
  expect(Exercises5(DiscountPizza)).toStrictEqual({
    freePotato: true,
    reduceInvoice: "20%",
  });
});

test("Total Price <=  1500, not homeDelivery", () => {
  const DiscountPizza: DiscountPizza = {
    totalPrice: 1500,
    homeDelivery: false,
    coupon: false,
  };
  expect(Exercises5(DiscountPizza)).toStrictEqual({
    freeAddPizza: true,
  });
});

test("Total Price <=  1500, homeDelivery, not coupon", () => {
  const DiscountPizza: DiscountPizza = {
    totalPrice: 1500,
    homeDelivery: true,
    coupon: false,
  };
  expect(Exercises5(DiscountPizza)).toStrictEqual({});
});

test("Total Price <=  1500, homeDelivery,  coupon", () => {
  const DiscountPizza: DiscountPizza = {
    totalPrice: 1500,
    homeDelivery: true,
    coupon: true,
  };
  expect(Exercises5(DiscountPizza)).toStrictEqual({
    reduceInvoice: "20%",
  });
});
