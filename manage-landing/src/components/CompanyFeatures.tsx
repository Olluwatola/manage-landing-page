import React from "react";

export interface CompanyFeaturesItem {
  index: string;
  header: string;
  content: string;
}

interface FeatureProps {
  companyFeaturesArray: CompanyFeaturesItem[];
}

const CompanyFeatures: React.FC<FeatureProps> = ({ companyFeaturesArray }) => {
  return companyFeaturesArray.map((feature) => (
    <div className="w-full space-y-5 md:space-y-3 my-5 md:my-0" key={feature.index}>
      <div className="grid grid-cols-5 items-center rounded-l-full bg-neutral-veryPaleRed md:bg-transparent -mr-4">
        {/* First component taking 1/5 of the div */}
        <div className="col-span-1 flex justify-center items-center rounded-full h-fit bg-primary-brightRed p-4 font-bold text-gray-100">
          {/* Centered index number */}
          <p>{feature.index}</p>
        </div>

        {/* Second component taking 4/5 of the div */}
        <div className="col-span-4 flex items-center mr-4 p-4 font-bold">
          {/* Header content */}
          <p>{feature.header}</p>
        </div>
      </div>

      {/* Content section */}
      <div className="md:grid md:grid-cols-5">
        <div className="md:col-span-1"></div>
        <div className="md:col-span-4 md:px-4 text-left text-slate-400 leading-7">
          {feature.content}
        </div>
      </div>
    </div>
  ));
};

export default CompanyFeatures;
