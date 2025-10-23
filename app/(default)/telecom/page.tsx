import HomeBanner from "@/app/components/home/HomeBanner";
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
import SkyBlueCard from "@/app/components/home/SkyBlueCard";
import ColorCard from "@/app/components/home/ColorCard";
import TalkToUs from "@/app/components/home/TalkToUs";


const processCards = [
  {
    image: benefitIcon7,
    title: "Network Automation & Management",
    description:
      "Optimize network performance and reduce downtime with intelligent automation.",
  },
  {
    image: benefitIcon8,
    title: "Cloud & Data Center Integration",
    description:
      "Seamlessly integrate cloud services with existing telecom infrastructure.",
  },
  {
    image: benefitIcon9,
    title: "Customer Experience Optimization",
    description:
      "Automate service delivery and support to enhance user satisfaction and reduce churn.",
  },
  {
    image: benefitIcon10,
    title: "Customized IT Consulting",
    description:
      "Benefit from specialized consulting on telecom digital transformation and 5G readiness.",
  },
];


const colorCards = [
  {
    description:
      "Proven Technical Expertise - Delivering robust telecom and ISP solutions with industry know-how.",
    image: careerIcon1,
    color: "bg-[#294184]",
  },
  {
    description:
      "Customer-Centric Innovation - Tailored strategies designed to match your business needs.",
    image: careerIcon2,
    color: "bg-[#f2f2f2]",
  },
  {
    description:
      "Security & Compliance First - Ensuring data protection and regulatory adherence at every step.",
    image: careerIcon3,
    color: "bg-[#13afe3]",
  },
  {
    description:
      "Data-Driven Strategies - Insights and analytics to power growth and smarter decisions.",
    image: careerIcon4,
    color: "bg-[#f2f2f2]",
  },
  {
    description:
      "Staffing Excellence - Connecting you with the right talent for sustainable business success.",
    image: careerIcon5,
    color: "bg-[#142b46]",
  },
  {
    description:
      "Flexible Staffing Solutions - Access expert talent in network engineering, project management, IT support, and more to scale efficiently without long-term overhead.",
    image: careerIcon6,
    color: "bg-[#f2f2f2]",
  },
];





const page = () => {
  return (
    <div className="telecom-page w-full">
      <HomeBanner
        firstContent={
          <div className="text-[2rem] sm:text-[3rem] lg:text-[4rem] font-medium font-druk">
            <div className="flex flex-col gap-0 leading-[1]">
              <span>Telecom & ISP</span>
              <span className="text-nor-primary">Transforming Operations</span>
            </div>
          </div>
        }
        secondContent={
          <div className="text-[1.5rem] sm:text-[2rem] lg:text-[2.4rem] font-medium font-druk">
            <div className="flex flex-col gap-0 leading-[1]">
              <span>fiber broadband.</span>
              {/* <span>Network security & digital transformation.</span>
              <span>5G deployment.</span> */}
            </div>
          </div>
        }
        buttonName="Contact Us"
      />

      <SkyBlueCard
        cardTitle={
          <div className="text-[36px] font-druk tracking-[1.5px] font-medium text-nor-secondary">
            How Telecom & ISP works in{" "}
            <span className="text-nor-primary">NORDIXONE</span> ?
          </div>
        }
        processCards={processCards}
      />   


      <ColorCard
        cardTitle={
          <div className="text-[50px] font-druk tracking-[1.5px]  font-medium text-[#294184]">
            Why Choose <span className="text-nor-primary">Nordixone</span>{" "}
            for Telecom & ISP ?
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
