import { Prisma } from "@prisma/client";
import { currencyBrazil } from "@/app/_helpers/formatCurrency";
import Image from "next/image";
import { calculateProductPriceDiscount } from "@/app/_helpers/price";

interface ProductItemProps {
  product: Prisma.ProductGetPayload<{
    include: {
      restaurant: {
        select: {
          name: true;
        };
      };
    };
  }>;
  className?: string;
}

const ProductItem = ({ product }: ProductItemProps) => {
  return (
    <div className="relative max-w-[150px]">
      <Image
        className="h-[150px] rounded-lg object-cover"
        src={product.imageUrl}
        alt={product.name}
        height={150}
        width={150}
      />
      <h2 className="truncate text-sm text-foreground">{product.name}</h2>
      <div className="flex items-baseline justify-start gap-2">
        <span className="text-base font-semibold">
          {currencyBrazil(calculateProductPriceDiscount(product))}
        </span>
        <span className="text-sm font-normal text-muted-foreground line-through">
          {currencyBrazil(Number(product.price))}
        </span>
      </div>
      <h3 className="truncate text-sm font-normal text-muted-foreground">
        {product.restaurant.name}
      </h3>
    </div>
  );
};

export default ProductItem;
