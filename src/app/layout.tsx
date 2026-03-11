import Link from "next/link";
import { Header } from "./components/Header";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
      title: "Chukwu Felix - Software Engineer",
      icons: { icon: "/icon.png" },
      description: "Reach out to me today and change the returns of your business",
      keywords: ["Software engineer", "Full stack", "Web developer", "Portfolio"],
      creator: "Chukwu Felix",
      openGraph: {
            type: "website",
            url: "https://example.com",
            title: "Chukwu Felix - Software Engineer",
            description: "My Website Description",
            siteName: "Chukwu Felix - Software Engineer",
            images: [{ url: "https://example.com/og.png" }],
      },
};

export default function RootLayout({
      children,
}: Readonly<{
      children: React.ReactNode;
}>) {
      const date = new Date();
      const today = new Intl.DateTimeFormat("en-NG", { dateStyle: "full" }).format(date);

      const socials = [
            {
                  title: "linkedin",
                  url: "https://www.linkedin.com/in/felix-chukwu-chukwuma",
            },
            {
                  title: "resume",
                  url: "https://www.github.com/felixicity",
            },
            {
                  title: "github",
                  url: "https://www.github.com/felixicity",
            },
      ];
      return (
            <html lang="en">
                  <body>
                        <div className="min-h-screen w-full overflow-hidden">
                              <div className="flex flex-col gap-4 md:flex-row justify-between items-center px-8 lg:px-20 py-2">
                                    <div className="flex items-center">
                                          <span className="text-xs font-bold">{today}</span>
                                    </div>
                                    <div className="flex items-center gap-4">
                                          <ul className="flex items-center justify-between gap-3">
                                                {socials.map((link) => (
                                                      <li key={link.title} className="text-xs font-bold">
                                                            <Link
                                                                  href={link.url}
                                                                  className="underline uppercase transition-all hover:no-underline dark:hover:text-yellow-400"
                                                            >
                                                                  {link.title}
                                                            </Link>
                                                      </li>
                                                ))}
                                          </ul>
                                          <span className="flex items-center justify-between gap-2">
                                                <Link
                                                      href="mailto:chukwufelix16@gmail.com"
                                                      className="text-sm font-bold underline tracking-tighter"
                                                >
                                                      chukwufelix16@gmail.com
                                                </Link>
                                                <svg
                                                      viewBox="0 0 24 24"
                                                      width="24"
                                                      height="24"
                                                      stroke="currentColor"
                                                      strokeWidth="2"
                                                      fill="none"
                                                      strokeLinecap="round"
                                                      strokeLinejoin="round"
                                                      className="size-4"
                                                >
                                                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                                      <polyline points="22,6 12,13 2,6"></polyline>
                                                </svg>
                                          </span>
                                    </div>
                              </div>
                              <div className="border-y-1 border-y-gray-300">
                                    <Header />
                              </div>
                              {children}

                              <footer className="border-y-1 border-y-gray-300 flex items-center justify-center">
                                    <small className="py-8">&copy;2026 Chukwu Felix</small>
                              </footer>
                        </div>
                  </body>
            </html>
      );
}
