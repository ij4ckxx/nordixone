import React from "react";

import benefitIcon7 from "@/public/skyblue-images/benifit-icon7.png";
import benefitIcon8 from "@/public/skyblue-images/benifit-icon8.png";
import benefitIcon9 from "@/public/skyblue-images/benifit-icon9.png";
import benefitIcon10 from "@/public/skyblue-images/benifit-icon10.png";

import careerIcon1 from "@/public/colorgrid-images/career-icon1.png";
import careerIcon2 from "@/public/colorgrid-images/career-icon2.png";
import careerIcon3 from "@/public/colorgrid-images/career-icon3.png";
import careerIcon4 from "@/public/colorgrid-images/career-icon4.png";
import careerIcon5 from "@/public/colorgrid-images/career-icon5.png";
import careerIcon6 from "@/public/colorgrid-images/career-icon6.png";

import HomeBanner from "@/app/components/home/HomeBanner";
import SkyBlueCard from "@/app/components/home/SkyBlueCard";
import ColorCard from "@/app/components/home/ColorCard";
import TalkToUs from "@/app/components/home/TalkToUs";

const processCards = [
  {
    image: benefitIcon7,
    title: "Payments Hubs",
    description:
      "Deliver modern payments with peace of mind. Accelerate your payments modernization journey with modular, scalable, and resilient payment hub solutions to enable mission-critical operations.",
  },
  {
    image: benefitIcon8,
    title: "Payments as a Service",
    description:
      "Enable modern payments through cloud technology with ease. Reduce operational complexity and costs through continuous modernization with our Payments as a Service solutions.",
  },
  {
    image: benefitIcon9,
    title: "Financial Messaging",
    description:
      "An ecosystem of carefully curated Financial Messaging solutions. Finastra Financial Messaging covers all your messaging, market infrastructure connectivity, and payments operations needs.",
  },
  {
    image: benefitIcon10,
    title: "Advantage",
    description:
      "Advantage is a transaction screening and monitoring solution based on real-time anti-money laundering data. It helps financial institutions screen, detect, and mitigate anti-money laundering risk.",
  },
];


const colorCards = [
  {
    description:
      "Global coverage of market infrastructures – Payments and financial messages delivered on-time, safely, and securely worldwide.",
    image: careerIcon1,
    color: "bg-[#294184]",
  },
  {
    description:
      "True multi-entity hub solution – All payments and financial messages managed and controlled centrally to boost operational efficiency and STP rates.",
    image: careerIcon2,
    color: "bg-[#f2f2f2]",
  },
  {
    description:
      "Adaptable through configuration, not customization – No more expensive and risky customizations with agility through self-service business rules.",
    image: careerIcon3,
    color: "bg-[#13afe3]",
  },
  {
    description:
      "Multiple deployment options – Run the solution as you want: customer or Finastra-managed cloud, SaaS, or on-premise.",
    image: careerIcon4,
    color: "bg-[#f2f2f2]",
  },
  {
    description:
      "Modern architecture – Our payments and financial messaging solutions are built on our Global Payments Framework (GPF), enabling financial institutions to improve operational efficiency and drive future innovations.",
    image: careerIcon5,
    color: "bg-[#142b46]",
  },
  {
    description:
      "Drive innovation and deliver increased business value at pace, with faster Time to Revenue.",
    image: careerIcon6,
    color: "bg-[#f2f2f2]",
  },
];


const page = () => {
  return (
    <div className="payments-page w-full">
      <HomeBanner
        firstContent={
          <div className="text-[2rem] sm:text-[3rem] lg:text-[4rem] font-medium font-druk">
            <div className="flex flex-col gap-0 leading-[1]">
              <span>Payments</span>
              <span className="text-nor-primary">With Peace Of Mind</span>
            </div>
          </div>
        }
        secondContent={
          <div className="text-[1.5rem] sm:text-[2rem] lg:text-[2.4rem] font-medium font-druk">
            <div className="flex flex-col gap-0 leading-[1]">
              <span>Transforming payments.</span>
              {/* <span>financial messaging.</span> */}
            </div>
          </div>
        }
        buttonName="Contact Us"
      />


      <SkyBlueCard
        cardTitle={
          <div className="text-[36px] font-druk tracking-[1.5px] font-medium text-nor-secondary">
            How Payments works in{" "}
            <span className="text-nor-primary">NORDIXONE</span> ?
          </div>
        }
        processCards={processCards}
      />

      <ColorCard
        cardTitle={
          <div className="text-[50px] font-druk tracking-[1.5px]  font-medium text-[#294184]">
            Why Choose <span className="text-nor-primary">Nordixone</span>{" "}
            for Payments ?
          </div>
        }
        colorCards={colorCards}
      />

      <TalkToUs
        firstContent={
          <div className="sm:text-[54px] text-[44px] lg:text-[64px] uppercase font-druk tracking-[2px] leading-[1] text-center mb-6 sm:mb-10">
            Partner with <span className="text-nor-primary">Nordixone</span> -
            Got a question?
          </div>
        }
      />
    </div>
  );
};

export default page;
