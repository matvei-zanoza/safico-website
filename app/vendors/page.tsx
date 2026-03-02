import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { VendorGrid } from "@/components/vendor-grid"

export const metadata: Metadata = {
  title: "Vendors | SoFiCo Services Limited",
  description: "Reference vendor network for coordination purposes.",
}

export default function VendorsPage() {
  return (
    <div className="bg-background">
      {/* Header Section */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="eyebrow">Partners</span>
            <h1 className="mt-4 text-4xl font-semibold text-foreground lg:text-5xl text-balance" style={{ letterSpacing: '-0.02em' }}>
              Vendor Network
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Reference vendors for coordination purposes. Our vendor coordination 
              services help align supplier capabilities with operational requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Vendor Grid */}
      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <VendorGrid />

          {/* Disclaimer */}
          <div className="mt-14 border border-border rounded-lg p-6 bg-muted/50">
            <p className="text-sm text-muted-foreground leading-relaxed">
              Vendor list shown for reference purposes only. No authorization or partnership 
              is implied. The inclusion of any vendor in this list does not constitute an 
              endorsement, recommendation, or representation of any commercial relationship. 
              Vendor availability and capabilities are subject to change without notice.
            </p>
          </div>
        </div>
      </section>

      {/* Additional Information */}
      <section className="py-20 bg-card border-y border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <div className="border border-border rounded-lg p-6 bg-background">
              <h2 className="text-lg font-semibold text-foreground">
                Vendor Coordination
              </h2>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                Our vendor coordination services help align supplier capabilities with 
                your operational requirements. We facilitate communication and 
                documentation between parties involved in trade activities.
              </p>
            </div>
            <div className="border border-border rounded-lg p-6 bg-background">
              <h2 className="text-lg font-semibold text-foreground">
                Specification Alignment
              </h2>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                We support the documentation and alignment of technical specifications 
                between your organization and potential vendors. This includes 
                requirement structuring and communication facilitation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild className="rounded-lg">
              <Link href="/contact">
                Request Vendor Information
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
