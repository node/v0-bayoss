import { Button } from "@/components/ui/button"
import Link from "next/link"
import { type Locale, locales } from "@/lib/i18n/config"
import { getTranslation } from "@/lib/i18n/translations"

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }))
}

export default function HomePage({ params }: { params: { lang: Locale } }) {
  const t = (key: Parameters<typeof getTranslation>[1]) => getTranslation(params.lang, key)

  return (
    <div className="flex flex-col min-h-screen">
      <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-b from-primary/10 to-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
              {t("home.title")}
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">{t("home.subtitle")}</p>
            <div className="space-x-4">
              <Button asChild size="lg">
                <Link href={`/${params.lang}/projects`}>{t("nav.projects")}</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href={`/${params.lang}/contribute`}>{t("nav.contribute")}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">关于 BayOSS</h2>
              <p className="text-muted-foreground">{t("home.about")}</p>
            </div>
            <div className="space-y-4">
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">{t("home.join")}</h2>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  1. 关注我们的 GitHub 组织:{" "}
                  <a
                    href="https://github.com/bayoss"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    github.com/bayoss
                  </a>
                </li>
                <li>
                  2. 加入我们的社区讨论:{" "}
                  <a
                    href="https://github.com/bayoss/community/discussions"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    Community Discussions
                  </a>
                </li>
                <li>3. 参与我们的开源项目贡献</li>
                <li>4. 分享你的想法和建议</li>
              </ul>
              <Button asChild>
                <a href="https://github.com/bayoss" target="_blank" rel="noopener noreferrer">
                  {t("home.joinButton")}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

