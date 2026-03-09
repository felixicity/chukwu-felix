// tailwind.config.ts
import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

const config: Config = {
      content: ["./src/**/*.{js,ts,jsx,tsx,mdx}", "./content/**/*.mdx"],
      theme: {
            extend: {
                  typography: {
                        DEFAULT: {
                              css: {
                                    // "--tw-prose-body": "var(--text-primary)",
                                    // "--tw-prose-headings": "var(--text-primary)",
                                    // "--tw-prose-links": "var(--accent)",
                                    // "--tw-prose-bullets": "var(--accent)",
                                    // fontFamily: {
                                    //       sans: "var(--heading-font-family)",
                                    //       mono: "var(--code-font-family)",
                                    // },
                              },
                        },
                  },
            },
      },

      plugins: [typography],
};

export default config;
