"use client";

import Footer from "../Footer";
import HeaderBar from "../HeaderBar";

const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <HeaderBar />
      {children}
      <Footer />
    </>
  );
};

export default Container;
