"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState } from "react"
import type { Locale } from "@/lib/i18n/config"

interface NavItem {
  href: string
  label: string
}

interface MobileNavProps {
  items: NavItem[]
  locale: Locale
}

export function MobileNav({ items, locale }: MobileNavProps) {
  const pathname = usePathname() || ""
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

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
    <>
      <Button variant="ghost" size="icon" className="md:hidden" onClick={toggleMenu}>
        {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        <span className="sr-only">Toggle menu</span>
      </Button>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-t absolute top-16 left-0 right-0 z-50 bg-background">
          <nav className="flex flex-col p-4 space-y-4">
            {items.map((item) => (
              <Link
                key={item.href}
                href={getLocalizedPath(item.href)}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary p-2",
                  isActive(item.href) ? "text-foreground bg-muted rounded-md" : "text-muted-foreground",
                )}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </>
  )
}

