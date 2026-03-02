import type { MetadataRoute } from "next"

import { getSiteUrl } from "@/lib/env"

export default function robots(): MetadataRoute.Robots {
  const siteUrl = getSiteUrl()

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/catalog", "/catalog/", "/admin", "/admin/"],
      },
    ],
    sitemap: new URL("/sitemap.xml", siteUrl).toString(),
  }
}
