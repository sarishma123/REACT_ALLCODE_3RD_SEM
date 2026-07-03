import { useState } from "react";

let ThemeSwitcher=()=> {
  let [darkMode, setDarkMode] = useState(false);

  let styles = {
    backgroundColor: darkMode ? "#1d1313" : "#ffffff",
    color: darkMode ? "#ffffff" : "#000000",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  };

  return (
    <div style={styles}>
      <h1>{darkMode ? "Dark Mode" : "Light Mode"}</h1>
      <button onClick={() => setDarkMode(!darkMode)}>
        Switch to {darkMode ? "Light" : "Dark"} Mode
      </button>
    </div>
  );
}

export default ThemeSwitcher;
