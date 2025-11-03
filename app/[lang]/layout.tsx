import type React from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { type Locale, locales } from "@/lib/i18n/config"
import { headers } from "next/headers"

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
  const headersList = headers()
  const pathname = headersList.get("x-pathname") || ""

  return (
    <>
      <Navbar locale={params.lang} pathname={pathname} />
      <main className="flex-1">{children}</main>
      <Footer />
    </>
  )
}

