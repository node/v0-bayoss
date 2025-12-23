import { type Locale, locales } from "@/lib/i18n/config"
import { getTranslation } from "@/lib/i18n/translations"
import { getOrganizationRepos, type RepoType } from "@/lib/github"
import { ProjectCard } from "@/components/project-card"
import { ProjectFilter } from "@/components/project-filter"

export function generateStaticParams() {
  const types: RepoType[] = ["all", "source", "fork"]
  const params: Array<{ lang: Locale; type?: string[] }> = []

  for (const lang of locales) {
    // Generate params for /[lang]/projects
    params.push({ lang, type: undefined })
    // Generate params for /[lang]/projects/[type]
    for (const typeValue of types) {
      params.push({ lang, type: [typeValue] })
    }
  }

  return params
}

export interface ProjectsPageProps {
  params: { lang: Locale; type?: string[] }
}

export default async function ProjectsPage({ params }: ProjectsPageProps) {
  const t = (key: Parameters<typeof getTranslation>[1]) => getTranslation(params.lang, key)

  // Get repo type from dynamic route segment
  const repoType: RepoType = (params.type?.[0] as RepoType) || "all"

  // Fetch projects with the selected filter
  const projects = await getOrganizationRepos("bayoss", repoType)

  return (
    <div className="py-12 md:py-16">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4 mb-8 md:mb-12">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{t("projects.title")}</h1>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">{t("projects.subtitle")}</p>
        </div>

        {/* Project Filter */}
        <ProjectFilter currentType={repoType} locale={params.lang} />

        {projects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} locale={params.lang} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-muted-foreground">{t("projects.noProjects")}</p>
          </div>
        )}
      </div>
    </div>
  )
}
