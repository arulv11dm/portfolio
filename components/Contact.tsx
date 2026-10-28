import AnimateOnScroll from './AnimateOnScroll';
import { Mail, MapPin, Globe, ArrowUpRight } from 'lucide-react';
import { FaLinkedin } from 'react-icons/fa6';

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 py-20 sm:py-28 bg-[#001010] border-t border-[#0A2424]">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="liam-card p-8 sm:p-14 relative overflow-hidden shadow-2xl border border-[#F5B900]/20">
          {/* Subtle gold background glow */}
          <div
            className="pointer-events-none absolute -right-20 -top-20 h-96 w-96 rounded-full bg-[#F5B900]/10 blur-3xl"
            aria-hidden
          />

          <div className="max-w-3xl relative z-10">
            <AnimateOnScroll animation="fade-in">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#F5B900]">
                GET IN TOUCH
              </span>
              <h2 className="mt-3 font-extrabold text-3xl sm:text-5xl lg:text-6xl text-[#F5F5F5] tracking-tight leading-tight">
                Let&apos;s turn search into growth.
              </h2>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-in-up" delay={150}>
              <p className="mt-6 text-base sm:text-xl leading-relaxed text-[#B8C0C0]">
                Have a website, e-commerce business, or marketing challenge that needs better search visibility, technical architecture, and performance marketing? Let&apos;s talk.
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-in-up" delay={250}>
              <div className="mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <a
                  href="mailto:arulv11dm@gmail.com"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#F5B900] px-8 py-4 text-base font-bold text-[#001010] shadow-lg shadow-[#F5B900]/25 transition-all hover:bg-[#FFC107] hover:-translate-y-0.5"
                >
                  Let&apos;s Talk
                  <ArrowUpRight className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/arulrajv"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 rounded-lg border border-[#0A2424] bg-[#001818] px-8 py-4 text-base font-bold text-[#F5F5F5] transition-all hover:border-[#F5B900] hover:text-[#F5B900]"
                >
                  <FaLinkedin className="w-5 h-5 text-[#0A66C2]" />
                  Connect on LinkedIn
                </a>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-in" delay={350}>
              <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-[#0A2424] text-sm">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-[#F5B900]/10 text-[#F5B900]">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase font-bold text-[#B8C0C0] tracking-wider">
                      Direct Email
                    </span>
                    <a
                      href="mailto:arulv11dm@gmail.com"
                      className="font-bold text-[#F5F5F5] hover:text-[#F5B900] transition-colors"
                    >
                      arulv11dm@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-[#F5B900]/10 text-[#F5B900]">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase font-bold text-[#B8C0C0] tracking-wider">
                      Location
                    </span>
                    <span className="font-bold text-[#F5F5F5]">Chennai, India</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-[#F5B900]/10 text-[#F5B900]">
                    <Globe className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase font-bold text-[#B8C0C0] tracking-wider">
                      Official Site
                    </span>
                    <a
                      href="https://arul.digital"
                      className="font-bold text-[#F5F5F5] hover:text-[#F5B900] transition-colors"
                    >
                      arul.digital
                    </a>
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
