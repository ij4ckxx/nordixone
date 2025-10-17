import Image from "next/image";
import React from "react";
import nordixoneLogo from "@/public/logo/logo-nordixone.jpg";
import Link from "next/link";
import { Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import twitterIcon from "@/public/icons/twitter-24.png";

const companyLink = {
  title: "Company",
  children: [
    { label: "About", url: "/about" },
    { label: "Careers", url: "/careers" },
    { label: "Culture", url: "/see-more" },
    { label: "Contact Us", url: "/contact" }, // adjusted for clean routing
  ],
};

const serviceLink = {
  title: "Services",
  children: [
    { label: "Staff Augmentation", url: "/resource-augmentation" },
    { label: "Agile Management", url: "/agile-management" },
    { label: "Test Automation", url: "/automation-testing" },
    { label: "Application Development Support", url: "/application-support" },
  ],
};

/*
OUR LOCATIONS

INDIA – Chennai Business Office
No: 764, Anna Salai,
Nandanam,
Chennai-600035, Tamil Nadu.
📞 +91 90878 69016
✉️ info@nordixone.com

INDIA – Chennai Regd Office
No: 472, Anna Salai,
Nandanam,
Chennai-600035, Tamil Nadu.
📞 +91 98410 07060
✉️ info@nordixone.com
*/

const Footer = () => {
  return (
    <footer className="font-poppins p-[60px_5vw] bg-black text-white">
      <div className="flex flex-col gap-10">
        {/* first */}
        <div className="flex flex-row items-start ">
          <div className="flex flex-col gap-5 justify-between basis-1/3">
            <Image
              src={nordixoneLogo}
              width={100}
              height={65}
              alt="nordixone-logo"
            />
            <div className="w-[80%]">
              We help TRANSFORM organization's operations through Enterprise
              Applications
            </div>
          </div>
          <div className="basis-2/3 flex flex-row gap-[8rem]">
            <div className="flex flex-col gap-4">
              <div className="text-nor-primary uppercase text-[1.375rem] font-medium tracking-[0px]">
                {companyLink?.title}
              </div>
              <div className="flex flex-col gap-1">
                {companyLink?.children?.map((item) => (
                  <Link href={item?.url} key={item?.label}>
                    {item?.label}
                  </Link>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="text-nor-primary uppercase text-[1.375rem] font-medium tracking-[0px]">
                {serviceLink?.title}
              </div>
              <div className="flex flex-col gap-1">
                {serviceLink?.children?.map((item) => (
                  <Link href={item?.url} key={item?.label}>
                    {item?.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* second */}
        <div className="flex flex-row items-start ">
          <div className="flex flex-col gap-5 justify-between basis-1/3">
            <div className="flex flex-col w-max">
              <div className="text-nor-primary uppercase text-[1.375rem] font-medium tracking-[0px]">
                FOLLOW OUR WORK
              </div>
              <div className="flex flex-row items-center justify-between gap-1 mt-4 md:mt-5">
                <div className="flex justify-center items-center size-[30px] rounded-full bg-white">
                  <Image
                    className="size-5"
                    alt="twitter"
                    width={20}
                    height={20}
                    src={twitterIcon}
                  />
                </div>
                <div className="flex justify-center items-center size-[30px] rounded-full bg-white">
                  <Linkedin className="stroke-black size-5 fill-black" />
                </div>
                <div className="flex justify-center items-center size-[30px] rounded-full bg-white">
                  <Instagram className="stroke-black size-5" />
                </div>
              </div>
            </div>
          </div>
          <div className="basis-2/3 flex flex-row gap-[8rem]">
            <div className="flex flex-col gap-4">
              <div className="text-nor-primary uppercase text-[1.375rem] font-medium tracking-[0px]">
                OUR LOCATIONS
              </div>
              <div className="flex flex-row gap-[8rem]">
                <div className="flex flex-col gap-1">
                  <div className="flex flex-row items-center gap-0.5">
                    <MapPin className="text-nor-primary" />
                    <span>INDIA</span>
                  </div>
                  <div>Chennai Business Office</div>
                  <div>No: 764, Anna Salai,</div>
                  <div>Nandanam,</div>
                  <div>Chennai-600035,Tamilnadu.</div>
                  <div className="flex flex-row items-center gap-0.5">
                    <Phone className="fill-white stroke-black" />
                    <Link href="tel:+91 90878 69016">+91 90878 69016</Link>
                  </div>
                  <div className="flex flex-row items-center gap-0.5">
                    <Mail className=" bg-black" />
                    <Link href={"mailto:info@nordixone.com"}>
                      info@nordixone.com
                    </Link>
                  </div>
                </div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

// <MapPin />
// <Phone />
{
  /* <Mail /> */
}

export default Footer;
