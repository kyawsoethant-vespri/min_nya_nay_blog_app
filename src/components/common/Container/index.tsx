"use client";

import Header from "@/components/Header";

const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default Container;
