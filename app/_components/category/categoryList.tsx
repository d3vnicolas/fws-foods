import { db } from "@/app/_lib/prisma";
import CategoryItem from "@/app/_components/category/categoryItem";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/app/_components/ui/carousel";

const CategoryList = async () => {
  const categories = await db.category.findMany({});

  return (
    <Carousel className="-mr-5 pt-5">
      <CarouselContent className="pb-1">
        {categories.map((category) => (
          <CarouselItem className="flex-none" key={category.id}>
            <CategoryItem category={category} />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default CategoryList;
