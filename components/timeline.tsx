import React from "react";
import { sortedTimeline } from "@/constants/site";

const Timeline = () => {
  return (
    <div className="mt-16 max-w-2xl mx-auto relative -z-10">
      <p className="text-2xl mb-8">Timeline</p>
      <div className="max-w-2xl ml-44">
        {sortedTimeline.map((item: any, index) => (
          <div className="flex items-start justify-between mx-2 mt-4 mb-12 group">
            <div className="absolute left-0">
              <p className="text-xs uppercase font-serif text-right mb-2">
                {item.endDate === "current" ? "current" : item.timelineDate}
              </p>
              <p className="-mt-4">__________________</p>
              {index != sortedTimeline.length - 1 && (
                <>
                  {" "}
                  <p className="-mt-2 opacity-25">_</p>
                  <p className="-mt-2 opacity-25">_</p>
                  <p className="-mt-2 opacity-25">_</p>
                  <p className="-mt-2 opacity-25">_</p>
                  <p className="-mt-2 opacity-25">_</p>
                  <p className="-mt-2 opacity-25">_</p>
                </>
              )}
            </div>
            <section className="flex pt-3">
              {item.type === "education" && (
                <div>
                  <a
                    className="group-hover:text-blue-500"
                    href={item.link}
                    target="__blank"
                  >
                    {item.university}
                  </a>
                  <p className="text-sm mt-1">{item.note}</p>
                </div>
              )}
              {item.type === "experience" && (
                <div>
                  <a
                    className="group-hover:text-blue-500"
                    href={item.link}
                    target="__blank"
                  >
                    {item.company}
                  </a>
                  <p className="text-sm mt-1">{item.note}</p>
                </div>
              )}
              {item.type === "project" && (
                <div>
                  <a
                    className="group-hover:text-blue-500"
                    href={item.link}
                    target="__blank"
                  >
                    {item.title}
                  </a>
                  <p className="text-sm mt-1">{item.note}</p>
                </div>
              )}
            </section>
            {/* <span className="text-sm w-64">{item.description}</span> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
