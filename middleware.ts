import { NextResponse } from 'next/server';
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  const [ part1, part2 ] = request.nextUrl.pathname.split("transaction/");
  if ( part2 ) {
    const [ trx_id ] = part2.split("/");
    const url = `https://eosauthority.com/transaction/${trx_id}?network=eos`
    return NextResponse.redirect(new URL(url, request.url));
  }
  return NextResponse.redirect(new URL('https://eosauthority.com/', request.url));
}