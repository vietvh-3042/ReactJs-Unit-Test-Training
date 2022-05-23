import { DiscountPizza } from "../constants/enum";

const Exercises5 = ({ totalPrice, homeDelivery, coupon }: DiscountPizza): object => {
  const flag = 1500;
  let discount = {};

  if (totalPrice > flag) discount = { ...discount, freePotato: true };
  if (homeDelivery) {
    if (coupon) discount = { ...discount, reduceInvoice: "20%" };
  } else {
    discount = { ...discount, freeAddPizza: true };
  }
  return discount;
};

export default Exercises5;
