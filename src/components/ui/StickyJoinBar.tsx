"use client";

import { useSyncExternalStore } from "react";
import { X } from "lucide-react";
import { REGISTER_URL, SITE } from "@/lib/constants";
import { LogoMark } from "@/components/ui/LogoMark";

const DISMISS_KEY = "in999-join-bar-dismissed";

const listeners = new Set<() => void>();

function subscribe(callback: () => void) {
  listeners.add(callback);
  return () => listeners.delete(callback);
}

function getSnapshot() {
  return sessionStorage.getItem(DISMISS_KEY) === "1";
}

function getServerSnapshot() {
  return false;
}

function dismiss() {
  sessionStorage.setItem(DISMISS_KEY, "1");
  listeners.forEach((listener) => listener());
}

export function StickyJoinBar() {
  const dismissed = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  if (dismissed) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-gold/25 bg-navy-950/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-3 px-4 py-3 sm:px-8">
        <div className="flex min-w-0 items-center gap-3">
          <span className="gold-btn hidden h-9 w-9 shrink-0 items-center justify-center rounded-xl sm:flex">
            <LogoMark className="h-5 w-5" />
          </span>
          <p className="truncate text-sm font-medium text-mist">
            Ready to play on <span className="gold-text">{SITE.name}</span>?
          </p>
        </div>

        <div className="flex shrink-0 items-center gap-2">
          <a
            href={REGISTER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="gold-btn inline-flex items-center justify-center whitespace-nowrap rounded-full px-5 py-2.5 text-xs font-semibold tracking-wide shadow-soft transition-colors duration-200 hover:brightness-105 sm:text-sm"
          >
            Join IN999 Now
          </a>
          <button
            type="button"
            aria-label="Dismiss"
            onClick={dismiss}
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-mist-dim transition-colors hover:text-gold"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
