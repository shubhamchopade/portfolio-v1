import React from "react";
import { Button, buttonVariants } from "./button";
import { Icons } from "../icons";
import { info } from "@/constants/site";

const Socials = () => {
  return (
    <div className="flex items-center justify-center max-w-xs mx-auto mt-4">
      <a
        data-umami-event="social-linkedin"
        className="mt-1 ml-6 w-4 h-4"
        href={info.linkedin}
      >
        <Icons.linkedin className="h-5 w-5" />
      </a>
      <a
        data-umami-event="social-github"
        className="ml-6 w-4 h-4"
        href={info.github}
      >
        <Icons.github />
      </a>
      <a
        data-umami-event="social-twitter"
        className="ml-6 w-4 h-4"
        href={info.twitter}
      >
        <Icons.twitter />
      </a>
      {/* <a
        className=""
        data-umami-event="resume-download"
        href="/ShubhamChopade_Resume-07-04-2023.pdf"
      >
        <Icons.download className="ml-6 mt-1 h-6 w-6" />
      </a> */}
    </div>
  );
};

export default Socials;
