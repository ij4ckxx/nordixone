import Image from "next/image";
import React from "react";
import nordixoneLogo from "@/public/logo/logo-nordixone.jpg";
import Link from "next/link";
import { Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import twitterIcon from "@/public/icons/twitter-24.png";
import RadixDialog from "../radix-ui/RadixDialog";
import GetStarted from "../get-started/GetStarted";

const companyLink = {
  title: "Company",
  children: [
    { label: "About", url: "/about" },
    { label: "Careers", url: "/careers" },
    { label: "Culture", url: "/see-more" },
    { label: "Contact Us", url: "/contact" },
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

const Footer = () => {
  return (
    <footer className="font-poppins p-[60px_5vw] bg-black text-white">
      <div className="flex flex-col gap-10">
        {/* first */}
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:gap-2">
          <div className="flex flex-col gap-5 justify-between basis-full md:basis-1/3">
            <Link href={"/"}>
              <Image
                className="w-[100px] h-[65px]"
                src={nordixoneLogo}
                width={100}
                height={65}
                alt="nordixone-logo"
              />
            </Link>
            <div className="w-full md:w-[95%] lg:w-[80%]">
              We help TRANSFORM organization's operations through Enterprise
              Applications
            </div>
          </div>
          <div className="md:basis-2/3 basis-full flex flex-row justify-between md:justify-start md:gap-[5rem] lg:gap-[8rem] gap-5">
            <div className="flex flex-col gap-4">
              <div className="text-nor-primary font-druk uppercase text-[1.375rem] font-medium tracking-[2px]">
                {companyLink?.title}
              </div>
              <div className="flex flex-col gap-1">
                {companyLink?.children?.map((item) => {
                  if (item?.label?.toLowerCase() === "contact us") {
                    return (
                      <RadixDialog
                        trigger={
                          <div className="cursor-pointer hover:text-nor-primary duration-300 ease-in-out focus:text-nor-primary transition-colors">
                            {item?.label}
                          </div>
                        }
                        children={<GetStarted />}
                        key={item?.label}
                      />
                    );
                  }
                  return (
                    <Link
                      className="hover:text-nor-primary duration-300 ease-in-out focus:text-nor-primary transition-colors"
                      href={item?.url}
                      key={item?.label}
                    >
                      {item?.label}
                    </Link>
                  );
                })}
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="text-nor-primary font-druk uppercase text-[1.375rem] font-medium tracking-[2px]">
                {serviceLink?.title}
              </div>
              <div className="flex flex-col gap-1">
                {serviceLink?.children?.map((item) => (
                  <Link
                    className="hover:text-nor-primary duration-300 ease-in-out focus:text-nor-primary transition-colors"
                    href={item?.url}
                    key={item?.label}
                  >
                    {item?.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* second */}
        <div className="flex flex-col-reverse sm:flex-col md:flex-row md:items-start gap-8 md:gap-2">
          <div className="flex flex-col gap-5  basis-full md:basis-1/3">
            <div className="flex flex-col w-max">
              <div className="text-nor-primary uppercase text-[1.375rem] font-druk font-medium tracking-[2px]">
                FOLLOW OUR WORK
              </div>
              <div className="flex flex-row items-center justify-between gap-1 mt-4 md:mt-5">
                <Link
                  href={"https://x.com/NordiXOne_Ind"}
                  target="_blank"
                  className="flex justify-center items-center size-[30px] rounded-full bg-white"
                >
                  <Image
                    className="size-5"
                    alt="twitter"
                    width={20}
                    height={20}
                    src={twitterIcon}
                  />
                </Link>
                <Link
                  href={"https://in.linkedin.com/company/nordixone"}
                  target="_blank"
                  className="flex justify-center items-center size-[30px] rounded-full bg-white"
                >
                  <Linkedin className="stroke-black size-5 fill-black" />
                </Link>
                <Link
                  href={"https://www.instagram.com/NordiXOne/"}
                  className="flex justify-center items-center size-[30px] rounded-full bg-white"
                >
                  <Instagram className="stroke-black size-5" />
                </Link>
              </div>
            </div>
          </div>
          <div className="md:basis-2/3 basis-full flex flex-row">
            <div className="flex flex-col gap-4 w-full md:w-auto">
              <div className="text-nor-primary uppercase text-[1.375rem] font-druk font-medium tracking-[2px]">
                OUR LOCATIONS
              </div>
              <div className="flex flex-col gap-8  sm:flex-row sm:justify-start  sm:gap-[5rem] lg:gap-[8rem]">
                <div className="flex flex-col gap-1.5">
                  <div className="flex flex-row items-center gap-1 mb-0.5">
                    <MapPin className="text-nor-primary size-[1rem] [&>circle]:text-black [&>circle]:fill-black [&>path]:bg-nor-primary  [&>path]:fill-nor-primary" />
                    <span>INDIA</span>
                  </div>
                  <div className="ml-4">Chennai Business Office</div>
                  <div className="ml-4">No: 764, Anna Salai,</div>
                  <div className="ml-4">Nandanam,</div>
                  <div className="ml-4">Chennai-600035,Tamilnadu.</div>
                  <div className="flex flex-row items-center gap-1 ml-4">
                    <Phone className="fill-white stroke-black size-[1rem] scale-[-1] rotate-90 " />
                    <Link href="tel:+91 90878 69016">+91 90878 69016</Link>
                  </div>
                  <div className="flex flex-row items-center gap-1">
                    <Mail className=" bg-black size-[1rem]" />
                    <Link
                      className="text-[#FF6F0F] hover:text-[#FF6F0F]/50 duration-300 transition-colors ease-in-out"
                      href={"mailto:info@nordixone.com"}
                    >
                      info@nordixone.com
                    </Link>
                  </div>
                </div>
                <div className="flex flex-col gap-1.5">
                  <div className="flex flex-row items-center gap-1 mb-0.5">
                    <MapPin className="text-nor-primary size-[1rem] [&>circle]:text-black [&>circle]:fill-black [&>path]:bg-nor-primary  [&>path]:fill-nor-primary" />
                    <span>INDIA</span>
                  </div>
                  <div className="ml-4">Chennai Regd Office</div>
                  <div className="ml-4">No: 472, Anna Salai,</div>
                  <div className="ml-4">Nandanam,</div>
                  <div className="ml-4">Chennai-600035,Tamilnadu.</div>
                  <div className="flex flex-row items-center gap-1 ml-4">
                    <Phone className="fill-white stroke-black size-[1rem] scale-[-1] rotate-90 " />
                    <Link href="tel:+91 98410 07060"> +91 98410 07060</Link>
                  </div>
                  <div className="flex flex-row items-center gap-1">
                    <Mail className=" bg-black size-[1rem]" />
                    <Link
                      className="text-[#FF6F0F] hover:text-[#FF6F0F]/50 duration-300 transition-colors ease-in-out"
                      href={"mailto:info@nordixone.com"}
                    >
                      info@nordixone.com
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
