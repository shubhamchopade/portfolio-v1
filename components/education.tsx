import React from "react";

import Image from "next/image";
import { education } from "@/constants/site";

const Education = () => {
  return (
    <div className="mt-16 max-w-2xl mx-auto">
      <p className="text-2xl my-8">Education</p>
      <div className="max-w-2xl mx-auto">
        {education.map((edu) => (
          <div className="flex items-start justify-between mx-2 my-8 group">
            <section className="flex">
              <Image
                className="object-cover"
                alt="Organization Logo"
                width={40}
                height={40}
                src={edu.logo}
              />
              <div className="ml-4">
                <a
                  className="group-hover:text-blue-500"
                  href={edu.link}
                  target="__blank"
                >
                  {edu.university}
                </a>
                <p className="text-sm mt-1">{edu.degree}</p>
              </div>
            </section>

            <span className="text-sm text-right w-44">
              {edu.startDate} - {edu.endDate}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
