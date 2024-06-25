import { ChevronRight } from "lucide-react";
import ProductItem from "./productItem";
import { Button } from "@/app/_components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/app/_components/ui/carousel";
import { Prisma } from "@prisma/client";

interface ProductListProps {
  title: string;
  products: Prisma.ProductGetPayload<{
    include: {
      restaurant: {
        select: {
          name: true;
        };
      };
    };
  }>[];
  className?: string;
  showMoreLink?: string;
}

const ProductList = async ({
  title,
  products,
  className,
  showMoreLink,
}: ProductListProps) => {
  return (
    <div className={`flex flex-col gap-4 ${className}`}>
      <div className="flex items-baseline justify-between">
        <h2 className="text-base font-semibold text-foreground">{title}</h2>
        {showMoreLink && (
          <Button
            className="h-fit border-none bg-transparent p-0 text-xs text-destructive hover:bg-transparent hover:text-destructive hover:underline"
            variant={"outline"}
          >
            Ver todos <ChevronRight size={14} />
          </Button>
        )}
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
