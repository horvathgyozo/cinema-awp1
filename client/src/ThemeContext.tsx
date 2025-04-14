import { createContext, useContext, useState } from "react";

type Theme = "light" | "dark";
type ThemeContextType = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};
const ThemeContext = createContext<ThemeContextType | null>(null);

interface ThemeProviderProps {
  children: React.ReactElement;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<Theme>("light");
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const object = useContext(ThemeContext);
  if (!object) {
    throw new Error("Error");
  }
  return object;
};
