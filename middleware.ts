import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { defaultLocale } from "./lib/i18n/config"

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname

  // Add pathname to headers so we can access it in layout
  const requestHeaders = new Headers(request.headers)
  requestHeaders.set("x-pathname", pathname)

  // If the pathname starts with a locale, don't redirect
  if (/^\/[a-z]{2}($|\/)/.test(pathname)) {
    return NextResponse.next({
      request: {
        headers: requestHeaders,
      },
    })
  }

  // Redirect to the default locale
  const url = request.nextUrl.clone()
  url.pathname = `/${defaultLocale}${pathname}`

  return NextResponse.redirect(url)
}

export const config = {
  matcher: [
    // Skip all internal paths (_next, api, etc)
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
}

