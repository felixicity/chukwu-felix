"use client";

import { useEffect, useState, useCallback } from "react";
import { Navigation } from "./Navigation";
import { Menu } from "lucide-react";
import { MobileNav } from "./MobileNav";

export const Header = () => {
      // 1. Initialize with a safe default for the server
      const [theme, setTheme] = useState("");
      const [menu, setMenu] = useState(false);

      // Move the logic inside a function that we only call on the client
      const getColorPreference = useCallback(() => {
            if (typeof window !== "undefined") {
                  const saved = localStorage.getItem("theme-preference");
                  if (saved) return saved;
                  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
            }
            return "light";
      }, []);

      const reflectPreference = useCallback(
            (currentTheme: string) => {
                  const t = currentTheme || theme;
                  if (!t) return;
                  document.documentElement.setAttribute("data-theme", t);
                  document.querySelector("#theme-toggle")?.setAttribute("aria-label", t);
            },
            [theme],
      );

      // 2. Handle initial load and system sync
      useEffect(() => {
            const initialTheme = getColorPreference();
            setTheme(initialTheme);
            reflectPreference(initialTheme);

            const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
            const handleChange = () => {
                  const newTheme = mediaQuery.matches ? "dark" : "light";
                  setTheme(newTheme);
                  localStorage.setItem("theme-preference", newTheme);
            };

            mediaQuery.addEventListener("change", handleChange);
            return () => mediaQuery.removeEventListener("change", handleChange);
      }, [getColorPreference, reflectPreference]);

      // 3. Handle manual toggle
      const handleTheme = () => {
            const newTheme = theme === "light" ? "dark" : "light";
            setTheme(newTheme);
            localStorage.setItem("theme-preference", newTheme);
            reflectPreference(newTheme);
      };

      // Prevent a "flash" of content or mismatched UI by returning null
      // until the theme is determined on the client
      if (!theme)
            return (
                  <header className="py-6">
                        <div className="px-4"></div>
                  </header>
            );

      return (
            <header className="transition-all py-6">
                  <div className="px-4 sm:px-8 lg:px-12">
                        {/* mobile Nav */}
                        {menu && <MobileNav setMenu={setMenu} />}
                        <div className="flex items-center justify-between">
                              <div className="block ">
                                    <Menu onClick={() => setMenu(!menu)} className="md:hidden" />
                                    <div className="h-12 w-12 hidden md:blocks"></div>
                              </div>
                              <Navigation />
                              <button
                                    className="theme-toggle"
                                    id="theme-toggle"
                                    onClick={handleTheme}
                                    title="Toggles light & dark"
                                    aria-label={theme}
                                    aria-live="polite"
                              >
                                    <svg
                                          className="sun-and-moon"
                                          aria-hidden="true"
                                          width="24"
                                          height="24"
                                          viewBox="0 0 24 24"
                                    >
                                          <mask className="moon" id="moon-mask">
                                                <rect x="0" y="0" width="100%" height="100%" fill="white" />
                                                <circle cx="24" cy="10" r="6" fill="black" />
                                          </mask>
                                          <circle
                                                className="sun"
                                                cx="12"
                                                cy="12"
                                                r="6"
                                                mask="url(#moon-mask)"
                                                fill="currentColor"
                                          />
                                          <g className="sun-beams" stroke="currentColor">
                                                <line x1="12" y1="1" x2="12" y2="3" />
                                                <line x1="12" y1="21" x2="12" y2="23" />
                                                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                                                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                                                <line x1="1" y1="12" x2="3" y2="12" />
                                                <line x1="21" y1="12" x2="23" y2="12" />
                                                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                                                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                                          </g>
                                    </svg>
                              </button>
                        </div>
                  </div>
            </header>
      );
};
