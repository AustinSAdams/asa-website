import { NextResponse } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request) {
  const inDevelopmentRoutes = ["/contact", "/projects", "/projects/QuietMap"];
  if (inDevelopmentRoutes.includes(request.nextUrl.pathname)) {
    return NextResponse.redirect(new URL("/", request.url));
  }
  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/contact", "/projects", "/projects/QuietMap"],
};
