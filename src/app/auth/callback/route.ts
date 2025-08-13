import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { supabase } from "@/lib/supabase-client";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const code = searchParams.get("code");
  const redirectTo = searchParams.get("redirect") || "/app";
  if (!code) {
    return NextResponse.redirect(new URL("/sign-in", request.url));
  }
  // Supabase handles code exchange on the client typically. For server route, we set the session via cookie.
  const { data, error } = await supabase.auth.exchangeCodeForSession(code);
  if (error || !data?.session) {
    return NextResponse.redirect(new URL("/sign-in?error=callback", request.url));
  }
  // Persist auth via cookies for RLS on SSR if needed
  const cookieStore = await cookies();
  cookieStore.set("sb-access-token", data.session.access_token, { path: "/", httpOnly: true });
  cookieStore.set("sb-refresh-token", data.session.refresh_token, { path: "/", httpOnly: true });
  return NextResponse.redirect(new URL(redirectTo, request.url));
}


