'use client';

import Image from 'next/image';
import AnimateOnScroll from './AnimateOnScroll';

interface Client {
  name: string;
  src: string;
}

const clients: Client[] = [
  { name: 'Boldborne', src: '/clients/bold-borne.webp' },
  { name: 'Sri Vetrivel Garments', src: '/clients/sri-vetrivel-garments.webp' },
  { name: 'Hunter Equipments', src: '/clients/hunter-equipment.webp' },
  { name: 'Apple Pharma', src: '/clients/apple-pharma.webp' },
  { name: 'Medingen Healthcare', src: '/clients/medingen.webp' },
  { name: 'RS Hospital', src: '/clients/rs-hospital.webp' },
  { name: 'RC Solars', src: '/clients/rc-solars.webp' },
  { name: 'Flyout Trampoline Park', src: '/clients/flyout-trampoline.webp' },
  { name: 'Growphil', src: '/clients/growphil.webp' },
  { name: 'Affo Holidays', src: '/clients/affo-holidays.webp' },
  { name: 'Kyra FoodStreet', src: '/clients/kyra-foodstreet.webp' },
  { name: 'Kyra Green Energy', src: '/clients/kyra-green-energy.webp' },
  { name: 'S. Mani Jewellery', src: '/clients/s-mani-jewellery.webp' },
  { name: 'Pacific Medingen Care', src: '/clients/pacific-medingen.webp' },
  { name: 'RC Pharmaceuticals', src: '/clients/rc-pharmaceuticals.webp' },
  { name: 'Kyra Party Hall', src: '/clients/kyra-party-hall.webp' },
  { name: 'Sri Anjaneya', src: '/clients/sir-anjanya.webp' },
  { name: 'Kyra Zam', src: '/clients/kyra-zam.webp' },
  { name: 'RC PG Hostel', src: '/clients/rc-pg-hostel.webp' },
  { name: 'Kyra Pacific', src: '/clients/kyra-pacific.webp' },
  { name: 'AG Group', src: '/clients/ag-group.webp' },
  { name: 'RC Group', src: '/clients/rc-group.webp' },
  { name: 'Group of Companies', src: '/clients/group-of-companies.webp' },
];

export default function ClientMarquee() {
  return (
    <section
      id="clients"
      className="relative py-7 sm:py-9 bg-white border-y border-[#E5E0D8] overflow-hidden"
      aria-label="Brands and Products I've Helped Grow"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8 mb-4 sm:mb-5 text-center">
        <AnimateOnScroll animation="fade-in">
          <p className="inline-flex items-center gap-2 text-[11px] sm:text-xs font-bold uppercase tracking-[0.22em] text-[#6B7280]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF5A36]" />
            BRANDS &amp; PRODUCTS I&apos;VE HELPED GROW
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF5A36]" />
          </p>
        </AnimateOnScroll>
      </div>

      {/* Infinite Horizontal Marquee without shapes (pure logos with grayscale shade & color on hover) */}
      <div className="marquee-mask group overflow-hidden py-2">
        <div className="flex w-max items-center animate-marquee [animation-duration:50s] group-hover:[animation-play-state:paused] gap-8 sm:gap-12 lg:gap-14">
          {[...clients, ...clients].map((client, i) => (
            <div
              key={`${client.name}-${i}`}
              className="flex items-center justify-center h-12 sm:h-14 shrink-0 px-2 sm:px-4 group/item cursor-pointer transition-transform duration-300"
              title={client.name}
            >
              <Image
                src={client.src}
                alt={client.name}
                width={140}
                height={48}
                className="max-h-8 sm:max-h-10 w-auto max-w-[120px] sm:max-w-[150px] object-contain grayscale opacity-60 contrast-125 mix-blend-multiply transition-all duration-300 group-hover/item:grayscale-0 group-hover/item:opacity-100 group-hover/item:contrast-100 group-hover/item:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
