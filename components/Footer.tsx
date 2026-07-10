import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-border mt-32">
      <div className="max-w-7xl mx-auto px-6 py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2 space-y-4">
          <div className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="Scholar Digital Solutions"
              width={36}
              height={36}
              className="rounded-lg"
            />
            <span className="font-display font-semibold text-lg">
              Scholar Digital Solutions
            </span>
          </div>
          <p className="text-text-dim text-sm max-w-sm leading-relaxed">
            Unique websites built to perform — with a dashboard that lets
            you edit your content, track your traffic, and grow without
            waiting on a developer.
          </p>
        </div>

        <div>
          <p className="text-text text-sm font-semibold mb-4">Company</p>
          <ul className="space-y-3 text-sm text-text-dim">
            <li><Link href="/services" className="hover:text-text transition">Services</Link></li>
            <li><Link href="/pricing" className="hover:text-text transition">Pricing</Link></li>
            <li><Link href="/about" className="hover:text-text transition">About</Link></li>
            <li><Link href="/contact" className="hover:text-text transition">Contact</Link></li>
          </ul>
        </div>

        <div>
          <p className="text-text text-sm font-semibold mb-4">Get in touch</p>
          <ul className="space-y-3 text-sm text-text-dim">
            <li>
              <a
                href="mailto:kevin@simpleaibusinesssolutions.ie"
                className="hover:text-text transition"
              >
                kevin@simpleaibusinesssolutions.ie
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-text-dimmer">
          <p>© {new Date().getFullYear()} Scholar Digital Solutions. All rights reserved.</p>
          <p>Websites built and managed on Scholar Dashboard.</p>
        </div>
      </div>
    </footer>
  );
}
