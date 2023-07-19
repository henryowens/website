interface Author {}

type Status = "published" | "draft";

export interface Post {
  title: string;
  slug: string;
  coverImage: string;
  author: Author;
  content: string;
  publishedAt: string;
  status: Status;
}

export type Posts = Post[];
