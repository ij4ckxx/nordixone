import Image from "next/image";
import React from "react";
import nordixoneLogo from "@/public/logo/logo-nordixone.jpg";
import Link from "next/link";

const Header = () => {
  return (
    <header className="sticky top-0 z-[10] flex flex-row items-center justify-between gap-5 bg-nor-secondary p-[15px_5vw]">
      <Link href={"/"}>
        <Image
          className="w-[100px] h-[65px]"
          src={nordixoneLogo}
          width={100}
          height={65}
          alt="nordixone-logo"
        />
      </Link>
      <h1 className="text-white">Header</h1>
    </header>
  );
};

export default Header;
