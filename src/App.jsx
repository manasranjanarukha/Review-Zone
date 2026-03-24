import { useState, useEffect, useRef } from "react";
// Data imports
import { CLIENTS } from "./data/clients";
import { FAQS } from "./data/faq";

import { PLANS } from "./data/plans";

import { TESTIMONIALS } from "./data/testimonials";
import { METRICS } from "./data/metrics";
import { STEPS } from "./data/steps";
// UI imports
import Reveal from "./ui/Reveal";

import SectionHeading from "./ui/SectionHeading";
import "./App.css";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import Faq from "./components/Faq";
import Footer from "./components/Footer";

/* ─────────────────────────────────────────────
   DATA
───────────────────────────────────────────── */
const LOGO_ORANGE = "/orange.webp";
const LOGO_YELLOW = "/yellow.webp";

/* ─────────────────────────────────────────────
   MAIN COMPONENT
───────────────────────────────────────────── */
export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div
        className="min-h-screen text-white"
        style={{ background: "#060d1f" }}
      >
        {/* ══════════════════════════════════════════
            SEO: Skip link for accessibility
        ══════════════════════════════════════════ */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-blue-600 focus:text-white focus:px-4 focus:py-2 focus:rounded-lg focus:font-bold"
        >
          Skip to main content
        </a>

        {/* ══════════════════════════════════════════
            NAVBAR
        ══════════════════════════════════════════ */}
        <NavBar scrolled={scrolled} />

        <main id="main-content">
          {/* ══════════════════════════════════════════
              HERO
          ══════════════════════════════════════════ */}
          <Hero />

          {/* ══════════════════════════════════════════
              TRUST LOGOS
          ══════════════════════════════════════════ */}
          <section
            aria-label="Trusted by leading Indian brands"
            className="py-14 border-y border-white/[0.05]"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <p className="text-center text-gray-500 text-sm font-semibold uppercase tracking-widest mb-8">
                Trusted by 500+ businesses across India
              </p>
              <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-4 opacity-40">
                {CLIENTS.map((name) => (
                  <span
                    key={name}
                    className="text-gray-300 font-black text-lg tracking-tight"
                  >
                    {name}
                  </span>
                ))}
              </div>
            </div>
          </section>

          {/* ══════════════════════════════════════════
              METRICS
          ══════════════════════════════════════════ */}
          <section aria-label="Key metrics and achievements" className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <dl className="grid grid-cols-2 lg:grid-cols-4 gap-5">
                {METRICS.map(({ value, label, icon }, i) => (
                  <Reveal key={label} delay={i * 80}>
                    <div className="card-glow relative shimmer overflow-hidden rounded-2xl bg-white/[0.04] border border-white/[0.07] p-7 text-center">
                      <div className="text-3xl mb-2" aria-hidden="true">
                        {icon}
                      </div>
                      <dt className="sr-only">{label}</dt>
                      <dd className="text-3xl sm:text-4xl font-black text-grad leading-none mb-2">
                        {value}
                      </dd>
                      <p className="text-gray-400 text-sm font-medium">
                        {label}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </dl>
            </div>
          </section>

          {/* ══════════════════════════════════════════
              SERVICES
          ══════════════════════════════════════════ */}
          <Services />

          {/* ══════════════════════════════════════════
              HOW IT WORKS
          ══════════════════════════════════════════ */}
          <section
            id="how-it-works"
            aria-labelledby="how-it-works-heading"
            className="py-24 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/[0.07] to-transparent pointer-events-none" />
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <Reveal>
                <SectionHeading
                  badge="How It Works"
                  title={
                    <>
                      From Signup to{" "}
                      <span className="text-grad">5-Star Success</span>
                    </>
                  }
                  subtitle="Our proven 4-step process delivers measurable, lasting results — in weeks, not months."
                />
              </Reveal>

              <ol
                role="list"
                className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 relative"
              >
                {/* Connector line (desktop) */}
                <div
                  className="hidden lg:block absolute top-10 left-[15%] right-[15%] h-px bg-gradient-to-r from-blue-600/40 via-emerald-500/40 to-blue-600/40 pointer-events-none"
                  aria-hidden="true"
                />

                {STEPS.map((s, i) => (
                  <Reveal key={s.num} delay={i * 120}>
                    <li className="card-glow relative flex flex-col items-center text-center rounded-2xl bg-white/[0.035] border border-white/[0.07] p-7">
                      <div className="relative z-10 w-16 h-16 rounded-2xl flex items-center justify-center font-black text-xl text-white mb-4 shadow-lg bg-gradient-to-br from-blue-600 to-blue-800">
                        {s.num}
                        <span
                          className="absolute -top-1 -right-1 text-base"
                          aria-hidden="true"
                        >
                          {s.icon}
                        </span>
                      </div>
                      <h3 className="font-bold text-white text-lg mb-2">
                        {s.title}
                      </h3>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {s.desc}
                      </p>
                    </li>
                  </Reveal>
                ))}
              </ol>
            </div>
          </section>

          {/* ══════════════════════════════════════════
              PRICING
          ══════════════════════════════════════════ */}
          <Pricing />

          {/* ══════════════════════════════════════════
              TESTIMONIALS
          ══════════════════════════════════════════ */}
          <Testimonials />

          {/* ══════════════════════════════════════════
              DASHBOARD PREVIEW
          ══════════════════════════════════════════ */}
          <section aria-labelledby="dashboard-heading" className="py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <Reveal>
                <SectionHeading
                  badge="Live Dashboard"
                  title={
                    <>
                      Your Reviews,{" "}
                      <span className="text-grad">All in One Place</span>
                    </>
                  }
                  subtitle="A powerful real-time analytics dashboard to monitor reputation growth across every platform."
                />
              </Reveal>

              <Reveal delay={100}>
                <div
                  className="rounded-2xl overflow-hidden shadow-2xl shadow-black/60 border border-white/[0.08] max-w-4xl mx-auto"
                  style={{
                    background:
                      "linear-gradient(135deg, #0d1b30 0%, #0f1f2e 100%)",
                  }}
                  role="img"
                  aria-label="Review Zone dashboard interface preview showing ratings, rankings, and analytics"
                >
                  {/* Title bar */}
                  <div className="flex items-center gap-2 px-5 py-3.5 border-b border-white/[0.07] bg-white/[0.02]">
                    <span
                      className="w-3 h-3 rounded-full bg-red-400/80"
                      aria-hidden="true"
                    />
                    <span
                      className="w-3 h-3 rounded-full bg-yellow-400/80"
                      aria-hidden="true"
                    />
                    <span
                      className="w-3 h-3 rounded-full bg-emerald-400/80"
                      aria-hidden="true"
                    />
                    <span className="ml-4 text-xs text-gray-500 bg-white/[0.05] px-3 py-1 rounded-full font-mono">
                      dashboard.reviewzone.in
                    </span>
                    <span className="ml-auto flex items-center gap-1.5 text-[11px] text-emerald-400 font-semibold">
                      <span
                        className="blink-dot w-1.5 h-1.5 rounded-full bg-emerald-400"
                        aria-hidden="true"
                      />
                      Live
                    </span>
                  </div>

                  <div className="p-5 sm:p-7">
                    {/* KPI row */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-5">
                      {[
                        ["Total Reviews", "1,243", "+12%", "↑"],
                        ["Avg Rating", "4.8 ★", "+0.3", "↑"],
                        ["Maps Rank", "#2", "↑5 spots", "↑"],
                        ["Response Rate", "98%", "+5%", "↑"],
                      ].map(([label, val, delta]) => (
                        <div
                          key={label}
                          className="rounded-xl p-3.5 text-center bg-white/[0.04] border border-white/[0.06]"
                        >
                          <p className="text-[10px] text-gray-500 uppercase tracking-wider font-semibold mb-1">
                            {label}
                          </p>
                          <p className="font-black text-white text-xl leading-tight">
                            {val}
                          </p>
                          <p className="text-emerald-400 text-xs font-bold mt-1">
                            {delta}
                          </p>
                        </div>
                      ))}
                    </div>

                    {/* Charts row */}
                    <div className="grid sm:grid-cols-3 gap-3">
                      <div className="sm:col-span-2 rounded-xl p-4 bg-white/[0.03] border border-white/[0.05]">
                        <p className="text-xs text-gray-400 mb-4 font-semibold uppercase tracking-wider">
                          Rating Trend — 6 months
                        </p>
                        <div
                          className="flex items-end gap-2 h-24"
                          aria-label="Bar chart showing rating trend increasing over 6 months"
                        >
                          {[55, 65, 60, 78, 88, 100].map((h, i) => (
                            <div
                              key={i}
                              className="flex-1 rounded-t-md transition-all duration-500"
                              style={{
                                height: `${h}%`,
                                background:
                                  i === 5
                                    ? "linear-gradient(180deg,#4ade80,#16a34a)"
                                    : "linear-gradient(180deg,#3b82f6,#1d4ed8)",
                                opacity: i === 5 ? 1 : 0.4 + i * 0.12,
                              }}
                              aria-hidden="true"
                            />
                          ))}
                        </div>
                        <div className="flex justify-between text-[10px] text-gray-600 mt-2 font-mono">
                          {["Oct", "Nov", "Dec", "Jan", "Feb", "Mar"].map(
                            (m) => (
                              <span key={m}>{m}</span>
                            ),
                          )}
                        </div>
                      </div>

                      <div className="rounded-xl p-4 bg-white/[0.03] border border-white/[0.05]">
                        <p className="text-xs text-gray-400 mb-4 font-semibold uppercase tracking-wider">
                          Platform Split
                        </p>
                        <div className="space-y-3">
                          {[
                            ["Google Maps", 78, "#3b82f6"],
                            ["Play Store", 15, "#4ade80"],
                            ["Others", 7, "#f97316"],
                          ].map(([p, pct, clr]) => (
                            <div key={p}>
                              <div className="flex justify-between text-[11px] mb-1">
                                <span className="text-gray-400 font-medium">
                                  {p}
                                </span>
                                <span className="text-white font-bold">
                                  {pct}%
                                </span>
                              </div>
                              <div className="h-1.5 rounded-full bg-white/[0.08] overflow-hidden">
                                <div
                                  className="h-full rounded-full"
                                  style={{ width: `${pct}%`, background: clr }}
                                  aria-hidden="true"
                                />
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </section>

          {/* ══════════════════════════════════════════
              FAQ
          ══════════════════════════════════════════ */}
          <Faq />

          {/* ══════════════════════════════════════════
              FINAL CTA
          ══════════════════════════════════════════ */}
          <section
            aria-labelledby="cta-heading"
            className="py-28 relative overflow-hidden noise"
          >
            {/* Background glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/25 via-transparent to-emerald-900/15 pointer-events-none" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_70%_at_50%_50%,rgba(37,99,235,0.12),transparent)] pointer-events-none" />

            <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <Reveal>
                <div
                  className="text-5xl mb-5 animate-bounce"
                  aria-hidden="true"
                >
                  🚀
                </div>
                <h2
                  id="cta-heading"
                  className="text-3xl sm:text-5xl font-black text-white leading-tight mb-5"
                >
                  Ready to <span className="text-grad">Dominate</span>
                  <br />
                  Your Market?
                </h2>
                <p className="text-gray-300 text-lg leading-relaxed mb-10 max-w-xl mx-auto">
                  Join <strong>500+ businesses</strong> that trust Review Zone
                  to build their reputation, grow ratings, and win more
                  customers — guaranteed.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                  <button
                    className="pulse-ring bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 font-bold px-10 py-4 rounded-xl text-base transition-all duration-300 hover:-translate-y-1 text-white shadow-xl shadow-blue-500/25"
                    aria-label="Start your free audit with Review Zone"
                  >
                    Start Free Audit →
                  </button>
                  <a
                    href="tel:+919876543210"
                    className="inline-flex items-center justify-center gap-2 font-semibold px-10 py-4 rounded-xl text-base border border-white/15 hover:border-white/30 hover:bg-white/5 transition-all duration-300 text-gray-300 hover:text-white"
                    aria-label="Call Review Zone"
                  >
                    📞 Talk to Expert
                  </a>
                </div>

                <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-gray-500 text-sm">
                  {[
                    "No credit card required",
                    "Free 7-day audit",
                    "Cancel anytime",
                    "Results guaranteed",
                  ].map((t) => (
                    <span key={t} className="flex items-center gap-1.5">
                      <span className="text-emerald-500" aria-hidden="true">
                        ✓
                      </span>{" "}
                      {t}
                    </span>
                  ))}
                </div>
              </Reveal>
            </div>
          </section>
        </main>

        {/* ══════════════════════════════════════════
            FOOTER
        ══════════════════════════════════════════ */}
        <Footer />
      </div>
    </>
  );
}
