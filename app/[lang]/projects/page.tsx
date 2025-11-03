import { type Locale, locales } from "@/lib/i18n/config"
import { getTranslation } from "@/lib/i18n/translations"
import { getOrganizationRepos, type RepoType } from "@/lib/github"
import { ProjectCard } from "@/components/project-card"
import { ProjectFilter } from "@/components/project-filter"

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }))
}

export interface ProjectsPageProps {
  params: { lang: Locale }
  searchParams: { type?: RepoType }
}

export default async function ProjectsPage({ params, searchParams }: ProjectsPageProps) {
  const t = (key: Parameters<typeof getTranslation>[1]) => getTranslation(params.lang, key)

  // Get the repo type from search params or default to 'all'
  const repoType: RepoType = (searchParams.type as RepoType) || "all"

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

