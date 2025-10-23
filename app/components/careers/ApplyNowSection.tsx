"use client";
import React from "react";

// const ApplyNowSection = () => {
//   return (
//     <section
//       className="career-sec folder-bg-white overlay-section section-color-change"
//       style={{ padding: "120px 72px", height: "500px" }}
//     >
//       <div
//         className="question-section text-center"
//         data-aos="zoom-in"
//         data-aos-delay="300"
//       >
//         <h4
//           className="sec-heading reveal-text secondary-heading-font careers-apply-text"
//           style={{ opacity: 1, transform: "translate(0px, 0px)", visibility: "inherit" }}
//         >
//           Always looking for passionate people to make our team better
//         </h4>
//         <h4 className="sec-heading hvr-text sub-head">
//           <span className="scroll-to-open-positions">
//             <span className="primary-text primary-heading-hero-font">
//               APPLY NOW
//               {/* <img src="/img/talk2us.png" alt="talk2us" className="ms-2 icon" style={{ marginBottom: "1.5rem" }} /> */}
//             </span>
//           </span>
//         </h4>
//         <a href="mailto:humanresources@nordixone.com" className="mailto">
//           humanresources@nordixone.com
//         </a>
//       </div>
//     </section>
//   );
// };

import { MoveRight } from "lucide-react";
import Link from "next/link";
import RadixDialog from "../radix-ui/RadixDialog";
import GetStarted from "../get-started/GetStarted";

interface Props {
  firstContent?: React.ReactNode | string;
  radixTrigger?: React.ReactNode | string;
  mailToLink?: React.ReactNode | string;
}

const ApplyNowSection = ({ firstContent, radixTrigger, mailToLink }: Props) => {
  return (
    <div className={`bg-[#e2eff4] md:p-[120px_72px] p-[100px_20px] sm:[100px_40px]`}>
      <div className="flex flex-col items-center">
        {firstContent ? (
          firstContent
        ) : (
          <div className="sm:text-[10px] text-[15px] lg:text-[20px] font-druk tracking-[2px] leading-tight text-center">
            Always looking for passionate people to make our team better
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
                <div>APPLY NOW</div>
                {/* <MoveRight className="group-hover:rotate-0 transition-all duration-300 ease-in-out size-[35px] sm:size-[40px] lg:size-[50px] stroke-3 -rotate-45 " /> */}
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
            href="mailto:humanresources@nordixone.com"
          >
            humanresources@nordixone.com
          </Link>
        )}
      </div>
    </div>
  );
};

export default ApplyNowSection;
