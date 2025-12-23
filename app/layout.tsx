import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { defaultLocale } from "@/lib/i18n/config"
import { translations } from "@/lib/i18n/translations"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: translations[defaultLocale]["site.title"],
  description: translations[defaultLocale]["site.description"],
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang={defaultLocale} suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
