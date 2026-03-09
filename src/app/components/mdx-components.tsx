// src/app/blog/[slug]/page.tsx
import { getPostBySlug } from "../lib/mdx";
import { MDXRemote } from "next-mdx-remote/rsc";
import { AudioPlayer } from "./audioPlayer"; // Using @ alias is cleaner
import { YouTube } from "./youtube";

const mdxComponents = {
      AudioPlayer,
      YouTube,
};

// params is now a Promise in recent Next.js versions
export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
      // 1. Await the params to get the slug
      const { slug } = await params;

      // 2. Fetch the post data
      const post = await getPostBySlug(slug);

      return (
            <article className="max-w-3xl mx-auto py-12 px-6">
                  {/* 3. Using standard Tailwind typography (prose) */}
                  <div className="prose prose-xl prose-red dark:prose-invert max-w-none">
                        <h1 className="mb-2">{post.meta.title}</h1>
                        <p className="text-slate-500 mb-8">
                              {post.meta.date} • {post.meta.readingTime}
                        </p>
                        <MDXRemote source={post.content} components={mdxComponents} />
                  </div>
            </article>
      );
}
