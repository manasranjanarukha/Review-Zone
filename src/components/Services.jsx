import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";
import { SERVICES } from "../data/services";
export default function Services() {
  return (
    <section id="services" aria-labelledby="services-heading" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center ">
        <Reveal>
          <SectionHeading
            badge="Our Services"
            title={
              <>
                Everything You Need to{" "}
                <span className="text-grad">Dominate Reviews</span>
              </>
            }
            subtitle="A complete reputation management ecosystem — from local Google Maps to global app stores."
          />
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((s, i) => (
            <Reveal key={s.title} delay={i * 90}>
              <article className="card-glow group relative flex flex-col h-full rounded-2xl bg-white/[0.035] border border-white/[0.07] p-6 cursor-pointer">
                {s.badge && (
                  <span className="absolute top-4 right-4 text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full bg-blue-500/15 text-blue-400 border border-blue-500/25">
                    {s.badge}
                  </span>
                )}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-5 bg-white/[0.06] group-hover:bg-blue-500/15 transition-colors duration-300"
                  aria-hidden="true"
                >
                  {s.icon}
                </div>
                <h3 className="font-bold text-white text-base mb-2 leading-snug">
                  {s.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed flex-1">
                  {s.desc}
                </p>
                <span className="mt-5 text-blue-400 text-sm font-bold group-hover:text-blue-300 transition-colors inline-flex items-center gap-1">
                  Learn more{" "}
                  <span className="group-hover:translate-x-1 transition-transform duration-200">
                    →
                  </span>
                </span>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
