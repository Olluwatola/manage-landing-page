import React from "react";
import GetStarted from "../buttons/GetStarted";

interface HeaderProps {
  toggleMobileNav: () => void;
  openMobileNav: boolean;
}

const Header: React.FC<HeaderProps> = ({ toggleMobileNav, openMobileNav }) => {
  return (
    <header className="flex sticky justify-between items-center p-4 bg-white md:bg-transparent shadow-md md:shadow-none">
      <img
        src="/logo.svg"
        alt="logo"
        className="w-24 h-auto" // Set a fixed width, keep aspect ratio with h-auto
      />
      <div className="hidden md:flex items-center">
        <div className="flex flex-row space-x-6">
          <div>Pricing</div>
          <div>Product</div>
          <div>About Us</div>
          <div>Careers</div>
          <div>Community</div>
        </div>
      </div>
      <img
        className="md:hidden cursor-pointer"
        onClick={() => toggleMobileNav()}
        src={openMobileNav ? "/icon-close.svg" : "/icon-hamburger.svg"}
        alt="icon-hamburger"
      />
      <div className="hidden md:block">
        <GetStarted noShadow={true} />
      </div>
    </header>
  );
};

export default Header;
