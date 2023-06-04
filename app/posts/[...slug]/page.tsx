import { notFound } from "next/navigation";
import { allPosts } from "contentlayer/generated";

import { Metadata } from "next";
import { Mdx } from "@/components/mdx-components";
import Umami from "@/components/tracking/umami";

interface PostProps {
  params: {
    slug: string[];
  };
}

async function getPostFromParams(params: PostProps["params"]) {
  const slug = params?.slug?.join("/");
  const post = allPosts.find((post) => post.slugAsParams === slug);

  if (!post) {
    null;
  }

  return post;
}

export async function generateMetadata({
  params,
}: PostProps): Promise<Metadata> {
  const post = await getPostFromParams(params);

  if (!post) {
    return {};
  }

  return {
    title: post.title,
    description: post.description,
  };
}

export async function generateStaticParams(): Promise<PostProps["params"][]> {
  return allPosts.map((post) => ({
    slug: post.slugAsParams.split("/"),
  }));
}

export default async function PostPage({ params }: PostProps) {
  const post = await getPostFromParams(params);

  if (!post) {
    notFound();
  }

  {
    /* Total words / 400 words per minute to get the number of minutes */
  }
  const minsRead = Math.ceil(post.body.code.split(" ").length / 400);

  const slug = params?.slug?.join("/");

  return (
    <article className="mb-12 prose dark:prose-invert">
      <meta property="og:image" content="/blog-post-1.jpg" />
      <meta property="og:image:type" content="jpeg" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="400" />
      <h1 className="mb-2">{post.title}</h1>
      {post.description && (
        <p className="text-xl mt-0 text-slate-700 dark:text-slate-200">
          {post.description}
        </p>
      )}
      <span className="flex justify-between text-sm">
        <span className="">{new Date(post.date).toDateString()}</span>
        <span className="">
          {minsRead} min{minsRead > 1 && "s"} read
        </span>
      </span>

      <Umami path={`/posts/${slug}`} />
      <hr className="my-4" />
      <Mdx code={post.body.code} />
    </article>
  );
}
