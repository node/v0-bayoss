import { type Locale, locales } from "@/lib/i18n/config"
import { getTranslation } from "@/lib/i18n/translations"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, MessageSquare, GitPullRequest, FileCode } from "lucide-react"

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }))
}

export default function ContributePage({ params }: { params: { lang: Locale } }) {
  const t = (key: Parameters<typeof getTranslation>[1]) => getTranslation(params.lang, key)

  return (
    <div className="py-12 md:py-16">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4 mb-8 md:mb-12">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{t("contribute.title")}</h1>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">{t("contribute.subtitle")}</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileCode className="h-5 w-5" />
                {t("contribute.guide")}
              </CardTitle>
              <CardDescription>了解如何为 BayOSS 项目做出贡献</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-muted-foreground">
                我们欢迎所有形式的贡献，无论是代码、文档、设计还是想法。请查看我们的贡献指南，了解如何开始。
              </p>
              <Button asChild>
                <a
                  href="https://github.com/bayoss/community/blob/main/CONTRIBUTING.md"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <span>查看贡献指南</span>
                  <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Github className="h-5 w-5" />
                {t("contribute.codeOfConduct")}
              </CardTitle>
              <CardDescription>了解我们的社区行为准则</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-muted-foreground">
                我们致力于为所有人提供一个友好、安全和包容的环境。请阅读我们的行为准则，了解我们的期望和价值观。
              </p>
              <Button asChild>
                <a
                  href="https://github.com/bayoss/community/blob/main/CODE_OF_CONDUCT.md"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <span>查看行为准则</span>
                  <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <GitPullRequest className="h-5 w-5" />
                {t("contribute.pullRequests")}
              </CardTitle>
              <CardDescription>提交代码贡献</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-muted-foreground">
                如果你想为我们的项目贡献代码，可以通过提交 Pull Request
                来实现。请确保你的代码符合我们的代码规范和贡献指南。
              </p>
              <Button asChild>
                <a
                  href="https://github.com/bayoss"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <span>浏览项目</span>
                  <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageSquare className="h-5 w-5" />
                {t("contribute.discussions")}
              </CardTitle>
              <CardDescription>参与社区讨论</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-muted-foreground">
                加入我们的社区讨论，分享你的想法，提出问题，或者与其他社区成员交流。我们欢迎所有形式的参与和反馈。
              </p>
              <Button asChild>
                <a
                  href="https://github.com/bayoss/community/discussions"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <span>参与讨论</span>
                  <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

