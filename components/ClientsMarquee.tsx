import AnimateOnScroll from './AnimateOnScroll';

const clients = [
  { name: 'Medingen Healthcare', tag: 'Healthcare E-commerce' },
  { name: 'RC Solars', tag: 'Solar Energy' },
  { name: 'Boldborne Solar', tag: 'UAE Solar Market' },
  { name: 'Party Hall', tag: 'Lead Generation PPC' },
  { name: 'Sri Vetrivel Garments', tag: 'Textile Local SEO' },
  { name: 'Hydraulic Equipment', tag: 'Industrial B2B' },
];

export default function ClientsMarquee() {
  return (
    <section className="border-y border-[#111111]/8 bg-[#F4EFE6]/50 py-12 sm:py-14 overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 mb-8">
        <AnimateOnScroll animation="fade-in">
          <p className="text-center text-[13px] font-semibold uppercase tracking-[0.18em] text-[#767676]">
            Brands &amp; businesses I&apos;ve helped grow
          </p>
        </AnimateOnScroll>
      </div>

      {/* Infinite Marquee */}
      <div className="marquee-mask group overflow-hidden">
        <div className="flex w-max items-center animate-marquee group-hover:[animation-play-state:paused] gap-8">
          {[...clients, ...clients, ...clients].map((client, i) => (
            <div
              key={i}
              className="flex items-center gap-3 px-6 py-3 rounded-2xl bg-white border border-[#111111]/8 shadow-xs shrink-0"
            >
              <div className="w-2 h-2 rounded-full bg-[#E8651A]" />
              <span className="font-bold text-base text-[#111111]">
                {client.name}
              </span>
              <span className="text-xs text-[#767676] bg-[#FAF7F2] px-2.5 py-0.5 rounded-full font-medium">
                {client.tag}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
