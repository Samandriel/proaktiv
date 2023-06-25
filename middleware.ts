import { NextResponse } from 'next/server';

export function middleware(response: NextResponse) {
  const origin: string = process.env.BASE_URL as string;

  if (process.env.NODE_ENV === 'development') {
    response.headers.set('Access-Control-Allow-Origin', '*');
  } else if (process.env.NODE_ENV === 'production') {
    response.headers.set('Access-Control-Allow-Origin', origin);
  }

  response.headers.set(
    'Access-Control-Allow-Methods',
    'GET, POST, PUT, DELETE, OPTIONS'
  );
  response.headers.set(
    'Access-Control-Allow-Headers',
    'Content-Type, Authorization'
  );

  return response;
}

export const config = {
  matcher: '/api/:path*',
};

export default middleware;
