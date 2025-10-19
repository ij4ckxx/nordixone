"use client";

import Link from "next/link";
import React from "react";
import Input from "../form-comp/Input";
import TextArea from "../form-comp/TextArea";
import AnimatedButton from "../form-comp/AnimatedButton";
import { X } from "lucide-react";

const firstForm = [
  { label: "Name", placeholder: "Name", required: true, type: "text" },
  { label: "Location", placeholder: "Location", required: true, type: "text" },
  {
    label: "Company Name",
    placeholder: "Company Name",
    required: true,
    type: "text",
  },
  {
    label: "Job Title",
    placeholder: "Job Title",
    required: true,
    type: "text",
  },
];

const secondForm = [
  {
    label: "Business Email Address",
    placeholder: "Business Email Address",
    required: true,
    type: "email",
  },
  {
    label: "Phone Number",
    placeholder: "Phone Number",
    required: true,
    type: "text",
  },
  {
    label: "requirement",
    placeholder: "Please describe your requirement",
    required: true,
    type: "text-area",
  },
];

const GetStarted = () => {
  return (
    <div className="relative text-white">
      <div className="relative get-started-comp p-[40px_20px] sm:p-[80px_40px] min-h-[70dvh]">
        <button className="absolute -translate-x-1/2 sm:-translate-y-1/2 translate-y-0 top-0 right-0 sm:top-10 sm:right-5 bg-[#142b46] text-white rounded-[30px] border-0 text-base p-[.375rem_.75rem] flex flex-row gap-1 items-center">
          <span>Close</span>
          <span className="size-[14px] flex justify-center items-center border border-white rounded-full p-[2px]">
            <X className="size-[12px] text-white" />
          </span>
        </button>
        <div className="flex flex-col lg:flex-row lg:items-start gap-[50px]">
          <div className="basis-full text-center lg:text-left lg:basis-[40%] flex flex-col gap-[50px]">
            <div className="flex flex-col gap-[30px] font-druk tracking-[0.8px] font-bold">
              <div className="text-[20px] sm:text-[24px]">GET IN TOUCH</div>
              <div className="text-[24px] sm:text-[30px]">
                LET'S <span className="text-nor-primary">CREATE</span> SOMETHING
                EXTRAORDINARY TOGETHER
              </div>
            </div>
            <div className="flex flex-col gap-[30px]">
              <div className="flex flex-col gap-4">
                <div className="text-sm">Interested in joining our team?</div>
                <Link
                  title="humanresources@nordixonetech.com"
                  className="text-base sm:text-[20px] text-nor-primary truncate"
                  href="mailto:humanresources@nordixonetech.com"
                >
                  humanresources@nordixonetech.com
                </Link>
              </div>
              <div className="flex flex-col gap-4">
                <div className="text-sm">For other enquiries</div>
                <Link
                  title="hello@nordixonetech.com"
                  className="text-base sm:text-[20px] text-nor-primary truncate"
                  href="mailto:hello@nordixonetech.com"
                >
                  hello@nordixonetech.com
                </Link>
              </div>
            </div>
          </div>
          <div className="basis-full lg:basis-[60%] mt-5 flex flex-col gap-5">
            <div className="text-[20px] sm:text-[28px]">
              Drop us a message and we'll get back to you.
            </div>
            <div className="flex flex-col gap-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-5">
                {firstForm?.map((item, index) => (
                  <Input
                    key={index}
                    label={item?.label}
                    placeholder={item?.placeholder}
                    required={item?.required}
                    type={item?.type}
                  />
                ))}
              </div>
              <div className="flex flex-col gap-5">
                {secondForm?.map((item, index) => {
                  if (item?.type == "text-area") {
                    return (
                      <TextArea
                        key={index}
                        label={item?.label}
                        placeholder={item?.placeholder}
                        required={item?.required}
                      />
                    );
                  }
                  return (
                    <Input
                      key={index}
                      label={item?.label}
                      placeholder={item?.placeholder}
                      required={item?.required}
                      type={item?.type}
                    />
                  );
                })}
              </div>
              <AnimatedButton className="w-fit">Submit</AnimatedButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
