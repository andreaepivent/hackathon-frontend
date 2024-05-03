import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

export const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  const [light, setLight] = useState(false);

  useEffect(() => {
    setLight(theme === "light");
  }, [theme]);

  return (
    <div className="">
      {light ? (
        <button onClick={() => setTheme("dark")}>
          <img src="/moon.svg" alt="Light Mode" className="w-10 h-10" />
        </button>
      ) : (
        <button onClick={() => setTheme("light")}>
          <img src="/sun.svg" alt="Dark Mode" className="w-10 h-10" />
        </button>
      )}
    </div>
  );
};
