import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { Post, PostMeta } from "./types/blog";
import { calculateReadingTime } from "./utils"; // The function we made earlier
import { notFound } from "next/navigation";

const POSTS_PATH = path.join(process.cwd(), "content/posts");

export async function getAllPosts(): Promise<Post[]> {
      // 1. Check if directory exists to avoid crash
      if (!fs.existsSync(POSTS_PATH)) return [];

      const files = fs.readdirSync(POSTS_PATH);

      const posts = files
            .filter((filename) => filename.endsWith(".mdx")) // Only process MDX files
            .map((filename) => {
                  const filePath = path.join(POSTS_PATH, filename);
                  const fileContent = fs.readFileSync(filePath, "utf-8");

                  // Use gray-matter with a Generic to type the 'data' object
                  const { data, content } = matter(fileContent);
                  const castedData = data as PostMeta;

                  return {
                        slug: filename.replace(".mdx", ""),
                        meta: {
                              ...castedData,
                              // Inject the reading time calculation here
                              readingTime: calculateReadingTime(content),
                        },
                        content,
                  };
            })
            // 2. Sort by date (newest first)
            .sort((a, b) => new Date(b.meta.date).getTime() - new Date(a.meta.date).getTime());

      return posts;
}

export async function getPostBySlug(slug: string): Promise<Post> {
      try {
            // 1. Construct the full path to the .mdx file
            const filePath = path.join(POSTS_PATH, `${slug}.mdx`);

            // 2. Check if the file exists. If not, trigger Next.js 404
            if (!fs.existsSync(filePath)) {
                  notFound();
            }

            // 3. Read the file content
            const fileContent = fs.readFileSync(filePath, "utf-8");

            // 4. Parse the frontmatter and content
            const { data, content } = matter(fileContent);
            const castedData = data as PostMeta;

            // 5. Return the structured Post object
            return {
                  slug,
                  meta: {
                        ...castedData,
                        // Ensure reading time is calculated for the full view too
                        readingTime: calculateReadingTime(content),
                  },
                  content,
            };
      } catch (error) {
            // If something goes wrong, redirect to 404
            console.error(`Error fetching post by slug: ${slug}`, error);
            notFound();
      }
}
