import Header from "@/app/_components/header";
import { db } from "@/app/_lib/prisma";
import ProductGrid from "@/app/categoria/_components/productGrid";

interface CategoryPageProps {
  params: {
    id: string;
  };
}

const CategoryPage = async ({ params: { id } }: CategoryPageProps) => {
  const products = await db.product.findMany({
    where: {
      categoryId: id,
    },
    include: {
      restaurant: {
        select: {
          name: true,
        },
      },
    },
  });

  const category = await db.category.findUnique({
    where: {
      id,
    },
  });

  return (
    <>
      <Header isVisibleSearchBar={false} />
      <ProductGrid products={products} title={category?.name} />
    </>
  );
};

export default CategoryPage;
