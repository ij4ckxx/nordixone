"use server";

import TalkToUs from "../components/home/TalkToUs";
import BuildCareer from "../components/home/BuildCareer";
import OneClickAway from "../components/home/OneClickAway";
import HomeBanner from "../components/home/HomeBanner";

const page = () => {
  return (
    <div className="home-page w-full">
      <HomeBanner
        firstContent={
          <div className="text-[2rem] sm:text-[3rem] lg:text-[4rem] font-medium font-druk">
            Delivering Intelligence & Driving Innovation.
          </div>
        }
        secondContent={
          <div className="text-[1.5rem] sm:text-[2rem] lg:text-[2.4rem] font-medium font-druk">
            By building AI-led digital platforms
          </div>
        }
        buttonName="Contact Us"
      />
      <OneClickAway />
      <BuildCareer />
      <TalkToUs />
    </div>
  );
};

export default page;
