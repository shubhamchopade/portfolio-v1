import { allPosts } from "@/.contentlayer/generated";
import { info } from "@/constants/site";
import Link from "next/link";

export default function Home() {
  const sortedPosts = allPosts.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
  return (
    <div className="prose dark:prose-invert">
      {sortedPosts.map((post) => (
        <article className="border px-8 mb-4" key={post._id}>
          <Link href={post.slug}>
            <h2>{post.title}</h2>
          </Link>
          <div className="flex text-xs">
            <span className="">{new Date(post.date).toDateString()}</span>
            <span>&nbsp; / &nbsp;{info.name}</span>
          </div>

          {post.description && <p>{post.description}</p>}
        </article>
      ))}
    </div>
  );
}
