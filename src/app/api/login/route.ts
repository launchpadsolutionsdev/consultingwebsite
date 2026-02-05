import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const { username, password } = await request.json()

  // Simple hardcoded credentials
  if (username === 'torin' && password === '9410') {
    const response = NextResponse.json({ success: true })
    response.cookies.set('site-auth', 'authenticated', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 * 7, // 1 week
    })
    return response
  }

  return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 })
}
