import { db } from "@/app/_lib/prisma";
import { notFound } from "next/navigation";
import TopBackground from "../_components/topBackground";
import RestaurantContentCard from "../_components/contentCard";

interface RestaurantePageProps {
  params: {
    id: string;
  };
}

const RestaurantePage = async ({ params: { id } }: RestaurantePageProps) => {
  const restaurant = await db.restaurant.findUnique({
    where: {
      id,
    },
    include: {
      categories: {
        orderBy: {
          createdAt: "desc",
        },
        include: {
          products: {
            where: {
              restaurantId: id,
            },
            include: {
              restaurant: {
                select: {
                  name: true,
                },
              },
            },
          },
        },
      },
      products: {
        take: 10,
        include: {
          restaurant: {
            select: {
              name: true,
            },
          },
        },
      },
    },
  });

  if (!restaurant) {
    return notFound();
  }

  return (
    <div>
      <TopBackground restaurant={restaurant} />
      <RestaurantContentCard
        restaurant={restaurant}
        categories={restaurant.categories}
        products={restaurant.products}
      />
    </div>
  );
};

export default RestaurantePage;
