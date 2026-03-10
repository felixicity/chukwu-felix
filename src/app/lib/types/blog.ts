// src/types/blog.ts
export interface PostMeta {
      title: string;
      date: string;
      tags: string[];
      readingTime: string;
      description?: string; // Optional: for SEO
      issue?: string;
}

export interface Post {
      slug: string;
      meta: PostMeta;
      content: string;
}
