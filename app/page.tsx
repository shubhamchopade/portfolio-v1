import { allPosts } from "@/.contentlayer/generated";
import Education from "@/components/education";
import Experience from "@/components/experience";
import Landing from "@/components/landing";
import Pomodoro from "@/components/pomodoro";
import Projects from "@/components/projects";
import Link from "next/link";

export default function Home() {
  return (
    <div className="">
      <Landing />
      <Projects />
      <Education />
      <Experience />
    </div>
  );
}
