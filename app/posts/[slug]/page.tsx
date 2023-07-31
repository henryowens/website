import { GetStaticPropsContext } from "next";
import { FC } from "react";
import { getDocumentBySlug } from "outstatic/server";
import { MDXRemote } from "next-mdx-remote/rsc";
import isEmpty from "@/utils/isEmpty";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { ErrorPage } from "@/components/pages";

const PostSlug: FC<GetStaticPropsContext> = async ({ params }) => {
  if (!params?.slug) return <ErrorPage message="Post not found" />;

  const post = getDocumentBySlug("posts", params.slug.toString(), [
    "title",
    "slug",
    "coverImage",
    "author",
    "content",
    "publishedAt",
  ]);

  if (isEmpty(post)) return <ErrorPage message="Post not found" />;

  return (
    <main className="w-full max-w-2xl mx-auto">
      <Breadcrumbs
        path={[{ href: "/posts", name: "posts" }]}
        activePath={{ href: `/posts/${post.slug}`, name: post.slug }}
      />
      <div className="flex justify-between mb-6">
        <h1 className="title">{post.title}</h1>
        <p className="text-charcoal-300">
          {new Date(post.publishedAt).toLocaleDateString()}
        </p>
      </div>
      <MDXRemote source={post.content} />
    </main>
  );
};

export default PostSlug;
