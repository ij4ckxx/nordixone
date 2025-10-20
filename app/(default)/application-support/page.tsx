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
    title: "Transition",
    description:
      "Faster and smoother transition with high security coverage and easy upgrade options. Strong leadership drives end-to-end transition while ensuring continuous business improvement.",
  },
  {
    image: benefitIcon8,
    title: "24/7 Support",
    description:
      "Round-the-clock system availability backed by DevOps expertise for faster deployment and releases. Skilled teams provide 24/7 coverage, early watch reporting, technical health checks, and successful enterprise-level support.",
  },
  {
    image: benefitIcon9,
    title: "World Class Service",
    description:
      "Achieve 100% SLA compliance with proven business continuity support. Our industry experts offer flexible, reliable, and strategic support services aligned with evolving business needs.",
  },
  {
    image: benefitIcon10,
    title: "Delivery Excellence",
    description:
      "Led by experienced SMEs and tech professionals, our delivery model ensures structured communication, ITIL 4 compliance, and effective resolution of critical issues while maintaining high-quality standards.",
  },
];

const colorCards = [
  {
    description:
      "Performance Tracking - Smart reporting and analytics ensuring 100% SLA compliance and adherence.",
    image: careerIcon1,
    color: "bg-[#294184]",
  },
  {
    description:
      "Knowledge & Process - Streamlining workflows and optimizing resource allocation with structured processes.",
    image: careerIcon2,
    color: "bg-[#f2f2f2]",
  },
  {
    description:
      "Skill & Delivery - Empowering projects with the right technical and functional expertise for success.",
    image: careerIcon3,
    color: "bg-[#13afe3]",
  },
]



const page = () => {
  return (
    <div className="application-support-page w-full">
      <HomeBanner
        firstContent={
          <div className="text-[2rem] sm:text-[3rem] lg:text-[4rem] font-medium font-druk">
            <div className="flex flex-col gap-0 leading-[1]">
              <span>Application Dev-Support</span>
              <span className="text-nor-primary">TIME TO MARKET</span>
            </div>
          </div>
        }
        secondContent={
          <div className="text-[1.5rem] sm:text-[2rem] lg:text-[2.4rem] font-medium font-druk">
            <div className="flex flex-col gap-0 leading-[1]">
              <span>Cross-functional Application.</span>
              {/* <span>Infrastructure.</span>
<span>Release management.</span> */}
            </div>
          </div>
        }
        buttonName="null"
      />


      <SkyBlueCard
        cardTitle={
          <div className="text-[36px] font-druk tracking-[1.5px] font-medium text-nor-secondary">
            How Application Development Support works in{" "}
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
