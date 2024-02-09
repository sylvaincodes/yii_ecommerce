"use client";

import { useTheme } from "next-themes";
import { LuSunMedium } from "react-icons/lu";

const ThemeSwitch = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="inline-flex items-center justify-center">
      <LuSunMedium className="w-10 h-4 mr-2" />
      <select
        className="p-4 w-50"
        name="themeSwitch"
        value={theme}
        onChange={(e) => setTheme(e.target.value)}
      >Jour
        <option value="system">System</option>
        <option value="dark">Nuit</option>
        <option value="light">Soleil</option>
      </select>
    </div>
  );
};

export default ThemeSwitch;
