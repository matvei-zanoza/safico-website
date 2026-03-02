import type { Metadata } from "next"

import { Container } from "@/components/container"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table"
import { getCatalogItemBySku } from "@/content/catalog"
import { getCatalogAccessKey } from "@/lib/env"

export const metadata: Metadata = {
  title: "Catalog Item",
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
}

type Props = {
  params: { sku: string }
  searchParams?: Record<string, string | string[] | undefined>
}

function getKey(searchParams?: Props["searchParams"]): string | undefined {
  const raw = searchParams?.k
  return typeof raw === "string" ? raw : undefined
}

export default function CatalogItemPage({ params, searchParams }: Props) {
  const requiredKey = getCatalogAccessKey()
  const key = getKey(searchParams)
  const allowed = !!requiredKey && key === requiredKey

  if (!allowed) {
    return (
      <div className="bg-background">
        <section className="py-20 lg:py-28">
          <Container>
            <div className="max-w-3xl border border-border rounded-2xl p-8 bg-card">
              <h1 className="text-2xl font-semibold text-foreground">Restricted Access</h1>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                This reference card is available only via a direct link with a valid key.
              </p>
            </div>
          </Container>
        </section>
      </div>
    )
  }

  const item = getCatalogItemBySku(params.sku)

  if (!item) {
    return (
      <div className="bg-background">
        <section className="py-20 lg:py-28">
          <Container>
            <div className="max-w-3xl border border-border rounded-2xl p-8 bg-card">
              <h1 className="text-2xl font-semibold text-foreground">Not Found</h1>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                No catalog reference card found for this identifier.
              </p>
            </div>
          </Container>
        </section>
      </div>
    )
  }

  return (
    <div className="bg-background">
      <section className="py-20 lg:py-28">
        <Container>
          <div className="max-w-4xl">
            <h1 className="text-4xl font-semibold tracking-tight text-foreground lg:text-5xl text-balance">
              {item.sku}
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Restricted reference card
            </p>
          </div>
        </Container>
      </section>

      <section className="pb-20">
        <Container>
          <Card className="border border-border rounded-2xl overflow-hidden">
            <div className="aspect-[16/6] bg-muted" aria-hidden="true" />
            <CardHeader>
              <CardTitle className="text-lg">{item.name}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-8">
              <p className="text-muted-foreground leading-relaxed">{item.description}</p>

              <div>
                <h2 className="text-sm font-semibold text-foreground">Specifications</h2>
                <div className="mt-4 border border-border rounded-xl overflow-hidden">
                  <Table>
                    <TableBody>
                      {Object.entries(item.specifications).map(([k, v]) => (
                        <TableRow key={k}>
                          <TableCell className="font-medium w-1/3">{k}</TableCell>
                          <TableCell className="text-muted-foreground">{v}</TableCell>
                        </TableRow>
                      ))}
                      <TableRow>
                        <TableCell className="font-medium">MOQ</TableCell>
                        <TableCell className="text-muted-foreground">{item.moq}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Price</TableCell>
                        <TableCell className="text-muted-foreground">{item.price}</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
              </div>

              <div className="border border-border rounded-2xl p-6 bg-muted/30">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Compliance note: This reference card is provided for operational coordination
                  purposes only. It is not an offer to sell and does not include payment or
                  custody services.
                </p>
              </div>
            </CardContent>
          </Card>
        </Container>
      </section>
    </div>
  )
}
