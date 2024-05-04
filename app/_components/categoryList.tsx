import { db } from "../_lib/prisma";
import CategoryItem from "./categoryItem";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";

const CategoryList = async () => {
  const categories = await db.category.findMany({});

  return (
    <Carousel className="-mr-5 px-5 pt-5">
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
