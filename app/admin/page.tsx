import type { Metadata } from "next"

import { Container } from "@/components/container"

export const metadata: Metadata = {
  title: "Admin",
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
}

export default function AdminPage() {
  return (
    <div className="bg-background">
      <section className="py-20 lg:py-28">
        <Container>
          <div className="max-w-3xl border border-border rounded-2xl p-8 bg-card">
            <h1 className="text-3xl font-semibold tracking-tight text-foreground">Admin</h1>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Restricted area. Placeholder admin.
            </p>
          </div>
        </Container>
      </section>
    </div>
  )
}
