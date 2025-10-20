import React from "react";
import AnimatedButton from "../form-comp/AnimatedButton";
import RadixDialog from "../radix-ui/RadixDialog";
import GetStarted from "../get-started/GetStarted";
import Careers from "./Careers";

const CareersBanner = () => {
  return (
    <div className="flex justify-center items-center career-page-banner primary-heading-hero-font min-h-[calc(100dvh-100px)]">
      {/*  first component  */}
      <div className="w-full sm:w-[80%] md:w-[80%] lg:w-[70%] xl:w-[80%] pt-[3rem] px-[1rem] flex flex-col text-center gap-2 text-white uppercase">
        <div className="text-[2rem] sm:text-[3rem] lg:text-[4rem] font-medium font-druk">
          CAREERS AT NORDIXONE
        </div>
        <div className="text-[1.5rem] sm:text-[2rem] lg:text-[2.4rem] font-small font-druk">
         An assembly of creative minds and daring dream
                          architects, united to reimagine the craftsmanship of
                          software engineering.
                        
        </div>
        <RadixDialog
          trigger={
            <div className="mt-5">
              <AnimatedButton className="w-fit">View Open Roles</AnimatedButton>
            </div>
          }
          children={<Careers />}
        />
      </div>
    </div>
  );
};

export default CareersBanner;
