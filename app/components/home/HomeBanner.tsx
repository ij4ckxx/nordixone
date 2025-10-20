import React from "react";
import AnimatedButton from "../form-comp/AnimatedButton";
import RadixDialog from "../radix-ui/RadixDialog";
import GetStarted from "../get-started/GetStarted";

interface Props {
  firstContent?: React.ReactNode | string;
  secondContent?: React.ReactNode | string;
  buttonName?: string;
}

const HomeBanner = ({
  firstContent,
  secondContent,
  buttonName = "Contact Us",
}: Props) => {
  return (
    <div className="flex justify-center items-center home-page-banner min-h-[calc(100dvh-100px)]">
      <div className="w-full sm:w-[80%] md:w-[80%] lg:w-[70%] xl:w-[80%] pt-[3rem] px-[1rem] flex flex-col text-center gap-2 text-white uppercase">
        {firstContent && firstContent}
        {secondContent && secondContent}
        {buttonName !== "null" ? (
          <RadixDialog
            trigger={
              <div className="mt-5">
                <AnimatedButton className="w-fit">{buttonName}</AnimatedButton>
              </div>
            }
            children={<GetStarted />}
          />
        ) : null}
      </div>
    </div>
  );
};

export default HomeBanner;
