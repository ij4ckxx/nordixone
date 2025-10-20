"use client";
import React from "react";
import TalkToUs from "../home/TalkToUs";
import AboutBanner from "./AboutBanner";
import AboutExplore from "./AboutExplore";

// Reusable Card Type
interface AboutCard {
  id: string;
  img: string;
  title: string;
  summary: string;
}

const cards: AboutCard[] = [
  {
    id: "card1",
    img: "https://res.cloudinary.com/do8nwnhlc/image/upload/v1754114832/about-img-1_ju5xiv.svg",
    title: "Be an ally for Clients",
    summary:
      "We partner with founders, leaders, and innovators who aren’t afraid to challenge the norm. With a shared belief in building what’s next, we bring engineering strength and strategic thinking to help transform daring ideas into impactful realities.",
  },
  {
    id: "card2",
    img: "https://res.cloudinary.com/do8nwnhlc/image/upload/v1754114833/about-img-2_gonw17.svg",
    title: "Empowering a Community of Builders",
    summary:
      "We aspire to cultivate a vibrant, inclusive community where passionate technologists, creators, and problem-solvers come together to push boundaries, share knowledge, and build what's next. Diversity fuels our innovation — and dedication drives our impact.",
  },
  {
    id: "card3",
    img: "https://res.cloudinary.com/do8nwnhlc/image/upload/v1754114834/about-img-3_mdp4lx.svg",
    title: "Sustainable Growth, Lasting Impact",
    summary:
      "We envision a future where growth is measured not just by scale, but by strength, resilience, and purpose. Our ambition is to expand our footprint while staying true to our core — building a business that thrives, sustains, and empowers.",
  },
];

interface AboutCard {
  id: string;
  img: string;
  title: string;
  summary: string;
}

const cardsTwo: AboutCard[] = [
  {
    id: "card1",
    img: "https://res.cloudinary.com/do8nwnhlc/image/upload/v1754114854/b2_as5xxc.png",
    title: "Voice Out",
    summary: "Debate issues, not people. Handle conflicts directly with trust and respect. Open dialogue and constructive feedback foster a culture of collaboration and understanding, driving us towards shared goals and mutual respect.",
  },
  {
    id: "card2",
    img: "https://res.cloudinary.com/do8nwnhlc/image/upload/v1754114854/b3_ddn3c6.png",
    title: "Together as 'One'",
    summary: "We are one team with one goal. Support, celebrate, and trust each other. Unity and collaboration empower us to achieve greater heights, fostering a sense of belonging and collective success.",
  },
  {
    id: "card3",
    img: "https://res.cloudinary.com/do8nwnhlc/image/upload/v1754114855/b4_ejth1q.png",
    title: "Craft memorable experience​",
    summary: "Leave a lasting, world-class impression on the minds of customers and colleagues. Strive for excellence in every interaction, creating moments that are impactful and unforgettable.",
  },
];

// Section Components
const CardsSectionOne = ({ bg }: { bg: string }) => (
  <div className={`about-section ${bg}`}>
    <h2 className="about-heading">Our Purpose</h2>
    <h1 className="about-subheading">Impactful and Visionary Purpose</h1>

    <div className="cards-container">
      {cards.map((card) => (
        <div key={card.id} className="about-card">
          <img src={card.img} alt={card.title} className="about-card-img" />
          <h3 className="about-card-title">{card.title}</h3>
          <p className="about-card-summary">{card.summary}</p>
        </div>
      ))}
    </div>
  </div>
);

const CardsSectionTwo = ({ bg }: { bg: string }) => {
  const cardBgColors = ["#142b46", "#f2f2f2", "#294184"]; 
  const cardColors = ["#ffffff", "#000000", "#ffffff"]

  return (
    <div className={`about-section-two ${bg}`}>
      <h2 className="about-heading">Our Values</h2>
      <h1 className="about-subheading">What we Believe</h1>

      <div className="cards-container">
        {cardsTwo.map((card, index) => (
          <div
            key={card.id}
            className="about-card"
            style={{
              backgroundColor: cardBgColors[index],
              color:cardColors[index],
              borderRadius: "12px",
              padding: "20px",
            }}
          >
            <img src={card.img} alt={card.title} className="about-card-img-two" />
            <h3 className="about-card-title">{card.title}</h3>
            <p className="about-card-summary" style={{color:cardColors[index]}}>{card.summary}</p>
          </div>
        ))}
      </div>
    </div>
  );
};


const TextSection = ({ text, bg }: { text: string; bg: string }) => (
  <div className={`about-section ${bg}`}>
    <h1 className="about-text">{text}</h1>
  </div>
);

export default function About() {
  return (
    <div className="about-container">
      <AboutBanner />
      <CardsSectionOne bg="bg-white text-black" /> {/* Section 1 */}
      <TextSection
        bg="bg-blue-600 text-white top-radius"
        text={`The process is more important than the results.And if you take care of the process, you will get the results.`}
      /> {/* Section 2 */}
      <CardsSectionTwo bg="bg-white text-black" /> {/* Section 3 */}
      <AboutExplore /> {/* Section 4 */}
      <TalkToUs classes="top-radius" /> {/* Section 5 */}
    </div>
  );
}
