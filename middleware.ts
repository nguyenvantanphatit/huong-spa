import { NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  const userAgent = request.headers.get('user-agent') || ''
  const isMobile = /Mobile|Android|iPhone|iPad/.test(userAgent)
  
  const response = NextResponse.next()
  response.cookies.set('X-Device', isMobile ? 'mobile' : 'desktop')
  
  return response
}