import ProductItem from "@/app/_components/products/productItem";
import { Prisma } from "@prisma/client";

interface ProductGridProps {
  products: Prisma.ProductGetPayload<{
    include: {
      restaurant: {
        select: {
          name: true;
        };
      };
    };
  }>[];
  title?: string;
}

const ProductGrid = ({ products, title }: ProductGridProps) => {
  return (
    <section className="px-5">
      {title && (
        <h1 className="text-lg font-semibold text-foreground">{title}</h1>
      )}
      <div className="mt-6 flex flex-wrap justify-between">
        {products.map((product, index) => (
          <ProductItem key={index} product={product} />
        ))}
      </div>
    </section>
  );
};

export default ProductGrid;
