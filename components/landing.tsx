import Image from "next/image";
import React from "react";
import { Button, buttonVariants } from "./ui/button";
import { Icons } from "./icons";
import { Input } from "@/src/components/ui/input";
import { Label } from "@/src/components/ui/label";

const Landing = () => {
  return (
    <div className="">
      {/* Basic Description */}
      <div className="w-full text-center h-96 grid place-content-center">
        <h1 className="text-6xl font-black">
          Hi, I am <span className="text-blue-500">Shubham</span>
        </h1>
        <p className="text-base mt-4">
          a software engineer based in New York experienced in building web
          applications, mobile applications and backend services.
        </p>

        <div className="mt-8 max-w-sm mx-auto relative group">
          <div className="flex  ">
            <Input
              className=""
              name="note"
              placeholder="Hi shubham, this is ..."
            />
            <Button className="ml-4">
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
