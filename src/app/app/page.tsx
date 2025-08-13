"use client";

import { useEffect, useState } from "react";
import { getSupabase } from "@/lib/supabase-client";

export default function ClientPortalPage() {
  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;
    getSupabase().auth.getUser().then(({ data }) => {
      if (!mounted) return;
      setEmail(data.user?.email ?? null);
      setLoading(false);
    });
    return () => {
      mounted = false;
    };
  }, []);

  if (loading) {
    return <div className="min-h-[60vh] grid place-items-center p-8">Loading…</div>;
  }

  if (!email) {
    if (typeof window !== "undefined") window.location.href = "/sign-in?next=/app";
    return null;
  }

  async function signOut() {
    await getSupabase().auth.signOut();
    if (typeof window !== "undefined") window.location.href = "/";
  }

  return (
    <div className="min-h-[60vh] grid place-items-center p-8">
      <div className="text-center">
        <h1 className="text-2xl font-semibold">Client portal</h1>
        <p className="text-slate-600 mt-2">Signed in as {email}</p>
        <button onClick={signOut} className="mt-4 underline text-slate-700">Sign out</button>
      </div>
    </div>
  );
}


