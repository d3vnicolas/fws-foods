import DiscountFlag from "@/app/_components/products/discountFlag";
import ProductList from "@/app/_components/products/productList";
import QuantitySelector from "@/app/_components/products/quantitySelector";
import { Button } from "@/app/_components/ui/button";
import { currencyBrazil } from "@/app/_helpers/formatCurrency";
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

  return getRestaurant;
};

const ProductContentCard = async ({ product }: ProductContentCardProps) => {
  const productRestaurant = await fetchItems(product.restaurantId);

  const products = await db.product.findMany({
    include: {
      restaurant: {
        select: {
          name: true,
        },
      },
    },
    take: 10,
  });

  return (
    <div className="-mt-4 flex w-full flex-1 flex-col rounded-lg rounded-t-2xl bg-white p-5">
      <div className="mb-3 flex flex-col items-start justify-between">
        <div className="flex items-center">
          <Image
            alt="Imagem do restaurante"
            src="/profile-restaurant-img.png"
            height={16}
            width={16}
          />
          <h1 className="ml-2 text-xs">{productRestaurant?.name}</h1>
        </div>
        <h1 className="text-xl font-semibold text-foreground">
          {product.name}
        </h1>
      </div>
      <div className="flex flex-col">
        <div className="flex flex-col">
          {product.discountPercentage && (
            <span className="text-sm text-muted-foreground line-through">
              De{" "}
              {currencyBrazil(
                (product.discountPercentage * Number(product.price)) / 100 +
                  Number(product.price),
              )}
            </span>
          )}
          <div className="flex items-center">
            <span className="text-xl font-semibold text-foreground">
              {currencyBrazil(Number(product.price))}
            </span>
            {product.discountPercentage && (
              <DiscountFlag
                className="!static ml-1 max-h-[22px]"
                discountPercentage={product.discountPercentage}
              />
            )}
            <QuantitySelector className="ml-auto" />
          </div>
        </div>
      </div>
      <div className="my-6 flex items-center justify-around rounded-lg border-[1px] border-[#eee] p-[10px] text-[12px]">
        <div className="flex flex-col items-center justify-center text-muted-foreground">
          <span className="flex items-center gap-1">
            Entrega
            <Image
              src="/icon-bike-gray.svg"
              alt="Ícone de motocicleta"
              height={14}
              width={14}
            />
          </span>
          <strong className="text-foreground">Grátis</strong>
        </div>
        <div className="flex flex-col items-center justify-center text-muted-foreground">
          <span className="flex items-center gap-1">
            Entrega
            <Image
              src="/icon-timer-gray.svg"
              alt="Ícone de temporizador"
              height={14}
              width={14}
            />
          </span>
          <strong className="text-foreground">40min</strong>
        </div>
      </div>
      <div>
        <h2 className="mb-3 text-base font-semibold text-foreground">Sobre</h2>
        <p className="text-sm font-normal text-muted-foreground">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo
          recusandae unde veniam? At laboriosam sit accusamus. Sint vitae fugit
          sequi, ratione consequatur exercitationem? Minima rem voluptate
          tempora, labore incidunt distinctio.
        </p>
      </div>
      <ProductList title="Relacionados" products={products} className="my-6" />
      <Button className="mt-auto w-full bg-destructive">
        Adicionar à sacola
      </Button>
    </div>
  );
};

export default ProductContentCard;
