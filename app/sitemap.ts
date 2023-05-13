import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.rukewejoseph.com",
      lastModified: new Date(),
    },
    {
      url: "https://www.rukewejoseph.com/blog",
      lastModified: new Date(),
    },
  ];
}
