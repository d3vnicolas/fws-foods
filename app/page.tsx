import Banner from "@/app/_components/banner";
import CategoryList from "@/app/_components/categoryList";
import Header from "@/app/_components/header";
import ProductList from "@/app/_components/productList";

export default function Home() {
  return (
    <>
      <Header />
      <CategoryList />
      <Banner src="/Banner-01.png" alt="Até 30% de desconto" />
      <ProductList />
      <Banner src="/Banner-02.png" alt="A partir de R$17,90 em lanches" />
    </>
  );
}
