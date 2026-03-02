import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Shield, AlertTriangle, FileSearch, UserCheck } from "lucide-react"

export const metadata: Metadata = {
  title: "How We Work | SoFiCo Services Limited",
  description: "Our structured approach to operational coordination for B2B trade.",
}

const steps = [
  {
    step: "01",
    title: "Requirements Intake",
    subtitle: "(Non-binding)",
    description:
      "Initial consultation to understand operational requirements and objectives. We gather information about your trade coordination needs and assess alignment with our service capabilities.",
    details: [
      "Initial consultation and requirement gathering",
      "Assessment of coordination needs",
      "Scope definition and expectation alignment",
      "Non-binding preliminary evaluation",
    ],
  },
  {
    step: "02",
    title: "Vendor and Specification Alignment",
    subtitle: "",
    description:
      "Identification and alignment of vendor capabilities with your stated requirements. This includes specification documentation and preliminary vendor coordination.",
    details: [
      "Vendor identification based on requirements",
      "Specification documentation",
      "Capability alignment assessment",
      "Preliminary coordination activities",
    ],
  },
  {
    step: "03",
    title: "Documentation Sequencing",
    subtitle: "",
    description:
      "Structured preparation and sequencing of documentation required for trade coordination. This includes workflow documentation and process structuring.",
    details: [
      "Documentation workflow preparation",
      "Process sequencing and structuring",
      "Coordination documentation",
      "Timeline and milestone alignment",
    ],
  },
  {
    step: "04",
    title: "Coordination Support",
    subtitle: "",
    description:
      "Ongoing operational support throughout the coordination lifecycle. We provide coordination assistance and documentation support as required.",
    details: [
      "Ongoing coordination assistance",
      "Documentation support",
      "Multi-party communication facilitation",
      "Process monitoring and updates",
    ],
  },
]

const complianceCheckpoints = [
  {
    title: "Sanctions Screening",
    description: "Awareness of applicable sanctions regimes and screening considerations.",
    icon: Shield,
  },
  {
    title: "Export Control Awareness",
    description: "Consideration of export control requirements and documentation needs.",
    icon: AlertTriangle,
  },
  {
    title: "End-Use / End-User Review",
    description: "Documentation support for end-use and end-user verification processes.",
    icon: UserCheck,
  },
]

export default function HowWeWorkPage() {
  return (
    <div className="bg-background">
      {/* Header Section */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="eyebrow">Our Process</span>
            <h1 className="mt-4 text-4xl font-semibold text-foreground lg:text-5xl text-balance" style={{ letterSpacing: '-0.02em' }}>
              How We Work
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              A structured approach to operational coordination. Our process is designed 
              to provide clear, documented support throughout the trade coordination lifecycle.
            </p>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
            {/* Steps */}
            <div className="lg:col-span-8">
              <div className="space-y-6">
                {steps.map((step, index) => (
                  <div
                    key={step.step}
                    className="border border-border rounded-lg p-8 bg-card"
                  >
                    <div className="flex items-start gap-6">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground font-semibold text-lg">
                        {step.step}
                      </div>
                      <div className="flex-1">
                        <h2 className="text-xl font-semibold text-foreground">
                          {step.title}
                          {step.subtitle && (
                            <span className="ml-2 text-sm font-normal text-muted-foreground">
                              {step.subtitle}
                            </span>
                          )}
                        </h2>
                        <p className="mt-3 text-muted-foreground leading-relaxed">
                          {step.description}
                        </p>
                        <ul className="mt-6 space-y-2">
                          {step.details.map((detail) => (
                            <li
                              key={detail}
                              className="flex items-center gap-2 text-sm text-muted-foreground"
                            >
                              <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                              {detail}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Compliance Checkpoints Sidebar */}
            <div className="lg:col-span-4">
              <div className="sticky top-24 border border-border rounded-lg p-6 bg-card">
                <div className="flex items-center gap-3 mb-6">
                  <FileSearch className="h-5 w-5 text-accent" />
                  <h3 className="text-lg font-semibold text-foreground">
                    Compliance Checkpoints
                  </h3>
                </div>
                <div className="space-y-6">
                  {complianceCheckpoints.map((checkpoint) => (
                    <div key={checkpoint.title} className="flex items-start gap-3">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-muted border border-border">
                        <checkpoint.icon className="h-4 w-4 text-accent" />
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-foreground">
                          {checkpoint.title}
                        </h4>
                        <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                          {checkpoint.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-8 pt-6 border-t border-border">
                  <Button asChild variant="outline" className="w-full rounded-lg border-border hover:bg-muted hover:text-foreground">
                    <Link href="/compliance">
                      View Full Compliance Information
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-card border-t border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild className="rounded-lg">
              <Link href="/contact">
                Start a Conversation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" className="rounded-lg border-border hover:bg-muted hover:text-foreground">
              <Link href="/services">
                View Our Services
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
