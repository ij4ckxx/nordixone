import React from "react";

interface Props {
  label?: string;
  placeholder?: string;
  required?: boolean;
}

const TextArea = ({ label, placeholder, required, ...props }: Props) => {
  const displayText = required
    ? `${placeholder || label || ""} *`
    : placeholder || label || "";
  return (
    <textarea
      name=""
      id=""
      {...props}
      placeholder={displayText}
      required={required}
      className="w-full rounded-[6px] min-h-[85px] text-sm font-normal leading-[24px] p-[.375rem_.75rem] bg-[rgba(255,255,255,0.1)] border border-[#ffffff52] text-white hover:border-nor-primary duration-300 ease-in-out focus:border-nor-primary transition-colors outline-none focus:shadow-[0_0_0_0.2rem_rgba(19,175,227,0.25)] hover:shadow-[0_0_0_0.2rem_rgba(19,175,227,0.25)] max-h-[100px]"
    />
  );
};

export default TextArea;
