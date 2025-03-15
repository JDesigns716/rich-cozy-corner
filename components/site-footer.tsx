import Link from "next/link";
import { siteConfig } from "@/config/site";

export function SiteFooter() {
  return (
    <footer className="py-6 md:px-8 md:py-0">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <p className="text-balance text-center text-sm leading-loose text-muted-foreground md:text-left">
          Built by{" "}
          <Link
            className="font-medium underline underline-offset-4"
            href={siteConfig.devLinks.twitter}
            target="_blank"
            rel="noreferrer"
          >
            JDesigns
          </Link>
          . The source code is available on{" "}
          <Link
            href={siteConfig.devLinks.github}
            target="_blank"
            rel="noreferrer"
          >
            Github
          </Link>
          .
        </p>
      </div>
    </footer>
  );
}
