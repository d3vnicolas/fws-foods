import ProductList from "@/app/_components/products/productList";
import RatingFlag from "@/app/_components/reviews/ratingFlag";
import { currencyBrazil } from "@/app/_helpers/formatCurrency";
import { Category, Prisma, Restaurant } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";

interface RestaurantContentCardProps {
  restaurant: Restaurant;
  categories: Category[];
  products: Prisma.ProductGetPayload<{
    include: {
      restaurant: {
        select: {
          name: true;
        };
      };
    };
  }>[];
}

const RestaurantContentCard = ({
  restaurant,
  categories,
  products,
}: RestaurantContentCardProps) => {
  return (
    <div className="-mt-4 flex w-full flex-1 flex-col rounded-lg rounded-t-2xl bg-white p-5">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <Image
            src="/profile-restaurant-img.png"
            alt={restaurant.name}
            height={30}
            width={30}
          />
          <h1 className="ml-2">{restaurant.name}</h1>
        </div>
        <RatingFlag
          className="!static !bg-foreground !text-white"
          rating={4.2}
        />
      </div>
      <div className="mb-3 mt-6 flex items-center justify-around rounded-lg border-[1px] border-[#eee] p-[10px] text-[12px]">
        <div className="flex flex-col items-center justify-center text-muted-foreground">
          <span className="flex items-center gap-1">
            Entrega{" "}
            <Image
              src="/icon-timer-gray.svg"
              alt="Ícone de motocicleta"
              height={14}
              width={14}
            />
          </span>
          <strong className="text-foreground">
            {Number(restaurant.deliveryFee) != 0
              ? currencyBrazil(Number(restaurant.deliveryFee))
              : "Grátis"}
          </strong>
        </div>
        <div className="flex flex-col items-center justify-center text-muted-foreground">
          <span className="flex items-center gap-1">
            Entrega{" "}
            <Image
              src="/icon-timer-gray.svg"
              alt="Ícone de motocicleta"
              height={14}
              width={14}
            />
          </span>
          <strong className="text-foreground">
            {restaurant.deliveryTimeMinutes + "min"}
          </strong>
        </div>
      </div>
      <div className="mb-8 flex flex-wrap gap-2">
        {categories.map((category) => (
          <Link
            className="w-calc50-8 h-[26px] rounded-sm bg-muted text-center text-muted-foreground"
            key={category.id}
            href={`/categoria/${category.id}`}
          >
            {category.name}
          </Link>
        ))}
      </div>
      <ProductList title="Mais Pedidos" products={products} className="px-0" />
      <ProductList
        title="Comida Japonesa"
        products={products}
        className="my-7 px-0"
      />
      <ProductList title="Sucos" products={products} className="px-0" />
    </div>
  );
};

export default RestaurantContentCard;
