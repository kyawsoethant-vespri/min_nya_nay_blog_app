import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="absolute top-[500px]">
      Footer <Link href={"/admin"}>Admin</Link>
    </div>
  );
};

export default Footer;
