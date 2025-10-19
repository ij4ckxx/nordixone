import Link from "next/link";
import React from "react";
import AnimatedButton from "../components/form-comp/AnimatedButton";
import Image from "next/image";
import BuildCareerImage from "@/public/get-started/build-career.png";
import { ChevronRight, MoveRight } from "lucide-react";

const page = () => {
  return (
    <div className="home-page">
      <div className="flex justify-center items-center home-page-banner min-h-[calc(100dvh-100px)]">
        {/*  first component  */}
        <div className="w-full sm:w-[80%] md:w-[80%] lg:w-[70%] xl:w-[80%] pt-[3rem] px-[1rem] flex flex-col text-center gap-2 text-white uppercase">
          <div className="text-[2rem] sm:text-[3rem] lg:text-[4rem] font-medium font-druk">
            Delivering Intelligence & Driving Innovation.
          </div>
          <div className="text-[1.5rem] sm:text-[2rem] lg:text-[2.4rem] font-medium font-druk">
            By building AI-led digital platforms
          </div>
          <div className="mt-5">
            <AnimatedButton className="w-fit">Contact Us</AnimatedButton>
          </div>
        </div>
      </div>

      {/* One click away start */}
      <div className="bg-nor-secondary md:p-[120px_72px] p-[100px_20px] sm:[100px_40px] flex flex-col gap-5">
        <div className="basis-full sm:basis-[60%] flex flex-col gap-1 w-fit text-white uppercase">
          <div className="text-[14px] ">WHAT WE CAN DO FOR YOU</div>
          <div className="sm:text-[38px] text-[30px] md:text-[48px] font-druk font-medium tracking-[2px]">
            Driven by Passion.
          </div>
        </div>
        <div className="sm:basis-[40%] basis-full self-end w-fit p-[30px] bg-[#afd6e8] text-nor-secondary font-semibold flex justify-start items-center rounded-[10px]">
          <div className="sm:max-w-[90%] max-w-full w-full md:max-w-[70%] text-[26px] sm:text-[36px]">
            One click away to Start!
          </div>
        </div>
      </div>

      {/* Build career  */}
      <div className="md:p-[120px_72px] p-[100px_20px] sm:[100px_40px] bg-white">
        <div className="relative mb-[100px]">
          <div className="relative  z-[9] bg-nor-primary rounded-[12px] p-[30px] max-w-[90%] ml-auto flex flex-col lg:flex-row items-stretch gap-6">
            <div className="basis-2/3 text-nor-secondary flex flex-col gap-1 justify-between">
              <div className="text-base font-medium">LIFE AT NORDIXONE</div>
              <div className="w-full mb-5">
                <div className="flex flex-col uppercase text-[60px] font-semibold font-druk">
                  <div>Build your career</div>
                  <div>with us</div>
                </div>
                <button className="p-[5px_12px] text-sm w-fit text-center bg-[#142b46] text-white border border-transparent hover:border-[#142b46] hover:bg-transparent hover:text-[#142b46] duration-300 ease-in-out transition-colors">
                  Get Started
                </button>
              </div>
            </div>
            <div className="basis-1/3  align-middle">
              <Image
                className="max-h-[350px] w-full"
                width={377}
                height={350}
                alt="Build career"
                src={BuildCareerImage}
              />
            </div>
          </div>
          <div className="bg-[rgb(175,214,232)] right-[50px] top-[30px] z-[8] absolute rounded-[12px] w-[90%] p-[30px] h-[100%]"></div>
          <div className="bg-[rgb(226,239,244)] right-[100px] top-[60px] z-[7] absolute rounded-[12px] w-[90%] p-[30px] h-[100%]"></div>
        </div>
      </div>

      {/* talk to us */}
      <div className="bg-[#e2eff4] md:p-[120px_72px] p-[100px_20px] sm:[100px_40px]">
        <div className="flex flex-col items-center">
          <div className="text-[64px] uppercase font-druk tracking-[2px] leading-tight">
            Got a question?
          </div>
          <div className="group cursor-pointer uppercase font-druk tracking-[2px] text-[64px] text-nor-primary flex flex-row gap-0.5 items-center leading-tight">
            <div>Talk to us</div>
            <MoveRight className="group-hover:rotate-0 transition-all duration-300 ease-in-out size-[50px] stroke-3 -rotate-45 " />
          </div>
          <Link
            className="text-base mt-2 text-nor-secondary font-medium hover:text-nor-primary duration-300 ease-in-out transition-colors cursor-pointer"
            href="mailto:hello@nordixone.com"
          >
            hello@nordixone.com
          </Link>
        </div>
      </div>
    </div>
  );
};

export default page;
