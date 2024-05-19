import { db } from "@/app/_lib/prisma";
import TopBackground from "@/app/produto/_components/topBackground";
import { notFound } from "next/navigation";
import ProductContentCard from "@/app/produto/_components/contentCard";

interface ProductPageProps {
  params: {
    id: string;
  };
}

const ProductPage = async ({ params: { id } }: ProductPageProps) => {
  const product = await db.product.findUnique({
    where: {
      id,
    },
  });

  if (!product) {
    return notFound();
  }

  return (
    <div>
      <TopBackground product={product} />
      <ProductContentCard product={product} />
    </div>
  );
};

export default ProductPage;
