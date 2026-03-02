import type { Metadata } from "next"
import Link from "next/link"
import { redirect } from "next/navigation"

export const metadata: Metadata = {
  title: "Privacy Policy | SoFiCo Services Limited",
  description: "Privacy Policy for SoFiCo Services Limited.",
}

const sections = [
  {
    title: "1. Introduction",
    content: [
      "This Privacy Policy describes how SoFiCo Services Limited (\"Company,\" \"we,\" \"us,\" or \"our\") collects, uses, and shares information in connection with our services and website.",
      "By accessing our website or using our services, you acknowledge that you have read and understood this Privacy Policy.",
    ],
  },
  {
    title: "2. Information We Collect",
    content: [
      "We may collect information that you provide directly to us, including but not limited to:",
      "• Company name and registration details",
      "• Contact person name and title",
      "• Corporate email address",
      "• Business inquiry details and correspondence",
      "• Any other information you choose to provide",
      "We may also collect certain information automatically when you visit our website, including IP address, browser type, and usage data.",
    ],
  },
  {
    title: "3. Use of Information",
    content: [
      "We use the information we collect for the following purposes:",
      "• To respond to your inquiries and provide our services",
      "• To communicate with you regarding our services",
      "• To maintain records in accordance with our business and legal obligations",
      "• To conduct due diligence as required for our business relationships",
      "• To comply with applicable laws and regulations",
    ],
  },
  {
    title: "4. Information Sharing",
    content: [
      "We may share your information in the following circumstances:",
      "• With service providers who assist us in operating our business",
      "• To comply with legal obligations or respond to lawful requests",
      "• To protect our rights, privacy, safety, or property",
      "• In connection with a business reorganization such as a merger or acquisition",
      "We do not sell your personal information to third parties.",
    ],
  },
  {
    title: "5. Data Retention",
    content: [
      "We retain information for as long as necessary to fulfill the purposes for which it was collected, comply with our legal obligations, resolve disputes, and enforce our agreements.",
      "The retention period may vary depending on the context of our interactions with you and the specific legal requirements applicable to our business.",
    ],
  },
  {
    title: "6. Data Security",
    content: [
      "We implement appropriate technical and organizational measures designed to protect the information we collect. However, no method of transmission over the Internet or electronic storage is completely secure.",
      "We cannot guarantee the absolute security of your information.",
    ],
  },
  {
    title: "7. Your Rights",
    content: [
      "Depending on your jurisdiction, you may have certain rights regarding your personal information, including the right to access, correct, or delete your information.",
      "To exercise any applicable rights, please contact us using the information provided below.",
    ],
  },
  {
    title: "8. Changes to This Policy",
    content: [
      "We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the updated policy on our website.",
      "Your continued use of our services after any changes constitutes your acceptance of the updated policy.",
    ],
  },
  {
    title: "9. Contact Information",
    content: [
      "For questions regarding this Privacy Policy, please contact us at: contact@sofico.example (placeholder)",
    ],
  },
]

export default function PrivacyPage() {
  redirect("/privacy-policy")

  return (
    <div className="bg-background">
      {/* Header Section */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-semibold tracking-tight text-foreground lg:text-5xl text-balance">
              Privacy Policy
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
              href="/terms"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Terms of Use
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
