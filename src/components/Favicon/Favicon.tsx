import { useEffect, useState } from "react";

const Favicon: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(
    window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
  );

  useEffect(() => {
    const favicon = document.getElementById(
      "favicon"
    ) as HTMLLinkElement | null;

    if (favicon) {
      favicon.href = isDarkMode
        ? "/images/pridemmalogoinvert.png"
        : "/images/pridemmalogo.png";
    }

    // Listen to system theme changes
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handler = (e: MediaQueryListEvent) => setIsDarkMode(e.matches);

    mediaQuery.addEventListener("change", handler);

    return () => mediaQuery.removeEventListener("change", handler);
  }, [isDarkMode]);

  return null; // no UI
};

export default Favicon;
