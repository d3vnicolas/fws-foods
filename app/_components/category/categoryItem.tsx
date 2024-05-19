import { Category } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";

interface CategoryItemProps {
  category: Category;
}

const CategoryItem = ({ category }: CategoryItemProps) => {
  return (
    <Link
      href={`categorias/${category.id}`}
      className="flex min-h-14 w-fit items-center gap-3 rounded-full px-4 shadow-md"
    >
      <Image
        src={category.imageUrl}
        alt={category.name}
        height={30}
        width={30}
      />
      <span>{category.name}</span>
    </Link>
  );
};

export default CategoryItem;
