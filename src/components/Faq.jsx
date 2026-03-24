import { useState } from "react";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";
import { FAQS } from "../data/faq";
export default function Faq() {
  const [openFaq, setOpenFaq] = useState(null);
  return (
    <>
      <section id="faq" aria-labelledby="faq-heading" className="py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeading
              badge="FAQ"
              title={
                <>
                  Common <span className="text-grad">Questions</span>
                </>
              }
              subtitle="Everything you need to know before getting started with Review Zone."
            />
          </Reveal>

          <dl className="rounded-2xl overflow-hidden bg-white/[0.03] border border-white/[0.07] divide-y divide-white/[0.06]">
            {FAQS.map((item, i) => (
              <Reveal key={i}>
                <div>
                  <dt>
                    <button
                      id={`faq-q-${i}`}
                      aria-expanded={openFaq === i}
                      aria-controls={`faq-a-${i}`}
                      className="w-full flex items-center justify-between p-6 text-left hover:bg-white/[0.04] transition-colors duration-200 group"
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    >
                      <span className="font-semibold text-white pr-4 text-sm sm:text-base leading-snug">
                        {item.q}
                      </span>
                      <span
                        className="text-blue-400 text-2xl flex-shrink-0 font-light transition-transform duration-300 leading-none"
                        style={{
                          transform: openFaq === i ? "rotate(45deg)" : "none",
                        }}
                        aria-hidden="true"
                      >
                        +
                      </span>
                    </button>
                  </dt>
                  {openFaq === i && (
                    <dd
                      id={`faq-a-${i}`}
                      role="region"
                      aria-labelledby={`faq-q-${i}`}
                      className="px-6 pb-6"
                    >
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {item.a}
                      </p>
                    </dd>
                  )}
                </div>
              </Reveal>
            ))}
          </dl>

          <Reveal>
            <p className="text-center text-gray-500 text-sm mt-6">
              Still have questions?{" "}
              <a
                href="mailto:hello@reviewzone.in"
                className="text-blue-400 hover:text-blue-300 underline underline-offset-2 transition-colors"
              >
                Email us →
              </a>
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
