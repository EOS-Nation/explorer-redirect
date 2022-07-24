import { NextResponse } from 'next/server';
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  // Homepage redirect
  if ( request.nextUrl.pathname === "/") {
    return NextResponse.redirect(new URL('https://eosauthority.com/', request.url));
  }

  // Transaction ID redirection
  const match = request.nextUrl.pathname.match(/transaction\/([\w]*)/);
  if ( match?.length ) {
    const url = `https://eosauthority.com/transaction/${match[1]}?network=eos`
    return NextResponse.redirect(new URL(url, request.url));
  }
}

export const config = {
  runtime: 'experimental-edge',
}