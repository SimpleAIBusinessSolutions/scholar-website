"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { href: "/services", label: "Services" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-bg/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="Scholar Digital Solutions"
            width={40}
            height={40}
            className="rounded-lg"
          />
          <span className="hidden sm:block font-display font-semibold text-lg tracking-tight">
            Scholar
            <span className="text-brand-green-bright"> Digital</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition ${
                  active
                    ? "text-text"
                    : "text-text-dim hover:text-text"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/contact"
            className="brand-gradient text-bg text-sm font-semibold px-5 py-2.5 rounded-full hover:opacity-90 transition"
          >
            Get a Quote
          </Link>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden text-text p-2"
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M4 7h16M4 12h16M4 17h16"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>

      {open && (
        <nav className="md:hidden border-t border-border px-6 py-4 flex flex-col gap-4 bg-bg">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-text-dim hover:text-text text-sm font-medium"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="brand-gradient text-bg text-sm font-semibold px-5 py-2.5 rounded-full text-center"
          >
            Get a Quote
          </Link>
        </nav>
      )}
    </header>
  );
}


