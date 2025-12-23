import type React from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { type Locale, locales } from "@/lib/i18n/config"

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }))
}

export default function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { lang: Locale }
}) {
  // Pass empty pathname since we don't have access to it in static export
  const pathname = ""

  return (
    <>
      <Navbar locale={params.lang} pathname={pathname} />
      <main className="flex-1">{children}</main>
      <Footer />
    </>
  )
}
