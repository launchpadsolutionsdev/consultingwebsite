import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const isAuthenticated = request.cookies.get('site-auth')?.value === 'authenticated'
  const isLoginPage = request.nextUrl.pathname === '/login'
  const isLoginApi = request.nextUrl.pathname === '/api/login'

  // Allow login page and API
  if (isLoginPage || isLoginApi) {
    return NextResponse.next()
  }

  // Redirect to login if not authenticated
  if (!isAuthenticated) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - images (public images)
     */
    '/((?!_next/static|_next/image|favicon.ico|images|.*\\.png$|.*\\.jpg$|.*\\.svg$).*)',
  ],
}
