"use client";
import React, { useEffect } from "react";
import { Button } from "./ui/button";
import { Icons } from "./icons";

// Run the pomodoro timer for 25 minutes and then stop
// The timer should start when the user clicks on the start button

const Pomodoro = () => {
  const [seconds, setSeconds] = React.useState(0);
  const [start, setStart] = React.useState(false);
  const [show, setShow] = React.useState(false);

  useEffect(() => {
    if (seconds === 1500 || start === false) {
      setSeconds(0);
      setStart(false);
    }
  }, [seconds]);

  useEffect(() => {
    if (start) {
      setSeconds(0);
    }
  }, [start]);

  useEffect(() => {
    const timer = setInterval(() => {
      start && setSeconds((seconds) => seconds + 1);
    }, 1000);

    return () => {
      timer && clearInterval(timer);
    };
  }, [start]);

  return (
    <div className="flex items-center">
      <Icons.timer
        onClick={() => setShow(!show)}
        className={`cursor-pointer ml-4 ${
          start ? "animate-pulse text-green-500" : "animate-bounce"
        }`}
      />
      {show && (
        <div className="flex mx-auto">
          <div className="flex items-center mx-4">
            <p>Pomodoro Timer</p>
            {/* Minutes */}
            <h1 className="text-2xl font-bold mx-3 text-pink-700">
              {Math.floor(seconds / 60)} :
            </h1>
            {/* Seconds */}
            <h1 className="text-2xl">
              {Math.round(seconds % 60) < 10 && "0"}
              {Math.round(seconds % 60)}
            </h1>
          </div>

          {/* Button */}
          <div className="flex items-center justify-center">
            {seconds && !start ? (
              <Button
                className="p-2"
                size={"rounded"}
                onClick={() => {
                  setStart(false);
                  setSeconds(0);
                }}
              >
                <Icons.reset />
              </Button>
            ) : (
              <Button
                size={"rounded"}
                variant={"success"}
                className={`${start && "hidden"}`}
                onClick={() => {
                  setStart(true);
                }}
              >
                <Icons.start />
              </Button>
            )}

            {start && (
              <Button
                size={"rounded"}
                variant={"destructive"}
                onClick={() => setStart(false)}
              >
                <Icons.stop />
              </Button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Pomodoro;
