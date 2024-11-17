import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Content from "./components/Content";
import BottomBanner from "./components/BottomBanner";
import Footer from "./components/Footer";
import GetStarted from "./buttons/GetStarted";
import Testimonials from "./components/Testimonials";

function App() {
  const [openMobileNav, setOpenMobileNav] = useState(false);

  const toggleMobileNav = () => setOpenMobileNav(!openMobileNav);

  return (
    <div className="bg-neutral-veryLightGray min-h-screen flex flex-col ">
      {/* Header Section */}
      <Header toggleMobileNav={toggleMobileNav} openMobileNav={openMobileNav} />

      {/* Centered Container for Main Content */}
      <div className="w-full max-w-screen-xl mx-auto px-4">
        {/* Hero Section */}
        <Hero />

        {/* Other Sections */}
        <Content />

        {/* Modal */}
        {openMobileNav && (
          <div
            className="fixed inset-0 z-10 bg-gradient-to-b from-transparent to-black md:hidden"
            onClick={() => setOpenMobileNav(false)}
          >
            <div
              className="w-11/12 max-w-md bg-white p-6 rounded-lg mt-[4rem] mx-auto" // Adjust the top margin to match header height
              onClick={(e) => e.stopPropagation()} // Prevents closing when clicking inside modal
            >
              <div className="space-y-8 my-9">
                <p className="text-center text-xl font-bold">Pricing</p>
                <p className="text-center text-xl font-bold">Product</p>
                <p className="text-center text-xl font-bold">About Us</p>
                <p className="text-center text-xl font-bold">Careers</p>
                <p className="text-center text-xl font-bold">Community</p>
              </div>
            </div>
          </div>
        )}
      </div>
      <Testimonials />
      <div className="flex flex-row justify-around p-16">
        <GetStarted />
      </div>
      <BottomBanner />
      <Footer />
    </div>
  );
}

export default App;
