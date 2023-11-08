import { NextRequest, NextResponse } from 'next/server'

// matches to run middleware
export const config = {
  matcher: ['/', '/sites/:path*'],
}

export default async function middleware(req: NextRequest) {
  const url = req.nextUrl
  const hostName = req.headers.get('host') || ''

  // domain to pathname map for each tenant
  const CLIENT_PATHNAME_MAP:any = {
    'localhost:3000': '/brandA',
    'test-app-olive-pi.vercel.app/': '/brandB',
    '':''
  }

  console.log(url.pathname)
  if (url.pathname.startsWith(`/sites`)) {
    url.pathname = `/404`
  } else {
      url.pathname = `/sites${CLIENT_PATHNAME_MAP[hostName]}`
  }

  return NextResponse.rewrite(url)
}


