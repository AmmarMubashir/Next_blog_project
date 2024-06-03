import React from "react";
import styles from "./Featured.module.css";
import Image from "next/image";

const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <span className={styles.boldTitle}>Welcome to my creative corner.</span>{" "}
        Discover my unique stories and creative insights
      </h1>

      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image
            src="/blogImg.jpg"
            alt="post img"
            fill
            className={styles.postImg}
          />
        </div>
        <div className={styles.textContainer}>
          <h2 className={styles.textHeading}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h2>
          <p className={styles.textContent}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab illo, ad
            eos facilis temporibus excepturi sapiente mollitia quos suscipit
            accusamus.
          </p>
          <button className={styles.button}>Read More</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
