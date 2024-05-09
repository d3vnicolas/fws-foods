import { ChevronRight } from "lucide-react";
import { db } from "../_lib/prisma";
import ProductItem from "./productItem";
import { Button } from "./ui/button";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";

const ProductList = async () => {
  const products = await db.product.findMany({
    include: {
      restaurant: {
        select: {
          name: true,
        },
      },
    },
    where: {
      discountPercentage: {
        gt: 0,
      },
    },
    take: 10,
  });

  return (
    <div className="flex flex-col gap-4 px-5">
      <div className="flex items-baseline justify-between">
        <h2 className="text-base font-semibold text-foreground">
          Pedidos Recomendados
        </h2>
        <Button
          className="h-fit border-none bg-transparent p-0 text-xs text-destructive hover:bg-transparent hover:text-destructive hover:underline"
          variant={"outline"}
        >
          Ver todos <ChevronRight size={14} />
        </Button>
      </div>
      <Carousel className="-mr-5">
        <CarouselContent className="pb-1">
          {products.map((product) => (
            <CarouselItem className="flex-none" key={product.id}>
              <ProductItem product={product} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default ProductList;
