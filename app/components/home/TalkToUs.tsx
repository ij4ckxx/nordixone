import { MoveRight } from "lucide-react";
import Link from "next/link";
import React from "react";
import RadixDialog from "../radix-ui/RadixDialog";
import GetStarted from "../get-started/GetStarted";

interface Props {
  firstContent?: React.ReactNode | string;
  radixTrigger?: React.ReactNode | string;
  mailToLink?: React.ReactNode | string;
}

const TalkToUs = ({ firstContent, radixTrigger, mailToLink }: Props) => {
  return (
    <div className={`bg-[#e2eff4] md:p-[120px_72px] p-[100px_20px] sm:[100px_40px]`}>
      <div className="flex flex-col items-center">
        {firstContent ? (
          firstContent
        ) : (
          <div className="sm:text-[54px] text-[44px] lg:text-[64px] uppercase font-druk tracking-[2px] leading-tight text-center">
            Got a question?
          </div>
        )}
        {/* <div className="sm:text-[54px] text-[44px] lg:text-[64px] uppercase font-druk tracking-[2px] leading-tight">
          Got a question?
        </div> */}
        <RadixDialog
          trigger={
            radixTrigger ? (
              radixTrigger
            ) : (
              <div className="group cursor-pointer uppercase font-druk tracking-[2px] text-[44px] sm:text-[54px] lg:text-[64px] text-nor-primary flex flex-row gap-0.5 items-center leading-tight">
                <div>Talk to us</div>
                <MoveRight className="group-hover:rotate-0 transition-all duration-300 ease-in-out size-[35px] sm:size-[40px] lg:size-[50px] stroke-3 -rotate-45 " />
              </div>
            )
          }
          children={<GetStarted />}
        />
        {mailToLink ? (
          mailToLink
        ) : (
          <Link
            className="text-base mt-2 text-nor-secondary font-medium hover:text-nor-primary duration-300 ease-in-out transition-colors cursor-pointer"
            href="mailto:hello@nordixone.com"
          >
            hello@nordixone.com
          </Link>
        )}
      </div>
    </div>
  );
};

export default TalkToUs;
