import RatingFlag from "@/app/_components/reviews/ratingFlag";
import { Restaurant } from "@prisma/client";
import Image from "next/image";

interface RestaurantContentCardProps {
  restaurant: Restaurant;
}

const RestaurantContentCard = ({ restaurant }: RestaurantContentCardProps) => {
  return (
    <div className="w-full rounded-lg bg-white p-5">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <Image
            src="/profile-restaurant-img.png"
            alt={`${restaurant.name}`}
            height={30}
            width={30}
          />
          <h1 className="ml-2">{restaurant.name}</h1>
        </div>
        <RatingFlag className="!static bg-foreground text-white" rating={4.2} />
      </div>
    </div>
  );
};

export default RestaurantContentCard;
