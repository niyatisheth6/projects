import { NextResponse } from "next/server";

export function middleware(request) {
  const isPublicPath =
    request.nextUrl.pathname.endsWith("/login") ||
    request.nextUrl.pathname.endsWith("/signup");

  const isLogin = request.cookies.has("isLogin");

  if (isPublicPath && isLogin) {
    return NextResponse.redirect(new URL("/", request.url));
  }
  if (!isPublicPath && !isLogin) {
    return NextResponse.redirect(new URL("/auth/login", request.url));
  }
  return NextResponse.next();
}
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
