import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export const ThemeToggle = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    console.log("toggle render");
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="bg-background rounded-full flex items-center justify-center w-8 h-8 border"
    >
      {theme === "light" ? <Moon /> : <Sun />}
    </button>
  );
};
