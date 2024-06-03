"use client";

const { ThemeContext } = require("@/context/ThemeContext");
const { useContext } = require("react");

const ThemeProvider = ({ children }) => {
  const { theme } = useContext(ThemeContext);
  return <div className={theme}>{children}</div>;
};

export default ThemeProvider;
