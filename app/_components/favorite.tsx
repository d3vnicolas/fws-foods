import { Heart } from "lucide-react";

interface FavoriteProps {
  className?: string;
  size?: number;
}

const Favorite = ({ className, size = 14 }: FavoriteProps) => {
  return (
    <div
      className={`absolute right-[10px] top-[10px] flex aspect-square w-7 cursor-pointer items-center justify-center rounded-full bg-card-foreground ${className}`}
    >
      <Heart fill="white" stroke="white" size={size} />
    </div>
  );
};

export default Favorite;
