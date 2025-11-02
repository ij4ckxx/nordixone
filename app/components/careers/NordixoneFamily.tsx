import Image from "next/image";
import React from "react";

interface ProcessCardProps {
  image: any;
  title?: string;
  description?: string;
}

interface Props {
  processCards?: ProcessCardProps[];
}

const NordixoneFamily = ({ processCards }: Props) => {
  return (
    <div className="md:p-[120px_72px] p-[100px_20px] sm:[100px_40px] bg-white text-center">

      {/* ✅ HEADER SECTION LIKE YOUR HTML */}
      <div className="flex flex-col items-center mb-12">
        <img
          src="https://res.cloudinary.com/do8nwnhlc/image/upload/v1754114855/benifit-icon_s2bmhu.png"
          alt="NordixOne Icon"
          width={60}
          height={60}
          className="mb-4"
        />

        <h6 className="text-lg font-medium" style={{ fontFamily: "poppins" }}>
          Benefits of being a
        </h6>

        <h3 className="text-4xl font-bold font-druk">
          <span className="text-nor-primary">NORDIXONE</span>{" "}
          <span>FAMILY MEMBER</span>
        </h3>

        <p className="text-nor-secondary max-w-[600px] mt-4 leading-relaxed">
          Join the NordixOne family for personalized support, career planning,
          holistic development, and a nurturing environment to thrive. <br />
          Experience innovation and creativity with our dedicated programs.
        </p>
      </div>

      {/* ✅ PROCESS CARDS SECTION */}
      <div className="flex flex-row items-stretch gap-x-6 gap-y-8 flex-wrap text-left">
        {processCards?.map((card, index) => (
          <SkyBlueBox
            key={index}
            title={card?.title}
            description={card?.description}
            image={card?.image}
          />
        ))}
      </div>
    </div>
  );
};

export default NordixoneFamily;


export function SkyBlueBox({ title, description, image }: ProcessCardProps) {
  return (
    <div className="p-4 text-nor-secondary cursor-pointer hover:shadow-[0_8px_16px_rgba(0,0,0,0.1)] rounded-[10px] bg-[#e2eff4] text-base flex flex-col gap-4 basis-full sm:basis-[calc(50%-24px)] md:basis-[calc(33.33%-24px)] lg:basis-[calc(25%-24px)] transition-all duration-300 ease-in-out">
      <div className="rounded-[10px] size-10 flex justify-center items-center bg-white">
        <Image
          src={image}
          width={30}
          height={30}
          alt={title || "Image"}
          className="size-[30px] object-contain"
        />
      </div>
      <div className="flex flex-col gap-2.5">
        <div className="text-base font-semibold">{title}</div>
        <div className="text-sm">{description}</div>
      </div>
    </div>
  );
}
