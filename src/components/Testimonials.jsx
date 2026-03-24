import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";
import { TESTIMONIALS } from "../data/testimonials";
export default function Testimonials() {
  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-heading"
      className="py-24 bg-gradient-to-b from-transparent via-blue-950/[0.06] to-transparent"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            badge="Client Results"
            title={
              <>
                Loved by <span className="text-grad">500+ Businesses</span>
              </>
            }
            subtitle="Real results from real clients across India. Don't take our word for it."
          />
        </Reveal>

        <div className="grid sm:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={i * 100}>
              <figure className="card-glow flex flex-col h-full rounded-2xl bg-white/[0.035] border border-white/[0.07] p-7">
                {/* Stars */}
                <div
                  className="flex gap-0.5 mb-5"
                  aria-label={`${t.rating} out of 5 stars`}
                  role="img"
                >
                  {Array(t.rating)
                    .fill(0)
                    .map((_, j) => (
                      <span
                        key={j}
                        className="text-yellow-400 text-base"
                        aria-hidden="true"
                      >
                        ★
                      </span>
                    ))}
                </div>

                <blockquote className="text-gray-300 text-sm leading-relaxed flex-1 italic mb-6">
                  "{t.text}"
                </blockquote>

                <figcaption className="flex items-center gap-3">
                  <div
                    className={`w-11 h-11 rounded-full flex items-center justify-center font-black text-sm text-white bg-gradient-to-br ${t.color} flex-shrink-0`}
                    aria-hidden="true"
                  >
                    {t.initials}
                  </div>
                  <div>
                    <p className="font-bold text-white text-sm">{t.name}</p>
                    <p className="text-gray-400 text-xs">
                      {t.role} · {t.location}
                    </p>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
