import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <>
      <Link href={"/"}>Home</Link>
      <Link href={"/about"}>About</Link>
      <Link href={"/sign-in"}>Sign In</Link>
      <Link href={"/sign-up"}>Sign up</Link>
      <Link href={"dashboard"}>Dashboard</Link>
      <Link href={"/projects"}>Projects</Link>
    </>
  );
};

export default page;
