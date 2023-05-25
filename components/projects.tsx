import React from "react";

import Image from "next/image";
import { projects } from "@/constants/site";

const Projects = () => {
  return (
    <div className="mt-16 max-w-2xl mx-auto">
      <p className="text-2xl my-8">Projects</p>
      <div className="max-w-2xl mx-auto">
        {projects.map((project) => (
          <div className="flex items-start justify-between mx-2 my-8 group">
            <section className="flex">
              <Image
                className="object-cover"
                alt="Organization Logo"
                width={40}
                height={40}
                src={project.image}
              />
              <div className="ml-4">
                <a
                  className="group-hover:text-blue-500"
                  href={project.link}
                  target="__blank"
                >
                  {project.title}
                </a>
                <p className="text-sm mt-1">{project.description}</p>
              </div>
            </section>

            <span className="text-sm text-right w-44">
              {project.startDate} - {project.endDate}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
