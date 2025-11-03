"use client"

import { usePathname, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { locales, getLocaleFromPath, type Locale } from "@/lib/i18n/config"
import { Globe } from "lucide-react"

export function LanguageSwitcher() {
  const router = useRouter()
  const pathname = usePathname() || ""
  const currentLocale = getLocaleFromPath(pathname)

  const switchLanguage = (locale: Locale) => {
    if (locale === currentLocale) return

    let newPath = pathname

    // Remove current locale from path if it exists
    for (const loc of locales) {
      if (pathname.startsWith(`/${loc}/`)) {
        newPath = pathname.substring(loc.length + 1)
        break
      } else if (pathname === `/${loc}`) {
        newPath = "/"
        break
      }
    }

    // Add new locale to path
    if (newPath === "/") {
      newPath = `/${locale}`
    } else {
      newPath = `/${locale}${newPath}`
    }

    router.push(newPath)
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <Globe className="h-5 w-5" />
          <span className="sr-only">Switch language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => switchLanguage("zh")}>中文</DropdownMenuItem>
        <DropdownMenuItem onClick={() => switchLanguage("en")}>English</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

