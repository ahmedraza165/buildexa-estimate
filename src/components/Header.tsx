"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { site } from "@/data/site";
import { trades } from "@/data/trades";
import SocialLinks from "@/components/SocialLinks";

const nav = [
  { href: "/services", label: "Services" },
  { href: "/samples", label: "Samples" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/faqs", label: "FAQs" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      {/* utility bar */}
      <div className="bg-ink">
        <div className="mx-auto flex h-9 max-w-6xl items-center justify-between px-4 text-xs">
          <p className="font-mono font-semibold uppercase tracking-wider text-white/70">
            Estimates delivered in 24 to 48 hours
          </p>
          <div className="flex items-center gap-4">
            <a
              href={`mailto:${site.email}`}
              className="hidden text-white/70 hover:text-white md:block"
            >
              {site.email}
            </a>
            <a
              href={site.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden font-semibold text-white/70 hover:text-white sm:block"
            >
              WhatsApp
            </a>
            <SocialLinks className="text-white/80" />
          </div>
        </div>
      </div>

      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4">
        <Link href="/" className="flex items-center" onClick={() => setOpen(false)}>
          <Image
            src="/logo-full.png"
            alt="Buildexa Estimate"
            width={168}
            height={54}
            priority
            className="h-11 w-auto"
          />
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {nav.map((item) =>
            item.label === "Services" ? (
              <div
                key={item.href}
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <Link
                  href={item.href}
                  className={`text-sm font-semibold transition-colors ${
                    pathname.startsWith("/services")
                      ? "text-brand"
                      : "text-navy hover:text-brand"
                  }`}
                >
                  Services ▾
                </Link>
                {servicesOpen && (
                  <div className="absolute left-1/2 top-full w-[560px] -translate-x-1/2 pt-3">
                    <div className="grid grid-cols-2 gap-1 border border-line bg-white p-4 shadow-xl">
                      {trades.map((t) => (
                        <Link
                          key={t.slug}
                          href={`/services/${t.slug}`}
                          className="flex items-baseline gap-2 px-3 py-2 text-sm text-navy transition-colors hover:bg-paper hover:text-brand"
                          onClick={() => setServicesOpen(false)}
                        >
                          <span className="font-mono text-xs font-semibold text-brand">
                            {t.division}
                          </span>
                          {t.name}
                        </Link>
                      ))}
                      <Link
                        href="/services"
                        className="col-span-2 mt-2 border-t border-line px-3 pt-3 text-sm font-semibold text-brand"
                        onClick={() => setServicesOpen(false)}
                      >
                        View all services →
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-semibold transition-colors ${
                  pathname.startsWith(item.href)
                    ? "text-brand"
                    : "text-navy hover:text-brand"
                }`}
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href={site.phoneHref}
            className="font-mono text-sm font-semibold text-navy transition-colors hover:text-brand"
          >
            {site.phone}
          </a>
          <Link
            href="/contact"
            className="btn-brand bg-brand px-5 py-2.5 text-sm font-bold text-white hover:bg-brand-dark"
          >
            Get a Quote
          </Link>
        </div>

        <button
          className="p-2 text-navy lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M3 6h18M3 12h18M3 18h18" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="border-t border-line bg-white px-4 pb-6 lg:hidden">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block border-b border-line py-3 font-semibold text-navy"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <a href={site.phoneHref} className="block py-3 font-mono text-sm font-semibold text-navy">
            {site.phone}
          </a>
          <Link
            href="/contact"
            className="mt-2 block bg-brand px-5 py-3 text-center font-bold text-white"
            onClick={() => setOpen(false)}
          >
            Get a Quote
          </Link>
        </div>
      )}
    </header>
  );
}
