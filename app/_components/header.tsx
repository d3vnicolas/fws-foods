import Image from "next/image";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";

const Header = () => {
  return (
    <header className="flex justify-between px-5 pt-6">
      <Image src="/logo.png" alt="Logo fsw foods" height={30} width={100} />
      <Button
        variant="outline"
        size="icon"
        className="border-none bg-transparent"
      >
        <Menu height="20" width="20" color="black" />
      </Button>
    </header>
  );
};

export default Header;
