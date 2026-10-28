import AnimateOnScroll from './AnimateOnScroll';
import { User, Mail, MapPin, Briefcase, Download } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="scroll-mt-20 py-20 sm:py-28 bg-[#001010] border-t border-[#0A2424]">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* LEFT: Story & Signature */}
          <div className="lg:col-span-7">
            <AnimateOnScroll animation="fade-in">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#F5B900]">
                ABOUT ME
              </span>
              <h2 className="mt-3 font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#F5F5F5] tracking-tight leading-tight">
                Building Organic Growth Systems That Scale Revenue.
              </h2>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-in-up" delay={150}>
              <div className="mt-6 space-y-4 text-[#B8C0C0] text-base leading-relaxed">
                <p>
                  I&apos;m Arulraj V, an SEO &amp; PPC Specialist based in Chennai, India. My journey in digital marketing is driven by a passion for technical excellence, website architecture, and search visibility.
                </p>
                <p>
                  I specialize in turning organic search traffic and performance marketing into measurable business revenue — working across healthcare e-commerce, solar energy, garments, local service businesses, and international markets.
                </p>
              </div>

              {/* Signature */}
              <div className="mt-8 font-serif italic text-3xl text-[#F5B900] font-bold">
                Arulraj
              </div>

              <div className="mt-6">
                <a
                  href="#work"
                  className="inline-flex items-center gap-2 rounded-lg bg-[#F5B900] px-6 py-3 text-sm font-bold text-[#001010] transition-all hover:bg-[#FFC107]"
                >
                  More About Me
                  <Download className="w-4 h-4" />
                </a>
              </div>
            </AnimateOnScroll>
          </div>

          {/* RIGHT: Personal Metadata Grid */}
          <div className="lg:col-span-5">
            <AnimateOnScroll animation="fade-in-up" delay={200}>
              <div className="rounded-2xl border border-white/10 bg-[#0A2424] p-6 sm:p-8 space-y-6">
                <div className="flex items-center gap-4 border-b border-white/5 pb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#F5B900]/10 text-[#F5B900]">
                    <User className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-medium text-[#B8C0C0] uppercase tracking-wider block">
                      Name:
                    </span>
                    <span className="text-base font-bold text-[#F5F5F5]">Arulraj V</span>
                  </div>
                </div>

                <div className="flex items-center gap-4 border-b border-white/5 pb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#F5B900]/10 text-[#F5B900]">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-medium text-[#B8C0C0] uppercase tracking-wider block">
                      Email:
                    </span>
                    <a href="mailto:arulv11dm@gmail.com" className="text-base font-bold text-[#F5F5F5] hover:text-[#F5B900]">
                      arulv11dm@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 border-b border-white/5 pb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#F5B900]/10 text-[#F5B900]">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-medium text-[#B8C0C0] uppercase tracking-wider block">
                      From:
                    </span>
                    <span className="text-base font-bold text-[#F5F5F5]">Chennai, India</span>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#F5B900]/10 text-[#F5B900]">
                    <Briefcase className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-medium text-[#B8C0C0] uppercase tracking-wider block">
                      Availability:
                    </span>
                    <span className="text-base font-bold text-[#F5B900]">Freelance &amp; Consulting</span>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>

        {/* 4 Stat Counters Bar */}
        <AnimateOnScroll animation="fade-in-up" delay={300}>
          <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4 pt-12 border-t border-[#0A2424] text-center">
            <div className="p-4">
              <div className="font-extrabold text-3xl sm:text-4xl text-[#F5B900] font-mono">
                02+
              </div>
              <div className="mt-1 text-xs text-[#B8C0C0] font-medium uppercase tracking-wider">
                Years Exp.
              </div>
            </div>
            <div className="p-4">
              <div className="font-extrabold text-3xl sm:text-4xl text-[#F5B900] font-mono">
                4M+
              </div>
              <div className="mt-1 text-xs text-[#B8C0C0] font-medium uppercase tracking-wider">
                Impressions
              </div>
            </div>
            <div className="p-4">
              <div className="font-extrabold text-3xl sm:text-4xl text-[#F5B900] font-mono">
                110K+
              </div>
              <div className="mt-1 text-xs text-[#B8C0C0] font-medium uppercase tracking-wider">
                Organic Clicks
              </div>
            </div>
            <div className="p-4">
              <div className="font-extrabold text-3xl sm:text-4xl text-[#F5B900] font-mono">
                40×
              </div>
              <div className="mt-1 text-xs text-[#B8C0C0] font-medium uppercase tracking-wider">
                Ads ROAS
              </div>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
