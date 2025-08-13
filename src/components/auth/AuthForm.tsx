"use client";

import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { supabase } from "@/lib/supabase-client";

function getSiteUrl(): string {
  if (typeof window !== "undefined") return window.location.origin;
  return process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
}

export function AuthForm() {
  const [email, setEmail] = React.useState("");
  const [status, setStatus] = React.useState<"idle" | "sending" | "sent" | "error">("idle");
  const [error, setError] = React.useState<string | null>(null);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    setError(null);
    try {
      const redirectTo = `${getSiteUrl()}/auth/callback`;
      const { error: signInError } = await supabase.auth.signInWithOtp({
        email,
        options: { emailRedirectTo: redirectTo },
      });
      if (signInError) throw signInError;
      setStatus("sent");
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Failed to send magic link";
      setError(message);
      setStatus("error");
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4 max-w-sm">
      <div>
        <label className="block text-sm font-medium mb-1">Work email</label>
        <Input
          type="email"
          placeholder="you@company.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <Button type="submit" disabled={status === "sending"}>
        {status === "sending" ? "Sending..." : "Email me a magic link"}
      </Button>
      {status === "sent" && (
        <div className="text-sm text-green-600">Check your inbox for a login link.</div>
      )}
      {status === "error" && error && (
        <div className="text-sm text-red-600">{error}</div>
      )}
    </form>
  );
}


