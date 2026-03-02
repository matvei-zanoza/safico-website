import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

import { getAdminPassword } from "@/lib/env"

function unauthorized(): NextResponse {
  return new NextResponse("Unauthorized", {
    status: 401,
    headers: {
      "WWW-Authenticate": 'Basic realm="Restricted"',
    },
  })
}

export function middleware(request: NextRequest) {
  const adminPassword = getAdminPassword()

  if (!adminPassword) {
    return new NextResponse("Forbidden", { status: 403 })
  }

  const authHeader = request.headers.get("authorization")
  if (!authHeader || !authHeader.toLowerCase().startsWith("basic ")) {
    return unauthorized()
  }

  const base64Credentials = authHeader.slice(6).trim()

  let decoded = ""
  try {
    decoded = atob(base64Credentials)
  } catch {
    return unauthorized()
  }

  const [username, password] = decoded.split(":")

  if (username !== "admin" || password !== adminPassword) {
    return unauthorized()
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/admin/:path*"],
}
