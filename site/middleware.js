import { NextResponse } from "next/server";

const inDevelopmentRoutes = [];

// This function can be marked `async` if using `await` inside
export function middleware(request) {
  if (inDevelopmentRoutes.includes(request.nextUrl.pathname)) {
    return NextResponse.redirect(new URL("/", request.url));
  }
  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: inDevelopmentRoutes,
};
