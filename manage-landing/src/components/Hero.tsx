import GetStarted from "../buttons/GetStarted";

const Hero = () => {
  return (
    <div className="p-4 md:py-20">
      {/* Main container with responsive flex layout */}
      <div className="flex flex-col md:flex-row-reverse  md:items-center md:justify-between md:space-x-1 md:px-10">
        {/* Image container - grows as needed */}
        <div className="flex justify-center  md:w-1/2 mt-8 md:mt-0">
          <img
            src="/illustration-intro.svg"
            alt="Intro illustration"
            className="w-full h-auto max-w-lg" // Makes image grow to fit container with a max width
          />
        </div>
        {/* Text content - full width on small screens, half width on medium and larger */}
        <div className="flex flex-col space-y-4 md:w-1/2 md:items-start text-center md:text-left md:space-y-8">
          <p className="font-bold text-4xl md:text-5xl">
            Bring everyone together to build better products.
          </p>
          <p className="text-slate-500 text-base leading-7 mt-2 md:w-2/3">
            Manage makes it simple for software teams to plan day-to-day tasks
            while keeping the larger team goals in view.
          </p>
          <div className="pb-9">
            <GetStarted />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
