import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.rukewejoseph.com",
    },
    {
      url: "https://www.rukewejoseph.com/blog",
      lastModified: new Date(),
    },
  ];
}
