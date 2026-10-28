'use client';

import { ArrowUpRight } from 'lucide-react';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa6';

export default function MinimalFooter() {
  const handleScroll = (href: string) => {
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="border-t border-[#0A2424] bg-[#001010] py-14">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-10 border-b border-[#0A2424]">
          {/* Brand */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-2xl tracking-[0.18em] text-[#F5F5F5]">
                ARUL
              </span>
              <span className="h-1.5 w-1.5 rounded-full bg-[#F5B900]" />
            </div>
            <p className="text-xs text-[#B8C0C0] font-medium tracking-wide">
              SEO · Meta Ads · Google Ads · GEO · AI · Digital Growth
            </p>
          </div>

          {/* Quick Links & Contact */}
          <div className="flex flex-wrap items-center gap-6 text-xs uppercase tracking-wider font-semibold text-[#B8C0C0]">
            <button
              onClick={() => handleScroll('#hero')}
              className="hover:text-[#F5B900] transition-colors cursor-pointer"
            >
              Home
            </button>
            <button
              onClick={() => handleScroll('#about')}
              className="hover:text-[#F5B900] transition-colors cursor-pointer"
            >
              About
            </button>
            <a
              href="mailto:arulv11dm@gmail.com"
              className="inline-flex items-center gap-1 text-[#F5B900] hover:text-[#FFC107] transition-colors"
            >
              <span>Contact</span>
              <ArrowUpRight className="w-3 h-3 stroke-[2.5]" />
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#B8C0C0]/70">
          <p>© 2026 Arul. All rights reserved.</p>

          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/in/arulrajv"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#B8C0C0] hover:text-[#F5B900] transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="w-4 h-4" />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#B8C0C0] hover:text-[#F5B900] transition-colors"
              aria-label="GitHub"
            >
              <FaGithub className="w-4 h-4" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#B8C0C0] hover:text-[#F5B900] transition-colors"
              aria-label="Twitter"
            >
              <FaTwitter className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
