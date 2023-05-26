import React from "react";

import Image from "next/image";
import { projects } from "@/constants/site";

const Projects = () => {
  return (
    <div className="mt-16 mx-auto">
      <p className="text-2xl my-8 text-center">Projects</p>
      <div className="">
        {projects.map((project) => (
          <div className="flex items-start justify-center mx-2 my-8 group">
            <section className="sm:flex border p-4 rounded">
              <Image
                className="object-cover"
                alt="Organization Logo"
                width={400}
                height={300}
                src={project.image}
              />
              <div className="sm:ml-4 sm:mt-0 mt-4">
                <a
                  className="group-hover:text-blue-500 font-bold text-xl"
                  href={project.link}
                  target="__blank"
                >
                  {project.title}
                </a>
                <p className="text-xs mt-2 text-secondary-foreground">
                  {project.startDate} - {project.endDate}
                </p>
                <p className="text-sm max-w-xl mt-4">{project.description}</p>
                <div className="flex">
                  {project.techStack.map((tech) => (
                    <span className="text-xs text-secondary-foreground bg-secondary-background rounded-full mr-2 mt-4">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </section>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
