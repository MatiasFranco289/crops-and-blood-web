import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(req: NextRequest) {
  const { pathname } = req.nextUrl;

  if (
    pathname.startsWith("/api") ||
    pathname.startsWith("/_next") ||
    pathname === "/favicon.ico" ||
    pathname.startsWith("/en") ||
    pathname.startsWith("/es") ||
    pathname.match(/\.(png|jpg|jpeg|gif|svg|webp|ico)$/)
  ) {
    return NextResponse.next();
  }

  const acceptLang = req.headers.get("accept-language") || "";
  const prefersSpanish = acceptLang.toLowerCase().startsWith("es");

  const url = req.nextUrl.clone();
  url.pathname = `/${prefersSpanish ? "es" : "en"}${pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/:path*"],
};
