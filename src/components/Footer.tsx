import Link from "next/link";
import { site } from "@/data/site";
import { trades } from "@/data/trades";
import SocialLinks from "@/components/SocialLinks";

export default function Footer() {
  return (
    <footer className="blueprint text-white">
      <div className="ruler-ticks" aria-hidden="true" />
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="font-display text-xl font-bold uppercase tracking-wide">
            Buildexa <span className="text-brand">Estimate</span>
          </p>
          <p className="mt-3 text-sm leading-relaxed text-white/70">
            Construction cost estimating and material takeoff services for
            contractors across the United States. Estimates delivered in 24 to
            48 hours in CSI MasterFormat.
          </p>
          <SocialLinks className="mt-5 text-white" />
        </div>
        <div>
          <p className="mb-3 text-xs font-bold uppercase tracking-widest text-white/50">
            Services
          </p>
          <ul className="space-y-2 text-sm">
            {trades.slice(0, 6).map((t) => (
              <li key={t.slug}>
                <Link href={`/services/${t.slug}`} className="text-white/80 hover:text-white">
                  {t.name}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/services" className="font-semibold text-brand hover:underline">
                All services →
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="mb-3 text-xs font-bold uppercase tracking-widest text-white/50">
            Company
          </p>
          <ul className="space-y-2 text-sm">
            <li><Link href="/samples" className="text-white/80 hover:text-white">Sample Estimates</Link></li>
            <li><Link href="/pricing" className="text-white/80 hover:text-white">Pricing Plans</Link></li>
            <li><Link href="/about" className="text-white/80 hover:text-white">About Us</Link></li>
            <li><Link href="/blog" className="text-white/80 hover:text-white">Blog</Link></li>
            <li><Link href="/faqs" className="text-white/80 hover:text-white">FAQs</Link></li>
            <li><Link href="/contact" className="text-white/80 hover:text-white">Get a Quote</Link></li>
          </ul>
        </div>
        <div>
          <p className="mb-3 text-xs font-bold uppercase tracking-widest text-white/50">
            Contact
          </p>
          <ul className="space-y-2 text-sm">
            <li>
              <a href={site.phoneHref} className="font-mono text-white/90 hover:text-white">
                {site.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="text-white/90 hover:text-white">
                {site.email}
              </a>
            </li>
            <li className="text-white/60">Monday to Saturday · 9am to 6pm ET</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-2 px-4 py-5 text-xs text-white/50">
          <span>© {new Date().getFullYear()} {site.name}. All rights reserved.</span>
          <span className="font-mono">Estimates in 24 to 48 hours · CSI MasterFormat</span>
        </div>
      </div>
    </footer>
  );
}
