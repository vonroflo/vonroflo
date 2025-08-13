import { AuthForm } from "@/components/auth/AuthForm";

export default function SignInPage() {
  return (
    <div className="min-h-[60vh] grid place-items-center p-8">
      <div className="w-full max-w-lg">
        <h1 className="text-2xl font-semibold mb-2">Sign in</h1>
        <p className="text-slate-600 mb-6">We use passwordless sign-in via magic link.</p>
        <AuthForm />
      </div>
    </div>
  );
}


