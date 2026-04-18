import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { GATE_COOKIE, GATE_TOKEN } from '@/lib/site-gate'

const OPEN_PATHS = new Set(['/coming-soon', '/api/login', '/api/logout'])

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl

  const isAuthed = req.cookies.get(GATE_COOKIE)?.value === GATE_TOKEN
  const isOpen = OPEN_PATHS.has(pathname)

  if (!isAuthed && !isOpen) {
    const url = req.nextUrl.clone()
    url.pathname = '/coming-soon'
    url.search = ''
    return NextResponse.redirect(url)
  }

  if (isAuthed && pathname === '/coming-soon') {
    const url = req.nextUrl.clone()
    url.pathname = '/'
    url.search = ''
    return NextResponse.redirect(url)
  }

  const requestHeaders = new Headers(req.headers)
  requestHeaders.set('x-pathname', pathname)
  return NextResponse.next({ request: { headers: requestHeaders } })
}

export const config = {
  matcher: ['/((?!_next/|brand/|images/|fonts/|favicon\\.ico|feed\\.xml|robots\\.txt|sitemap\\.xml).*)'],
}
