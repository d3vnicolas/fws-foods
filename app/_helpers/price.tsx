import { Product } from "@prisma/client";

export const calculateProductPriceDiscount = (product: Product): Number => {
  const priceNumber = Number(product.price);

  if (product.discountPercentage === 0) {
    return priceNumber;
  }

  const discount = priceNumber * Number(product.discountPercentage / 100);

  return priceNumber - discount;
};
