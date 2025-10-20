import React from "react";
import HomeBanner from "../home/HomeBanner";
import TalkToUs from "../home/TalkToUs";
import { MoveRight } from "lucide-react";
import GradientGrid from "../home/GradientGrid";
import ColorCard from "../home/ColorCard";

import appProtoType from "@/public/gradient-images/app-prototype.png";
import mobileDevelopment from "@/public/gradient-images/mobile-development.png";
import webDevelopment from "@/public/gradient-images/web-development.png";
import qualityChecking from "@/public/gradient-images/quality-checking.png";
import designService from "@/public/gradient-images/design-service.png";
import techConsulting from "@/public/gradient-images/tech-consulting.png";
import SkyBlueCard from "../home/SkyBlueCard";

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




const processCards = [
  {
    image:benefitIcon7,
    title: "Consult & Assess",
    description:
      "Understand your project requirements, technical needs, and team dynamics.",
  },
  {
    image: benefitIcon8,
    title: "Talent Match",
    description:
      "Resources matched based on skills, experience, and culture fit.",
  },
  {
    image: benefitIcon9,
    title: "Onboarding & Integration",
    description:
      "Smooth transition as our resources integrate with your workflows.",
  },
  {
    image: benefitIcon10,
    title: "Ongoing Support",
    description:
      "Continuous feedback, performance tracking, and proactive adjustments.",
  },
];

const productIdeas = [
  {
    icon: appProtoType,
    alt: "APP PROTOTYPING & STRATEGY icon",
    title: "Generative AI Solutions",
    content:
      "Automate complex tasks with intelligent AI agents. Empower your teams with purpose-built AI assistants that boost productivity and decision-making.",
  },
  {
    icon: mobileDevelopment,
    alt: "MOBILE APP DEVELOPMENT icon",
    title: "AI-Enabled Product Development",
    content:
      "Engineer smart, scalable products with AI-first thinking — from personalized experiences to predictive features and intelligent workflows.",
  },
  {
    icon: webDevelopment,
    alt: "FULL STACK DEVELOPMENT icon",
    title: "Custom Web App Development",
    content:
      "Architect and develop robust web platforms that scale with your growth and delight users at every interaction.",
  },
  {
    icon: qualityChecking,
    alt: "QUALITY ASSURANCE & TESTING icon",
    title: "Custom Mobile App Development",
    content:
      "Navigate complexity with confidence. We align your vision with scalable architecture, cloud-native strategy, and full-stack guidance.",
  },
  {
    icon: designService,
    alt: "DESIGN SERVICES icon",
    title: "Technology Consulting",
    content:
      "Create sleek, high-performance apps designed for speed, usability, and seamless integration across your digital ecosystem.",
  },
  {
    icon: techConsulting,
    alt: "TECHNOLOGY CONSULTING icon",
    title: "UI/UX Design Services",
    content:
      "Design human-centered interfaces and intuitive experiences that transform ideas into elegant, usable, and engaging digital products.",
  },
];

const colorCards = [
  {
    description:
      "Expertise-Driven Talent Pool - Vetted professionals with proven expertise in cutting-edge technologies.",
    image: careerIcon1,
    color: "bg-[#294184]",
  },
  {
    description:
      "Cost Efficiency - Reduce recruitment overhead and accelerate success with skilled resources.",
    image: careerIcon2,
    color: "bg-[#f2f2f2]",
  },
  {
    description:
      "Flexible Engagement - Project-based or long-term — customized staffing solutions for your needs.",
    image: careerIcon3,
    color: "bg-[#13afe3]",
  },
  {
    description:
      "Seamless Integration - Our staff work as an extension of your internal teams for hassle-free delivery.",
    image: careerIcon4,
    color: "bg-[#f2f2f2]",
  },
  {
    description:
      "Agility That Adapts to You - Our development rhythm is tuned to your customers — responsive, iterative, and focused on meaningful outcomes.",
    image: careerIcon5,
    color: "bg-[#142b46]",
  },
  {
    description:
      "A True Ally to Startups - We don’t just build — we co-create with founders, investors, and incubators as a trusted player in the startup ecosystem.",
    image: careerIcon6,
    color: "bg-[#f2f2f2]",
  },
  {
    description:
      "A Partner for the Long Haul - We don’t disappear post-delivery. As your tech ally, we stay by your side through every product phase and pivot.",
    image: careerIcon1,
    color: "bg-[#294184]",
  },
  {
    description:
      "Mastery Across Tech Stacks - From modern frontends to deep-tech backends, our polyglot engineers deliver across stacks. You choose, We deliver.",
    image: careerIcon2,
    color: "bg-[#f2f2f2]",
  },
  {
    description:
      "We Get What’s at Stake - We understand the nuance of stakeholders, timelines, and traction. Your success is the only metric that matters to us.",
    image: careerIcon3,
    color: "bg-[#13afe3]",
  },
];




const ResourceArgumentation = () => {
  return (
    <div className="resource-argumentation-page w-full">
      <HomeBanner
        firstContent={
          <div className="text-[2rem] sm:text-[3rem] lg:text-[4rem] font-medium font-druk">
            <div className="flex flex-col gap-0 leading-[1]">
              <span>Staffing Services</span>
              <span className="text-nor-primary">Staffing Made Agile-Easy</span>
            </div>
          </div>
        }
        secondContent={
          <div className="text-[1.5rem] sm:text-[2rem] lg:text-[2.4rem] font-medium font-druk">
            <div className="flex flex-col gap-0 leading-[1]">
              <span>The right talent.</span>
              {/* <span>The right time.</span>
            <span>Every time.</span> */}
            </div>
          </div>
        }
        buttonName="Contact Us"
      />

      <SkyBlueCard processCards={processCards}  />

      <GradientGrid productIdeas={productIdeas} />

      <ColorCard colorCards={colorCards} />

      <TalkToUs
        firstContent={
          <div className="sm:text-[54px] text-[44px] lg:text-[64px] uppercase font-druk tracking-[2px] leading-[1] text-center mb-6 sm:mb-10">
            Partner with <span className="text-nor-primary">NordiXOne</span> -
            Your Trusted Staffing Augmentation Provider. Got a question?
          </div>
        }
      />
    </div>
  );
};

export default ResourceArgumentation;
