import Image from "next/image";
import React from "react";
import BuildCareerImage from "@/public/get-started/build-career.png";
import Link from "next/link";

const BuildCareer = () => {
  return (
    <div className="md:p-[120px_72px] p-[100px_20px] sm:[100px_40px] bg-white">
      <div className="relative mb-[100px]">
        <div className="relative  z-[9] bg-nor-primary rounded-[12px] p-[30px] max-w-[90%] ml-auto flex flex-col lg:flex-row items-stretch gap-6">
          <div className="basis-2/3 text-nor-secondary flex flex-col gap-1 justify-between">
            <div className="text-base font-medium">LIFE AT NORDIXONE</div>
            <div className="w-full mb-5">
              <div className="flex flex-col uppercase md:text-[50px] sm:text-[40px] text-[30px] lg:text-[60px] font-semibold font-druk">
                <div>Build your career</div>
                <div>with us</div>
              </div>
              <Link href={'/careers'} className="cursor-pointer p-[5px_12px] rounded-[30px] text-sm w-fit text-center bg-[#142b46] text-white border border-transparent hover:border-[#142b46] hover:bg-transparent hover:text-[#142b46] duration-300 ease-in-out transition-colors">
                Get Started
              </Link>
            </div>
          </div>
          <div className="basis-1/3  align-middle aspect-[377/350]">
            <Image
              className="h-full w-full"
              width={377}
              height={350}
              alt="Build career"
              src={BuildCareerImage}
            />
          </div>
        </div>
        <div className="bg-[rgb(175,214,232)] right-[17px] lg:right-[50px] top-[30px] z-[8] absolute rounded-[12px] w-[90%] p-[30px] h-[100%]"></div>
        <div className="bg-[rgb(226,239,244)] right-[34px] lg:right-[100px] top-[60px] z-[7] absolute rounded-[12px] w-[90%] p-[30px] h-[100%]"></div>
      </div>
    </div>
  );
};

export default BuildCareer;
