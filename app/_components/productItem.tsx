import { Product } from "@prisma/client";
import Image from "next/image";

interface ProductItemProp {
  product: Product;
}

const ProductItem = ({ product }: ProductItemProp) => {
  return (
    <div className="h-[150px] w-[150px]">
      <Image
        src={product.imageUrl}
        alt={product.name}
        width={150}
        height={150}
      />
    </div>
  );
};

export default ProductItem;
