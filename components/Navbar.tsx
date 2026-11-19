'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa6';

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
      className={`fixed inset-x-0 top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-md border-b border-[#E5E0D8] py-3 sm:py-3.5 shadow-xs'
          : 'bg-transparent py-4 sm:py-5'
      }`}
    >
      <nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">
        {/* Signature Golden Script Logo */}
        <Link
          href="/"
          className="flex items-center group relative h-9 sm:h-10 w-20 sm:w-24"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          <Image
            src="/arul-logo-gold-tight.png"
            alt="Arulraj V"
            fill
            priority
            className="object-contain object-left transition-transform duration-300 group-hover:scale-105"
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
                  ? 'text-[#FF5A36] font-bold'
                  : 'text-[#4B5563] hover:text-[#111827]'
              }`}
            >
              {link.label}
              {link.isActive && (
                <span className="absolute inset-x-0 -bottom-1.5 h-[3px] bg-[#FF5A36] rounded-full" />
              )}
            </a>
          ))}
        </div>

        {/* Right CTA Area matching reference (WhatsApp icon + Black Pill Button) & Mobile Menu Toggle */}
        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href="https://wa.me/918940319984?text=Hi%20Arulraj%20V,%20I'd%20like%20to%20discuss%20growing%20my%20business"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full border border-gray-200/90 bg-white hover:bg-gray-50 text-[#25D366] transition-all hover:-translate-y-0.5 shadow-2xs"
            aria-label="Chat on WhatsApp"
          >
            <FaWhatsapp className="w-4 h-4 sm:w-[18px] sm:h-[18px] text-[#25D366]" />
          </a>

          <a
            href="#contact"
            onClick={(e) => handleLinkClick(e, '#contact')}
            className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-[#111827] hover:bg-black px-5 py-2.5 text-xs sm:text-sm font-semibold text-white shadow-xs transition-all hover:shadow-md hover:-translate-y-0.5 cursor-pointer"
          >
            <span>Get Free Audit</span>
            <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[2.5]" />
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200/90 bg-white text-[#111827] md:hidden shadow-2xs hover:bg-gray-50"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-4 h-4 stroke-[2.5]" /> : <Menu className="w-4 h-4 stroke-[2.5]" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[60px] sm:top-[68px] bg-white/98 backdrop-blur-xl border-b border-[#E5E0D8] px-6 py-6 shadow-xl animate-fade-in-up">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`text-base font-medium border-b border-gray-100 pb-3 transition-colors ${
                  link.isActive ? 'text-[#FF5A36] font-bold' : 'text-[#4B5563] hover:text-[#111827]'
                }`}
              >
                {link.label}
              </a>
            ))}
            <div className="flex flex-col gap-2.5 mt-2">
              <a
                href="https://wa.me/918940319984?text=Hi%20Arulraj%20V,%20I'd%20like%20to%20discuss%20growing%20my%20business"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#FF5A36] hover:bg-[#E84E2C] px-5 py-3 text-sm font-bold text-white shadow-sm transition-all"
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
