import { Link } from 'react-router-dom';
import { Mail, ShieldCheck } from 'lucide-react';
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
    <footer className="bg-ink text-paper/70">
      <div className="mx-auto max-w-shell px-5 sm:px-6 lg:px-10">
        {/* Masthead statement */}
        <div className="grid gap-10 border-b border-paper/12 py-16 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Link to="/" className="mb-6 inline-flex items-center gap-3">
              <Logo size={36} variant="mono" />
              <span className="flex flex-col leading-none">
                <span className="font-serif text-lg font-semibold text-paper">
                  InfinityMath4All
                </span>
                <span className="mt-1 text-[0.625rem] font-semibold uppercase tracking-[0.18em] text-paper/45">
                  Math Education Program
                </span>
              </span>
            </Link>

            <p className="max-w-sm font-serif text-xl leading-snug text-paper/85 text-pretty">
              Free competition math coaching for elementary students, taught by
              the students who just competed.
            </p>

            <a
              href="mailto:admin@InfinityMath4All.org"
              className="mt-7 inline-flex items-center gap-2.5 text-sm text-paper/65 transition-colors hover:text-paper"
            >
              <Mail className="h-4 w-4 shrink-0 text-brass" aria-hidden="true" />
              admin@InfinityMath4All.org
            </a>
          </div>

          <div className="grid gap-10 sm:grid-cols-3 lg:col-span-7">
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h4 className="mb-5 font-sans text-[0.625rem] font-semibold uppercase tracking-[0.16em] text-paper/45">
                  {category}
                </h4>
                <ul className="flex flex-col gap-3">
                  {links.map((link) => (
                    <li key={link.label}>
                      {link.path.startsWith('mailto:') || link.path.includes('#') ? (
                        <a
                          href={link.path}
                          className="text-sm leading-snug text-paper/70 transition-colors duration-200 hover:text-paper"
                        >
                          {link.label}
                        </a>
                      ) : (
                        <Link
                          to={link.path}
                          className="text-sm leading-snug text-paper/70 transition-colors duration-200 hover:text-paper"
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
        </div>

        {/* Legal strip */}
        <div className="flex flex-col gap-5 py-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-paper/45">
            &copy; {new Date().getFullYear()} InfinityMath4All. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs">
            <span className="inline-flex items-center gap-1.5 text-paper/70">
              <ShieldCheck className="h-3.5 w-3.5 shrink-0 text-brass" aria-hidden="true" />
              COPPA Compliant
            </span>
            <span className="text-paper/50">No Student PII Collected</span>
            <Link
              to="/privacy"
              className="text-paper/70 underline decoration-paper/25 underline-offset-4 transition-colors hover:text-paper hover:decoration-paper/60"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
