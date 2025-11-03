import { Button } from "@/components/ui/button"
import type { Locale } from "@/lib/i18n/config"
import { getTranslation } from "@/lib/i18n/translations"
import type { RepoType } from "@/lib/github"
import Link from "next/link"
import { cn } from "@/lib/utils"

interface ProjectFilterProps {
  currentType: RepoType
  locale: Locale
}

export function ProjectFilter({ currentType, locale }: ProjectFilterProps) {
  const t = (key: Parameters<typeof getTranslation>[1]) => getTranslation(locale, key)

  const filters: { type: RepoType; label: string }[] = [
    { type: "all", label: t("projects.filter.all") },
    { type: "source", label: t("projects.filter.source") },
    { type: "fork", label: t("projects.filter.fork") },
  ]

  return (
    <div className="flex flex-wrap gap-2 mb-8 justify-center">
      {filters.map((filter) => (
        <Button key={filter.type} variant={currentType === filter.type ? "default" : "outline"} size="sm" asChild>
          <Link
            href={`/${locale}/projects?type=${filter.type}`}
            className={cn("min-w-[80px]", currentType === filter.type ? "pointer-events-none" : "")}
          >
            {filter.label}
          </Link>
        </Button>
      ))}
    </div>
  )
}

