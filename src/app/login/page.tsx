import { LogIn, UserPlus, KeyRound, ShieldCheck } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/ui/PageHero";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { REGISTER_URL, SITE } from "@/lib/constants";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: `IN999 Login | Sign In to Your ${SITE.fullName} Account`,
  description:
    "IN999 Login guide — sign in to your IN999 account in seconds, or register a new account if you're new. Secure access to your wallet, games, and bonuses.",
  path: "/login",
});

const STEPS = [
  {
    title: "Open the IN999 Login Page",
    description: "Tap the Login / Register button below to reach the official sign-in screen.",
    icon: LogIn,
  },
  {
    title: "New here? Register First",
    description: "First-time players create an account with a mobile number and password before logging in.",
    icon: UserPlus,
  },
  {
    title: "Enter Your Credentials",
    description: "Returning players enter their registered mobile number and password to access their wallet.",
    icon: KeyRound,
  },
  {
    title: "Play Safely",
    description: "Never share your IN999 login password with anyone, including people claiming to be support staff.",
    icon: ShieldCheck,
  },
];

export default function LoginPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <PageHero
          eyebrow="IN999 Login"
          title="IN999 Login — Sign In or Register"
          subtitle="Access your IN999 account, wallet, and games in a few taps."
        />

        <section className="relative px-5 pb-24 sm:px-8 sm:pb-28">
          <div className="mx-auto max-w-[1000px]">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-base leading-relaxed text-mist-dim sm:text-lg">
                Looking for <strong className="text-mist">IN999 Login</strong>? Use the button below to open the
                official IN999 sign-in screen. Existing players can log in directly with their mobile number and
                password, while new players can register a free account in under a minute.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <Button variant="gold" href={REGISTER_URL} icon={<LogIn className="h-4 w-4" />}>
                  IN999 Login / Register
                </Button>
                <Button variant="outline" href="/faq">
                  Login Help &amp; FAQ
                </Button>
              </div>
            </div>

            <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2">
              {STEPS.map((step) => {
                const Icon = step.icon;
                return (
                  <Card key={step.title} className="flex items-start gap-4 p-8">
                    <span className="gold-btn flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl">
                      <Icon className="h-6 w-6" />
                    </span>
                    <div>
                      <h2 className="text-lg font-semibold text-mist">{step.title}</h2>
                      <p className="mt-2 text-sm leading-relaxed text-mist-dim">{step.description}</p>
                    </div>
                  </Card>
                );
              })}
            </div>

            <div className="mt-16">
              <h2 className="text-2xl font-bold text-mist">Trouble with IN999 Login?</h2>
              <p className="mt-4 text-sm leading-relaxed text-mist-dim">
                If your IN999 login isn&apos;t working, double-check your mobile number and password for typos, make
                sure you&apos;re on the official {SITE.domain} domain, and confirm you have a stable internet
                connection. Still stuck? Reach out through our{" "}
                <a href="/contact" className="text-gold underline underline-offset-2 hover:text-gold/80">
                  support page
                </a>{" "}
                for help recovering account access.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
