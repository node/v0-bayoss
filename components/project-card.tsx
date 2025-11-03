import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import type { Repository } from "@/lib/github"
import { Button } from "@/components/ui/button"
import { ExternalLink, Star, GitFork, AlertCircle } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import type { Locale } from "@/lib/i18n/config"
import { getTranslation } from "@/lib/i18n/translations"

interface ProjectCardProps {
  project: Repository
  locale: Locale
}

export function ProjectCard({ project, locale }: ProjectCardProps) {
  const t = (key: Parameters<typeof getTranslation>[1]) => getTranslation(locale, key)

  return (
    <Card className="h-full flex flex-col">
      <CardHeader>
        <CardTitle className="line-clamp-1">{project.name}</CardTitle>
        <CardDescription className="line-clamp-2">{project.description || "-"}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="flex flex-wrap gap-2 mb-4">
          {project.language && <Badge variant="outline">{project.language}</Badge>}
        </div>
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4" />
            <span>{project.stargazers_count}</span>
          </div>
          <div className="flex items-center gap-1">
            <GitFork className="h-4 w-4" />
            <span>{project.forks_count}</span>
          </div>
          <div className="flex items-center gap-1">
            <AlertCircle className="h-4 w-4" />
            <span>{project.open_issues_count}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full">
          <a href={project.html_url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
            <span>{t("projects.viewOnGithub")}</span>
            <ExternalLink className="h-4 w-4" />
          </a>
        </Button>
      </CardFooter>
    </Card>
  )
}

