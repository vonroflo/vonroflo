"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Calendar,
  Check,
  ChevronRight,
  Code2,
  Cpu,
  FlaskConical,
  Layers,
  LineChart,
  Lock,
  Rocket,
  ShieldCheck,
  Sparkles,
  Workflow,
  Wrench,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const CALENDLY_URL = process.env.NEXT_PUBLIC_CALENDLY_URL || "https://calendly.com/roatanea-vonroflo/30min";
const LOGIN_URL = "/sign-in";
const SIGNUP_URL = "/sign-up";
const APP_URL = "/app";

export default function VonrofloLanding() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 text-slate-900">
      <SiteNav />
      <Hero />
      <TrustBar />
      <ValueProps />
      <Products />
      <Services />
      <Process />
      <Results />
      <Pricing />
      <CTA />
      <CalendlyEmbed />
      <ContactForm />
      <FAQ />
      <Footer />
      <FloatingAI />
    </div>
  );
}

function SiteNav() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/70 border-b">
      <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600" />
          <span className="font-semibold tracking-tight">Vonroflo</span>
          <Badge variant="secondary" className="ml-2">AI • SaaS • API</Badge>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#products" className="hover:text-slate-600">Blueprints</a>
          <a href="#services" className="hover:text-slate-600">Services</a>
          <a href="#process" className="hover:text-slate-600">Process</a>
          <a href="#pricing" className="hover:text-slate-600">Pricing</a>
          <a href="#contact" className="hover:text-slate-600">Contact</a>
        </nav>
        <div className="flex items-center gap-2">
          <Button variant="ghost" asChild>
            <a href={LOGIN_URL}><Lock className="mr-2 h-4 w-4"/>Sign in</a>
          </Button>
          <Button asChild>
            <a href={CALENDLY_URL} target="_blank" rel="noreferrer">
              Book intro call <Calendar className="ml-2 h-4 w-4"/>
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 py-20 grid md:grid-cols-2 gap-10 items-center">
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
          <Badge className="mb-4" variant="secondary">
            Automation-first Agency
          </Badge>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
            Ship AI products and <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-fuchsia-600">micro‑SaaS</span> in days, not months.
          </h1>
          <p className="mt-4 text-slate-600 text-lg">
            We build conversion‑ready MVPs, API‑first backends, and automation systems that actually reduce workload.
            Done‑for‑you or done‑with‑you — your call.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button size="lg" asChild>
              <a href={CALENDLY_URL} target="_blank" rel="noreferrer">
                Get a 30‑min roadmap <ArrowRight className="ml-2 h-4 w-4"/>
              </a>
            </Button>
            <Button size="lg" variant="secondary" asChild>
              <a href="#products">See automation blueprints</a>
            </Button>
          </div>
          <div className="mt-6 flex items-center gap-4 text-sm text-slate-500">
            <div className="flex items-center gap-1"><ShieldCheck className="h-4 w-4"/>Best‑practice security</div>
            <div className="flex items-center gap-1"><Rocket className="h-4 w-4"/>MVP in ~2–4 weeks</div>
            <div className="flex items-center gap-1"><LineChart className="h-4 w-4"/>ROI‑driven</div>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle>What we build for you</CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-2 gap-4">
              {[
                { icon: <Workflow className="h-5 w-5"/>, label: "Automations" },
                { icon: <Cpu className="h-5 w-5"/>, label: "AI Agents" },
                { icon: <Code2 className="h-5 w-5"/>, label: "APIs" },
                { icon: <Layers className="h-5 w-5"/>, label: "Micro‑SaaS" },
                { icon: <Sparkles className="h-5 w-5"/>, label: "Content Engines" },
                { icon: <Wrench className="h-5 w-5"/>, label: "Internal Tools" },
              ].map((i, idx) => (
                <div key={idx} className="rounded-2xl border p-4 flex items-center gap-3">
                  <div className="rounded-xl p-2 bg-slate-50 border">{i.icon}</div>
                  <div className="font-medium">{i.label}</div>
                </div>
              ))}
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}

