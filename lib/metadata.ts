import type { Metadata } from "next"

import { getDeployEnv, getSiteUrl } from "@/lib/env"

export const SITE_NAME = "SoFiCo Services Limited"

export function getGlobalRobotsMetadata(): Metadata["robots"] {
  const deployEnv = getDeployEnv()

  if (deployEnv !== "production") {
    return {
      index: false,
      follow: false,
      googleBot: {
        index: false,
        follow: false,
      },
    }
  }

  return {
    index: true,
    follow: true,
  }
}

export function createRootMetadata(): Metadata {
  const siteUrl = getSiteUrl()

  return {
    metadataBase: siteUrl,
    title: {
      default: `${SITE_NAME} | B2B Trade Operations`,
      template: `%s | ${SITE_NAME}`,
    },
    description:
      "B2B Trade Operations & Structured Coordination. Operational coordination, supplier alignment, and documentation support for cross-border trade.",
    applicationName: SITE_NAME,
    openGraph: {
      type: "website",
      siteName: SITE_NAME,
      title: {
        default: `${SITE_NAME} | B2B Trade Operations`,
        template: `%s | ${SITE_NAME}`,
      },
      description:
        "Operational coordination, supplier alignment, and documentation support for cross-border trade.",
      url: siteUrl,
      images: [
        {
          url: "/placeholder.jpg",
          width: 1200,
          height: 630,
          alt: SITE_NAME,
        },
      ],
    },
    robots: getGlobalRobotsMetadata(),
    icons: {
      icon: [
        {
          url: "/icon-light-32x32.png",
          media: "(prefers-color-scheme: light)",
        },
        {
          url: "/icon-dark-32x32.png",
          media: "(prefers-color-scheme: dark)",
        },
        {
          url: "/icon.svg",
          type: "image/svg+xml",
        },
      ],
      apple: "/apple-icon.png",
    },
  }
}
