import GetStarted from "../buttons/GetStarted";

const Footer = () => {
  return (
    <div className=" bg-slate-900 pb-163">
      <div className="px-4 py-10 space-y-7 md:grid md:grid-cols-3 md:gap-4 mb-10 max-w-screen-xl mx-auto ">
        {/* Grid A: Input Bar and GO Button */}
        <div className="flex flex-col text-right justify-between my-7 items-center h-full md:order-3">
          <div className="flex items-center w-full max-w-lg space-x-2">
            <input
              placeholder="Updates in your inbox..."
              className="flex-grow px-6 py-3 md:w-3/4 flex-shrink text-sm rounded-full "
            />
            <GetStarted label={"GO"} noShadow={true} />
          </div>

          {/* Grid D: Copyright (Hidden on md and above) */}
          <div className="text-right hidden md:block text-gray-500 mt-6 w-full">
            Copyright 2020. All Rights Reserved
          </div>
        </div>

        {/* Grid B: Navigation Links */}
        <div className="   leading-9 justify-around items-baseline flex flex-row text-gray-400 md:order-2">
          <ul>
            <li>Home</li>
            <li>Pricing</li>
            <li>Products</li>
            <li>About Us</li>
          </ul>
          <ul>
            <li>Careers</li>
            <li>Community</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/* Grid C: Social Icons and Logo */}
        <div className="flex flex-col space-y-10 md:space-y-0 justify-between items-center h-full md:order-1 md:flex-col-reverse">
          <div className="flex flex-row space-x-10  md:space-x-3">
            <img src="/icon-facebook.svg" className="h-9 md:h-7" alt="facebook" />
            <img src="/icon-youtube.svg" className="h-9 md:h-7" alt="youtube" />
            <img src="/icon-twitter.svg" className="h-9 md:h-7" alt="twitter" />
            <img src="/icon-pinterest.svg" className="h-9 md:h-7" alt="pinterest" />
            <img src="/icon-instagram.svg" className="h-9 md:h-7" alt="instagram" />
          </div>
          <img src="/flogo.svg" className="h-9" alt="logo" />
        </div>

        {/* Replica of Grid D for md and above, positioned under Grid A */}
        <div className="md:hidden  md:col-start-3 md:mt-4 text-gray-500 text-center">
          Copyright 2020. All Rights Reserved
        </div>
      </div>
    </div>
  );
};

export default Footer;
