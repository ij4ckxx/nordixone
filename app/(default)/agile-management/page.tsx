
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
    title: "Agile Practices",
    description:
      "In today’s dynamic business environment, agility has become a strategic necessity. Agile software development services transform project management and software development by emphasizing flexibility, collaboration, and continuous improvement.",
  },
  {
    image: benefitIcon8,
    title: "Our Expertise",
    description:
      "Success hinges on proactive responses to customer demands and rapid market responsiveness. Our agile development approach to enhancing business agility begins with customer-centric leadership training, shift to product-centric mindset, and fostering a startup culture with self-service DevSecOps engineering agility.",
  },
  {
    image: benefitIcon9,
    title: "Our Approach (Outcomes)",
    description:
      "Empowering Customer-Centric Leadership — Considering your business needs, existing processes, and service landscape, NordixOne develops a customized list of SRE components tailored to your environment and maturity level for seamless transition to SRE practices.",
  },
  {
    image: benefitIcon10,
    title: "Our Strategy (Implementation)",
    description:
      "Detailed Current State Assessment. Summarizing Findings. Defining Target State Maturity. Creating Vision, Strategy, and Roadmap. Implementation. Hands-Off.",
  },
];

const colorCards = [
  {
    description:
      "Customer Centricity - Placing customers at the core of product delivery.",
    image: careerIcon1,
    color: "bg-[#294184]",
  },
  {
    description:
      "Lean Portfolio Management - Optimizing resource allocation with dynamic models.",
    image: careerIcon2,
    color: "bg-[#f2f2f2]",
  },
  {
    description:
      "Organizational Design - Aligning teams around value-streams for product-centricity.",
    image: careerIcon3,
    color: "bg-[#13afe3]",
  },
  {
    description:
      "Agile Ways Of Working - Fostering role agility, metrics frameworks, and scalability.",
    image: careerIcon4,
    color: "bg-[#f2f2f2]",
  },
  {
    description:
      "Leadership Agility - Developing growth mindsets and empowering servant leadership.",
    image: careerIcon5,
    color: "bg-[#142b46]",
  },
  {
    description:
      "Technology Agility - Implementing DevOps practices, cloud migration, and modular architectures.",
    image: careerIcon6,
    color: "bg-[#f2f2f2]",
  },
  {
    description:
      "Custom Solutions - We work with you to create strategies aligned with your unique business needs and goals.",
    image: careerIcon1,
    color: "bg-[#294184]",
  },
  {
    description:
      "Data-Driven Strategies - With a data-driven approach for your business, we enable smarter decision-making and greater efficiency.",
    image: careerIcon2,
    color: "bg-[#f2f2f2]",
  },
  {
    description:
      "Expert-Led Collaboration - We deliver solutions driven by real-world insights and continuous client feedback.",
    image: careerIcon3,
    color: "bg-[#13afe3]",
  },
];

const page = () => {
  return (
    <div className="agile-management-page w-full">
      <HomeBanner
        firstContent={
          <div className="text-[2rem] sm:text-[3rem] lg:text-[4rem] font-medium font-druk">
            <div className="flex flex-col gap-0 leading-[1]">
              <span>Agile Project Management</span>
              <span className="text-nor-primary">INSPECT & ADAPT</span>
            </div>
          </div>
        }
        secondContent={
          <div className="text-[1.5rem] sm:text-[2rem] lg:text-[2.4rem] font-medium font-druk">
            <div className="flex flex-col gap-0 leading-[1]">
              <span>Come Together.</span>
              {/* <span>Work Together.</span>
            <span>Win Together.</span> */}
            </div>
          </div>
        }
        buttonName="Contact Us"
      />

      <SkyBlueCard
        cardTitle={
          <div className="text-[36px] font-druk tracking-[1.5px] font-medium text-nor-secondary">
            How Agile management works in{" "}
            <span className="text-nor-primary">NORDIXONE</span> ?
          </div>
        }
        processCards={processCards}
      />

      <ColorCard
        cardTitle={
          <div className="text-[50px] font-druk tracking-[1.5px]  font-medium text-[#294184]">
            Partnering with <span className="text-nor-primary">Nordixone</span>{" "}
            for Agile provides you with several key advantages:
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
