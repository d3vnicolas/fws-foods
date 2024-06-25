import { ArrowDown } from "lucide-react";

interface DiscountFlagProps {
  discountPercentage: Number;
  className?: string;
}

const DiscountFlag = ({ discountPercentage, className }: DiscountFlagProps) => {
  return (
    <div
      className={`absolute left-2 top-2 flex items-center justify-center rounded-lg bg-destructive px-2 py-[2px] text-white ${className}`}
    >
      <ArrowDown size={12} strokeWidth={3} />{" "}
      <span className="text-xs font-semibold">
        {discountPercentage.toString()}%
      </span>
    </div>
  );
};

export default DiscountFlag;
