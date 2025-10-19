'use server';

import TalkToUs from "../components/home/TalkToUs";
import BuildCareer from "../components/home/BuildCareer";
import OneClickAway from "../components/home/OneClickAway";
import HomeBanner from "../components/home/HomeBanner";

const page = () => {
  return (
    <div className="home-page w-full">      
      <HomeBanner />
      <OneClickAway />
      <BuildCareer />
      <TalkToUs />
    </div>
  );
};

export default page;
