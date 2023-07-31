interface Author {}

type Status = "published" | "draft";

export interface Base {
  title: string;
  slug: string;
  coverImage: string;
  author: Author;
  content: string;
  publishedAt: string;
  status: Status;
}
