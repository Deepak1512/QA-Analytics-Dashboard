import { useState, useEffect } from "react";

export default function ThemeSelector() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const root = document.documentElement;

    root.classList.remove(
      "theme-dark",
      "theme-blue",
      "theme-purple"
    );

    if (theme !== "light") {
      root.classList.add(`theme-${theme}`);
    }
  }, [theme]);

  return (
    <select
      value={theme}
      onChange={(e) => setTheme(e.target.value)}
      className="px-4 py-2 rounded-lg border"
    >
      <option value="light">🌞 Light</option>
      <option value="dark">🌙 Dark</option>
      <option value="blue">💙 Blue</option>
      <option value="purple">🟣 Purple</option>
    </select>
  );
}