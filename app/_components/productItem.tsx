import { Product } from "@prisma/client";
import Image from "next/image";

interface ProductItemProp {
  product: Product;
}

const ProductItem = ({ product }: ProductItemProp) => {
  return (
    <div>
      <Image
        className="h-[150px] object-cover"
        src={product.imageUrl}
        alt={product.name}
        height={150}
        width={150}
      />
    </div>
  );
};

export default ProductItem;
