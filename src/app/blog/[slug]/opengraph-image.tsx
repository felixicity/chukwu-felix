import { ImageResponse } from "next/og";
import { getPostBySlug } from "@/app/lib/mdx";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

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
      //   const fontData = await fetch(
      //         new URL("../../../../public/fonts/IntelOneMono-VariableFont_wght.ttf", import.meta.url),
      //   ).then((res) => res.arrayBuffer());

      const intelFontPath = join(process.cwd(), "public/fonts/IntelOneMono-Regular.ttf");
      const intelFontData = await readFile(intelFontPath);

      const groteskFontPath = join(process.cwd(), "public/fonts/SpaceGrotesk-Regular.ttf");
      const groteskFontData = await readFile(groteskFontPath);

      const blobImagePath = join(process.cwd(), "public/google_wiki_bg_blob.png");
      let blobImageBase64 = "";
      try {
            const blobImageBuffer = await readFile(blobImagePath);
            blobImageBase64 = `data:image/png;base64,${blobImageBuffer.toString("base64")}`;
      } catch (error) {
            console.error("Error loading background blob image:", error);
            // The image will just have a solid background if the blob is missing.
      }

      // 3. Return the ImageResponse with your branded JSX/CSS
      return new ImageResponse(
            // This is the canvas. Think of it as a 1200x630 div.
            <div
                  style={{
                        height: "100%",
                        width: "100%",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundColor: "#0f172a", // Deep dark background
                        fontFamily: "IntelOneMono",
                        position: "relative",
                        overflow: "hidden",
                  }}
            >
                  {/* THE BLOB: Centered behind everything */}
                  {blobImageBase64 && (
                        <img
                              src={blobImageBase64}
                              alt="blob"
                              style={{
                                    position: "absolute",
                                    top: "50%",
                                    left: "50%",
                                    transform: "translate(-50%, -50%)",
                                    width: "600px", // Adjust size as needed
                                    height: "600px",
                                    opacity: 0.3, // Keeps it subtle against the dark BG
                                    zIndex: 1,
                              }}
                        />
                  )}

                  {/* THE CONTENT: Stacked on top */}
                  <div
                        style={{
                              display: "flex",
                              flexDirection: "column",
                              alignItems: "center",
                              justifyContent: "center",
                              zIndex: 10,
                              padding: "0 80px",
                              textAlign: "center",
                        }}
                  >
                        <p
                              style={{
                                    fontSize: 16,
                                    color: "#94a3b8",
                                    letterSpacing: "0.2em",
                                    textTransform: "uppercase",
                                    marginBottom: 20,
                              }}
                        >
                              Felix&apos;s Engineering Blog
                        </p>

                        <h1
                              style={{
                                    fontSize: 80,
                                    color: "white",
                                    lineHeight: 1.1,
                                    fontWeight: 800,
                                    margin: 0,
                                    textWrap: "balance",
                                    fontFamily: "spaceGrotesk",
                              }}
                        >
                              {post?.meta.title || "Default Title"}
                        </h1>

                        <div
                              style={{
                                    marginTop: 40,
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 15,
                                    fontSize: 24,
                                    color: "#cbd5e0",
                              }}
                        >
                              <span>By {post?.meta.author}</span>

                              {/* <span>{new Date(post?.meta.date).toLocaleDateString()}</span> */}
                        </div>
                  </div>
            </div>,
            {
                  ...size,
                  fonts: [
                        {
                              name: "spaceGrotesk",
                              data: groteskFontData,
                              weight: 700,
                              style: "normal",
                        },
                        {
                              name: "IntelOneMono",
                              data: intelFontData,
                              weight: 700,
                              style: "normal",
                        },
                  ],
            },
      );
}
