"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X, Download, Crown } from "lucide-react";
import { NAV_LINKS, REGISTER_URL, SITE } from "@/lib/constants";
import { Button } from "@/components/ui/Button";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? "card shadow-soft" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-5 py-4 sm:px-8">
        <Link href="/" className="flex items-center gap-2">
          <span className="gold-btn flex h-9 w-9 items-center justify-center rounded-xl">
            <Crown className="h-5 w-5" strokeWidth={2.5} />
          </span>
          <span className="text-xl font-extrabold tracking-wide text-mist">
            {SITE.name}
            <span className="gold-text">.</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-mist-dim tracking-wide transition-colors hover:text-gold"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Button variant="gold" href={REGISTER_URL} className="px-5 py-2.5 text-xs">
            Register
          </Button>
          <Button
            variant="outline"
            href="/download-app"
            className="px-5 py-2.5 text-xs"
            icon={<Download className="h-3.5 w-3.5" />}
          >
            Download
          </Button>
        </div>

        <button
          className="card rounded-lg p-2 text-mist lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <div
        className={`card overflow-hidden transition-[max-height] duration-300 ease-in-out lg:hidden ${
          open ? "max-h-96" : "max-h-0 border-none"
        }`}
      >
        <div className="flex flex-col gap-4 px-6 py-6">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-sm font-medium text-mist-dim hover:text-gold"
            >
              {link.label}
            </Link>
          ))}
          <div className="mt-2 flex flex-col gap-3">
            <Button variant="gold" href={REGISTER_URL}>Register</Button>
            <Button variant="outline" href="/download-app" icon={<Download className="h-3.5 w-3.5" />}>
              Download App
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
