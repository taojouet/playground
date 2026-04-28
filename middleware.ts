import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { verifySessionToken, COOKIE_NAME } from '@/lib/auth-session';

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Allow: auth API, login page, static assets
  if (
    pathname.startsWith('/api/auth') ||
    pathname.startsWith('/_next') ||
    pathname === '/login' ||
    pathname === '/favicon.ico' ||
    pathname === '/site.webmanifest'
  ) {
    return NextResponse.next();
  }

  // Verify session cookie
  const token = request.cookies.get(COOKIE_NAME)?.value;
  if (token) {
    const username = await verifySessionToken(token);
    if (username) return NextResponse.next();
  }

  const url = new URL('/login', request.url);
  url.searchParams.set('from', pathname);
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ['/((?!_next/static|_next/image).*)'],
};
