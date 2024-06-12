import React from "react";
import styles from "./singlePage.module.css";
import Image from "next/image";
import Menu from "@/components/menu/Menu";
import Comments from "@/components/comments/Comments";

const page = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.textTitle}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h1>
          <div className={styles.userDetail}>
            <div className={styles.userImageContainer}>
              <Image src="/p1.jpeg" fill className={styles.userImage} />
            </div>
            <div className={styles.userInfo}>
              <span className={styles.userName}>Ammar</span>
              <span className={styles.date}> 11 May 2024</span>
            </div>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image src="/blogImg.jpg" fill className={styles.blogImage} />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <div className={styles.postContent}>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et
              reprehenderit aut architecto autem veniam non repellat molestias
              quis quas! Nisi neque consequatur autem, placeat enim accusantium
              ab et illum a!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad,
              numquam officia eligendi voluptatem cupiditate sunt, praesentium
              omnis corporis dolores cumque laudantium officiis ullam non libero
              error voluptate? Cum, neque! Qui, eius doloribus? Voluptatem quo
              asperiores ea quasi reprehenderit eaque, inventore totam pariatur
              iusto, magnam maiores laudantium omnis neque dolor hic?
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga
              facere nam nisi. Explicabo qui nostrum fugiat voluptates obcaecati
              nam, voluptatem provident aspernatur repudiandae dignissimos
              blanditiis aperiam accusantium, odit quo doloribus.
            </p>
          </div>
          <div className={styles.comment}>
            <Comments />
          </div>
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default page;
