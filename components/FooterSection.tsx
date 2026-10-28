'use client';

import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa6';

const footerNav = [
  { label: 'About', href: '#about' },
  { label: 'Case Studies', href: '#portfolio' },
  { label: 'Expertise', href: '#expertise' },
  { label: 'Tools', href: '#tools' },
  { label: 'Contact', href: '#contact' },
];

export default function FooterSection() {
  const handleScroll = (href: string) => {
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="border-t border-[#E5E0D8] bg-[#FAF8F5] py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-12 border-b border-[#E5E0D8]">
          {/* Brand */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-3xl tracking-[0.18em] text-[#111827]">
                ARUL
              </span>
              <span className="h-2 w-2 rounded-full bg-[#D97706]" />
            </div>
            <p className="text-xs sm:text-sm text-[#6B7280] font-medium tracking-wide">
              SEO · Meta Ads · Google Ads · GEO · AI · Digital Growth
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap items-center gap-6 text-xs uppercase tracking-widest font-bold text-[#6B7280]">
            {footerNav.map((link) => (
              <button
                key={link.label}
                onClick={() => handleScroll(link.href)}
                className="hover:text-[#D97706] transition-colors cursor-pointer"
              >
                {link.label}
              </button>
            ))}
            <a
              href="/Arulraj-SEO-PPC-Specialist-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#D97706] transition-colors cursor-pointer"
            >
              Resume (PDF)
            </a>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Social */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#6B7280] font-medium">
          <p>© 2026 Arul. All rights reserved.</p>

          <div className="flex items-center gap-3.5">
            <a
              href="https://www.linkedin.com/in/arul-seo"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white border border-[#E5E0D8] text-[#4B5563] hover:border-[#D97706] hover:text-[#D97706] shadow-xs transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="w-4 h-4" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white border border-[#E5E0D8] text-[#4B5563] hover:border-[#D97706] hover:text-[#D97706] shadow-xs transition-colors"
              aria-label="Instagram"
            >
              <FaInstagram className="w-4 h-4" />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white border border-[#E5E0D8] text-[#4B5563] hover:border-[#D97706] hover:text-[#D97706] shadow-xs transition-colors"
              aria-label="GitHub"
            >
              <FaGithub className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
