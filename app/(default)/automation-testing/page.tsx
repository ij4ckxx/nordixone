import HomeBanner from "@/app/components/home/HomeBanner";
import SkyBlueCard from "@/app/components/home/SkyBlueCard";
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
import ColorCard from "@/app/components/home/ColorCard";
import TalkToUs from "@/app/components/home/TalkToUs";

const processCards = [
  {
    image: benefitIcon7,
    title: "Quality",
    description:
      "The demand for faster and improved delivery and engineering capabilities is fast rising. Traditional quality governance and delayed testing cycles can be detrimental to digital engineering success in a dynamic business environment. NordiXOne provides a holistic approach to understanding your business objectives, conducting in-depth views of your current processes, and crafting scalable strategies and software quality engineering solutions tailored to your unique needs.",
  },
  {
    image: benefitIcon8,
    title: "Our Expertise",
    description:
      "Smarter testing & better outcomes — An increasingly complex market environment demands a no-compromise standard when it comes to quality. NordiXOne offers advanced Quality Engineering (QE) solutions, a proven pathway to enhance efficiency, resilience, and overall performance of your digital ecosystem. By integrating advanced AI, Machine Learning, and Generative AI (GenAI) technologies, we elevate your quality standards to new heights.",
  },
  {
    image: benefitIcon9,
    title: "Our Approach (Outcomes)",
    description:
      "At NordixOne, our Quality Engineering (QE) approach seamlessly integrates into your development lifecycle, ensuring quality from the outset. Continuous Testing via DevOps enables real-time analytics and quality dashboards, while Layer-Wise Validation ensures comprehensive testing across multiple levels for robust and reliable outcomes.",
  },
  {
    image: benefitIcon10,
    title: "Our Strategy (Implementation)",
    description:
      "Our quality engineering expertise ensures faster, more efficient, and reliable software testing solutions. Shift Left — incorporating quality measures early in development to identify and address issues sooner. Tailored Solutions — customizing QE strategies to align with your specific requirements and business goals for optimal results.",
  },
];

const colorCards = [
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
  {
    description:
      "QE Practitioners’ Approach - Leveraging the technical expertise and practical experience of our skilled QE practitioners to ensure rigorous and effective practices.",
    image: careerIcon4,
    color: "bg-[#f2f2f2]",
  },
  {
    description:
      "Reduced Time-to-Market - Accelerate development with early issue detection and resolution.",
    image: careerIcon5,
    color: "bg-[#142b46]",
  },
  {
    description:
      "Cost Savings - Lower overall project costs by identifying and fixing problems early.",
    image: careerIcon6,
    color: "bg-[#f2f2f2]",
  },
  {
    description:
      "Enhanced Quality - Ensure high standards with comprehensive validation across all components.",
    image: careerIcon1,
    color: "bg-[#294184]",
  },
  {
    description:
      "Increased Reliability - Achieve reliability and resilience through robust practices and domain expertise.",
    image: careerIcon2,
    color: "bg-[#f2f2f2]",
  },
  {
    description:
      "Quality Goals with Agility - Implement Agile testing frameworks for early and frequent testing.",
    image: careerIcon3,
    color: "bg-[#13afe3]",
  },
];

const page = () => {
  return (
    <div className="automation-testing-page w-full">
      <HomeBanner
        firstContent={
          <div className="text-[2rem] sm:text-[3rem] lg:text-[4rem] font-medium font-druk">
            <div className="flex flex-col gap-0 leading-[1]">
              <span>Quality Engineering</span>
              <span className="text-nor-primary">
                Smarter testing & outcomes
              </span>
            </div>
          </div>
        }
        secondContent={
          <div className="text-[1.5rem] sm:text-[2rem] lg:text-[2.4rem] font-medium font-druk">
            <div className="flex flex-col gap-0 leading-[1]">
              <span>Faster.</span>
              {/* <span>Efficient.</span>
            <span>Reliable.</span> */}
            </div>
          </div>
        }
        buttonName="null"
      />

      <SkyBlueCard
        // How Quality Engineering works in NORDIXONE ?
        cardTitle={
          <div className="text-[36px] font-druk tracking-[1.5px] font-medium text-nor-secondary">
            How Quality Engineering works in{" "}
            <span className="text-nor-primary">NORDIXONE</span> ?
          </div>
        }
        processCards={processCards}
      />

      <ColorCard
        cardTitle={
          <div className="text-[50px] font-druk tracking-[1.5px]  font-medium text-[#294184]">
            Why Choose <span className="text-nor-primary">Nordixone</span> for
            Automation Testing ?
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
