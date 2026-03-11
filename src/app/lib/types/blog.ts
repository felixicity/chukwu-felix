// src/types/blog.ts
export interface PostMeta {
      title: string;
      date: string;
      tags: string[];
      readingTime: string;
      description?: string; // Optional: for SEO
      issue?: string;
      image?: string | URL;
}

export interface Post {
      slug: string;
      meta: PostMeta;
      content: string;
}
