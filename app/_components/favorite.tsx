import { Heart } from "lucide-react";

const Favorite = () => {
  return (
    <div className="absolute right-[10px] top-[10px] flex aspect-square w-7 items-center justify-center rounded-full bg-card-foreground">
      <Heart fill="white" stroke="white" size={14} />
    </div>
  );
};

export default Favorite;
