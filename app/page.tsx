import { allPosts } from "@/.contentlayer/generated";
import Education from "@/components/education";
import Experience from "@/components/experience";
import Landing from "@/components/landing";
import Pomodoro from "@/components/pomodoro";
import Projects from "@/components/projects";
import Timeline from "@/components/timeline";
import Link from "next/link";
import { info } from "@/constants/site";

export default function Home() {
  return (
    <div className="">
      <meta
        property="og:image"
        itemProp="image"
        content={info.metadata.og.image}
      />
      <meta property="og:title" content={info.metadata.og.title} />
      <meta property="og:description" content={info.bio} />
      <meta property="og:url" content={info.metadata.og.url} />
      <meta property="og:type" content="website" />
      <meta property="og:updated_time" content={Date.now().toString()} />

      <meta property="twitter:image" content={info.metadata.twitter.image} />
      <meta property="twitter:card" content={info.metadata.twitter.card} />
      <meta property="twitter:title" content={info.metadata.twitter.title} />
      <meta property="twitter:description" content={info.bio} />
      <Landing />
      <Projects />
      <Education />
      <Experience />
      <Timeline />
    </div>
  );
}
