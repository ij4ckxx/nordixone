import React from "react";
import AnimatedButton from "../form-comp/AnimatedButton";
import RadixDialog from "../radix-ui/RadixDialog";
import GetStarted from "../get-started/GetStarted";

const AboutExplore = () => {
  return (
    <div className="flex justify-center items-center about-page-explore min-h-[calc(100dvh-100px)]">
      {/*  first component  */}
      <div className="w-full sm:w-[80%] md:w-[80%] lg:w-[70%] xl:w-[80%] pt-[3rem] px-[1rem] flex flex-col text-center gap-2 text-white uppercase">
        <div className="text-[2rem] sm:text-[3rem] lg:text-[4rem] font-medium font-druk">
          BUILD YOUR CAREER WITH US
        </div>
        {/* <div className="text-[1.5rem] sm:text-[2rem] lg:text-[2.4rem] font-medium font-druk">
          We believe in building with intent, scaling with integrity, and leading with empathy.
        </div> */}
        <RadixDialog
          trigger={
            <div className="mt-5">
              <AnimatedButton className="w-fit">Explore</AnimatedButton>
            </div>
          }
          children={<GetStarted />}
        />
      </div>
    </div>
  );
};

export default AboutExplore;
