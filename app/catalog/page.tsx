import Link from "next/link"

import { Container } from "@/components/container"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { catalogItems } from "@/content/catalog"
import { getCatalogAccessKey } from "@/lib/env"

type Props = {
  searchParams?: Record<string, string | string[] | undefined>
}

function getKey(searchParams?: Props["searchParams"]): string | undefined {
  const raw = searchParams?.k
  return typeof raw === "string" ? raw : undefined
}

export default function CatalogPage({ searchParams }: Props) {
  const requiredKey = getCatalogAccessKey()
  const key = getKey(searchParams)
  const allowed = !!requiredKey && key === requiredKey

  return (
    <div className="bg-background">
      <section className="py-20 lg:py-28">
        <Container>
          <div className="max-w-3xl">
            <h1 className="text-4xl font-semibold tracking-tight text-foreground lg:text-5xl text-balance">
              Catalog
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Restricted access. This area is intended for coordination reference only.
            </p>
          </div>
        </Container>
      </section>

      <section className="pb-20">
        <Container>
          {!allowed ? (
            <div className="border border-border rounded-2xl p-8 bg-card max-w-3xl">
              <h2 className="text-xl font-semibold text-foreground">Restricted Access</h2>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                This section is not publicly browsable. Access requires a valid key.
              </p>
            </div>
          ) : (
            <div className="space-y-6">
              {catalogItems.map((item) => (
                <Card key={item.sku} className="border border-border rounded-2xl">
                  <CardHeader>
                    <CardTitle className="text-lg">{item.sku}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-col gap-4">
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                    <Button asChild variant="outline" className="rounded-xl w-fit">
                      <Link
                        href={{
                          pathname: `/catalog/${encodeURIComponent(item.sku)}`,
                          query: { k: key },
                        }}
                      >
                        View Reference Card
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </Container>
      </section>
    </div>
  )
}
