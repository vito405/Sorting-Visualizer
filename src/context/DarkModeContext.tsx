import {
  createContext,
  useState,
  useEffect,
  useContext,
  type ReactNode,
} from "react";

const DarkModeContext = createContext({
  darkMode: false,
  toggleDarkMode: () => {},
});

interface DarkModeProviderProps {
  children: ReactNode;
}

export const DarkModeProvider: React.FC<DarkModeProviderProps> = ({
  children,
}) => {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("dark") === "true";
    }
    return false;
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("dark", darkMode.toString());
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

export const useDarkMode = () => useContext(DarkModeContext);
