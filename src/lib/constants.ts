export const SITE = {
  name: "IN999",
  fullName: "IN999 Game",
  domain: "in999.in.net",
  url: "https://in999.in.net",
  title: "IN999 Game | Official Gaming Platform | Register & Download",
  description:
    "Play IN999 Game with instant registration, secure wallet, fast withdrawals and premium gaming experience.",
  tagline: "India's Trusted Gaming Platform",
} as const;

// Temporary registration/login destination until the in999.in.net wallet platform goes live.
export const REGISTER_URL = "https://www.jaiclub15.com/#/register?invitationCode=34881915294";

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Games", href: "/games" },
  { label: "Login", href: "/login" },
  { label: "Promotions", href: "/promotions" },
  { label: "Download", href: "/download-app" },
  { label: "FAQ", href: "/faq" },
] as const;

export const FOOTER_PAGES = [
  { label: "Games", href: "/games" },
  { label: "Gift Code", href: "/gift-code" },
  { label: "Promotions", href: "/promotions" },
  { label: "VIP Club", href: "/vip-club" },
  { label: "Referral Program", href: "/referral-program" },
  { label: "APK Download", href: "/apk-download" },
] as const;

export const LEGAL_LINKS = [
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
  { label: "Support", href: "/contact" },
  { label: "Telegram", href: "https://t.me/", external: true },
] as const;
