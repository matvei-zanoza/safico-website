import type { Metadata } from "next"
import { ContactForm } from "@/components/contact-form"

export const metadata: Metadata = {
  title: "Contact | SoFiCo Services Limited",
  description: "Request a business introduction or contact SoFiCo Services Limited.",
}

export default function ContactPage() {
  return (
    <div className="bg-background">
      {/* Header Section */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="eyebrow">Get in Touch</span>
            <h1 className="mt-4 text-4xl font-semibold text-foreground lg:text-5xl text-balance" style={{ letterSpacing: '-0.02em' }}>
              Contact
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Request a business introduction or submit an inquiry. All communications 
              are conducted via corporate email only.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            {/* Form */}
            <div className="lg:col-span-7">
              <div className="border border-border rounded-lg p-8 bg-card">
                <h2 className="text-xl font-semibold text-foreground">
                  Business Inquiry Form
                </h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  Please complete the form below to submit an inquiry.
                </p>
                <ContactForm />
              </div>
            </div>

            {/* Information */}
            <div className="lg:col-span-5">
              <div className="space-y-5">
                <div className="border border-border rounded-lg p-6 bg-muted/50">
                  <h3 className="text-lg font-semibold text-foreground">
                    Communication Policy
                  </h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                    Communication is conducted via corporate email only. We do not 
                    accept inquiries via personal email addresses or social media channels.
                  </p>
                </div>

                <div className="border border-border rounded-lg p-6 bg-muted/50">
                  <h3 className="text-lg font-semibold text-foreground">
                    Response Time
                  </h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                    We review inquiries as part of our standard business operations.
                    Response times may vary depending on the nature and completeness of the inquiry.
                  </p>
                </div>

                <div className="border border-border rounded-lg p-6 bg-muted/50">
                  <h3 className="text-lg font-semibold text-foreground">
                    Inquiry Scope
                  </h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                    We accept inquiries related to operational coordination, supplier 
                    alignment, and trade documentation support services. We do not 
                    provide financial, legal, or regulatory advice.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-16 bg-card border-t border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-xs text-muted-foreground leading-relaxed max-w-4xl">
            Submission of an inquiry does not create a client relationship or contractual 
            obligation. All information provided will be handled in accordance with our 
            privacy policy. We reserve the right to decline inquiries at our discretion.
          </p>
        </div>
      </section>
    </div>
  )
}
