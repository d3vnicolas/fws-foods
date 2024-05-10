import { Star } from "lucide-react";

interface RatingFlagProps {
  rating: number;
}

const RatingFlag = ({ rating }: RatingFlagProps) => {
  return (
    <div className="absolute left-[10px] top-[10px] flex items-center gap-1 rounded-lg bg-white px-[10px] py-1">
      <Star fill="#FFB100" stroke="#FFB100" size={12} />
      <span className="text-xs text-foreground">{rating.toString()}</span>
    </div>
  );
};

export default RatingFlag;
