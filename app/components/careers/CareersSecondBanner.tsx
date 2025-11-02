import React from "react";
import AnimatedButton from "../form-comp/AnimatedButton";

interface CareersBannerProps {
  onViewRoles?: () => void;
}

const CareersSecondBanner = ({ onViewRoles }: CareersBannerProps) => {
  return (
    <div className="career-second-page-banner flex justify-center items-center min-h-[calc(100dvh-100px)] text-white text-center px-6 sm:px-12 py-20">
      <div className="w-full max-w-5xl">
        <h1 className="font-druk text-3xl sm:text-5xl lg:text-6xl font-medium leading-tight mb-4">
          GUIDING AND GUARDIANS <br /> OF OUR PEOPLE
        </h1>
        <p className="font-druk text-lg sm:text-2xl lg:text-3xl font-light mb-8">
          An assembly of creative minds and daring dream architects,<br/> united to
          reimagine the craftsmanship of software engineering.
        </p>

        {/* {onViewRoles && (
          <AnimatedButton onClick={onViewRoles} className="w-fit mx-auto">
            View Open Roles
          </AnimatedButton>
        )} */}
      </div>
    </div>
  );
};

export default CareersSecondBanner;
