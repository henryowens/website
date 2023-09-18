import { PageWrapper } from "@/components/ui/page-wrapper";
import Link from "next/link";
import { getDocuments } from "outstatic/server";
import { FC } from "react";

const PostsPage: FC = () => {
  const posts = getDocuments("projects", [
    "title",
    "slug",
    "coverImage",
    "author",
    "content",
    "publishedAt",
  ]);

  if (!posts) return <p>No posts found</p>;

  return (
    <PageWrapper className="w-full max-w-3xl m-auto">
      <h1 className="mb-7">Projects</h1>
      <div className="flex w-full">
        {posts.map(({ title, publishedAt, author, slug }, i) => (
          <Link
            key={i}
            href={`/projects/${slug}`}
            className=" w-full border-charcoal-400 border rounded-md p-6 hover:cursor-pointer"
          >
            <div className="flex justify-between">
              <h2 className="text-2xl font-bold">{title}</h2>
              <div className="flex flex-col gap-1">
                <p className="text-xs text-charcoal-200 text-right">
                  {(author as any).name}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </PageWrapper>
  );
};

export default PostsPage;
