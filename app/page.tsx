import Education from "@/components/education";
import Experience from "@/components/experience";
import Landing from "@/components/landing";
import Projects from "@/components/projects";
import Timeline from "@/components/timeline";

export default function Home() {
  return (
    <div className="ghb">
      <Landing />
      <Projects />
      <Education />
      <Experience />
      <Timeline />
    </div>
  );
}
