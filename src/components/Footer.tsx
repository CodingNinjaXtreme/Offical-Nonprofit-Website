import { Link } from 'react-router-dom';
import { Mail, Heart } from 'lucide-react';
import Logo from './Logo';

const footerLinks = {
  Explore: [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/about' },
    { label: 'Our Mission', path: '/mission' },
    { label: 'Competitions', path: '/competitions' },
    { label: 'Partner With Us', path: '/partner' },
  ],
  Competitions: [
    { label: 'Noetic Math', path: '/competitions#noetic' },
    { label: 'MOEMS', path: '/competitions#olympiad' },
    { label: 'Elementary Grade-Level Math', path: '/competitions#elementary' },
  ],
  'Get Involved': [
    { label: 'Volunteer & Coach', path: '/partner' },
    { label: 'Email Us', path: 'mailto:admin@InfinityMath4All.org' },
    { label: 'Partner FAQ', path: '/partner#faq' },
  ],
};

export default function Footer() {
  return (
      <footer className="relative bg-slate-950 text-slate-300 overflow-hidden">
        <div
            aria-hidden
            className="absolute inset-0 pointer-events-none opacity-60"
            style={{
              backgroundImage:
                  'radial-gradient(ellipse at 0% 0%, rgba(56, 189, 248, 0.10), transparent 40%), radial-gradient(ellipse at 100% 100%, rgba(99, 102, 241, 0.10), transparent 50%)',
            }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
            <div className="lg:col-span-2">
              <Link to="/" className="flex items-center gap-2.5 group mb-5">
                <Logo size={36} />
                <div>
                  <div className="font-bold text-white text-base">
                    InfinityMath<span className="text-gradient">4All</span>
                  </div>
                  <div className="text-[11px] uppercase tracking-wider text-blue-400">Math Education Nonprofit</div>
                </div>
              </Link>
              <p className="text-sm leading-relaxed text-slate-400 mb-6 max-w-xs">
                Empowering elementary and middle school students through world-class math
                competition preparation and a love of learning.
              </p>
              <div className="space-y-2.5 text-sm">
                <div className="flex items-center gap-2.5 text-slate-400">
                  <Mail className="w-4 h-4 text-blue-400 flex-shrink-0" />
                  <a
                      href="mailto:admin@InfinityMath4All.org"
                      className="hover:text-white transition-colors"
                  >
                    admin@InfinityMath4All.org
                  </a>
                </div>
              </div>
            </div>

            {Object.entries(footerLinks).map(([category, links]) => (
                <div key={category}>
                  <h4 className="text-white font-semibold text-sm mb-4">{category}</h4>
                  <ul className="space-y-2.5">
                    {links.map((link) => (
                        <li key={link.label}>
                          {link.path.startsWith('mailto:') || link.path.includes('#') ? (
                              <a
                                  href={link.path}
                                  className="text-sm text-slate-400 hover:text-white transition-colors duration-200"
                              >
                                {link.label}
                              </a>
                          ) : (
                              <Link
                                  to={link.path}
                                  className="text-sm text-slate-400 hover:text-white transition-colors duration-200"
                              >
                                {link.label}
                              </Link>
                          )}
                        </li>
                    ))}
                  </ul>
                </div>
            ))}
          </div>

          <div className="border-t border-slate-800 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-slate-500">
              &copy; {new Date().getFullYear()} InfinityMath4All. All rights reserved.
            </p>
            <p className="text-xs text-slate-500 flex items-center gap-1">
              Made with <Heart className="w-3 h-3 text-red-400 fill-red-400" /> for students everywhere
            </p>
          </div>
        </div>
      </footer>
  );
}
