import Image from "next/image";
import CategoryList from "./_components/categoryList";
import Header from "./_components/header";

export default function Home() {
  return (
    <>
      <Header />
      <CategoryList />
      <Image
        src="/Banner-01.png"
        alt="Até 30% de desconto"
        height={0}
        width={0}
        className="h-auto w-full object-contain px-5 pt-5"
        sizes="100vw"
        quality={100}
      />
    </>
  );
}
