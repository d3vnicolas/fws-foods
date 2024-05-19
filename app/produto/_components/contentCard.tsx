import RatingFlag from "@/app/_components/reviews/ratingFlag";
import { db } from "@/app/_lib/prisma";
import { Product } from "@prisma/client";
import Image from "next/image";

interface ProductContentCardProps {
  product: Product;
}

const fetchItems = async (id: string) => {
  const getRestaurant = await db.restaurant.findUnique({
    where: {
      id,
    },
  });

  const [productRestaurant] = await Promise.all([getRestaurant]);

  return { productRestaurant };
};

const ProductContentCard = async ({ product }: ProductContentCardProps) => {
  const { productRestaurant } = await fetchItems(product.restaurantId);

  return (
    <div className="-mt-4 w-full rounded-lg rounded-t-2xl bg-white p-5">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <Image
            alt="Imagem do restaurante"
            src="/profile-restaurant-img.png"
            height={16}
            width={16}
          />
          <h1 className="ml-2 text-xs">{productRestaurant?.name}</h1>
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
          <strong className="text-foreground">Grátis</strong>
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
          <strong className="text-foreground">40min</strong>
        </div>
      </div>
      {/* <div className="mb-8 flex flex-wrap gap-2">
        {categories.map((category) => (
          <Link
            className="w-calc50-8 h-[26px] rounded-sm bg-muted text-center text-muted-foreground"
            key={category.id}
            href={`/categoria/${category.id}`}
          >
            {category.name}
          </Link>
        ))}
      </div> */}
      {/* <ProductList title="Mais Pedidos" products={products} className="px-0" /> */}
    </div>
  );
};

export default ProductContentCard;
