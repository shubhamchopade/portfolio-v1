import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";

const Landing = () => {
  return (
    <div className="lg:flex items-center justify-between">
      {/* Basic Description */}
      <div className="prose dark:prose-invert">
        <h1 className="">
          Hi, I am <span className="text-blue-500">Shubham</span>
        </h1>
        <p>
          I am a software engineer based in New York. I am a full stack
          developer with experience in building web applications using React,
          Node, Express, MongoDB and other technologies.
        </p>
        <div className="flex justify-between max-w-sm mt-4">
          <a href="https://linkedin.com/in/shubham-chopade">Linkedin</a>
          <a href="https://github.com/shubhamchopade">Github</a>
          <a href="https://twitter.com/chopadehsubham4">Twitter</a>
        </div>

        <div className="flex mt-8">
          <Button className="">Contact me</Button>
        </div>
      </div>

      {/* Cover Photo */}
      <div className="mt-8">
        <Image
          className="object-cover md:w-3/4 w-full mx-auto"
          alt="Portfolio Cover Photo"
          src="/shubham-graduation.jpg"
          width={1000}
          height={1000}
        />
      </div>
    </div>
  );
};

export default Landing;
