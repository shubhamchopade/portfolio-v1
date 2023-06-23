import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://shubhamchopade.com",
      lastModified: new Date(),
    },
    {
      url: "https://shubhamchopade.com/about",
      lastModified: new Date(),
    },
    {
      url: "https://shubhamchopade.com/posts",
      lastModified: new Date(),
    },
    {
      url: "https://www.shubhamchopade.com/posts/ui-components-part-1",
      lastModified: new Date(),
    },
    {
      url: "https://www.shubhamchopade.com/posts/timezone-converter-custom-meta-images",
      lastModified: new Date(),
    },
    {
      url: "https://www.shubhamchopade.com/posts/host-any-application-behind-traefik",
      lastModified: new Date(),
    },
    {
      url: "https://www.shubhamchopade.com/posts/difference-between-put-and-patch",
      lastModified: new Date(),
    },
    {
      url: "https://www.shubhamchopade.com/posts/sorting-array-of-objects",
      lastModified: new Date(),
    },
  ];
}
