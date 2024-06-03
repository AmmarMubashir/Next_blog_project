"use client";

import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

const getFromLocalStorage = () => {
  if (typeof window !== "undefined") {
    const value = localStorage.getItem("theme");
    console.log("value", value);
    return value || "light";
  }
};

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    return getFromLocalStorage();
  });

  const toggle = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
};

// "use client";

// import { createContext, useEffect, useState } from "react";

// export const ThemeContext = createContext();

// const getFromLocalStorage = () => {
//   if (typeof window !== "undefined") {
//     const value = localStorage.getItem("theme");
//     console.log("value", value);
//     return value || "light";
//   }
//   return "light";
// };

// export const ThemeContextProvider = ({ children }) => {
//   const [theme, setTheme] = useState(null); // Initialize with null

//   useEffect(() => {
//     const fetchTheme = async () => {
//       await new Promise((resolve) => setTimeout(resolve, 1000)); // Delay for 1 second
//       const storedTheme = getFromLocalStorage();
//       setTheme(storedTheme);
//     };
//     fetchTheme();
//   }, []);

//   const toggle = () => {
//     setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
//   };

//   useEffect(() => {
//     if (theme !== null) {
//       localStorage.setItem("theme", theme);
//     }
//   }, [theme]);

//   if (theme === null) {
//     return <div>Loading...</div>; // Render loading state while fetching theme
//   }

//   return (
//     <ThemeContext.Provider value={{ theme, toggle }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// };
