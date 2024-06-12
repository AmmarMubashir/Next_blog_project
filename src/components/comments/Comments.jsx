import Image from "next/image";
import styles from "./Comments.module.css";
const Comments = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Comments</h1>
      <div className={styles.write}>
        <textarea
          placeholder="write a comment..."
          className={styles.input}
        ></textarea>
        <button className={styles.button}>Send</button>
      </div>
      <div className={styles.comments}>
        <div className={styles.comment}>
          <div className={styles.userDetail}>
            <div className={styles.userImageContainer}>
              <Image src="/p1.jpeg" fill className={styles.userImage} />
            </div>
            <div className={styles.userInfo}>
              <span className={styles.userName}>Ammar</span>
              <span className={styles.date}> 11 May 2024</span>
            </div>
          </div>
          <p className={styles.commentDetail}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita,
            modi! Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
          </p>
        </div>
        <div className={styles.comment}>
          <div className={styles.userDetail}>
            <div className={styles.userImageContainer}>
              <Image src="/p1.jpeg" fill className={styles.userImage} />
            </div>
            <div className={styles.userInfo}>
              <span className={styles.userName}>Ammar</span>
              <span className={styles.date}> 11 May 2024</span>
            </div>
          </div>
          <p className={styles.commentDetail}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita,
            modi!
          </p>
        </div>
        <div className={styles.comment}>
          <div className={styles.userDetail}>
            <div className={styles.userImageContainer}>
              <Image src="/p1.jpeg" fill className={styles.userImage} />
            </div>
            <div className={styles.userInfo}>
              <span className={styles.userName}>Ammar</span>
              <span className={styles.date}> 11 May 2024</span>
            </div>
          </div>
          <p className={styles.commentDetail}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita,
            modi!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Comments;
