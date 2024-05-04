import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Search } from "lucide-react";

const SearchBar = () => {
  return (
    <div className="relative mt-5">
      <Input
        className="border-none bg-background"
        placeholder="Buscar Restaurantes"
      />
      <Button className="absolute right-0 top-1/2 -translate-y-1/2" size="icon">
        <Search size={20} />
      </Button>
    </div>
  );
};

export default SearchBar;
