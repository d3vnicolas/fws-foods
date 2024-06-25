import Banner from "@/app/_components/banner";
import CategoryList from "@/app/_components/category/categoryList";
import Header from "@/app/_components/header";
import ProductList from "@/app/_components/products/productList";
import { db } from "@/app/_lib/prisma";
import RestaurantList from "@/app/_components/restaurants/restaurantList";

const fetchItems = async () => {
  const getRecomendedProducts = await db.product.findMany({
    include: {
      restaurant: {
        select: {
          name: true,
        },
      },
    },
    take: 10,
  });

  const getRecomendedRestaurants = await db.restaurant.findMany({
    take: 10,
  });

  const [recomendedProducts, recomendedRestaurants] = await Promise.all([
    getRecomendedProducts,
    getRecomendedRestaurants,
  ]);

  return { recomendedProducts, recomendedRestaurants };
};

export default async function Home() {
  const { recomendedProducts, recomendedRestaurants } = await fetchItems();

  return (
    <>
      <Header />
      <main className="px-5">
        <CategoryList />
        <Banner src="/Banner-01.png" alt="Até 30% de desconto" />
        <ProductList
          title="Produtos Recomendados"
          products={recomendedProducts}
        />
        <Banner src="/Banner-02.png" alt="A partir de R$17,90 em lanches" />
        <RestaurantList
          title="Restaurantes Recomendados"
          restaurants={recomendedRestaurants}
        />
      </main>
    </>
  );
}
