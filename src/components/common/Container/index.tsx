"use client";
import HeaderBar from "../HeaderBar";

const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <HeaderBar />
      {children}
    </>
  );
};

export default Container;
