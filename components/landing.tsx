import React from "react";

import { info } from "@/constants/site";
import Chatbox from "./chat/chatbox";
import Socials from "./ui/socials";

const Landing = () => {
  return (
    <div className="">
      {/* Basic Description */}
      <div className="w-full text-center mt-16 grid place-content-center">
        <h1 className="sm:text-6xl text-4xl font-black">
          Hi, I am <span className="text-blue-500">{info.name}</span>
        </h1>

        <h2 className="text-2xl mt-2">{info.title}</h2>
        <p className="text-base mt-4 max-w-lg px-4  mx-auto">{info.bio}</p>
        <Socials />
        <Chatbox />
      </div>
    </div>
  );
};

export default Landing;
