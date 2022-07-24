import { NextResponse } from 'next/server';

export function middleware(request) {
  // TO-DO handle transaction ID
  if (request.nextUrl.pathname === '/') {
    return NextResponse.redirect(new URL('https://eosauthority.com/', request.url));
  }
  return NextResponse.redirect(new URL('https://eosauthority.com/', request.url));
}