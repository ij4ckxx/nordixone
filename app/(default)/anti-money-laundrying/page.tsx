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
import HomeBanner from "@/app/components/home/HomeBanner";
import SkyBlueCard from "@/app/components/home/SkyBlueCard";

const processCards = [
  {
    image: benefitIcon7,
    title: "Fully End-to-End",
    description:
      "Encompasses data integration, data quality, entity resolution, automated monitoring, AI/machine learning, investigation management, and reporting — all on one unified platform to address your entire compliance life cycle needs.",
  },
  {
    image: benefitIcon8,
    title: "A Modern, Nimble Platform",
    description:
      "Accelerates the analytics life cycle through an innovative, cloud-native architecture that enables faster deployment cycles, access to advanced features, and frictionless scalability.",
  },
  {
    image: benefitIcon9,
    title: "No-Code / Low-Code Interface",
    description:
      "Offers a simple point-and-click visual interface for optimizing AML strategies and deploying SAS machine learning capabilities with ease.",
  },
  {
    image: benefitIcon10,
    title: "Transparency & Explainability",
    description:
      "Provides visibility into the decisions made by AI/ML models, helping AML teams understand why activities were flagged and enabling clear explanations to auditors, governance staff, and regulatory examiners.",
  },
];


const colorCards = [
  {
    description:
      "Automate manual investigative processes and improve regulatory report conversion rates three to five times beyond conventional rule-based methods with an AML compliance solution deployed across hundreds of financial institutions.",
    image: careerIcon1,
    color: "bg-[#294184]",
  },
  {
    description:
      "Take a multidimensional approach to identifying complex threats such as virtual currencies, human trafficking, trade-based money laundering, and drug trafficking. Combine out-of-the-box scenarios with industry data to uncover unknown relationships through network analytics.",
    image: careerIcon2,
    color: "bg-[#f2f2f2]",
  },
  {
    description:
      "An integrated CDD/EDD capability monitors demographic and behavioral changes that affect client risk ratings. Dynamic checklists ensure consistent KYC capture, while network analytics visualize hidden relationships and risks for identifying beneficial owners.",
    image: careerIcon3,
    color: "bg-[#13afe3]",
  },
  {
    description:
      "With low-code/no-code system administration, institutions can tailor the system to business needs without technical consultants. A drag-and-drop interface enables easy configuration of workflows, screens, and reports.",
    image: careerIcon4,
    color: "bg-[#f2f2f2]",
  },
  {
    description:
      "Summarize suspicious activity efficiently by aggregating scenario-fired events at a customer or counterparty level. Real-time network analysis deduplicates records, closes intelligence gaps, and uncovers hidden relationships instantly.",
    image: careerIcon5,
    color: "bg-[#142b46]",
  },
  {
    description:
      "Address complex financial crimes with an end-to-end AML solution that monitors the full customer life cycle. Includes transaction monitoring, due diligence, watchlist screening, and regulatory reporting on one unified platform.",
    image: careerIcon6,
    color: "bg-[#f2f2f2]",
  },
];


const page = () => {
  return (
    <div className="anti-money-laundrying-page w-full">
      <HomeBanner
        firstContent={
          <div className="text-[2rem] sm:text-[3rem] lg:text-[4rem] font-medium font-druk">
            <div className="flex flex-col gap-0 leading-[1]">
              <span>Anti Money Laundering</span>
              <span className="text-nor-primary">
                Addresses Financial Crimes
              </span>
            </div>
          </div>
        }
        secondContent={
          <div className="text-[1.5rem] sm:text-[2rem] lg:text-[2.4rem] font-medium font-druk">
            <div className="flex flex-col gap-0 leading-[1]">
              <span>Transparency.</span>
              {/* <span>Low Code Interface.</span>
               */}
            </div>
          </div>
        }
        buttonName="Contact Us"
      />


      <SkyBlueCard
        cardTitle={
          <div className="text-[36px] font-druk tracking-[1.5px] font-medium text-nor-secondary">
            How Anti Money Laundering works in{" "}
            <span className="text-nor-primary">NORDIXONE</span> ?
          </div>
        }
        processCards={processCards}
      />

      <ColorCard
        cardTitle={
          <div className="text-[50px] font-druk tracking-[1.5px]  font-medium text-[#294184]">
            Why Choose <span className="text-nor-primary">Nordixone</span>{" "}
            for Anti-Money-Laundering ?
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
