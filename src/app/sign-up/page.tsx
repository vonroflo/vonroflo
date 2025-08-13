import { AuthForm } from "@/components/auth/AuthForm";

export default function SignUpPage() {
  return (
    <div className="min-h-[60vh] grid place-items-center p-8">
      <div className="w-full max-w-lg">
        <h1 className="text-2xl font-semibold mb-2">Create client account</h1>
        <p className="text-slate-600 mb-6">We’ll email you a magic link to sign up and sign in.</p>
        <AuthForm />
      </div>
    </div>
  );
}


