import { Star } from "lucide-react";

interface RatingFlagProps {
  rating: number;
  className?: string;
}

const RatingFlag = ({ rating, className }: RatingFlagProps) => {
  return (
    <div
      className={`absolute left-[10px] top-[10px] flex items-center gap-1 rounded-lg bg-white px-[10px] py-1 text-xs text-foreground ${className}`}
    >
      <Star fill="#FFB100" stroke="#FFB100" size={12} />
      <span>{rating.toString()}</span>
    </div>
  );
};

export default RatingFlag;