function TrustBar() {
  return (
    <section className="py-6 border-y bg-white/60">
      <div className="mx-auto max-w-7xl px-4 flex flex-wrap items-center justify-center gap-6 text-slate-500 text-sm">
        <span className="flex items-center gap-2"><ShieldCheck className="h-4 w-4"/>OAuth‑based Sign‑in</span>
        <span className="flex items-center gap-2"><Lock className="h-4 w-4"/>SOC2‑friendly patterns</span>
        <span className="flex items-center gap-2"><FlaskConical className="h-4 w-4"/>Experiment → Ship fast</span>
        <span className="flex items-center gap-2"><LineChart className="h-4 w-4"/>Analytics‑first builds</span>
      </div>
    </section>
  );
}

function ValueProps() {
  const items = [
    {
      title: "API‑first architecture",
      desc: "Every feature gets an endpoint. Your product stays extensible and partner‑ready.",
      icon: <Code2 className="h-5 w-5"/>,
    },
    {
      title: "Automation blueprints",
      desc: "Pre‑built Make/n8n flows to eliminate manual ops from day one.",
      icon: <Workflow className="h-5 w-5"/>,
    },
    {
      title: "Design that converts",
      desc: "Senior‑level UX, clear copy, and modern UI to turn traffic into trials.",
      icon: <Sparkles className="h-5 w-5"/>,
    },
  ];
  return (
    <section className="py-14">
      <div className="mx-auto max-w-7xl px-4 grid md:grid-cols-3 gap-6">
        {items.map((i) => (
          <Card key={i.title} className="rounded-2xl">
            <CardHeader className="flex-row items-center gap-3">
              <div className="rounded-xl p-2 bg-slate-50 border">{i.icon}</div>
              <CardTitle className="text-lg">{i.title}</CardTitle>
            </CardHeader>
            <CardContent className="text-slate-600">{i.desc}</CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

function Products() {
  const products = [
    {
      title: "Lead‑to‑Client Automation",
      bullets: [
        "AI triage & qualification",
        "CRM sync & follow‑ups",
        "Proposal/Quote generator",
      ],
    },
    {
      title: "Content Engine",
      bullets: [
        "Topic→Script→Assets auto‑pipeline",
        "Scheduling & multi‑channel posting",
        "Brand‑safe templates",
      ],
    },
    {
      title: "Ops Co‑pilot",
      bullets: [
        "Email → tasks → CRM",
        "Docs → summaries → action items",
        "KPI alerts & weekly rollups",
      ],
    },
    {
      title: "Data Intake & PDF Builder",
      bullets: [
        "Form → structured data",
        "AI summaries",
        "Branded PDF output",
      ],
    },
  ];

  return (
    <section id="products" className="py-16 bg-white">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex items-end justify-between mb-6">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Automation Blueprints</h2>
          <Button variant="link" asChild>
            <a href={APP_URL} className="group">Explore all <ChevronRight className="inline h-4 w-4 group-hover:translate-x-0.5 transition"/></a>
          </Button>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((p) => (
            <Card key={p.title} className="rounded-2xl">
              <CardHeader>
                <CardTitle className="text-lg">{p.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-slate-600">
                  {p.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2"><Check className="h-4 w-4 mt-0.5"/>{b}</li>
                  ))}
                </ul>
                <div className="mt-4 flex gap-2">
                  <Button size="sm" asChild><a href={SIGNUP_URL}>Try demo</a></Button>
                  <Button size="sm" variant="secondary" asChild>
                    <a href={CALENDLY_URL} target="_blank" rel="noreferrer">Discuss fit</a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function Services() {
  const services = [
    {
      icon: <Rocket className="h-5 w-5"/>,
      title: "AI MVP & Micro‑SaaS Build",
      desc: "Idea → validated MVP in 2–4 weeks. Next.js + tRPC/REST API, Stripe, Postgres, OAuth, analytics, docs.",
    },
    {
      icon: <Workflow className="h-5 w-5"/>,
      title: "Automation Systems",
      desc: "Make.com / n8n blueprints, CRM/Sheets/Notion/Email integrations, review + lead ops, alerts.",
    },
    {
      icon: <Cpu className="h-5 w-5"/>,
      title: "AI Assistants & Agents",
      desc: "Retrieval‑augmented assistants for support, ops, and sales. Guardrails, evals, and analytics included.",
    },
  ];
  return (
    <section id="services" className="py-16 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-6">Services</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((s) => (
            <Card key={s.title} className="rounded-2xl">
              <CardHeader className="flex-row items-center gap-3">
                <div className="rounded-xl p-2 bg-white border">{s.icon}</div>
                <CardTitle className="text-lg">{s.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-600">{s.desc}</CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function Process() {
  const steps = [
    { n: 1, title: "Roadmap Call", desc: "Clarify goals, constraints, and success metrics. Pick the smallest win." },
    { n: 2, title: "Design Sprint", desc: "UX flows + clickable UI prototype. Copy that sells." },
    { n: 3, title: "MVP Build", desc: "API‑first core, AI endpoints, auth, Stripe, logging, docs." },
    { n: 4, title: "Automate Ops", desc: "Ship blueprints for lead, content, support, and finance flows." },
    { n: 5, title: "Launch & Learn", desc: "Ship → measure → iterate. Add the next most valuable feature." },
  ];
  return (
    <section id="process" className="py-16">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-8">How we work (fast)</h2>
        <div className="grid md:grid-cols-5 gap-4">
          {steps.map((s) => (
            <Card key={s.title} className="rounded-2xl">
              <CardHeader>
                <Badge variant="secondary">Step {s.n}</Badge>
                <CardTitle className="text-lg mt-2">{s.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-600 text-sm">{s.desc}</CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function Results() {
  const items = [
    {
      title: "Ops cut by 8–12 hrs/week",
      desc: "Lead handling + content scheduling fully automated with review gates.",
    },
    {
      title: "Faster MVP cycles",
      desc: "From idea to paying users in under a month across 3 niches.",
    },
    {
      title: "Cleaner data → better decisions",
      desc: "Unified analytics and automated weekly reports to drive roadmap.",
    },
  ];
  return (
    <section className="py-14 bg-white">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-6">Outcomes clients hire us for</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((i) => (
            <Card key={i.title} className="rounded-2xl">
              <CardHeader>
                <CardTitle className="text-lg">{i.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-600">{i.desc}</CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  const plans = [
    {
      name: "Starter Sprint",
      price: "$4,500",
      tagline: "UX prototype + technical plan",
      features: [
        "Roadmap workshop",
        "Clickable prototype",
        "MVP spec & estimate",
      ],
      cta: "Start a design sprint",
    },
    {
      name: "MVP Build",
      price: "$12k–$25k",
      tagline: "Done‑for‑you MVP with core automations",
      features: [
        "Auth, billing, analytics",
        "API + core features",
        "2 automation blueprints",
      ],
      cta: "Book a build slot",
    },
    {
      name: "Automation Ops",
      price: "$2k–$6k/mo",
      tagline: "Ongoing flows, agents, and improvements",
      features: [
        "Monthly automation ship list",
        "AI assistant/agent tuning",
        "SLA + reporting",
      ],
      cta: "Join the waitlist",
    },
  ];
  return (
    <section id="pricing" className="py-16 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-6">Pricing</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((p) => (
            <Card key={p.name} className="rounded-2xl">
              <CardHeader>
                <CardTitle className="text-xl">{p.name}</CardTitle>
                <div className="text-3xl font-extrabold">{p.price}</div>
                <div className="text-sm text-slate-600">{p.tagline}</div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-slate-700">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2"><Check className="h-4 w-4 mt-0.5"/>{f}</li>
                  ))}
                </ul>
                <Button className="mt-4 w-full" asChild>
                  <a href={CALENDLY_URL} target="_blank" rel="noreferrer">{p.cta}</a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="rounded-3xl border p-8 md:p-12 bg-gradient-to-br from-indigo-50 to-violet-50">
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight">Ready to turn your idea into a shipped product?</h3>
              <p className="mt-2 text-slate-600">We’ll scope, design, build, and automate — so you can launch and learn faster.</p>
            </div>
            <div className="flex gap-3 md:justify-end">
              <Button size="lg" asChild>
                <a href={CALENDLY_URL} target="_blank" rel="noreferrer">Book intro call</a>
              </Button>
              <Button size="lg" variant="secondary" asChild>
                <a href={SIGNUP_URL}>Create client account</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CalendlyEmbed() {
  return (
    <section className="py-16 bg-white">
      <div className="mx-auto max-w-5xl px-4">
        <h3 className="text-xl md:text-2xl font-bold tracking-tight mb-4">Book a strategy session</h3>
        <div className="aspect-video w-full overflow-hidden rounded-2xl border">
          <iframe
            src={`${CALENDLY_URL}?hide_gdpr_banner=1`}
            className="h-full w-full"
            title="Calendly Scheduling"
          />
        </div>
      </div>
    </section>
  );
}

function ContactForm() {
  return (
    <section id="contact" className="py-16">
      <div className="mx-auto max-w-5xl px-4">
        <h3 className="text-xl md:text-2xl font-bold tracking-tight mb-4">Tell us about your project</h3>
        <Card className="rounded-2xl">
          <CardContent className="grid md:grid-cols-2 gap-6 p-6">
            <div className="space-y-3">
              <Input placeholder="Full name" />
              <Input placeholder="Work email" type="email" />
              <Input placeholder="Company / Website" />
              <Input placeholder="Budget (USD)" />
            </div>
            <div className="space-y-3">
              <Textarea placeholder="What are you trying to build or automate?" rows={6} />
              <div className="flex items-center justify-between">
                <div className="text-xs text-slate-500 flex items-center gap-2"><Lock className="h-4 w-4"/>We’ll never share your info.</div>
                <Button>Send inquiry</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

function FAQ() {
  const qas = [
    {
      q: "What tech stack do you use?",
      a: "Next.js + TypeScript + Tailwind + shadcn/ui, Postgres, Drizzle/Prisma, tRPC or REST, Stripe, Clerk/Auth.js, Make/n8n, Vercel/Render/Fly.",
    },
    {
      q: "Can you integrate with our CRM?",
      a: "Yes — HubSpot, Pipedrive, Close, Salesforce, Airtable, Notion, Sheets, webhooks, and custom APIs.",
    },
    {
      q: "How fast can we launch?",
      a: "Design sprint in 1 week, MVP typically 2–4 weeks depending on scope.",
    },
    {
      q: "Do you run the automations ongoing?",
      a: "We offer a monthly ops plan with a prioritized ship list, monitoring, and reports.",
    },
  ];
  return (
    <section className="py-16 bg-slate-50">
      <div className="mx-auto max-w-5xl px-4">
        <h3 className="text-xl md:text-2xl font-bold tracking-tight mb-6">FAQ</h3>
        <div className="grid gap-4">
          {qas.map((item) => (
            <div key={item.q} className="rounded-2xl border p-5 bg-white">
              <div className="font-medium">{item.q}</div>
              <div className="text-slate-600 text-sm mt-1">{item.a}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-10 border-t bg-white/60">
      <div className="mx-auto max-w-7xl px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-sm text-slate-600">
          <div className="h-6 w-6 rounded-lg bg-gradient-to-br from-indigo-500 to-violet-600" />
          Vonroflo © {new Date().getFullYear()}
        </div>
        <div className="flex items-center gap-4 text-sm">
          <a href="#" className="hover:underline">Privacy</a>
          <a href="#" className="hover:underline">Terms</a>
          <a href={LOGIN_URL} className="hover:underline">Client sign in</a>
        </div>
      </div>
    </footer>
  );
}

function FloatingAI() {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 rounded-full shadow-lg border bg-white h-14 w-14 grid place-items-center"
        aria-label="Open AI Assistant"
      >
        <Sparkles className="h-5 w-5" />
      </button>
      {open && (
        <div className="fixed inset-0 bg-black/30" onClick={() => setOpen(false)} />
      )}
      <div className={`fixed bottom-24 right-6 w-[380px] max-w-[92vw] ${open ? "opacity-100 translate-y-0" : "pointer-events-none opacity-0 translate-y-4"} transition`}>
        <Card className="rounded-2xl overflow-hidden">
          <CardHeader>
            <CardTitle className="text-base flex items-center gap-2"><Sparkles className="h-4 w-4"/> Vonroflo Assistant</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-sm text-slate-600 mb-3">Ask about services, timelines, or scope. (Connect this to your API or a provider.)</div>
            <Textarea placeholder="Type your question..." rows={3} />
            <div className="mt-2 flex justify-between items-center">
              <div className="text-xs text-slate-500">Demo only — no data is sent.</div>
              <Button size="sm">Send</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}


