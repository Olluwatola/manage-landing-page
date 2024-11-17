import CompanyFeatures from "./CompanyFeatures";
import { CompanyFeaturesItem } from "./CompanyFeatures";
//import Testimonials from "./Testimonials";

const companyFeaturesArrays: CompanyFeaturesItem[] = [
  {
    index: "01",
    header: "Track company-wide progress",
    content:
      "See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again.",
  },
  {
    index: "02",
    header: "Advanced built-in reports",
    content:
      "Set internal delivery estimates and track progress toward company goals. Our customizable dashboard helps you build out the reports you need to keep key stakeholders informed.",
  },
  {
    index: "03",
    header: "Everything you need in one place",
    content:
      "Stop jumping from one service to another to communicate, store files, track tasks, and share documents. Manage offers an all-in-one team productivity solution.",
  },
  
];

const Main = () => {
  return (
    <>
      <div className="md:flex md:space-x-10 md:px-10 md:py-16">
        {/* Left section for text content */}
        <div className="md:w-1/2 text-center md:text-left px-4">
          <div className="space-y-4">
            <p className="font-bold text-2xl md:text-4xl">
              What’s different about Manage?
            </p>
            <p className="text-slate-500 text-base mt-2 leading-7 md:w-2/3">
              Manage provides all the functionality your team needs, without the
              complexity. Our software is tailor-made for modern digital product
              teams.
            </p>
          </div>
        </div>

        {/* Right section for features list */}
        <div className="md:w-1/2 md:space-y-5">
          <CompanyFeatures companyFeaturesArray={companyFeaturesArrays} />
        </div>
      </div>
     
    </>
  );
};

export default Main;
