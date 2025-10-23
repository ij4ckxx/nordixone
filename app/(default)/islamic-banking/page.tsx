import React from 'react'

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
    title: "Open Banking",
    description:
      "Open Banking has drawn renewed attention to APIs as a way of delivering substantial benefits to consumers — enabling financial product aggregation, spending insights, savings recommendations, and automated decision-making.",
  },
  {
    image: benefitIcon8,
    title: "Cloud First",
    description:
      "Cloud banking enables high business agility and greater access to innovation without compromising on security — all within a lean, reduced-cost operating model.",
  },
  {
    image: benefitIcon9,
    title: "Platform for Innovation",
    description:
      "Innovating and experimenting at scale is challenging, but essential in today’s banking landscape. NordixOne provides a platform that helps banks rapidly create and commercialize new business models.",
  },
  {
    image: benefitIcon10,
    title: "Services",
    description:
      "NordixOne Services offer guidance through every phase of a bank’s lifecycle — from launching new banks to transforming established institutions with complex legacy systems.",
  },
];


const colorCards = [
  {
    description:
      "Asset-based business model – Comprehensive coverage across all major areas with deep banking functionality.",
    image: careerIcon1,
    color: "bg-[#294184]",
  },
  {
    description:
      "Making the complex, simple – Ensure compliance with Sharia principles while reducing operating costs and increasing automation.",
    image: careerIcon2,
    color: "bg-[#f2f2f2]",
  },
  {
    description:
      "Two models, single instance – Supports both Islamic and conventional banking operations on a single system.",
    image: careerIcon3,
    color: "bg-[#13afe3]",
  },
  {
    description:
      "Deployment options – Supports both on-prem and cloud deployment, giving you the flexibility to choose what fits best.",
    image: careerIcon4,
    color: "bg-[#f2f2f2]",
  },
  {
    description:
      "Rip and replace – A full-scale transformation approach to increase enterprise agility, reduce costs, and unlock new opportunities.",
    image: careerIcon5,
    color: "bg-[#142b46]",
  },
  {
    description:
      "Symbiosis – An alternative transformation approach that delivers benefits faster while minimizing cost and risk.",
    image: careerIcon6,
    color: "bg-[#f2f2f2]",
  },
  {
    description:
      "Treasury for Islamic banking – Comprehensive front-to-back treasury coverage for Islamic money market contracts and capital market products.",
    image: careerIcon1,
    color: "bg-[#294184]",
  },
  {
    description:
      "Islamic portfolio manager – A robust investment management platform designed for Shari’ah-compliant investments.",
    image: careerIcon2,
    color: "bg-[#f2f2f2]",
  },
  {
    description:
      "Islamic profit distribution – Enables creation of Islamic deposit pools, linking to funding sources to calculate and distribute profits efficiently.",
    image: careerIcon3,
    color: "bg-[#13afe3]",
  },
];


const page = () => {
  return (
    <div className='islamic-banking-page'>
      <HomeBanner
        firstContent={
          <div className="text-[2rem] sm:text-[3rem] lg:text-[4rem] font-medium font-druk">
            <div className="flex flex-col gap-0 leading-[1]">
              <span>
                          Islamic Banking
                        </span>
              <span className="text-nor-primary">
                          Reimagine Islamic Finance
                        </span>
            </div>
          </div>
        }
        secondContent={
          <div className="text-[1.5rem] sm:text-[2rem] lg:text-[2.4rem] font-medium font-druk">
            <div className="flex flex-col gap-0 leading-[1]">
              <span>Deliver Customer Delight.</span>
             
            </div>
          </div>
        }
        buttonName="Contact Us"
      />


      <SkyBlueCard
        cardTitle={
          <div className="text-[36px] font-druk tracking-[1.5px] font-medium text-nor-secondary">
            How Islamic Banking works in{" "}
            <span className="text-nor-primary">NORDIXONE</span> ?
          </div>
        }
        processCards={processCards}
      />


      <ColorCard
        cardTitle={
          <div className="text-[50px] font-druk tracking-[1.5px]  font-medium text-[#294184]">
            Why Choose <span className="text-nor-primary">Nordixone</span>{" "}
            for Islamic Banking ?
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
  )
}

export default page
