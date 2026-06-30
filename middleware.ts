import { NextResponse, type NextRequest } from "next/server";
import { LANGS, DEFAULT_LANG } from "@/lib/content";

function detectLocale(req: NextRequest): string {
  const header = req.headers.get("accept-language");
  if (header) {
    const preferred = header.split(",")[0].split("-")[0].toLowerCase();
    if ((LANGS as readonly string[]).includes(preferred)) return preferred;
  }
  return DEFAULT_LANG;
}

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  const hasLocale = LANGS.some(
    (l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`),
  );
  if (hasLocale) return;

  const locale = detectLocale(req);
  const url = req.nextUrl.clone();
  url.pathname = `/${locale}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  // Run on everything except Next internals and files with an extension
  // (e.g. /automations/*.svg, /profile.jpg, /favicon.ico).
  matcher: ["/((?!_next|.*\\..*).*)"],
};
