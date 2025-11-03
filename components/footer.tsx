import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t py-6 md:py-8">
      <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
        <div className="flex items-center gap-2">
          <img src="https://github.com/bayoss.png" alt="BayOSS Logo" className="h-6 w-6 rounded-full" />
          <span className="text-sm text-muted-foreground">© {new Date().getFullYear()} BayOSS 湾区开源驿站</span>
        </div>
        <div className="flex gap-4">
          <Link
            href="https://github.com/bayoss"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground hover:text-foreground"
          >
            GitHub
          </Link>
          <Link
            href="https://github.com/bayoss/community"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground hover:text-foreground"
          >
            Community
          </Link>
        </div>
      </div>
    </footer>
  )
}

