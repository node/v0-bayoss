export const defaultLocale = "zh"
export const locales = ["zh", "en"] as const
export type Locale = (typeof locales)[number]

export const getLocaleFromPath = (path: string): Locale => {
  for (const locale of locales) {
    if (path.startsWith(`/${locale}/`) || path === `/${locale}`) {
      return locale
    }
  }
  return defaultLocale
}

