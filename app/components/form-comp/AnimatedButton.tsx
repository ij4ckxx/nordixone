"use client";

import React from "react";

interface Props {
  children: React.ReactNode | string;
  className?: string;
}

const AnimatedButton = ({
  children = "Submit",
  className,
  ...props
}: Props) => {
  return (
    <>
      <div className="relative">
        <div className="animated-border-wrapper overflow-hidden  shadow-[0px_0px_12.27px_0px_rgba(19,175,227,0.4)]">
          <button
            className={`animated-button cursor-pointer p-[8px_25px] bg-[#0a1420] text-white rounded-[30px] font-semibold text-base flex justify-center items-center min-w-[150px] min-h-[45px] relative z-10  ${className}`}
          >
            Submit
          </button>
        </div>
        <style jsx>
          {`
            .animated-border-wrapper {
              position: relative;
              display: inline-block;
              border-radius: 30px;
              padding: 2px;
              background: #0a1420;
            }

            .animated-border-wrapper::before {
              content: "";
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
              width: 120%;
              height: 120%;
              border-radius: 30px;
              background: conic-gradient(
                rgba(0, 0, 0, 0),
                #13afe3,
                rgba(0, 0, 0, 0) 50%
              );
              animation: spinGradient 3s linear infinite;
              z-index: 0;
            }

            .animated-border-wrapper::after {
              content: "";
              position: absolute;
              inset: 2px;
              border-radius: 28px;
              background: #0a1420;
              z-index: 1;
            }

            @keyframes spinGradient {
              0% {
                transform: translate(-50%, -50%) rotate(0deg);
              }
              100% {
                transform: translate(-50%, -50%) rotate(360deg);
              }
            }
          `}
        </style>
      </div>
    </>
  );
};

export default AnimatedButton;
