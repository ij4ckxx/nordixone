import Image from "next/image";
import React from "react";

interface ColorCardProps {
  color?: string;
  description?: string;
  image: any;
}

interface Props {
  colorCards?: ColorCardProps[];
  cardTitle?: React.ReactNode;
}

const ColorCard = ({ colorCards, cardTitle }: Props) => {
  return (
    <div className="md:p-[120px_72px] p-[100px_20px] sm:[100px_40px] bg-[#f2f2f2]">
      <div className="flex flex-col gap-10 text-[#294184]">
        {cardTitle ? (
          cardTitle
        ) : (
          <div className="text-[50px] font-druk tracking-[1.5px]  font-medium text-[#294184]">
            Why Choose <span className="text-nor-primary">NordiXOne</span> for
            Staffing Augmentation?
          </div>
        )}
        <div className="flex flex-row items-stretch gap-x-6 gap-y-8 flex-wrap">
          {colorCards?.map((card, index) => (
            <ColorBox
              key={index}
              color={card.color}
              image={card.image}
              description={card.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ColorCard;

export function ColorBox({ color, image, description }: ColorCardProps) {
  return (
    <div
      className={`flex flex-col gap-5 p-4 rounded-[10px] mb-2.5 basis-full sm:basis-[calc(50%-24px)] md:basis-[calc(33.33%-24px)] hover:shadow-[0_8px_16px_rgba(0,0,0,0.1)] duration-300 ease-in-out transition-all ${color} `}
    >
      <div
        className={`rounded-[10px] size-10 flex justify-center items-center   ${
          color === "bg-[#294184]"
            ? "bg-[#314c96]"
            : color === "bg-[#13afe3]"
            ? "bg-[#4fc5ed]"
            : color === "bg-[#142b46]"
            ? "bg-[#1c3f69]"
            : "bg-white"
        }`}
      >
        {/* #4fc5ed */}
        <Image
          src={image}
          width={30}
          height={30}
          alt={description || "Image"}
          className="size-[30px] object-contain"
        />
      </div>
      <div
        className={`text-sm font-light ${
          color === "bg-[#294184]" || color === "bg-[#142b46]"
            ? "text-white"
            : "text-nor-secondary"
        }`}
      >
        {description}
      </div>
    </div>
  );
}
