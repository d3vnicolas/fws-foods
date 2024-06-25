import Image from "next/image";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import SearchBar from "./searchBar";

interface HeaderProps {
  isVisibleSearchBar?: boolean;
}

const Header = ({ isVisibleSearchBar = true }: HeaderProps) => {
  return (
    <header className="mb-6 px-5 pt-6">
      <div className="flex justify-between">
        <Image src="/logo.png" alt="Logo fsw foods" height={30} width={100} />
        <Button
          variant="outline"
          size="icon"
          className="border-none bg-transparent"
        >
          <Menu height="20" width="20" color="black" />
        </Button>
      </div>
      {isVisibleSearchBar && <SearchBar />}
    </header>
  );
};

export default Header;
