"use client";

import Link from "next/link";
import React, { useState } from "react";
import Input from "../form-comp/Input";
import TextArea from "../form-comp/TextArea";
import AnimatedButton from "../form-comp/AnimatedButton";
import { X } from "lucide-react";
import { Dialog } from "radix-ui";

const firstForm = [
  { label: "FirstName", placeholder: "First Name", required: true, type: "text" },
  { label: "LastName", placeholder: "Last Name", required: true, type: "text" },
  { label: "Email", placeholder: "Email", required: true, type: "email" },
  { label: "PhoneNumber", placeholder: "Phone Number", required: true, type: "tel" },
  { label: "Qualification", placeholder: "Highest Education Qualification", required: true, type: "text" },
  { label: "YOP", placeholder: "Year Of Passing", required: true, type: "text" },
  { label: "YOE", placeholder: "Years Of Experience", required: true, type: "text" },
  { label: "Location", placeholder: "Current Location", required: true, type: "text" },
  {
    label: "NoticePeriod",
    placeholder: "Notice Period (e.g., 15 days, 2 months)",
    required: true,
    type: "text",
  },
  {
    label: "Skills",
    placeholder: "Skills",
    required: true,
    type: "text",
  },
];
interface CareerSubmitProps {
  roleTitle?: string;
}
const CareerSubmit = ({ roleTitle }: CareerSubmitProps) => {
  const [resumeFile, setResumeFile] = useState<string>("");

  const handleResumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) setResumeFile(file.name);
  };
  return (
    <div className="relative text-white">
      <div className="relative get-started-comp min-h-[100dvh] p-[60px_20px] sm:p-[80px_40px]">
        <Dialog.Close asChild>
          <button className="absolute cursor-pointer -translate-x-1/2 sm:-translate-y-1/2 translate-y-0 top-2 right-0 sm:top-10 sm:right-5 bg-[#142b46] hover:bg-nor-primary  text-white rounded-[30px] border-0 text-base p-[.375rem_.75rem] flex flex-row gap-1 duration-300 ease-in-out transition-colors items-center">
            <span>Close</span>
            <span className="size-[14px] flex justify-center items-center border border-white rounded-full p-[2px]">
              <X className="size-[12px] text-white" />
            </span>
          </button>
        </Dialog.Close>
        <div className="flex flex-col lg:flex-row lg:items-start gap-[50px]">
          <div className="basis-full text-center lg:text-left lg:basis-[40%] flex flex-col gap-[50px]">
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
            </div>
          </div>
          <div className="basis-full lg:basis-[60%] mt-5 flex flex-col gap-5">
            <div className="text-[20px] sm:text-[28px]">
              Maximo Solution Architect 
              <h2 className="text-[24px] sm:text-[28px] font-bold mb-5">
                Apply for {roleTitle}
              </h2>
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
                {/* Resume Upload */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="resume"
                  className="cursor-pointer inline-flex items-center justify-center border border-gray-500 text-gray-200 hover:bg-gray-700 rounded-lg py-2 px-4 transition duration-200 ease-in-out"
                >
                  {/* Upload Icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    className="mr-2"
                  >
                    <path d="M8 2a5.53 5.53 0 0 0-3.594 1.342c-.766.66-1.321 1.52-1.464 2.383C1.266 6.095 0 7.555 0 9.318 0 11.366 1.708 13 3.781 13h8.906C14.502 13 16 11.57 16 9.773c0-1.636-1.242-2.969-2.834-3.194C12.923 3.999 10.69 2 8 2m2.354 5.146a.5.5 0 0 1-.708.708L8.5 6.707V10.5a.5.5 0 0 1-1 0V6.707L6.354 7.854a.5.5 0 1 1-.708-.708l2-2a.5.5 0 0 1 .708 0z" />
                  </svg>
                  Choose Resume File*
                </label>

                <input
                  id="resume"
                  name="resume"
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={handleResumeChange}
                  className="hidden"
                  required
                />

                {resumeFile && (
                  <small className="text-gray-400 text-sm">
                    Selected File: <span className="text-nor-primary">{resumeFile}</span>
                  </small>
                )}
              </div>
              </div>
              <AnimatedButton className="w-fit">Submit</AnimatedButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerSubmit;
