import { currencyBrazil } from "@/app/_helpers/formatCurrency";
import { Restaurant } from "@prisma/client";
import Image from "next/image";
import RatingFlag from "@/app/_components/reviews/ratingFlag";
import Favorite from "@/app/_components/favorite";

interface RestaurantItemProps {
  restaurant: Restaurant;
}

const RestaurantItem = ({ restaurant }: RestaurantItemProps) => {
  return (
    <div className="relative flex flex-col">
      <div>
        <Image
          alt={restaurant.name}
          className="mb-3 max-h-[136px] rounded-lg object-cover"
          height={136}
          src={restaurant.imageUrl}
          width={266}
        />
        <RatingFlag rating={4.2} />
        <Favorite />
      </div>
      <span className="text-sm font-semibold text-foreground">
        {restaurant.name}
      </span>
      <div className="flex gap-3">
        <div className="flex gap-[6px]">
          <Image
            src="/icon-bike.svg"
            alt="Ícone de motocicleta"
            height={15}
            width={16}
          />
          <div className="flex gap-3">
            <span className="text-xs font-normal text-muted-foreground">
              {Number(restaurant.deliveryFee) != 0
                ? currencyBrazil(Number(restaurant.deliveryFee))
                : "Entrega Grátis"}
            </span>
          </div>
        </div>
        <div className="flex gap-[6px]">
          <Image
            src="/icon-timer.svg"
            alt="Ícone de motocicleta"
            height={14}
            width={14}
          />
          <div className="flex gap-3">
            <span className="text-xs font-normal text-muted-foreground">
              {`${restaurant.deliveryTimeMinutes} min`}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantItem;
