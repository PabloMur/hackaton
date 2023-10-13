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
      <Nav></Nav>
      <div className="h-screen">{children}</div>
      <Footer />
    </RecoilRoot>
  );
};

export default CustomLayout;
