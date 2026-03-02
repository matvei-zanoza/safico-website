import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "Cookie Policy for SoFiCo Services Limited.",
}

const sections = [
  {
    title: "1. Introduction",
    content: [
      'This Cookie Policy explains how SoFiCo Services Limited ("Company," "we," "us," or "our") uses cookies and similar technologies on our website.',
      "We do not use analytics or advertising trackers.",
    ],
  },
  {
    title: "2. What Are Cookies",
    content: [
      "Cookies are small text files stored on your device when you visit a website.",
      "Cookies may be session-based (deleted when you close your browser) or persistent (stored for longer periods).",
    ],
  },
  {
    title: "3. Cookies We Use",
    content: [
      "We use only cookies that are necessary for core website functionality and security.",
      "If we introduce optional cookies in the future, we will update this policy accordingly.",
    ],
  },
  {
    title: "4. Managing Cookies",
    content: [
      "Most browsers allow you to manage cookie preferences through settings.",
      "If you disable cookies, some website features may not function as intended.",
    ],
  },
  {
    title: "5. Contact Information",
    content: [
      "For questions regarding this Cookie Policy, please contact us at: contact@sofico.example (placeholder)",
    ],
  },
]

export default function CookiePolicyPage() {
  return (
    <div className="bg-background">
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-semibold tracking-tight text-foreground lg:text-5xl text-balance">
              Cookie Policy
            </h1>
            <p className="mt-6 text-sm text-muted-foreground">Last updated: [Date placeholder]</p>
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl space-y-10">
            {sections.map((section) => (
              <div key={section.title}>
                <h2 className="text-xl font-semibold text-foreground">{section.title}</h2>
                <div className="mt-4 space-y-3">
                  {section.content.map((paragraph, index) => (
                    <p key={index} className="text-muted-foreground leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-muted/30 border-t border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-wrap gap-6">
            <Link
              href="/privacy-policy"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-of-use"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Terms of Use
            </Link>
            <Link
              href="/compliance"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Compliance
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
