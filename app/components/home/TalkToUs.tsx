import { MoveRight } from "lucide-react";
import Link from "next/link";
import React from "react";
import RadixDialog from "../radix-ui/RadixDialog";
import GetStarted from "../get-started/GetStarted";

const TalkToUs = ( { classes = "" }: { classes?: string }) => {
  return (
    <div className={`bg-[#e2eff4] md:p-[120px_72px] p-[100px_20px] sm:[100px_40px] ${classes}`}>
      <div className="flex flex-col items-center">
        <div className="sm:text-[54px] text-[44px] lg:text-[64px] uppercase font-druk tracking-[2px] leading-tight">
          Got a question?
        </div>
        <RadixDialog
          trigger={
            <div className="group cursor-pointer uppercase font-druk tracking-[2px] text-[44px] sm:text-[54px] lg:text-[64px] text-nor-primary flex flex-row gap-0.5 items-center leading-tight">
              <div>Talk to us</div>
              <MoveRight className="group-hover:rotate-0 transition-all duration-300 ease-in-out size-[35px] sm:size-[40px] lg:size-[50px] stroke-3 -rotate-45 " />
            </div>
          }
          children={<GetStarted />}
        />
        <Link
          className="text-base mt-2 text-nor-secondary font-medium hover:text-nor-primary duration-300 ease-in-out transition-colors cursor-pointer"
          href="mailto:hello@nordixone.com"
        >
          hello@nordixone.com
        </Link>
      </div>
    </div>
  );
};

export default TalkToUs;
