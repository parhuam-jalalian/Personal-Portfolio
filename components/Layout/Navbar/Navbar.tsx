import { Button } from "@/components/ui/button";
import NavItems from "./NavItems";
import { RxMoon } from "react-icons/rx";
import MobileSideBar from "./MobileSideBar";

const Navbar = () => {
  return (
    <header className="fixed top-0 z-40 w-full border-b bg-headerBg backdrop-blur-sm">
      <div className="container mx-auto max-w-5xl flex py-4 justify-between items-center">
        <NavItems />
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-1">
            <Button variant="ghost" size="icon">
              <RxMoon className="w-6 h-6" />
            </Button>
            <div className="block xs:hidden">
              {/* mobile menu option */}
              <MobileSideBar />
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
