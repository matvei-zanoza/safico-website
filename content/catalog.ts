export type CatalogItem = {
  sku: string
  name: string
  description: string
  specifications: Record<string, string>
  moq: string
  price: string
}

export const catalogItems: CatalogItem[] = [
  {
    sku: "SKU-EXAMPLE-001",
    name: "Restricted Reference Item",
    description:
      "Placeholder catalog entry for restricted-access coordination workflows. Not a public product listing.",
    specifications: {
      "Category": "Placeholder",
      "Origin": "TBD (placeholder)",
      "Lead time": "On request",
    },
    moq: "On request",
    price: "On request",
  },
]

export function getCatalogItemBySku(sku: string): CatalogItem | undefined {
  return catalogItems.find((item) => item.sku.toLowerCase() === sku.toLowerCase())
}
