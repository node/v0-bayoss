import type { Locale } from "./config"

type TranslationKey =
  | "site.title"
  | "site.description"
  | "nav.home"
  | "nav.projects"
  | "nav.contribute"
  | "home.title"
  | "home.subtitle"
  | "home.about"
  | "home.join"
  | "home.joinButton"
  | "projects.title"
  | "projects.subtitle"
  | "projects.loading"
  | "projects.error"
  | "projects.viewOnGithub"
  | "projects.noProjects"
  | "projects.filter.all"
  | "projects.filter.source"
  | "projects.filter.fork"
  | "contribute.title"
  | "contribute.subtitle"
  | "contribute.guide"
  | "contribute.codeOfConduct"
  | "contribute.issues"
  | "contribute.pullRequests"
  | "contribute.discussions"

type Translations = {
  [key in Locale]: {
    [k in TranslationKey]: string
  }
}

export const translations: Translations = {
  zh: {
    "site.title": "BayOSS 湾区开源驿站",
    "site.description": "湾区开源驿站是一个致力于推动开源项目发展的社区",
    "nav.home": "首页",
    "nav.projects": "项目",
    "nav.contribute": "贡献",
    "home.title": "欢迎来到 BayOSS 湾区开源驿站",
    "home.subtitle": "连接湾区开发者，共建开源生态",
    "home.about":
      "BayOSS 湾区开源驿站是一个由湾区开发者发起的开源社区，致力于推动开源项目的发展，为开发者提供交流、学习和贡献的平台。我们欢迎所有对开源感兴趣的开发者加入我们，一起构建更好的开源生态。",
    "home.join": "如何加入我们",
    "home.joinButton": "立即加入",
    "projects.title": "开源项目",
    "projects.subtitle": "探索我们正在进行的开源项目",
    "projects.loading": "正在加载项目...",
    "projects.error": "加载项目失败，请稍后再试",
    "projects.viewOnGithub": "在 GitHub 上查看",
    "projects.noProjects": "暂无项目",
    "projects.filter.all": "全部",
    "projects.filter.source": "原创",
    "projects.filter.fork": "复刻",
    "contribute.title": "参与贡献",
    "contribute.subtitle": "了解如何为社区做出贡献",
    "contribute.guide": "贡献指南",
    "contribute.codeOfConduct": "行为准则",
    "contribute.issues": "提交问题",
    "contribute.pullRequests": "提交 PR",
    "contribute.discussions": "参与讨论",
  },
  en: {
    "site.title": "BayOSS",
    "site.description": "BayOSS is a community dedicated to promoting open source projects",
    "nav.home": "Home",
    "nav.projects": "Projects",
    "nav.contribute": "Contribute",
    "home.title": "Welcome to BayOSS",
    "home.subtitle": "Connecting Bay Area developers, building open source ecosystem",
    "home.about":
      "BayOSS is an open source community initiated by Bay Area developers, dedicated to promoting the development of open source projects and providing a platform for developers to communicate, learn and contribute. We welcome all developers interested in open source to join us and build a better open source ecosystem together.",
    "home.join": "How to Join Us",
    "home.joinButton": "Join Now",
    "projects.title": "Open Source Projects",
    "projects.subtitle": "Explore our ongoing open source projects",
    "projects.loading": "Loading projects...",
    "projects.error": "Failed to load projects, please try again later",
    "projects.viewOnGithub": "View on GitHub",
    "projects.noProjects": "No projects available",
    "projects.filter.all": "All",
    "projects.filter.source": "Source",
    "projects.filter.fork": "Fork",
    "contribute.title": "Contribute",
    "contribute.subtitle": "Learn how to contribute to the community",
    "contribute.guide": "Contribution Guide",
    "contribute.codeOfConduct": "Code of Conduct",
    "contribute.issues": "Submit Issues",
    "contribute.pullRequests": "Submit PRs",
    "contribute.discussions": "Join Discussions",
  },
}

export const getTranslation = (locale: Locale, key: TranslationKey): string => {
  return translations[locale][key]
}

