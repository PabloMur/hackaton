"use client";
import React, { ReactNode } from "react";
import { RecoilRoot } from "recoil";
import Nav from "./Nav";
import Footer from "./Footer";

interface CustomLayoutProps {
  children: ReactNode;
}

const CustomLayout: React.FC<CustomLayoutProps> = ({ children }) => {
  return (
    <RecoilRoot>
      <div className="bg-white">
        <Nav></Nav>
        <div className="h-screen">{children}</div>
        <Footer />
      </div>
    </RecoilRoot>
  );
};

export default CustomLayout;
