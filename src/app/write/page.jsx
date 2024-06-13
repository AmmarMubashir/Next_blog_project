"use client";
import { useState } from "react";
import styles from "./writePage.module.css";
import { FaPlus } from "react-icons/fa6";
import { CiImageOn } from "react-icons/ci";
import { MdOutlineFileDownload } from "react-icons/md";
import { PiVideo } from "react-icons/pi";
import dynamic from "next/dynamic";
// import ReactQuill from "react-quill";
// import "react-quill/dist/quill.bubble.css";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.bubble.css";

const page = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  return (
    <div className={styles.container}>
      <input type="text" placeholder="Title" className={styles.title} />
      <div className={styles.editor}>
        <button className={styles.button} onClick={() => setOpen(!open)}>
          <FaPlus />
        </button>
        {open && (
          <div className={styles.add}>
            <button className={styles.addButton}>
              <CiImageOn />
            </button>
            <button className={styles.addButton}>
              <MdOutlineFileDownload />
            </button>
            <button className={styles.addButton}>
              <PiVideo />
            </button>
          </div>
        )}
        <ReactQuill
          className={styles.textArea}
          theme="bubble"
          value={value}
          onChange={setValue}
          placeholder="Tell your story..."
        />
      </div>
      <button className={styles.publish}>Publish</button>
    </div>
  );
};

export default page;
