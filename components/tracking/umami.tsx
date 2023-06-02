"use client";

import React from "react";
import { Icons } from "../icons";

const URL = process.env.NEXT_PUBLIC_UMAMI_API_URL;

interface Props {
  path: string;
}

const Umami = (props: Props) => {
  const [views, setViews] = React.useState(0);
  const getWebsites = async () => {
    const res = await fetch(
      `${URL}/websites/${
        process.env.NEXT_PUBLIC_UMAMI_ID
      }/stats?startAt=0&endAt=${Date.now()}&url=${props.path}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_UMAMI_TOKEN}`,
        },
      }
    );
    const data = await res.json();
    setViews(data.pageviews.value);
  };

  React.useEffect(() => {
    getWebsites();
  }, []);

  return (
    <div className="sm:fixed flex items-center left-40">
      <Icons.eye className="h-4 w-4" />
      <span className="ml-2">{views}</span>
    </div>
  );
};

export default Umami;
