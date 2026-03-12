import { ImageResponse } from "next/og";
import { getPostBySlug } from "@/app/lib/mdx";

// Route segment config (essential for a senior setup)
// Change 'edge' to 'nodejs'
export const runtime = "nodejs";
export const alt = "Blog Post Share Image";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

type Props = {
      params: { slug: string };
};

export default async function OGImage({ params }: Props) {
      const { slug } = params;

      // 1. Fetch your blog post data (Next.js deduplicates this fetch)
      // You might need to adjust this function call based on your project
      const post = await getPostBySlug(slug);

      if (!post) {
            return new ImageResponse(
                  <div style={{ padding: "40px", background: "#eee", width: "100%", height: "100%" }}>
                        Post Not Found
                  </div>,
                  { ...size },
            );
      }

      // 2. Define your fonts (highly recommended for a branded look)
      // This step makes sure your custom font is embedded in the image.
      const fontData = await fetch(
            new URL("../../../../public/fonts/IntelOneMono-VariableFont_wght.ttf", import.meta.url),
      ).then((res) => res.arrayBuffer());

      // 3. Return the ImageResponse with your branded JSX/CSS
      return new ImageResponse(
            // This is the canvas. Think of it as a 1200x630 div.
            <div
                  style={{
                        height: "100%",
                        width: "100%",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        justifyContent: "center",
                        background: "linear-gradient(to bottom right, #1a202c, #2d3748)", // Your brand colors
                        padding: "80px",
                        fontFamily: '"Inter"', // Must match the font name defined below
                  }}
            >
                  {/* Top Section: Your Site Name / Logo */}
                  <div
                        style={{
                              display: "flex",
                              fontSize: 32,
                              fontStyle: "normal",
                              color: "#a0aec0", // Subdued text color
                              marginBottom: "40px",
                        }}
                  >
                        Chukwu Felix / Blog
                  </div>

                  {/* Middle Section: The Dynamic Post Title */}
                  <div
                        style={{
                              display: "flex",
                              fontSize: 72,
                              fontWeight: 800,
                              color: "white",
                              lineHeight: 1.1,
                              marginBottom: "20px",
                              textWrap: "balance", // Prevents single-word last lines (senior touch!)
                        }}
                  >
                        {post.meta.title}
                  </div>

                  {/* Bottom Section: Author / Category / Date */}
                  <div
                        style={{
                              display: "flex",
                              fontSize: 28,
                              color: "#cbd5e0",
                        }}
                  >
                        By {post.meta.author} • {new Date(post.meta.date).toLocaleDateString()}
                  </div>
            </div>,
            {
                  ...size,
                  fonts: [
                        {
                              name: "Inter",
                              data: fontData,
                              style: "normal",
                              weight: 800,
                        },
                  ],
            },
      );
}
