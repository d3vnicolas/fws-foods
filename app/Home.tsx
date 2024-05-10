import Banner from "@/app/_components/banner";
import CategoryList from "@/app/_components/categoryList";
import Header from "@/app/_components/header";
import ProductList from "@/app/_components/products/productList";

export default function Home() {
  // const recomendedProducts = await db.product.findMany({
  //   include: {
  //     restaurant: {
  //       select: {
  //         name: true,
  //       },
  //     },
  //   },
  //   where: {
  //     discountPercentage: {
  //       gt: 0,
  //     },
  //   },
  //   take: 10,
  // });
  return (
    <>
      <Header />
      <CategoryList />
      <Banner src="/Banner-01.png" alt="Até 30% de desconto" />
      <ProductList
        title="Produtos Recomendados"
        products={recomendedProducts}
      />
      <Banner src="/Banner-02.png" alt="A partir de R$17,90 em lanches" />
    </>
  );
}
