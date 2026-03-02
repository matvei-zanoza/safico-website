import type { Metadata } from "next"
import Link from "next/link"
import { redirect } from "next/navigation"

export const metadata: Metadata = {
  title: "Cookie Policy | SoFiCo Services Limited",
  description: "Cookie Policy for SoFiCo Services Limited.",
}

const sections = [
  {
    title: "1. Introduction",
    content: [
      "This Cookie Policy explains how SoFiCo Services Limited (\"Company,\" \"we,\" \"us,\" or \"our\") uses cookies and similar technologies on our website.",
      "By using our website, you consent to the use of cookies as described in this policy.",
    ],
  },
  {
    title: "2. What Are Cookies",
    content: [
      "Cookies are small text files that are stored on your device when you visit a website. They are widely used to make websites work more efficiently and to provide information to website owners.",
      "Cookies can be \"persistent\" or \"session\" cookies. Persistent cookies remain on your device after you close your browser, while session cookies are deleted when you close your browser.",
    ],
  },
  {
    title: "3. Types of Cookies We Use",
    content: [
      "We may use the following types of cookies:",
      "• Essential Cookies: These cookies are necessary for the website to function properly and cannot be disabled.",
      "• Functional Cookies: These cookies may enable basic preferences required for core site features.",
    ],
  },
  {
    title: "4. Third-Party Cookies",
    content: [
      "We do not use third-party analytics or advertising trackers.",
      "If third-party services are introduced in the future, this policy will be updated accordingly.",
    ],
  },
  {
    title: "5. Managing Cookies",
    content: [
      "Most web browsers allow you to manage your cookie preferences. You can set your browser to refuse cookies or to alert you when cookies are being sent.",
      "Please note that if you disable cookies, some features of our website may not function properly.",
      "For more information about how to manage cookies, please refer to your browser's help documentation.",
    ],
  },
  {
    title: "6. Changes to This Policy",
    content: [
      "We may update this Cookie Policy from time to time. Any changes will be posted on this page with an updated revision date.",
      "We encourage you to review this policy periodically to stay informed about our use of cookies.",
    ],
  },
  {
    title: "7. Contact Information",
    content: [
      "For questions regarding this Cookie Policy, please contact us at: contact@sofico.example (placeholder)",
    ],
  },
]

export default function CookiesPage() {
  redirect("/cookie-policy")

  return (
    <div className="bg-background">
      {/* Header Section */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-semibold tracking-tight text-foreground lg:text-5xl text-balance">
              Cookie Policy
            </h1>
            <p className="mt-6 text-sm text-muted-foreground">
              Last updated: [Date placeholder]
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="pb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl space-y-10">
            {sections.map((section) => (
              <div key={section.title}>
                <h2 className="text-xl font-semibold text-foreground">
                  {section.title}
                </h2>
                <div className="mt-4 space-y-3">
                  {section.content.map((paragraph, index) => (
                    <p
                      key={index}
                      className="text-muted-foreground leading-relaxed"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Links */}
      <section className="py-12 bg-muted/30 border-t border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-wrap gap-6">
            <Link
              href="/privacy"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
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
