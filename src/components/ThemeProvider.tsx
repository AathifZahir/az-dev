import { createContext, useContext, useEffect, useState } from "react";

type Theme = "blue" | "dark" | "purple";

type ThemeProviderProps = {
  children: React.ReactNode;
};

type ThemeContextType = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(() => {
    // Retrieve and validate the saved theme during initialization
    const savedTheme = localStorage.getItem("theme") as Theme;
    const validThemes: Theme[] = ["blue", "dark", "purple"];
    // If saved theme is purple, convert it to dark (purple is disabled from UI)
    if (savedTheme === "purple") {
      return "dark";
    }
    return validThemes.includes(savedTheme) ? savedTheme : "dark";
  });

  useEffect(() => {
    const root = window.document.documentElement;

    // Remove all theme classes first
    root.classList.remove("theme-dark", "theme-blue", "theme-purple");

    // Force a reflow to ensure the class removal is processed
    void root.offsetHeight;

    // Add the new theme class
    root.classList.add(`theme-${theme}`);

    // Save to localStorage
    localStorage.setItem("theme", theme);

    // Force repaint of all elements with CSS variables
    requestAnimationFrame(() => {
      document.body.style.display = "none";
      void document.body.offsetHeight;
      document.body.style.display = "";
    });
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
