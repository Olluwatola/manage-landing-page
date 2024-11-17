import React from "react";

interface ButtonProps {
  variant?: "white-plain";
  label?: string;
  noShadow?: boolean;
}

const GetStarted: React.FC<ButtonProps> = ({
  variant,
  label,
  noShadow,
}) => {
  return (
    <button
      className={` h-fit  relative rounded-full px-6 py-3 
        ${
          variant === "white-plain"
            ? "bg-white text-primary-brightRed shadow-none"
            : "bg-primary-brightRed text-white shadow-[0px_10px_10px_rgba(255,0,0,0.25)]"
        }${noShadow ? "shadow-none" : ""}`}
    >
      {label || "Get started"}
    </button>
  );
};

export default GetStarted;
