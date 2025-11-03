export interface Repository {
  id: number
  name: string
  full_name: string
  html_url: string
  description: string
  stargazers_count: number
  forks_count: number
  open_issues_count: number
  language: string
  updated_at: string
  fork: boolean
}

export type RepoType = "all" | "source" | "fork"

export async function getOrganizationRepos(org = "bayoss", type: RepoType = "all"): Promise<Repository[]> {
  try {
    const response = await fetch(`https://api.github.com/orgs/${org}/repos?type=${type}`, {
      headers: {
        Accept: "application/vnd.github.v3+json",
      },
      next: { revalidate: 3600 }, // Revalidate every hour
    })

    if (!response.ok) {
      throw new Error(`GitHub API responded with status: ${response.status}`)
    }

    const repos = await response.json()

    // Filter out non-functional repositories like .github
    return repos.filter((repo: Repository) => !["bayoss.github.io", ".github"].includes(repo.name))
  } catch (error) {
    console.error("Error fetching GitHub repositories:", error)
    return []
  }
}

