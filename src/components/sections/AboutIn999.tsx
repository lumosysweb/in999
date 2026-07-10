import Link from "next/link";
import { SITE } from "@/lib/constants";

export function AboutIn999() {
  return (
    <section className="relative px-5 py-16 sm:px-8 sm:py-20">
      <div className="mx-auto max-w-[1000px]">
        <div className="text-center">
          <span className="gold-text mb-3 inline-block text-xs font-semibold uppercase tracking-[0.3em]">
            About Us
          </span>
          <h2 className="text-3xl font-bold text-mist sm:text-4xl">What is {SITE.name}?</h2>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-3">
          <div>
            <h3 className="text-lg font-semibold text-mist">{SITE.name} Game</h3>
            <p className="mt-3 text-sm leading-relaxed text-mist-dim">
              {SITE.fullName} is an online gaming platform built around fast, simple game formats —{" "}
              <Link href="/games" className="text-gold underline underline-offset-2 hover:text-gold/80">
                WinGo, K3, 5D, TRX, Sports and Casino
              </Link>
              . Every {SITE.name} game round runs quickly, with results and payouts designed to be transparent and
              easy to follow, even for first-time players.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-mist">{SITE.name} Login</h3>
            <p className="mt-3 text-sm leading-relaxed text-mist-dim">
              New players can register in under a minute, and returning players can complete{" "}
              <Link href="/login" className="text-gold underline underline-offset-2 hover:text-gold/80">
                {SITE.name} Login
              </Link>{" "}
              with just a mobile number and password. Once signed in, your wallet, game history, and bonuses are all
              available from a single dashboard.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-mist">Wallet &amp; Withdrawals</h3>
            <p className="mt-3 text-sm leading-relaxed text-mist-dim">
              {SITE.name} uses a secure in-app wallet for deposits and withdrawals, so you always have a clear
              record of your balance. Support is available 24x7 through our{" "}
              <Link href="/contact" className="text-gold underline underline-offset-2 hover:text-gold/80">
                contact page
              </Link>{" "}
              for any account or payment questions.
            </p>
          </div>
        </div>

        <p className="mt-10 text-center text-sm leading-relaxed text-mist-dim">
          Ready to get started? Head to the{" "}
          <Link href="/login" className="text-gold underline underline-offset-2 hover:text-gold/80">
            {SITE.name} Login
          </Link>{" "}
          page to sign in or create an account, browse the full{" "}
          <Link href="/games" className="text-gold underline underline-offset-2 hover:text-gold/80">
            {SITE.name} Game
          </Link>{" "}
          lineup, or grab the Android app from our{" "}
          <Link href="/download-app" className="text-gold underline underline-offset-2 hover:text-gold/80">
            download page
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
