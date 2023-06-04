import React from "react";

import Image from "next/image";
import { experience } from "@/constants/site";

const Experience = () => {
  return (
    <div className="mt-16 max-w-2xl px-1 mx-auto">
      <p className="text-2xl my-8">Experience</p>
      <div className="max-w-2xl mx-auto">
        {experience.map((exp) => (
          <div className="flex items-start justify-between mx-2 my-8 group">
            <section className="flex">
              <Image
                className="w-10 h-14 object-cover"
                alt="Organization Logo"
                width={40}
                height={40}
                src={exp.logo}
              />
              <div className="ml-4">
                <a
                  className="group-hover:text-blue-500"
                  href={exp.link}
                  target="__blank"
                >
                  {exp.company}
                </a>
                <p className="text-sm mt-1">{exp.title}</p>
              </div>
            </section>

            <span className="text-sm text-right w-56">
              {exp.startDate} - {exp.endDate}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
