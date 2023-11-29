import NavItems from "./NavItems";

const Navbar = () => {
  return (
    <header className="fixed top-0 z-40 w-full border-b bg-headerBg backdrop-blur-sm">
      <div className="container mx-auto max-w-5xl flex py-4 justify-between items-center">
        <NavItems />
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-1">
            {/* <ThemeToggle /> */}X
            <div className="block xs:hidden">
              {/* <DropdownMenu /> */}
              {/* mobile menu option */}
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
