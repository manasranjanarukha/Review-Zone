import LOGO_ORANGE from "/orange.webp";
export default function Footer() {
  return (
    <footer
      role="contentinfo"
      className="border-t border-white/[0.06] pt-14 pb-8"
      style={{ background: "#040b1a" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="/" aria-label="Review Zone Digital Agency – Home">
              <img
                src={LOGO_ORANGE}
                alt="Review Zone Digital Agency"
                width={150}
                height={40}
                className="h-9 w-auto object-contain rounded-md mb-4"
                loading="lazy"
              />
            </a>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs mb-5">
              India's leading digital agency for Google Maps optimization,
              review management, and app store rating growth.
            </p>
            <address className="not-italic text-gray-500 text-sm space-y-1 mb-5">
              <p>
                <a
                  href="mailto:hello@reviewzone.in"
                  className="hover:text-gray-300 transition-colors"
                >
                  hello@reviewzone.in
                </a>
              </p>
              <p>
                <a
                  href="tel:+919876543210"
                  className="hover:text-gray-300 transition-colors"
                >
                  +91 98765 43210
                </a>
              </p>
              <p>Bengaluru, Karnataka, India</p>
            </address>
            <nav aria-label="Social media links" className="flex gap-2.5">
              {[
                ["𝕏", "Twitter / X", "https://twitter.com"],
                ["in", "LinkedIn", "https://linkedin.com"],
                ["f", "Facebook", "https://facebook.com"],
                ["▶", "YouTube", "https://youtube.com"],
              ].map(([icon, label, href]) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  rel="noopener noreferrer"
                  target="_blank"
                  className="w-9 h-9 rounded-lg flex items-center justify-center text-sm text-gray-400 hover:text-white bg-white/[0.04] hover:bg-blue-600/20 border border-white/[0.06] hover:border-blue-500/30 transition-all duration-200"
                >
                  {icon}
                </a>
              ))}
            </nav>
          </div>

          {/* Nav columns */}
          {[
            {
              title: "Services",
              links: [
                { label: "Google Maps Optimization", href: "#services" },
                { label: "Review Management", href: "#services" },
                { label: "Play Store Ratings", href: "#services" },
                { label: "Analytics & Reports", href: "#services" },
              ],
            },
            {
              title: "Company",
              links: [
                { label: "About Us", href: "/about" },
                { label: "Case Studies", href: "/case-studies" },
                { label: "Blog", href: "/blog" },
                { label: "Careers", href: "/careers" },
              ],
            },
            {
              title: "Resources",
              links: [
                { label: "Pricing", href: "#pricing" },
                { label: "FAQ", href: "#faq" },
                { label: "Free Audit", href: "#hero" },
                { label: "Contact", href: "mailto:hello@reviewzone.in" },
              ],
            },
          ].map(({ title, links }) => (
            <nav key={title} aria-label={`${title} links`}>
              <h3 className="font-black text-white text-sm uppercase tracking-widest mb-5">
                {title}
              </h3>
              <ul role="list" className="space-y-3">
                {links.map(({ label, href }) => (
                  <li key={label}>
                    <a
                      href={href}
                      className="text-gray-500 text-sm hover:text-gray-200 transition-colors duration-200"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/[0.06] pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-xs">
            © {new Date().getFullYear()} Review Zone Digital Agency. All rights
            reserved.
          </p>
          <nav aria-label="Legal links" className="flex gap-6">
            {[
              { label: "Privacy Policy", href: "/privacy" },
              { label: "Terms of Service", href: "/terms" },
              { label: "Cookie Policy", href: "/cookies" },
            ].map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="text-gray-600 text-xs hover:text-gray-400 transition-colors"
              >
                {label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
