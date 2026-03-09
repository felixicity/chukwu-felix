// src/components/PostCard.tsx
import Link from "next/link";
import { Badge } from "./Badge"; // Your custom Badge component

interface PostCardProps {
      title: string;
      date: string;
      tags: string[];
      slug: string;
      readingTime: string;
}

export default function PostCard({ title, date, tags, slug, readingTime }: PostCardProps) {
      return (
            <Link href={`/blog/${slug}`} className="group">
                  <div
                        className="relative h-full p-6 rounded-2xl border transition-all duration-300
        bg-white border-slate-200 shadow-sm hover:shadow-md hover:border-blue-300
        dark:bg-slate-900/50 dark:border-slate-800 dark:hover:border-blue-500/50 dark:hover:bg-slate-800/80
        group-hover:-translate-y-1"
                  >
                        <div className="flex items-center justify-between mb-4">
                              <span className="text-xs font-medium uppercase tracking-wider text-slate-500 dark:text-slate-400">
                                    {date}
                              </span>
                              <span className="text-xs text-slate-400 dark:text-slate-500">{readingTime}</span>
                        </div>

                        <h3
                              className="text-xl font-bold mb-4 leading-tight 
          text-slate-900 dark:text-slate-100 
          group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors"
                        >
                              {title}
                        </h3>

                        <div className="flex flex-wrap gap-2 mt-auto">
                              {tags.map((tag) => (
                                    <Badge key={tag} text={tag} />
                              ))}
                        </div>

                        {/* Subtle "Arrow" hint that appears on hover */}
                        <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                              <svg
                                    className="w-5 h-5 text-blue-500"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                              >
                                    <path
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          strokeWidth={2}
                                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                                    />
                              </svg>
                        </div>
                  </div>
            </Link>
      );
}
