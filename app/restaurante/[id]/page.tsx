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
  });

  if (!restaurant) {
    return notFound();
  }

  return (
    <div>
      <TopBackground restaurant={restaurant} />
      <RestaurantContentCard restaurant={restaurant} />
    </div>
  );
};

export default RestaurantePage;
