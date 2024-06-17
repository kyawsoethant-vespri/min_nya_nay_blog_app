import React from "react";
import styles from "./styles.module.css";
import Link from "next/link";

const Header = () => {
  return (
    <>
      <nav className={styles.nav}>
        <Link href={"/"} className={styles.header}>
          <span className={styles.headerText}>MinNyaNay's</span>Blog
        </Link>
      </nav>
    </>
  );
};

export default Header;
