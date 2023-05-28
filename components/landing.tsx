"use client";

import Image from "next/image";
import React from "react";
import { Button, buttonVariants } from "./ui/button";
import { Icons } from "./icons";
import { Input } from "@/src/components/ui/input";
import { Label } from "@/src/components/ui/label";
import { info } from "@/constants/site";

const Landing = () => {
  const [content, setContent] = React.useState("");
  const sendData = async () => {
    const res = await fetch("/api/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        content,
      }),
    });
    const data = await res.json();
    console.log(data);
  };
  return (
    <div className="">
      {/* Basic Description */}
      <div className="w-full text-center h-96 grid place-content-center">
        <h1 className="sm:text-6xl text-4xl font-black">
          Hi, I am <span className="text-blue-500">{info.name}</span>
        </h1>
        <h2 className="text-2xl mt-2">{info.title}</h2>
        <p className="text-base mt-4 max-w-lg  mx-auto">{info.bio}</p>

        <div className="mt-8 max-w-sm mx-auto relative group">
          <div className="flex  ">
            <Input
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className=""
              name="note"
              placeholder={`Hi ${info.name.split(" ")[0]}, this is ...`}
            />
            <Button
              data-umami-event="send-message"
              disabled={content.length === 0}
              className="ml-4"
              onClick={sendData}
            >
              Send{" "}
              <Icons.send className="w-4 h-4 ml-4 transition-transform group-hover:rotate-45" />
            </Button>
          </div>
          <p className="absolute -bottom-16 sm:-left-40 -left-16 rotate-3 font-serif transition-transform group-hover:text-pink-500 group-hover:rotate-12">
            Send me a direct message
          </p>
        </div>
      </div>
    </div>
  );
};

export default Landing;
