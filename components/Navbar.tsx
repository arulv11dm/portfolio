'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#hero', isActive: true },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#expertise' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Blog', href: '#proof' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#FAF8F5]/90 backdrop-blur-md border-b border-[#E5E0D8] py-3 shadow-xs'
          : 'bg-transparent py-5'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* Signature Golden Script Logo */}
        <Link
          href="/"
          className="flex items-center group relative h-10 w-24 sm:w-28"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          <Image
            src="/arul-logo-transparent.png"
            alt="Arul"
            fill
            priority
            className="object-contain object-left transition-transform duration-300 group-hover:scale-105 drop-shadow-xs"
            sizes="120px"
          />
        </Link>

        {/* Center Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className={`relative py-1 transition-colors ${
                link.isActive
                  ? 'text-[#D97706] font-bold'
                  : 'text-[#4B5563] hover:text-[#111827]'
              }`}
            >
              {link.label}
              {link.isActive && (
                <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-[#D97706] rounded-full" />
              )}
            </a>
          ))}
        </div>

        {/* Right CTA Button (Resume + Let's Talk) */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="/Arulraj-SEO-PPC-Specialist-Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-xl border border-[#E5E0D8] bg-white px-4 py-2.5 text-xs sm:text-sm font-semibold text-[#111827] shadow-2xs transition-all hover:border-[#D97706] hover:text-[#D97706] hover:bg-[#FAF8F5] cursor-pointer"
          >
            <span>Resume</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          <a
            href="mailto:arulv11dm@gmail.com"
            className="inline-flex items-center gap-2 rounded-xl bg-[#F5B900] px-5 py-2.5 text-xs sm:text-sm font-bold text-[#111827] shadow-sm transition-all hover:bg-[#FFC107] hover:shadow-md hover:-translate-y-0.5 cursor-pointer"
          >
            <span>Let&apos;s Talk</span>
            <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-lg text-[#111827] md:hidden hover:bg-[#E5E0D8]/40 transition-colors"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[68px] bg-[#FAF8F5]/98 backdrop-blur-xl border-b border-[#E5E0D8] px-6 py-6 shadow-xl animate-fade-in-up">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`text-base font-medium border-b border-[#E5E0D8]/60 pb-3 transition-colors ${
                  link.isActive ? 'text-[#D97706] font-bold' : 'text-[#111827] hover:text-[#D97706]'
                }`}
              >
                {link.label}
              </a>
            ))}
            <div className="flex flex-col gap-2 mt-2">
              <a
                href="/Arulraj-SEO-PPC-Specialist-Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#E5E0D8] bg-white px-5 py-2.5 text-sm font-bold text-[#111827] shadow-2xs"
              >
                <span>View Resume (PDF)</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <a
                href="mailto:arulv11dm@gmail.com"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#F5B900] px-5 py-3 text-sm font-bold text-[#111827] shadow-sm"
              >
                <span>Let&apos;s Talk</span>
                <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
