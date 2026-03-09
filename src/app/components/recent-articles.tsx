"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const RecentArticles = ({ posts }) => {
      return (
            <div className="divide-y divide-white/5">
                  {posts.map((post, i) => (
                        <div key={i} className="relative group">
                              {/* The Hover Background */}
                              <motion.div
                                    layoutId="hoverBg"
                                    className="absolute inset-0 bg-white/[0.03] opacity-0 group-hover:opacity-100 rounded-xl -z-10"
                                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                              />
                              <Link
                                    key={post.slug}
                                    href={`/blog/${post.slug}`}
                                    className="group grid md:grid-cols-[120px_1fr_auto] items-center py-8 hover:bg-white/[0.02] transition-colors px-4 -mx-4 rounded-xl"
                              >
                                    {/* Date: Subtle & Mono */}
                                    <time className="text-xs font-mono text-[var(--neutral)] uppercase tracking-widest">
                                          {post.meta.date}
                                    </time>

                                    {/* Title & Excerpt */}
                                    <div className="space-y-1">
                                          <h3 className="text-xl font-semibold group-hover:text-[var(--accent)] transition-colors">
                                                {post.meta.title}
                                          </h3>
                                          <p className="text-[var(--neutral)] text-sm line-clamp-1 max-w-2xl">
                                                {post.content}
                                          </p>
                                    </div>

                                    {/* Reading Time: The "Senior" Detail */}
                                    <div className="hidden md:block text-xs font-mono text-white/20 italic">
                                          {post.meta.readingTime}
                                    </div>
                              </Link>
                        </div>
                  ))}
            </div>
      );
};

export default RecentArticles;
