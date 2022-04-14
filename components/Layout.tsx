import { NextComponentType } from "next";
import React from "react";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div className="h-screen w-screen container mx-auto px-[2rem] lg:px-[5rem]">
      {children}
      <Footer />
    </div>
  );
}
