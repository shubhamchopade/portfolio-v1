"use client";
import React, { useEffect } from "react";
import { ModeToggle } from "./mode-toggle";
import Link from "next/link";
import { useWindowScroll } from "@/hooks/use-window-scroll";
import { TimerIcon } from "./icons";
import Pomodoro from "./pomodoro";

const Header = () => {
  const [scroll, scrollTo] = useWindowScroll();
  const isScrolled = scroll.y > 0;
  const [dots, setDots] = React.useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((dots) => (dots + 1) % 4);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <header className="my-8">
        <div
          className={`transition-opacity flex items-center justify-between px-4 ${
            isScrolled && "opacity-0"
          }`}
        >
          <div className="flex items-center justify-between">
            <ModeToggle />
            <Pomodoro />
          </div>
          <nav className="ml-8 text-sm font-medium space-x-6">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/posts">Blog</Link>
          </nav>
        </div>

        {/* init */}
        <div
          className={`fixed inset-x-0 bottom-8 flex items-center justify-between bg-white rounded-full bg-opacity-10 backdrop-blur-sm transition-transform ${
            isScrolled ? "max-w-xs" : "w-40"
          } mx-auto px-8 py-4 `}
        >
          <nav className={``}>
            <pre className={`${isScrolled ? "opacity-0 hidden" : ""}`}>
              init {".".repeat((dots + 1) % 4)}
            </pre>
            <div
              className={`transition-all flex items-center justify-between px-4 ${
                !isScrolled && "opacity-0 hidden"
              }`}
            >
              <ModeToggle />
              <nav className="ml-8 text-sm font-medium space-x-6">
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/posts">Blog</Link>
              </nav>
            </div>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Header;
