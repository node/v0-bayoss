import Link from "next/link"
import { cn } from "@/lib/utils"
import { LanguageSwitcher } from "@/components/language-switcher"
import type { Locale } from "@/lib/i18n/config"
import { getTranslation } from "@/lib/i18n/translations"
import { MobileNav } from "./mobile-nav"

interface NavbarProps {
  locale: Locale
  pathname?: string
}

export function Navbar({ locale, pathname = "" }: NavbarProps) {
  const t = (key: Parameters<typeof getTranslation>[1]) => getTranslation(locale, key)

  const navItems = [
    { href: "/", label: t("nav.home") },
    { href: "/projects", label: t("nav.projects") },
    { href: "/contribute", label: t("nav.contribute") },
  ]

  const getLocalizedPath = (path: string) => {
    if (path === "/") return `/${locale}`
    return `/${locale}${path}`
  }

  const isActive = (path: string) => {
    if (path === "/") {
      return pathname === `/${locale}` || pathname === "/"
    }
    return pathname.startsWith(`/${locale}${path}`)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href={getLocalizedPath("/")} className="flex items-center gap-2">
            <img src="https://github.com/bayoss.png" alt="BayOSS Logo" className="h-8 w-8 rounded-full" />
            <span className="font-bold text-xl hidden md:inline-block">BayOSS</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={getLocalizedPath(item.href)}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                isActive(item.href) ? "text-foreground" : "text-muted-foreground",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <LanguageSwitcher />
          <MobileNav items={navItems} locale={locale} />
        </div>
      </div>
    </header>
  )
}

