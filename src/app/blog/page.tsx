import Image from "next/image";
import Link from "next/link";
import { getAllPosts } from "../lib/mdx";

const Blogpage = async () => {
      const posts = await getAllPosts();
      const allTags = ["NextJS", "TypeScript", "React", "Css", "UI/UX", "AI"];

      return (
            <section className="">
                  <main className="max-w-7xl mx-auto px-6 py-20">
                        <header className="mb-16">
                              <h1 className="text-5xl font-display font-bold mb-4">Daily Logs</h1>
                              <p className="text-[var(--neutral)] text-lg">
                                    Documenting the journey, one step at a time.
                              </p>
                        </header>

                        <div className="grid lg:grid-cols-[240px_1fr] gap-16 items-start">
                              {/* LEFT SIDEBAR: The Filters */}
                              <aside className="sticky top-24 space-y-10 hidden lg:block">
                                    {/* Search Bar */}
                                    <div>
                                          <h4 className="text-xs uppercase tracking-widest text-[var(--neutral)] mb-4">
                                                Search
                                          </h4>
                                          <input
                                                type="text"
                                                placeholder="Filter logs..."
                                                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm focus:border-[var(--accent)] outline-none transition-all"
                                          />
                                    </div>

                                    {/* Categories / Tags */}
                                    <div>
                                          <h4 className="text-xs uppercase tracking-widest text-[var(--neutral)] mb-4">
                                                Topics
                                          </h4>
                                          <ul className="space-y-2">
                                                {allTags.map((tag) => (
                                                      <li key={tag}>
                                                            <button className="text-sm text-[var(--neutral)] hover:text-[var(--accent)] transition-colors flex items-center gap-2">
                                                                  <span className="w-1 h-1 rounded-full bg-white/20" />
                                                                  {tag}
                                                            </button>
                                                      </li>
                                                ))}
                                          </ul>
                                    </div>

                                    {/* Year Filter */}
                                    <div>
                                          <h4 className="text-xs uppercase tracking-widest text-[var(--neutral)] mb-4">
                                                Archive
                                          </h4>
                                          <div className="flex flex-wrap gap-2">
                                                {["2024", "2023", "2022"].map((year) => (
                                                      <button
                                                            key={year}
                                                            className="text-xs font-mono px-2 py-1 bg-white/5 border border-white/10 rounded hover:bg-[var(--accent)] hover:text-black transition-all"
                                                      >
                                                            {year}
                                                      </button>
                                                ))}
                                          </div>
                                    </div>
                              </aside>

                              {/* RIGHT COLUMN: The Feed */}
                              <div className="space-y-12">
                                    {/* Active Filter Indicator (Senior UX) */}
                                    <div className="flex items-center gap-2 text-sm text-[var(--neutral)] italic">
                                          <span>Showing all posts</span>
                                          <span className="h-px flex-1 bg-white/5" />
                                          <span>{posts ? posts?.length : 0} entries</span>
                                    </div>

                                    <div className="flex flex-col gap-16">
                                          {posts.map((post) => (
                                                <Link
                                                      href={`/blog/${post.slug}`}
                                                      key={post.slug}
                                                      className="relative flex flex-col-reverse max-w-xl m-auto shadow-[var(--card-shadow)] rounded-xl gap-8"
                                                >
                                                      {/* Visual Thumbnail (Optional but helpful) */}
                                                      <div className="aspect-[16/10] bg-white/5 rounded-xl border border-white/10 overflow-hidden relative">
                                                            <Image
                                                                  src="/Screenshot_Kazafi.png"
                                                                  fill
                                                                  className="object-cover opacity-60 group-hover:opacity-100 transition-opacity"
                                                                  alt="fel"
                                                                  priority
                                                            />
                                                      </div>
                                                      {/* Content */}
                                                      <div className="flex flex-col justify-center px-4 pt-4">
                                                            <div className="flex items-center gap-3 mb-3">
                                                                  <time className="text-xs font-mono text-[var(--accent)]">
                                                                        {post.meta.date}
                                                                  </time>
                                                                  <span className="text-white/10">|</span>
                                                                  <span className="text-xs font-mono text-[var(--neutral)] uppercase">
                                                                        {post.meta.readingTime}
                                                                  </span>
                                                            </div>
                                                            <div className="flex gap-4 mb-4">
                                                                  {post.meta.tags?.length > 0 &&
                                                                        post.meta.tags.map((tag) => (
                                                                              <span
                                                                                    key={tag}
                                                                                    className="text-xs font-mono text-[var(--accent)] uppercase"
                                                                              >
                                                                                    #{tag}
                                                                              </span>
                                                                        ))}
                                                            </div>
                                                            {post.meta.issue && (
                                                                  <div className="border border-[var(--neutral)] rounded-4xl px-3 py-1 inline-flex items-center gap-2 mb-2 max-w-[80px]">
                                                                        <span className="text-xs font-mono text-[var(--accent)] uppercase">
                                                                              Ep #{post.meta.issue}
                                                                        </span>
                                                                  </div>
                                                            )}
                                                            <h2 className="text-2xl font-bold group-hover:text-[var(--accent)] transition-colors mb-4">
                                                                  {post.meta.title}
                                                            </h2>
                                                            <p className="text-[var(--neutral)] line-clamp-2 mb-4 leading-relaxed">
                                                                  {post.content}
                                                            </p>
                                                            <div className="flex gap-2">
                                                                  {post.meta.tags.map((tag) => (
                                                                        <span
                                                                              key={tag}
                                                                              className="text-[10px] text-white/40"
                                                                        >
                                                                              #{tag}
                                                                        </span>
                                                                  ))}
                                                            </div>
                                                      </div>
                                                </Link>
                                          ))}
                                    </div>
                              </div>
                        </div>
                  </main>
            </section>
      );
};

export default Blogpage;
