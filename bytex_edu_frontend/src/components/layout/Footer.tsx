import { SITE_CONFIG, NAV_LINKS } from "@/lib/constants";

const FOOTER_SECTIONS = [
  {
    title: "Platform",
    links: [
      { label: "How it works", href: "#how-it-works" },
      { label: "Career projects", href: "#projects" },
      { label: "Proficiency levels", href: "#" },
      { label: "Mentorship", href: "#" },
    ],
  },
  {
    title: "For",
    links: [
      { label: "Engineering students", href: "#" },
      { label: "Management students", href: "#" },
      { label: "Parents", href: "#" },
      { label: "Colleges & enterprises", href: "#enterprises" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About us", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Contact", href: "#" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy policy", href: "#" },
      { label: "Terms of service", href: "#" },
      { label: "Refund policy", href: "#" },
      { label: "Cookie policy", href: "#" },
    ],
  },
] as const;

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-navy text-white" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-16 grid grid-cols-2 md:grid-cols-5 gap-8">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-1">
            <a href="/" className="flex items-center gap-2.5 mb-4" aria-label={`${SITE_CONFIG.name} home`}>
              <div className="w-9 h-9 rounded-lg bg-brand-orange flex items-center justify-center">
                <span className="text-white font-bold text-sm">bE</span>
              </div>
              <span className="text-white font-bold text-lg tracking-tight">
                bytex <span className="text-brand-orange">edu</span>
              </span>
            </a>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-[240px]">
              Career-accelerating industry projects bundled with every student device.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {["Twitter", "LinkedIn", "Instagram"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-gray-400 hover:text-white transition-all duration-200"
                  aria-label={`Follow us on ${social}`}
                >
                  <span className="text-xs font-bold">
                    {social.charAt(0)}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {FOOTER_SECTIONS.map((section) => (
            <div key={section.title}>
              <h3 className="text-sm font-semibold text-white mb-4 tracking-wide">
                {section.title}
              </h3>
              <ul className="space-y-3" role="list">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-gray-400 text-sm hover:text-white transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © {currentYear} {SITE_CONFIG.name}. All rights reserved.
          </p>
          <p className="text-gray-600 text-xs">
            Made with ❤️ for students who want more from their device.
          </p>
        </div>
      </div>
    </footer>
  );
}
