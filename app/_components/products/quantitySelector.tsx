"use client";

import { useState } from "react";
import { Button } from "../ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface QuantitySelectorProps {
  className?: string;
}

const QuantitySelector = ({ className }: QuantitySelectorProps) => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityUp = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleQuantityDown = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  return (
    <div className={`flex ${className}`}>
      <Button
        className="h-8 w-8 bg-transparent p-0"
        variant={"outline"}
        onClick={handleQuantityDown}
      >
        <ChevronLeft size={14} color="#000" />
      </Button>
      <input
        className="w-8 appearance-none text-center"
        type="text"
        value={quantity}
      />
      <Button
        className="h-8 w-8 bg-destructive p-0 hover:bg-primary"
        onClick={handleQuantityUp}
      >
        <ChevronRight size={14} color="#fff" />
      </Button>
    </div>
  );
};

export default QuantitySelector;
