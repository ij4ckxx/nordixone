import React from "react";
import AnimatedButton from "../form-comp/AnimatedButton";

interface CareSectionProps {
  onViewMore?: () => void; // 🧩 accept callback
}

const CareSection: React.FC<CareSectionProps> = ({ onViewMore }) => {
  return (
    <section className="w-full bg-[#0A1624] flex justify-center items-center p-[120px_72px] box-border overlay-section about-page-explore">
      <div className="text-center" data-aos="zoom-in" data-aos-delay="100">
        <h2 className="text-white text-[2rem] sm:text-[3rem] lg:text-[4rem] font-medium font-druk leading-tight">
          See how we care <br /> for our people
        </h2>

        <div className="mt-5 inline-block">
          <AnimatedButton
            onClick={onViewMore} // 🧠 trigger parent toggle
            className="btn-grey-rounded getstarted-btn show-explore-bubble"
          >
            View More
          </AnimatedButton>
        </div>
      </div>
    </section>
  );
};

export default CareSection;
