import GetStarted from "../buttons/GetStarted";

const BottomBanner = () => {
  return (
    <div className=" bg-primary-brightRed">
      <div className="max-w-screen-xl mx-auto ">
        <div className="text-center px-14 text-white space-y-8 py-24 md:grid md:grid-cols-2 md:gap-8 md:text-left ">
          {/* Left grid: Paragraph */}
          <div className="flex items-center justify-start">
            <p className="font-bold text-4xl ">
              Simplify how your team works today.
            </p>
          </div>

          {/* Right grid: GetStarted button */}
          <div className="flex justify-around md:justify-end">
            <GetStarted variant={"white-plain"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomBanner;
