import { usePathname } from "next/navigation";
import Link from "next/link";

export const Navigation = () => {
      const url = usePathname();
      const navLinks = [
            {
                  label: "Home",
                  href: "/",
            },
            {
                  label: "Projects",
                  href: "/projects",
            },
            {
                  label: "Blog",
                  href: "/blog",
            },
            {
                  label: "Contact",
                  href: "/contact",
            },
      ];

      const links = navLinks.map((link) => (
            <li key={link.label}>
                  <Link
                        href={link.href}
                        className={
                              url === link.href
                                    ? "tracking-tighter p-3 text-[var(--reversed-text)] bg-[var(--on-accent)]  dark:underline dark:underline-offset-8"
                                    : "tracking-tighter p-3 hover:bg-gray-200 dark:hover:text-black dark:hover:bg-yellow-400 dark:hover:underline dark:hover:underline-offset-8"
                        }
                  >
                        {link.label}
                  </Link>
            </li>
      ));
      return (
            <nav className="pointer-events-auto hidden md:block">
                  <ul className="flex items-center gap-2 text-sm uppercase font-bold transition-all">{links}</ul>
            </nav>
      );
};
