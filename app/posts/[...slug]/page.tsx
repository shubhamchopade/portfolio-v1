import { notFound } from "next/navigation";
import { allPosts } from "contentlayer/generated";

import { Metadata } from "next";
import { Mdx } from "@/components/mdx-components";
import Umami from "@/components/tracking/umami";
import { info } from "@/constants/site";

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
    openGraph: {
      type: "website",
      url: post.ogImage,
      title: post.title,
      description: post.description,
      images: [
        {
          url: post.ogImage,
          width: 526,
          height: 275,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: info.metadata.twitter.url,
      title: post.title,
      description: post.description,
      images: [
        {
          url: post.ogImage,
          width: 526,
          height: 275,
          alt: post.title,
        },
      ],
      creator: info.metadata.twitter.creator,
    },
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
      <meta property="og:image" content={post.ogImage} />
      <meta property="og:title" content={post.title} />
      <meta property="twitter:image" content={post.ogImage} />
      <meta property="twitter:card" content={post.ogImage} />

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
