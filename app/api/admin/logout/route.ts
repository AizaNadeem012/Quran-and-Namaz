import { NextResponse } from 'next/server';
import { serialize } from 'cookie';

export async function GET() {
  // Clear the session cookie
  const cookie = serialize('admin-session', '', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    maxAge: -1, // Expire the cookie immediately
    path: '/',
  });

  return new NextResponse(null, {
    status: 200,
    headers: { 'Set-Cookie': cookie },
  });
} 