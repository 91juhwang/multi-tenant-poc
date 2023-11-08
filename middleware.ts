import { NextRequest, NextResponse } from 'next/server'

// matches to run middleware
export const config = {
  matcher: [
    '/',
    '/sites/:path*',
    '/brandA/:path*',
    '/brandB/:path*'
  ],
}

export default async function middleware(req: NextRequest) {
  const url = req.nextUrl
  const hostName = req.headers.get('host') || ''

  // domain to pathname map for each tenant
  const PARTNER_PATH_MAP:any = {
    'localhost:3000': '/brandA',
    'test-app-olive-pi.vercel.app': '/brandA',
    'test-app-james-hwangs-projects.vercel.app':'/brandB'
  }

  const pathWOPartner = url.pathname.split('/').splice(2).join('/')

  if (url.pathname.startsWith(`/sites`)) {
    url.pathname = `/404`
  } else {
    url.pathname = `/sites${PARTNER_PATH_MAP[hostName]}/${pathWOPartner}`
  }

  console.log(url)

  return NextResponse.rewrite(url)
}


