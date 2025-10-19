import React from "react";

import Header from "@/app/components/header/Header";
import Footer from "@/app/components/footer/Footer";
import GotoTop from "../components/goto-top/GotoTop";

interface Props {
  children: React.ReactNode;
}

const layout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <main className="min-h-[60dvh] ">{children}</main>
      <Footer />
      <GotoTop />
    </>
  );
};

export default layout;
