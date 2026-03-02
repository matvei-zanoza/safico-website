import type { Metadata } from "next"
import Link from "next/link"
import { redirect } from "next/navigation"

export const metadata: Metadata = {
  title: "Terms of Use | SoFiCo Services Limited",
  description: "Terms of Use for SoFiCo Services Limited.",
}

const sections = [
  {
    title: "1. Acceptance of Terms",
    content: [
      "By accessing or using the website and services of SoFiCo Services Limited (\"Company,\" \"we,\" \"us,\" or \"our\"), you agree to be bound by these Terms of Use.",
      "If you do not agree to these terms, you should not access or use our website or services.",
    ],
  },
  {
    title: "2. Description of Services",
    content: [
      "SoFiCo Services Limited provides operational coordination and documentation support services for B2B trade activities.",
      "Our services are limited to coordination, documentation support, and operational structuring. We are not a licensed financial institution and do not provide banking, payment, or custody services.",
    ],
  },
  {
    title: "3. Use of Website",
    content: [
      "You agree to use this website only for lawful purposes and in accordance with these Terms of Use.",
      "You agree not to:",
      "• Use the website in any way that violates applicable laws or regulations",
      "• Attempt to gain unauthorized access to any portion of the website",
      "• Use the website to transmit malicious software or harmful code",
      "• Interfere with the proper functioning of the website",
    ],
  },
  {
    title: "4. Intellectual Property",
    content: [
      "All content on this website, including text, graphics, logos, and images, is the property of SoFiCo Services Limited or its licensors and is protected by applicable intellectual property laws.",
      "You may not reproduce, distribute, or create derivative works from this content without our express written permission.",
    ],
  },
  {
    title: "5. No Professional Advice",
    content: [
      "The information provided on this website and through our services is for general informational purposes only.",
      "Nothing on this website constitutes legal, financial, tax, or regulatory advice. You should consult with appropriate professionals regarding your specific circumstances.",
    ],
  },
  {
    title: "6. Limitation of Liability",
    content: [
      "To the fullest extent permitted by applicable law, SoFiCo Services Limited shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or relating to your use of our website or services.",
      "Our total liability for any claims arising out of or relating to these terms shall not exceed the amounts paid by you, if any, for services during the twelve months prior to the claim.",
    ],
  },
  {
    title: "7. Disclaimer of Warranties",
    content: [
      "This website and our services are provided \"as is\" and \"as available\" without warranties of any kind, either express or implied.",
      "We do not warrant that the website will be uninterrupted, error-free, or free of harmful components.",
    ],
  },
  {
    title: "8. Indemnification",
    content: [
      "You agree to indemnify and hold harmless SoFiCo Services Limited and its officers, directors, employees, and agents from any claims, damages, losses, or expenses arising out of your violation of these Terms of Use or your use of our website or services.",
    ],
  },
  {
    title: "9. Governing Law",
    content: [
      "These Terms of Use shall be governed by and construed in accordance with the laws of [Jurisdiction placeholder], without regard to its conflict of law provisions.",
    ],
  },
  {
    title: "10. Modifications",
    content: [
      "We reserve the right to modify these Terms of Use at any time. Any changes will be effective immediately upon posting on this website.",
      "Your continued use of our website or services after any modifications constitutes your acceptance of the revised terms.",
    ],
  },
  {
    title: "11. Contact Information",
    content: [
      "For questions regarding these Terms of Use, please contact us at: contact@sofico.example (placeholder)",
    ],
  },
]

export default function TermsPage() {
  redirect("/terms-of-use")

  return (
    <div className="bg-background">
      {/* Header Section */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-semibold tracking-tight text-foreground lg:text-5xl text-balance">
              Terms of Use
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
              href="/cookies"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Cookie Policy
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
