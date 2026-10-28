import { FaLinkedin, FaGithub, FaTwitter, FaFacebookF, FaInstagram } from 'react-icons/fa6';

const footerNav = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Case Studies', href: '#work' },
  { label: 'Expertise', href: '#expertise' },
  { label: 'Tools', href: '#tools' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  return (
    <footer className="border-t border-[#0A2424] bg-[#001010] py-12">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-[#0A2424]">
          {/* Left: Script Logo */}
          <div className="flex items-center gap-3">
            <span className="font-bold text-3xl tracking-tight text-[#F5B900] italic font-serif">
              Arulraj
            </span>
            <span className="text-xs text-[#B8C0C0] border-l border-[#0A2424] pl-3">
              SEO &amp; PPC Specialist · Chennai, India
            </span>
          </div>

          {/* Center: Nav links */}
          <div className="flex flex-wrap items-center gap-6">
            {footerNav.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-[#B8C0C0] transition-colors hover:text-[#F5B900]"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom bar with Social Icons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#B8C0C0]">
          <p>© 2026 Arulraj V. All rights reserved.</p>
          <div className="flex items-center gap-3">
            <a
              href="https://www.linkedin.com/in/arulrajv"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-8 w-8 items-center justify-center rounded-full bg-[#0A2424] border border-white/10 text-[#B8C0C0] hover:text-[#F5B900] transition-colors"
            >
              <FaLinkedin className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-8 w-8 items-center justify-center rounded-full bg-[#0A2424] border border-white/10 text-[#B8C0C0] hover:text-[#F5B900] transition-colors"
            >
              <FaGithub className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-8 w-8 items-center justify-center rounded-full bg-[#0A2424] border border-white/10 text-[#B8C0C0] hover:text-[#F5B900] transition-colors"
            >
              <FaTwitter className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-8 w-8 items-center justify-center rounded-full bg-[#0A2424] border border-white/10 text-[#B8C0C0] hover:text-[#F5B900] transition-colors"
            >
              <FaFacebookF className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-8 w-8 items-center justify-center rounded-full bg-[#0A2424] border border-white/10 text-[#B8C0C0] hover:text-[#F5B900] transition-colors"
            >
              <FaInstagram className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
