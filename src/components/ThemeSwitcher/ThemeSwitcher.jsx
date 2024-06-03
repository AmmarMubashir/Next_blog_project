"use client";
import { FaMoon } from "react-icons/fa";
import { MdSunny } from "react-icons/md";

import styles from "./ThemeSwitcher.module.css";
import { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";

const ThemeSwitcher = () => {
  const { theme, toggle } = useContext(ThemeContext);
  console.log(theme);
  return (
    <div
      className={styles.theme}
      style={
        theme === "dark"
          ? { backgroundColor: "white" }
          : { backgroundColor: "#0f172a" }
      }
      onClick={toggle}
    >
      <FaMoon className={styles.moon} />
      <span
        className={styles.circle}
        style={
          theme === "dark"
            ? { left: 2, background: "#0f172a" }
            : { right: 2, background: "white" }
        }
      ></span>
      <MdSunny className={styles.sun} />
    </div>
  );
};

export default ThemeSwitcher;
