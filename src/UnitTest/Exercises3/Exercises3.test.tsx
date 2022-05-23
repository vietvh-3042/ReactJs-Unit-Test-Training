import { DiscountShopping } from "../constants/enum";
import Exercises3 from "./Exercises3";

test("Shopping not discount", () => {
  const Shopping: DiscountShopping = {
    isShirt: false,
    isTie: false,
    quantity: 1,
  };
  expect(Exercises3(Shopping)).toBe("0%");
});

test("Shopping  discount 5%", () => {
  const Shopping: DiscountShopping = {
    isShirt: true,
    isTie: true,
    quantity: 2,
  };
  expect(Exercises3(Shopping)).toBe("5%");
});

test("Shopping  discount 7%", () => {
  const Shopping: DiscountShopping = {
    isShirt: false,
    isTie: false,
    quantity: 10,
  };
  expect(Exercises3(Shopping)).toBe("7%");
});

test("Shopping  discount 12%", () => {
  const Shopping: DiscountShopping = {
    isShirt: true,
    isTie: true,
    quantity: 10,
  };
  expect(Exercises3(Shopping)).toBe("12%");
});
