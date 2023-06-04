import { allPosts } from "@/.contentlayer/generated";
import Education from "@/components/education";
import Experience from "@/components/experience";
import Landing from "@/components/landing";
import Pomodoro from "@/components/pomodoro";
import Projects from "@/components/projects";
import Timeline from "@/components/timeline";
import Link from "next/link";
import { metadata } from "./layout";

export default function Home() {
  return (
    <div className="">
      <meta property="og:image" content="/banner.jpeg" />
      <meta property="og:image:type" content="jpeg" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="400" />

      <meta property="og:title" content={metadata.title} />
      <meta property="og:description" content={metadata.description} />
      <meta property="og:url" content="https://shubhamchopade.com" />
      <Landing />
      <Projects />
      <Education />
      <Experience />
      <Timeline />
    </div>
  );
}
