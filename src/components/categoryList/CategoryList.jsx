import React from "react";
import styles from "./CategoryList.module.css";
import Link from "next/link";
import Image from "next/image";

const CategoryList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Popular Categories</h1>
      <div className={styles.categories}>
        <Link
          href="/blog?cat=style"
          className={`${styles.category} ${styles.style}`}
        >
          <Image
            src="/style.png"
            height={32}
            width={32}
            alt="style"
            className={styles.image}
          />
          style
        </Link>
        <Link
          href="/blog?cat=fashion"
          className={`${styles.category} ${styles.fashion}`}
        >
          <Image
            src="/fashion.png"
            height={32}
            width={32}
            alt="fashion"
            className={styles.image}
          />
          fashion
        </Link>
        <Link
          href="/blog?cat=food"
          className={`${styles.category} ${styles.food}`}
        >
          <Image
            src="/food.png"
            height={32}
            width={32}
            alt="food"
            className={styles.image}
          />
          food
        </Link>
        <Link
          href="/blog?cat=travel"
          className={`${styles.category} ${styles.travel}`}
        >
          <Image
            src="/travel.png"
            height={32}
            width={32}
            alt="travel"
            className={styles.image}
          />
          travel
        </Link>
        <Link
          href="/blog?cat=culture"
          className={`${styles.category} ${styles.culture}`}
        >
          <Image
            src="/culture.png"
            height={32}
            width={32}
            alt="culture"
            className={styles.image}
          />
          culture
        </Link>
        <Link
          href="/blog?cat=coding"
          className={`${styles.category} ${styles.coding}`}
        >
          <Image
            src="/coding.png"
            height={32}
            width={32}
            alt="coding"
            className={styles.image}
          />
          coding
        </Link>
      </div>
    </div>
  );
};

export default CategoryList;
