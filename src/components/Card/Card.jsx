import Image from "next/image";
import styles from "./Card.module.css";
import Link from "next/link";

const Card = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image src="/blogImg.jpg" fill alt="blogImg" className={styles.image} />
      </div>
      <div className={styles.cardContent}>
        <div className={styles.detail}>
          <span className={styles.date}>11.06.2024</span>
          <span className={styles.category}> - culture</span>
        </div>
        <Link href="/posts/style" className="title">
          <h1> Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
        </Link>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
          incidunt impedit possimus mollitia magnam. Quaerat, fuga distinctio
          delectus magni, error provident sint totam tenetur, cupiditate est
          eligendi dicta repellat minus.
        </p>
        <Link href="/posts/style" className={styles.link}>
          Read More
        </Link>
      </div>
    </div>
  );
};

export default Card;
