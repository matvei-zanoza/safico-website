import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Shield, FileText, Globe, Users, Cog, Code } from "lucide-react"
import { VendorGrid } from "@/components/vendor-grid"

const services = [
  {
    title: "Structured Equipment Sourcing",
    description: "Coordinated approach to equipment procurement with verified supplier networks.",
    icon: Cog,
  },
  {
    title: "Supplier Coordination",
    description: "Alignment of supplier requirements and operational specifications.",
    icon: Users,
  },
  {
    title: "Commercial Alignment",
    description: "Documentation sequencing and process structuring for commercial alignment.",
    icon: FileText,
  },
  {
    title: "International Trade Structuring",
    description: "Operational coordination for cross-border trade documentation.",
    icon: Globe,
  },
  {
    title: "Cross-Border Operational Coordination",
    description: "Support for structured cross-border documentation workflows and documentation sequences.",
    icon: ArrowRight,
  },
  {
    title: "Software Development",
    description: "Custom software solutions for trade operations management.",
    icon: Code,
  },
]

const steps = [
  {
    step: "01",
    title: "Requirements Intake",
    description: "Initial consultation to understand operational requirements and objectives (non-binding).",
  },
  {
    step: "02",
    title: "Vendor Alignment",
    description: "Specification alignment and vendor identification based on stated requirements.",
  },
  {
    step: "03",
    title: "Documentation Sequencing",
    description: "Structured documentation preparation and workflow coordination.",
  },
  {
    step: "04",
    title: "Coordination Support",
    description: "Ongoing operational support throughout the coordination lifecycle.",
  },
]

export default function HomePage() {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="relative py-24 lg:py-36">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="eyebrow">B2B Trade Services</span>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-foreground lg:text-5xl text-balance" style={{ letterSpacing: '-0.02em' }}>
              Trade Operations & Structured Coordination
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-2xl">
              Operational coordination, supplier alignment, and documentation support 
              for cross-border trade. We provide structured coordination services for 
              B2B companies engaged in international commerce.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="rounded-lg">
                <Link href="/contact">
                  Request a Business Introduction
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-lg border-border hover:bg-muted hover:text-foreground">
                <Link href="/about">
                  Learn More
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-card border-y border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="eyebrow">Services</span>
            <h2 className="mt-3 text-3xl font-semibold text-foreground" style={{ letterSpacing: '-0.01em' }}>
              Services Overview
            </h2>
            <p className="mt-4 text-muted-foreground">
              Comprehensive operational coordination services for B2B trade activities.
            </p>
          </div>
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Card key={service.title} className="border border-border rounded-lg bg-background">
                <CardHeader>
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted border border-border">
                    <service.icon className="h-5 w-5 text-accent" />
                  </div>
                  <CardTitle className="mt-4 text-lg">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-12">
            <Button asChild variant="outline" className="rounded-lg border-border hover:bg-muted hover:text-foreground">
              <Link href="/services">
                View All Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="eyebrow">Process</span>
            <h2 className="mt-3 text-3xl font-semibold text-foreground" style={{ letterSpacing: '-0.01em' }}>
              How We Work
            </h2>
            <p className="mt-4 text-muted-foreground">
              A structured approach to operational coordination.
            </p>
          </div>
          <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-4">
            {steps.map((item, index) => (
              <div key={item.step} className="relative">
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-5 left-full w-full h-px bg-border -translate-x-1/2" />
                )}
                <div className="flex flex-col">
                  <span className="text-sm font-semibold text-accent">{item.step}</span>
                  <h3 className="mt-3 text-lg font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12">
            <Button asChild variant="outline" className="rounded-lg border-border hover:bg-muted hover:text-foreground">
              <Link href="/how-we-work">
                Learn More About Our Process
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Compliance Block */}
      <section className="py-20 bg-card border-y border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div className="flex items-start gap-5 max-w-2xl">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-muted border border-border">
                <Shield className="h-6 w-6 text-accent" />
              </div>
              <div>
                <span className="eyebrow">Compliance</span>
                <h2 className="mt-2 text-2xl font-semibold text-foreground">
                  Compliance-First Approach
                </h2>
                <p className="mt-3 text-muted-foreground leading-relaxed">
                  Our operations are structured with regulatory awareness and compliance 
                  considerations at their foundation. We maintain clear boundaries regarding 
                  our operational scope and regulatory positioning.
                </p>
              </div>
            </div>
            <Button asChild variant="outline" className="rounded-lg border-border hover:bg-muted hover:text-foreground shrink-0">
              <Link href="/compliance">
                View Compliance Information
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Vendors Preview */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="eyebrow">Network</span>
            <h2 className="mt-3 text-3xl font-semibold text-foreground" style={{ letterSpacing: '-0.01em' }}>
              Vendor Network
            </h2>
            <p className="mt-4 text-muted-foreground">
              Reference vendors for coordination purposes.
            </p>
          </div>
          <div className="mt-14">
            <VendorGrid dense />
          </div>
          <p className="mt-8 text-xs text-muted-foreground">
            Vendor list shown for reference purposes only. No authorization or partnership is implied.
          </p>
          <div className="mt-6">
            <Button asChild variant="outline" className="rounded-lg border-border hover:bg-muted hover:text-foreground">
              <Link href="/vendors">
                View All Vendors
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
