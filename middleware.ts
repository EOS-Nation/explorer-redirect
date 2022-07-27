import { NextResponse } from 'next/server';
import type { NextRequest } from "next/server"

const PROVIDER = process.env.PROVIDER || "bloks";

export function middleware(request: NextRequest) {
  let url = "";
  if ( PROVIDER == "bloks") url = 'https://bloks.io/';
  if ( PROVIDER == "authority") url = 'https://eosauthority.com/';

  // Transaction ID redirection
  // ex: https://explorer.eosnetwork.com/transaction/d8e5ebcb2eff590acf75b972253993c1b3b7c3ad9792f37a01ba920e47764b8e
  const match = request.nextUrl.pathname.match(/transaction\/([\w]*)/);
  if ( match?.length ) {
    url += `transaction/${match[1]}`;
    if ( PROVIDER == "authority") url += '?network=eos';
  }

  return NextResponse.redirect(new URL(url, request.url));
}

export const config = {
  runtime: 'experimental-edge',
}