import Link from "next/link";

export const MobileNav = ({ setMenu }: { setMenu: (value: boolean) => void }) => {
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
            <li key={link.label} onClick={() => setMenu(false)}>
                  <Link href={link.href}>{link.label}</Link>
            </li>
      ));
      return (
            <div
                  className="absolute top-0 bottom-0 right-0 left-30 bg-[var(--surface)] z-1000 p-20
                               md:hidden"
            >
                  <ul className="flex flex-col gap-8 text-sm uppercase font-bold">{links}</ul>
            </div>
      );
};
