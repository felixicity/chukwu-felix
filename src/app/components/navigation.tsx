import { useState } from "react";
import Link from "next/link";

export const Navigation = () => {
      const [activeLink, setactiveLink] = useState("Home");

      const navLinks = [
            {
                  label: "Home",
                  href: "/",
                  active: activeLink === "Home" ? true : false,
            },
            {
                  label: "Projects",
                  href: "/projects",
                  active: activeLink === "Projects" ? true : false,
            },
            {
                  label: "Blog",
                  href: "/blog",
                  active: activeLink === "Blog" ? true : false,
            },
            {
                  label: "Contact",
                  href: "/contact",
                  active: activeLink === "Contact" ? true : false,
            },
      ];

      const links = navLinks.map((link) => (
            <li key={link.label} onClick={() => setactiveLink(link.label)}>
                  <Link
                        href={link.href}
                        className={
                              link.active
                                    ? "tracking-tighter p-3 dark:text-black dark:bg-yellow-400 dark:underline dark:underline-offset-8"
                                    : "tracking-tighter p-3 hover:bg-gray-200 dark:hover:text-black dark:hover:bg-yellow-400 dark:hover:underline dark:hover:underline-offset-8"
                        }
                  >
                        {link.label}
                  </Link>
            </li>
      ));
      return (
            <nav className="pointer-events-auto hidden md:block">
                  <ul className="flex items-center gap-2 text-sm uppercase font-bold">{links}</ul>
            </nav>
      );
};
