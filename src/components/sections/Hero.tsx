import Image from "next/image";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SITE } from "@/lib/constants";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-32 pb-16 sm:pt-36 sm:pb-20 lg:pt-40 lg:pb-24">
      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-8">
          {/* Left content */}
          <div className="relative z-10 flex flex-col items-start gap-6">
            <span className="card inline-flex items-center gap-2 rounded-full px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.25em] text-gold">
              {SITE.tagline}
            </span>

            <h1 className="text-4xl font-extrabold leading-[1.05] tracking-tight text-mist sm:text-5xl lg:text-6xl">
              Play Smart.
              <br />
              <span className="gold-text">Win Big.</span>
            </h1>

            <p className="max-w-md text-base leading-relaxed text-mist-dim sm:text-lg">
              India&apos;s trusted gaming platform — instant registration, a secure
              wallet, and lightning-fast withdrawals, 24x7.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <Button variant="gold">Register</Button>
              <Button variant="outline" href="/download-app" icon={<Download className="h-4 w-4" />}>
                Download
              </Button>
            </div>
          </div>

          {/* Hero image */}
          <div className="relative flex justify-center">
            <div className="animate-float relative h-[280px] w-full max-w-[480px] sm:h-[380px] lg:h-[480px]">
              <Image
                src="/images/in999-hero.webp"
                alt="IN999 Game — premium online gaming platform"
                fill
                priority
                sizes="(max-width: 1024px) 90vw, 45vw"
                className="object-contain shadow-soft"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
