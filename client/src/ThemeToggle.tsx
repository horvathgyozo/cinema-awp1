import { Moon, Sun } from "lucide-react";
import { useEffect } from "react";
import { useTheme } from "./ThemeContext";

export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

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
