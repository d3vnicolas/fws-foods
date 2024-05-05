import { db } from "../_lib/prisma";
import ProductItem from "./productItem";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";

const ProductList = async () => {
  const products = await db.product.findMany({
    where: {
      discountPercentage: {
        gt: 0,
      },
    },
    take: 10,
  });

  return (
    <Carousel className="-mr-5 px-5 pt-5">
      <CarouselContent className="pb-1">
        {products.map((product) => (
          <CarouselItem className="flex-none" key={product.id}>
            <ProductItem product={product} />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default ProductList;
