import { DiscountShopping } from "../constants/enum";

const Exercises3Exercises3 = ({ quantity, isShirt, isTie }: DiscountShopping): string => {
  let discount = 0;
  const Discount7Percent: number = 7;
  const Discount5Percent: number = 5;

  if (quantity >= Discount7Percent) discount += Discount7Percent;

  if (isShirt && isTie) discount += Discount5Percent;

  return discount + "%";
};

export default Exercises3Exercises3;
