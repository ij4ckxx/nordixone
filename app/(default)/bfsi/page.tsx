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
    title: "Compliance",
    description:
      "100% Regulatory Compliance — Achieved full compliance well ahead of the regulatory deadline, avoiding potential penalties and operational risks.",
  },
  {
    image: benefitIcon8,
    title: "Performance",
    description:
      "Enhanced Performance — Optimized transaction throughput, enabling the platform to handle higher volumes efficiently, even under local constraints.",
  },
  {
    image: benefitIcon9,
    title: "Quality",
    description:
      "Zero Defects in Production — Automated testing and pre-emptive validations ensured zero post-deployment issues, preserving system reliability and reducing operational costs.",
  },
  {
    image: benefitIcon10,
    title: "Integration",
    description:
      "By integrating a local clearing hub, automating validation processes, and leveraging platform modernization capabilities, the solution met regulatory deadlines ahead of schedule, increased transaction throughput, and maintained service reliability under stringent compliance conditions.",
  },
];


const colorCards = [
  {
    description:
      "Quicker time-to-market — Leverage digital strategies to streamline the development of innovative experiences.",
    image: careerIcon1,
    color: "bg-[#294184]",
  },
  {
    description:
      "Streamlined processes — Boost cloud platform integration with improved agility and security.",
    image: careerIcon2,
    color: "bg-[#f2f2f2]",
  },
  {
    description:
      "Data-powered strategies — Leverage data intelligence to drive sales growth and accelerate business success.",
    image: careerIcon3,
    color: "bg-[#13afe3]",
  },
  {
    description:
      "Platform Modernization — Stay ahead of the curve and improve your performance by upgrading your systems without disruption to business.",
    image: careerIcon4,
    color: "bg-[#f2f2f2]",
  },
  {
    description:
      "Assess current systems — We evaluate your existing infrastructure and pinpoint areas that need improvement. This ensures incremental delivery of outcomes with speed and scalability.",
    image: careerIcon5,
    color: "bg-[#142b46]",
  },
  {
    description:
      "Future-Ready Data Platforms — Go beyond tech upgrades with enhanced data processing, security, and compliance.",
    image: careerIcon6,
    color: "bg-[#f2f2f2]",
  },
  {
    description:
      "Adopt an incremental, agile approach — We start modernizing step-by-step to minimize disruption and maximize efficiency. This keeps your teams agile, ensuring you see results in weeks, not years.",
    image: careerIcon1,
    color: "bg-[#294184]",
  },
  {
    description:
      "Integrate a Single Source of Truth (SSOT) — Bring all your data into one trusted system. By integrating a SSOT, you eliminate silos and enable smarter, data-driven decisions across your business.",
    image: careerIcon2,
    color: "bg-[#f2f2f2]",
  },
  {
    description:
      "3 P’s for Platform Modernization — People, Process & Platform.",
    image: careerIcon3,
    color: "bg-[#13afe3]",
  },
];


const page = () => {
  return (
    <div className="bfsi-page w-full">
      <HomeBanner
        firstContent={
          <div className="text-[2rem] sm:text-[3rem] lg:text-[4rem] font-medium font-druk">
            <div className="flex flex-col gap-0 leading-[1]">
              <span>Banking & Financial Services</span>
              <span className="text-nor-primary">Modernizing Platforms</span>
            </div>
          </div>
        }
        secondContent={
          <div className="text-[1.5rem] sm:text-[2rem] lg:text-[2.4rem] font-medium font-druk">
            <div className="flex flex-col gap-0 leading-[1]">
              <span>Compliance.</span>
              {/* <span>security.</span>
<span>customer experience.</span> */}
            </div>
          </div>
        }
        buttonName="Contact Us"
      />

      <SkyBlueCard
        cardTitle={
          <div className="text-[36px] font-druk tracking-[1.5px] font-medium text-nor-secondary">
            How Banking Financial Services works in{" "}
            <span className="text-nor-primary">NORDIXONE</span> ?
          </div>
        }
        processCards={processCards}
      />

      <ColorCard
        cardTitle={
          <div className="text-[50px] font-druk tracking-[1.5px]  font-medium text-[#294184]">
            Why Choose <span className="text-nor-primary">Nordixone</span>{" "}
            for Banking Financial Services ?
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
