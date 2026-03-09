import { getPostBySlug } from "../../lib/mdx";
import { MDXRemote } from "next-mdx-remote/rsc"; // The renderer
import { Badge } from "../../components/Badge";
import rehypePrettyCode from "rehype-pretty-code";
import { CodeBlock } from "../../components/codeBlock";

const mdxComponents = {
      // We map 'pre' to our custom CodeBlock
      pre: (props: any) => <CodeBlock {...props} />,
};

const options = {
      mdxOptions: {
            rehypePlugins: [
                  [
                        rehypePrettyCode,
                        {
                              theme: "monokai", // <--- Your requested theme
                              keepBackground: true,
                              onVisitLine(node: any) {
                                    // Prevent lines from collapsing in display: grid
                                    if (node.children.length === 0) {
                                          node.children = [{ type: "text", value: " " }];
                                    }
                              },
                        },
                  ],
            ],
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
