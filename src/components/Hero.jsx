import { Badge } from "../ui/Badge";
import LOGO_ORANGE from "/orange.webp";
import LOGO_YELLOW from "/yellow.webp";
export default function Hero() {
  return (
    <>
      <section
        id="hero"
        aria-label="Hero — Boost Google Rankings and App Ratings"
        className="relative min-h-screen flex items-center dot-grid overflow-hidden pt-[70px]"
      >
        {/* Ambient blobs */}
        <div className="absolute top-1/4 left-0 w-[500px] h-[500px] rounded-full bg-blue-600/10 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-emerald-500/8 blur-[100px] pointer-events-none" />
        <div className="absolute top-1/2 right-1/3 w-[300px] h-[300px] rounded-full bg-orange-500/10 blur-[90px] pointer-events-none" />

        {/* Decorative ring */}
        <div className="spin-slow absolute top-20 right-16 w-64 h-64 rounded-full border border-blue-500/10 pointer-events-none hidden xl:block" />
        <div
          className="spin-slow absolute top-24 right-20 w-52 h-52 rounded-full border border-blue-500/8 pointer-events-none hidden xl:block"
          style={{
            animationDirection: "reverse",
            animationDuration: "24s",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid lg:grid-cols-2 gap-14 items-center">
          {/* ── LEFT: Copy ── */}
          <div>
            <Badge className="mb-6">🚀 India's #1 Review Growth Agency</Badge>

            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-black leading-[1.08] tracking-tight mb-6">
              <span className="text-grad">Boost Your Google</span>
              <br />
              <span className="text-white">Rankings & App</span>
              <br />
              <span className="text-yellow-400">Ratings Faster.</span>
            </h1>

            <p className="text-gray-400 text-lg leading-relaxed mb-8 max-w-lg">
              Review Zone helps{" "}
              <strong className="text-gray-200 font-semibold">
                local businesses
              </strong>{" "}
              and{" "}
              <strong className="text-gray-200 font-semibold">
                app developers
              </strong>{" "}
              dominate search rankings with authentic reviews, Google Maps
              optimization, and data-driven reputation management.
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              <button
                className="pulse-ring bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 font-bold px-8 py-4 rounded-xl text-base transition-all duration-300 hover:-translate-y-1 text-white"
                aria-label="Get started free with Review Zone"
              >
                Get Started Free →
              </button>
              <button
                className="font-semibold px-8 py-4 rounded-xl text-base border border-white/15 hover:border-white/30 hover:bg-white/5 transition-all duration-300 text-gray-300 hover:text-white"
                aria-label="Watch Review Zone demo video"
              >
                ▶ Watch Demo
              </button>
            </div>

            {/* Trust pills */}
            <div className="flex flex-wrap gap-4">
              {["No Contracts", "Real Reviews Only", "Results in 30 Days"].map(
                (t) => (
                  <div
                    key={t}
                    className="flex items-center gap-2 text-sm text-gray-400"
                  >
                    <span className="text-emerald-400 font-bold text-base">
                      ✓
                    </span>
                    <span>{t}</span>
                  </div>
                ),
              )}
            </div>

            {/* Social proof strip */}
            <div className="flex items-center gap-3 mt-8 pt-8 border-t border-white/[0.07]">
              <div className="flex -space-x-2">
                {["RK", "PS", "AP", "MJ"].map((ini, i) => (
                  <div
                    key={ini}
                    className="w-9 h-9 rounded-full flex items-center justify-center text-[10px] font-black border-2 border-slate-950 text-white"
                    style={{
                      background: ["#2563EB", "#10b981", "#f97316", "#8b5cf6"][
                        i
                      ],
                    }}
                    aria-label={`Client ${ini}`}
                  >
                    {ini}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex gap-0.5 mb-0.5">
                  {Array(5)
                    .fill(0)
                    .map((_, j) => (
                      <span key={j} className="text-yellow-400 text-xs">
                        ★
                      </span>
                    ))}
                </div>
                <p className="text-gray-400 text-xs">
                  <strong className="text-gray-200">500+</strong> businesses
                  trust Review Zone
                </p>
              </div>
            </div>
          </div>

          {/* ── RIGHT: Logo showcase ── */}
          <div className="flex flex-col items-center gap-6">
            {/* Primary — orange logo */}
            <div className="float relative group w-full max-w-[440px]">
              {/* Glow halo */}
              <div className="absolute -inset-3 rounded-3xl bg-gradient-to-tr from-orange-500/25 via-yellow-400/15 to-blue-600/20 blur-2xl opacity-70 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative rounded-2xl overflow-hidden border-2 border-orange-400/30 shadow-2xl shadow-black/60">
                <img
                  src={LOGO_ORANGE}
                  alt="Review Zone Digital Agency – Official Orange Brand Logo"
                  width={440}
                  height={248}
                  className="w-full h-auto block"
                  loading="eager"
                />
              </div>

              {/* Floating badge – stars */}
              <div className="absolute -top-3 -right-3 flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900/90 backdrop-blur-sm border border-yellow-400/30 shadow-lg">
                <span className="text-yellow-400 text-sm leading-none">
                  ★★★★★
                </span>
                <span className="text-white text-xs font-black">4.9/5</span>
              </div>

              {/* Floating badge – reviews count */}
              <div className="absolute -bottom-3 -left-3 flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900/90 backdrop-blur-sm border border-emerald-400/30 shadow-lg">
                <span className="blink-dot w-2 h-2 rounded-full bg-emerald-400 flex-shrink-0" />
                <span className="text-emerald-400 text-xs font-black">
                  +10K Reviews Delivered
                </span>
              </div>
            </div>

            {/* Secondary — yellow logo */}
            <div className="relative w-full max-w-[320px] group">
              <div className="absolute -inset-2 rounded-2xl bg-gradient-to-tr from-yellow-400/15 to-blue-600/10 blur-xl opacity-50 group-hover:opacity-80 transition-opacity duration-500" />
              <div className="relative rounded-xl overflow-hidden border border-yellow-400/25 shadow-xl shadow-black/40 opacity-90 hover:opacity-100 transition-opacity duration-300">
                <img
                  src={LOGO_YELLOW}
                  alt="Review Zone Digital Agency – Yellow Brand Logo Variant"
                  width={320}
                  height={180}
                  className="w-full h-auto block"
                  loading="lazy"
                  onError={(e) => (e.target.style.display = "none")}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
              </div>
              <div className="absolute -top-2.5 -right-2.5 px-2.5 py-1 rounded-lg bg-slate-900/90 backdrop-blur-sm border border-blue-500/30 shadow-md">
                <span className="text-blue-400 text-[10px] font-black uppercase tracking-wider">
                  Official Brand
                </span>
              </div>
            </div>

            {/* Stat chips */}
            <div className="flex gap-3">
              {[
                ["500+", "Clients"],
                ["10K+", "Reviews"],
                ["#1", "Ranked"],
              ].map(([v, l]) => (
                <div
                  key={l}
                  className="flex flex-col items-center px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.07] backdrop-blur-sm"
                >
                  <span className="font-black text-sm text-grad leading-none">
                    {v}
                  </span>
                  <span className="text-gray-500 text-[10px] font-semibold uppercase tracking-wider mt-1">
                    {l}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
