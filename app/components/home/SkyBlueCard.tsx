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

const SkyBlueCard = ({ processCards }: Props) => {
  return (
    <div className="md:p-[120px_72px] p-[100px_20px] sm:[100px_40px] bg-white">
      <div className="flex flex-col gap-5 text-nor-secondary">
        <div className="text-[36px] font-druk tracking-[1.5px] font-medium ">
          How Our Staffing Augmentation works in{" "}
          <span className="text-nor-primary">NordiXOne</span> ?
        </div>

        <div className="flex flex-row items-stretch gap-x-6 gap-y-8 flex-wrap">
          {processCards?.map((card, index) => {
            return (
              <SkyBlueBox
                key={index}
                title={card?.title}
                description={card?.description}
                image={card?.image}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SkyBlueCard;

export function SkyBlueBox({ title, description, image }: ProcessCardProps) {
  return (
    <div className="p-4 text-nor-secondary cursor-pointer hover:shadow-[0_8px_16px_rgba(0,0,0,0.1)] rounded-[10px] bg-[#e2eff4] text-base flex flex-col gap-4 basis-full sm:basis-[calc(50%-24px)] md:basis-[calc(33.33%-24px)] lg:basis-[calc(25%-24px)] transition-all duration-300 ease-in-out">
      <div className="rounded-[10px] size-10 flex justify-center items-center bg-white  ">
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
