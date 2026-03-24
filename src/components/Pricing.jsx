import { PLANS } from "../data/plans";

import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";
export default function Pricing() {
  return (
    <section id="pricing" aria-labelledby="pricing-heading" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            badge="Pricing"
            title={
              <>
                Simple, <span className="text-grad">Transparent Pricing</span>
              </>
            }
            subtitle="No hidden fees. No long-term lock-ins. Cancel anytime with 7 days' notice."
          />
        </Reveal>

        <div className="grid sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {PLANS.map((plan, i) => (
            <Reveal key={plan.name} delay={i * 100}>
              <article
                className={`card-glow relative flex flex-col h-full rounded-2xl p-7 ${
                  plan.popular
                    ? "bg-gradient-to-b from-blue-600/20 to-blue-950/40 border-2 border-blue-500/60"
                    : "bg-white/[0.035] border border-white/[0.07]"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 whitespace-nowrap bg-gradient-to-r from-blue-600 to-emerald-500 text-white text-xs font-black px-4 py-1.5 rounded-full shadow-lg shadow-blue-500/30">
                    ⚡ Most Popular
                  </div>
                )}

                <header>
                  <p className="text-xs font-black uppercase tracking-widest text-gray-400 mb-1">
                    {plan.name}
                  </p>
                  <div className="flex items-end gap-1 mb-1">
                    <span className="text-4xl font-black text-white leading-none">
                      {plan.price}
                    </span>
                    <span className="text-gray-400 text-sm mb-1">
                      {plan.period}
                    </span>
                  </div>
                  <p className="text-gray-500 text-sm mb-5">{plan.desc}</p>
                  <div className="h-px bg-white/[0.08] mb-5" />
                </header>

                <ul role="list" className="space-y-3 mb-7 flex-1">
                  {plan.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-2.5 text-sm text-gray-300"
                    >
                      <span className="text-emerald-400 font-black mt-px flex-shrink-0">
                        ✓
                      </span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-3.5 rounded-xl font-bold text-sm transition-all duration-300 hover:-translate-y-0.5 ${
                    plan.popular
                      ? "bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white shadow-lg shadow-blue-500/25"
                      : "border border-white/15 hover:border-blue-500/50 hover:bg-blue-500/10 text-gray-300 hover:text-white"
                  }`}
                  aria-label={`Choose ${plan.name} plan`}
                >
                  {plan.cta} {plan.popular ? "→" : ""}
                </button>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="text-center text-gray-500 text-sm mt-8">
            All plans include a{" "}
            <strong className="text-gray-300">free 7-day audit</strong>. Need
            something custom?{" "}
            <a
              href="mailto:hello@reviewzone.in"
              className="text-blue-400 hover:text-blue-300 underline underline-offset-2 transition-colors"
            >
              Contact us →
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
