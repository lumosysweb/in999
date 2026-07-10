import Link from "next/link";
import { Crown, Send } from "lucide-react";
import { SITE, FOOTER_PAGES, GUIDE_PAGES, LEGAL_LINKS, PARTNER_SITES } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="relative mt-12 px-5 pb-10 pt-16 sm:px-8">
      <div className="mx-auto max-w-[1400px]">
        <div className="mx-auto h-px w-full bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

        <div className="grid grid-cols-1 gap-10 py-12 sm:grid-cols-2 lg:grid-cols-5">
          <div>
            <Link href="/" className="flex items-center gap-2">
              <span className="gold-btn flex h-9 w-9 items-center justify-center rounded-xl">
                <Crown className="h-5 w-5" strokeWidth={2.5} />
              </span>
              <span className="text-xl font-extrabold text-mist">
                {SITE.name}
                <span className="gold-text">.</span>
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-mist-dim">
              {SITE.description}
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
              Explore
            </h3>
            <ul className="mt-4 flex flex-col gap-3">
              {FOOTER_PAGES.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-mist-dim transition-colors hover:text-gold">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
              Guides
            </h3>
            <ul className="mt-4 flex flex-col gap-3">
              {GUIDE_PAGES.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-mist-dim transition-colors hover:text-gold">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
              Legal
            </h3>
            <ul className="mt-4 flex flex-col gap-3">
              {LEGAL_LINKS.map((link) => (
                <li key={link.href}>
                  {"external" in link && link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-mist-dim transition-colors hover:text-gold"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link href={link.href} className="text-sm text-mist-dim transition-colors hover:text-gold">
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
              Our Network
            </h3>
            <ul className="mt-4 flex flex-col gap-3">
              {PARTNER_SITES.map((site) => (
                <li key={site.href}>
                  <a
                    href={site.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-mist-dim transition-colors hover:text-gold"
                  >
                    {site.label}
                  </a>
                </li>
              ))}
            </ul>

            <h3 className="mt-8 text-sm font-semibold uppercase tracking-[0.2em] text-gold">
              Follow Us
            </h3>
            <div className="mt-4 flex items-center gap-3">
              <a
                href="https://t.me/"
                aria-label="Telegram"
                target="_blank"
                rel="noopener noreferrer"
                className="card flex h-10 w-10 items-center justify-center rounded-full text-mist-dim transition-colors hover:border-gold/50 hover:text-gold"
              >
                <Send className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="mx-auto h-px w-full bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

        <div className="flex flex-col items-center justify-between gap-4 pt-8 text-xs text-mist-dim sm:flex-row">
          <p>© {new Date().getFullYear()} {SITE.fullName}. All rights reserved.</p>
          <p>Play responsibly. 18+ only.</p>
        </div>
      </div>
    </footer>
  );
}
