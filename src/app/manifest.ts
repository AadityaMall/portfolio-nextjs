import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.titleDefault,
    short_name: siteConfig.name,
    description: siteConfig.description,
    start_url: "/",
    display: "standalone",
    background_color: "#000000",
    theme_color: "#000000",
    icons: [
      {
        src: siteConfig.icon192,
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: siteConfig.icon512,
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
