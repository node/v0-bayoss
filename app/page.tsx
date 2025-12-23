import { defaultLocale } from "@/lib/i18n/config"

export default function Home() {
  return (
    <html>
      <head>
        <meta httpEquiv="refresh" content={`0; url=/${defaultLocale}`} />
      </head>
      <body>
        <script
          dangerouslySetInnerHTML={{
            __html: `window.location.href = "/${defaultLocale}"`,
          }}
        />
        <p>
          Redirecting to <a href={`/${defaultLocale}`}>home page</a>...
        </p>
      </body>
    </html>
  )
}
