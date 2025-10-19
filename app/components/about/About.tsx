import React from "react";

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
    summary: "We partner with founders, leaders, and innovators who aren’t afraid to challenge the norm. With a shared belief in building what’s next, we bring engineering strength and strategic thinking to help transform daring ideas into impactful realities.",
  },
  {
    id: "card2",
    img: "https://res.cloudinary.com/do8nwnhlc/image/upload/v1754114833/about-img-2_gonw17.svg",
    title: "Empowering a Community of Builders",
    summary: "We aspire to cultivate a vibrant, inclusive community where passionate technologists, creators, and problem-solvers come together to push boundaries, share knowledge, and build what's next. Diversity fuels our innovation — and dedication drives our impact.",
  },
  {
    id: "card3",
    img: "https://res.cloudinary.com/do8nwnhlc/image/upload/v1754114834/about-img-3_mdp4lx.svg",
    title: "Sustainable Growth, Lasting Impact",
    summary: "We envision a future where growth is measured not just by scale, but by strength, resilience, and purpose. Our ambition is to expand our footprint while staying true to our core — building a business that thrives, sustains, and empowers.",
  },
];

const About = () => {
  return (
    <div className="about-container">
      <h2 className="about-heading">Our Purpose</h2>
      <h1 className="about-subheading">Impactful and visionary purpose</h1>

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
};

export default About;
