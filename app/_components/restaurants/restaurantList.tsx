import { Restaurant } from "@prisma/client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/app/_components/ui/carousel";
import RestaurantItem from "@/app/_components/restaurants/restaurantItem";
import { Button } from "@/app/_components/ui/button";
import { ChevronRight } from "lucide-react";

interface RestaurantListProps {
  restaurants: Restaurant[];
  title: string;
}

const RestaurantList = async ({ restaurants, title }: RestaurantListProps) => {
  return (
    <div className="flex flex-col gap-4 px-5">
      <div className="flex items-baseline justify-between">
        <h2 className="text-base font-semibold text-foreground">{title}</h2>
        <Button
          className="h-fit border-none bg-transparent p-0 text-xs text-destructive hover:bg-transparent hover:text-destructive hover:underline"
          variant={"outline"}
        >
          Ver todos <ChevronRight size={14} />
        </Button>
      </div>
      <Carousel className="-mr-5 mb-5">
        <CarouselContent>
          {restaurants.map((restaurant) => (
            <CarouselItem className="flex-none" key={restaurant.id}>
              <RestaurantItem restaurant={restaurant} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default RestaurantList;
