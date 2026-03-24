import { useState, useEffect } from "react";
import { NAV_LINKS } from "../data/navLinks";
export default function NavBar({ scrolled }) {
  const LOGO_ORANGE = "/orange.webp";
  const [menuOpen, setMenuOpen] = useState(false);
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (!el) return console.warn(`Missing section: ${id}`);
    el.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };
  return (
    <header role="banner">
      <nav
        aria-label="Main navigation"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-slate-950/90 backdrop-blur-xl border-b border-white/[0.06] shadow-2xl shadow-black/50"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-[70px]">
          {/* Logo */}
          <a
            href="/"
            aria-label="Review Zone Digital Agency – Home"
            className="flex items-center shrink-0"
          >
            <img
              src={LOGO_ORANGE}
              alt="Review Zone Digital Agency logo"
              width={160}
              height={44}
              className="h-10 w-auto object-contain rounded-lg"
              loading="eager"
              onError={(e) => (e.target.style.display = "none")}
            />
          </a>

          {/* Desktop Nav */}
          <ul role="list" className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map(({ label, id }) => (
              <li key={id}>
                <button
                  onClick={() => scrollTo(id)}
                  className="relative px-4 py-2 text-sm font-semibold text-gray-400 hover:text-white transition-colors duration-200 group rounded-lg hover:bg-white/5"
                  aria-label={`Navigate to ${label} section`}
                >
                  {label}
                  <span className="absolute bottom-1 left-4 right-4 h-px bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full" />
                </button>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <button className="text-sm font-semibold text-gray-300 hover:text-white transition-colors px-4 py-2 rounded-lg hover:bg-white/5">
              Login
            </button>
            <button
              className="pulse-ring text-sm font-bold px-5 py-2.5 rounded-xl text-white transition-all duration-300 hover:-translate-y-0.5 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600"
              aria-label="Get started with Review Zone"
            >
              Get Started →
            </button>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 rounded-lg text-white hover:bg-white/10 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            <span className="text-xl">{menuOpen ? "✕" : "☰"}</span>
          </button>
        </div>

        {/* Mobile drawer */}
        {menuOpen && (
          <div className="md:hidden bg-slate-950/95 backdrop-blur-xl border-t border-white/[0.06] px-4 py-5 flex flex-col gap-2">
            {NAV_LINKS.map(({ label, id }) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className="text-left text-gray-300 font-semibold py-2.5 px-3 rounded-lg hover:bg-white/5 hover:text-white transition-colors"
              >
                {label}
              </button>
            ))}
            <div className="pt-2 border-t border-white/10 mt-2">
              <button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 font-bold px-5 py-3 rounded-xl text-sm hover:from-blue-500 hover:to-blue-600 transition-all">
                Get Started Free →
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
