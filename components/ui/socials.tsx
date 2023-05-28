import React from "react";
import { Button, buttonVariants } from "./button";
import { Icons } from "../icons";
import { info } from "@/constants/site";

const Socials = () => {
  return (
    <div className="flex items-center justify-between max-w-sm">
      <a className="ml-6 w-4 h-4" href={info.linkedin}>
        <Icons.linkedin className="h-5 w-5" />
      </a>
      <a className="ml-6 w-4 h-4" href={info.github}>
        <Icons.github />
      </a>
      <a className="ml-6 w-4 h-4" href={info.twitter}>
        <Icons.twitter />
      </a>
      <Button variant={"outline"} className="ml-6 ">
        <Icons.download
          data-umami-event="resume-download"
          className="h-4 w-4"
        />
      </Button>
    </div>
  );
};

export default Socials;
