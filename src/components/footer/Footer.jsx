import React from "react";

import styles from "./Footer.module.css";
import Link from "next/link";

import { FaSquareGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.leftFooter}>
        <h3 className="title">Next Blog</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus,
          expedita dolore consequatur itaque fugiat dolorum eius hic libero. Ad
          fugiat perferendis, veritatis vero cupiditate iure accusamus modi
          voluptate iusto excepturi.
        </p>
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
      </div>
      <div className={styles.rightFooter}>
        <div className={styles.list}>
          <span className={styles.listTitle}>Links</span>
          <Link href="/">Homepage</Link>
          <Link href="/">Blog</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Tags</span>
          <Link href="/">Style</Link>
          <Link href="/">Fashion</Link>
          <Link href="/">Coding</Link>
          <Link href="/">Travel</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Social</span>
          <Link href="/">Github</Link>
          <Link href="/">LinkedIn</Link>
          <Link href="/">Instagram</Link>
          <Link href="/">Facebook</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
