import { Metadata } from "next";
import Image from "next/image";
import { getPostBySlug } from "../../lib/mdx";
import { MDXRemote } from "next-mdx-remote/rsc";
import { SerializeOptions } from "node_modules/next-mdx-remote/dist/types"; // The renderer
import { Badge } from "../../components/Badge";
import rehypePrettyCode from "rehype-pretty-code";
import { CodeBlock } from "../../components/CodeBlock";
import { AudioPlayer } from "@/app/components/AudioPlayer";
import { YouTube } from "@/app/components/Youtube";
import { CardGroup } from "@/app/components/CardGroup";
import { Card } from "@/app/components/Card";
import { Frame } from "@/app/components/Frame";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
      const { slug } = await params;
      const post = await getPostBySlug(slug);

      return {
            title: post.meta.title,
            description: post.meta.description,
            openGraph: {
                  title: post.meta.title,
                  description: post.meta.description,
                  url: `https://chukwu-felix.vercel.app/blog/${post.slug}`,
                  siteName: "Chukwu Felix - Software Engineer",
                  locale: "en_US",
                  type: "article", // Crucial for blog posts
                  publishedTime: post.meta.date,
                  authors: ["Chukwu Felix"],
            },
            twitter: {
                  card: "summary_large_image",
                  title: post.meta.title,
                  description: post.meta.description,
                  //   images: [post.meta?.image || ""],
            },
      };
}

const mdxComponents = {
      AudioPlayer,
      YouTube,
      Card,
      CardGroup,
      Frame,
      pre: (props: { children: React.ReactNode; [key: string]: unknown }) => <CodeBlock {...props} />,
};

const prettyCodeOptions = {
      theme: "monokai", // <--- Your requested theme
      keepBackground: true,
      onVisitLine(node: { children: { type: string; value: string }[] }) {
            // Prevent lines from collapsing in display: grid
            if (node.children.length === 0) {
                  node.children = [{ type: "text", value: " " }];
            }
      },
};

const options: SerializeOptions = {
      mdxOptions: {
            rehypePlugins: [[rehypePrettyCode, prettyCodeOptions]],
      },
};

// This generates the actual HTML for the specific post
export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
      const { slug } = await params;
      const post = await getPostBySlug(slug); // A helper function to find the file

      return (
            <article className="max-w-3xl mx-auto py-10 px-6">
                  <header className="mb-8">
                        <h1 className="text-4xl font-bold mb-4">{post.meta.title}</h1>
                        <div className="flex gap-2">
                              {post.meta.tags.map((tag) => (
                                    <Badge key={tag} text={tag} />
                              ))}
                        </div>
                        <div className="flex items-center gap-8">
                              <div className="relative w-12 h-12 aspect-auto">
                                    <Image src="/image.png" alt={post.meta.title} fill className="rounded-[50%]" />
                              </div>

                              <div className="flex flex-col gap-2 my-8">
                                    <h4 className="font-bold">{post.meta.author}</h4>
                                    <div className="flex items-center gap-4 text-xs text-[var(--neutral)]">
                                          <span>{post.meta.date}</span>
                                          <span style={{ color: "#475569" }}>•</span>
                                          <span>{post.meta.readingTime}</span>
                                    </div>
                              </div>
                        </div>
                  </header>

                  {/* This component turns your Markdown into React components */}
                  <div className="prose dark:prose-invert max-w-none">
                        <MDXRemote
                              source={post.content}
                              components={mdxComponents} // Important!
                              options={options}
                        />
                  </div>
            </article>
      );
}
