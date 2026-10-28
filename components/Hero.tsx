import Image from 'next/image';
import AnimateOnScroll from './AnimateOnScroll';
import { FaLinkedin, FaGithub, FaTwitter, FaFacebookF, FaInstagram } from 'react-icons/fa6';
import { Download, ArrowUpRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden pt-32 sm:pt-40 pb-20 dark-grid-backdrop bg-[#001010]">
      {/* Glow background shapes */}
      <div className="pointer-events-none absolute -right-20 -top-20 h-96 w-96 rounded-full bg-[#F5B900]/15 blur-3xl" />
      <div className="pointer-events-none absolute -left-20 top-40 h-72 w-72 rounded-full bg-[#F5B900]/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-12">
          {/* LEFT COLUMN — Text & CTAs */}
          <div className="lg:col-span-7">
            <AnimateOnScroll animation="fade-in">
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#F5B900]">
                Hello, I&apos;m Arulraj 👋
              </span>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-in-up" delay={100}>
              <h1 className="mt-4 font-extrabold text-4xl sm:text-6xl lg:text-[4.2rem] leading-[1.08] tracking-tight text-[#F5F5F5] uppercase">
                I BUILD &amp; SCALE <br />
                <span className="text-[#F5B900]">DIGITAL GROWTH</span>
              </h1>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-in-up" delay={200}>
              <p className="mt-6 max-w-xl text-base sm:text-lg leading-relaxed text-[#B8C0C0]">
                I&apos;m a passionate SEO &amp; PPC Specialist helping businesses scale through Technical SEO, Programmatic SEO, AI Search Visibility (GEO), and high-converting Meta Ads.
              </p>
            </AnimateOnScroll>

            {/* CTAs */}
            <AnimateOnScroll animation="fade-in-up" delay={300}>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="C:/Users/varul/Downloads/ARULRAJ SEO & PPC Specialist Resume.pdf"
                  target="_blank"
                  download
                  className="inline-flex items-center gap-2.5 rounded-lg bg-[#F5B900] px-7 py-3.5 text-sm font-bold text-[#001010] shadow-lg shadow-[#F5B900]/20 transition-all hover:bg-[#FFC107] hover:-translate-y-0.5"
                >
                  Download CV
                  <Download className="w-4 h-4" />
                </a>
                <a
                  href="#work"
                  className="inline-flex items-center gap-2 rounded-lg border border-[#0A2424] bg-[#001818] px-7 py-3.5 text-sm font-bold text-[#F5F5F5] transition-all hover:border-[#F5B900] hover:text-[#F5B900]"
                >
                  View Works
                  <ArrowUpRight className="w-4 h-4 text-[#F5B900]" />
                </a>
              </div>
            </AnimateOnScroll>

            {/* Social Icons Row */}
            <AnimateOnScroll animation="fade-in" delay={400}>
              <div className="mt-10 flex items-center gap-4">
                <span className="text-xs font-semibold text-[#B8C0C0] uppercase tracking-wider">
                  Follow Me :
                </span>
                <div className="flex items-center gap-2.5">
                  <a
                    href="https://www.linkedin.com/in/arulrajv"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-[#0A2424] border border-white/10 text-[#B8C0C0] hover:border-[#F5B900] hover:text-[#F5B900] transition-colors"
                  >
                    <FaLinkedin className="w-4 h-4" />
                  </a>
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-[#0A2424] border border-white/10 text-[#B8C0C0] hover:border-[#F5B900] hover:text-[#F5B900] transition-colors"
                  >
                    <FaGithub className="w-4 h-4" />
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-[#0A2424] border border-white/10 text-[#B8C0C0] hover:border-[#F5B900] hover:text-[#F5B900] transition-colors"
                  >
                    <FaTwitter className="w-4 h-4" />
                  </a>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-[#0A2424] border border-white/10 text-[#B8C0C0] hover:border-[#F5B900] hover:text-[#F5B900] transition-colors"
                  >
                    <FaFacebookF className="w-4 h-4" />
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-[#0A2424] border border-white/10 text-[#B8C0C0] hover:border-[#F5B900] hover:text-[#F5B900] transition-colors"
                  >
                    <FaInstagram className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </AnimateOnScroll>
          </div>

          {/* RIGHT COLUMN — Casual Photo over Gold Splash */}
          <div className="lg:col-span-5 flex justify-center">
            <AnimateOnScroll animation="fade-in" delay={200}>
              <div className="relative mx-auto w-full max-w-[22rem] sm:max-w-[26rem]">
                {/* Yellow Splash Backdrop */}
                <div
                  className="absolute inset-0 rounded-3xl"
                  style={{
                    background: 'radial-gradient(circle at 60% 40%, #F5B900 0%, #D09400 60%, transparent 80%)',
                    transform: 'rotate(-4deg) scale(0.98)',
                    opacity: 0.85,
                  }}
                />

                {/* Photo Container */}
                <div className="relative z-10 aspect-[3/4] w-full overflow-hidden rounded-3xl border-2 border-white/20 bg-[#0A2424] shadow-2xl">
                  <Image
                    src="/portrait.jpg"
                    alt="Arulraj V — SEO & PPC Specialist"
                    fill
                    sizes="400px"
                    className="object-cover object-top"
                    priority
                  />
                </div>

                {/* Floating Experience Badge */}
                <div className="absolute -bottom-4 -right-4 z-20 flex items-center gap-3 rounded-2xl bg-[#0A2424] border border-[#F5B900]/40 p-4 shadow-2xl backdrop-blur">
                  <div className="font-extrabold text-3xl text-[#F5B900] font-mono leading-none">
                    02+
                  </div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-[#F5F5F5] leading-tight">
                    Years <br /> Experience
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}
