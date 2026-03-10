import { getPostBySlug } from "../../lib/mdx";
import { MDXRemote } from "next-mdx-remote/rsc"; // The renderer
import { Badge } from "../../components/Badge";
import rehypePrettyCode from "rehype-pretty-code";
import { CodeBlock } from "../../components/codeBlock";
import AudioPlayer from "@/app/components/AudioPlayer";
import Youtube from "@/app/components/Youtube";

const mdxComponents = {
      AudioPlayer,
      Youtube,
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

const options = {
      mdxOptions: {
            rehypePlugins: [[rehypePrettyCode, prettyCodeOptions]],
      },
};

// This generates the actual HTML for the specific post
export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
      const { slug } = await params;
      const post = await getPostBySlug(slug); // A helper function to find the file

      return (
            <article className="max-w-3xl mx-auto py-20 px-6">
                  <header className="mb-8">
                        <h1 className="text-4xl font-bold mb-4">{post.meta.title}</h1>
                        <div className="flex gap-2">
                              {post.meta.tags.map((tag) => (
                                    <Badge key={tag} text={tag} />
                              ))}
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
