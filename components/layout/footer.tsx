import Link from "next/link"

const footerLinks = [
  { name: "Privacy Policy", href: "/privacy-policy" },
  { name: "Terms of Use", href: "/terms-of-use" },
  { name: "Cookie Policy", href: "/cookie-policy" },
  { name: "Compliance", href: "/compliance" },
]

const navigationLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Vendors", href: "/vendors" },
  { name: "How We Work", href: "/how-we-work" },
  { name: "Contact", href: "/contact" },
]

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-lg font-semibold tracking-tight text-foreground">
              SoFiCo Services Limited
            </h3>
            <div className="mt-4 space-y-2 text-sm text-muted-foreground">
              <p>Registration number: TEMP-XXXX</p>
              <p>Jurisdiction: Hong Kong (placeholder)</p>
              <p>Email: contact@sofico.example (placeholder)</p>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs font-semibold tracking-widest text-muted-foreground uppercase">Navigation</h4>
            <ul className="mt-4 space-y-2">
              {navigationLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/40 focus-visible:ring-offset-2 focus-visible:ring-offset-card rounded"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-xs font-semibold tracking-widest text-muted-foreground uppercase">Legal</h4>
            <ul className="mt-4 space-y-2">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/40 focus-visible:ring-offset-2 focus-visible:ring-offset-card rounded"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Compliance Notice */}
        <div className="mt-14 border-t border-border pt-8">
          <p className="text-xs text-muted-foreground leading-relaxed max-w-4xl">
            SoFiCo Services Limited is not a bank and does not provide payment services. 
            The company does not hold or take custody of client funds.
          </p>
        </div>

        {/* Copyright */}
        <div className="mt-6 pt-6">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} SoFiCo Services Limited. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
