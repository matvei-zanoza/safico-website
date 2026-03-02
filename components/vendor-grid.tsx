import { vendorPlaceholders } from "@/content/vendors"

type Props = {
  dense?: boolean
}

export function VendorGrid({ dense }: Props) {
  return (
    <div
      className={
        dense
          ? "grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6"
          : "grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4"
      }
    >
      {vendorPlaceholders.map((vendor) => (
        <div
          key={vendor.id}
          className={
            dense
              ? "flex h-20 items-center justify-center rounded-lg border border-border bg-card transition-colors hover:border-border/80"
              : "flex h-28 items-center justify-center rounded-lg border border-border bg-card transition-colors hover:border-border/80"
          }
        >
          <div
            className="h-8 w-24 rounded bg-muted"
            aria-label={vendor.name}
          />
        </div>
      ))}
    </div>
  )
}
