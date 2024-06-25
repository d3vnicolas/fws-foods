"use client";

import Favorite from "@/app/_components/favorite";
import { Button } from "@/app/_components/ui/button";
import { Product } from "@prisma/client";
import { ChevronLeft } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface TopBackgroundProps {
  product: Pick<Product, "id" | "imageUrl" | "name">;
}

const TopBackground = ({ product }: TopBackgroundProps) => {
  const router = useRouter();

  const handleBackButton = () => {
    router.back();
  };

  return (
    <div className="relative h-[216px] w-full px-5 pt-6">
      <div className="flex items-center justify-between">
        <Button
          className="h-10 w-10 rounded-full bg-white p-0"
          onClick={handleBackButton}
          variant="ghost"
        >
          <ChevronLeft size={14} stroke="#323232" />
        </Button>
        <Favorite className="!static h-10 min-w-10" size={22} />
      </div>
      <Image
        src={product.imageUrl}
        fill
        alt={product.name}
        style={{ zIndex: -1, objectFit: "cover" }}
      />
    </div>
  );
};

export default TopBackground;
