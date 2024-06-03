"use client";
import styles from "./Navbar.module.css";
import Link from "next/link";

import { FaSquareGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

import AuthLinks from "../AuthLink/AuthLinks";
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.social}>
        <Link href="/">
          <FaSquareGithub className={styles.icon} />{" "}
        </Link>
        <Link href="/">
          <FaLinkedin className={styles.icon} />{" "}
        </Link>
        <Link href="/">
          <FaInstagramSquare className={styles.icon} />{" "}
        </Link>
      </div>
      <div className={styles.logo}>Blog</div>
      <div className={styles.links}>
        <ThemeSwitcher />
        <Link href="/" className={styles.link}>
          Homepage
        </Link>
        <Link href="/" className={styles.link}>
          Contact
        </Link>
        <Link href="/" className={styles.link}>
          About
        </Link>
        <AuthLinks />
      </div>
    </div>
  );
};

export default Navbar;
