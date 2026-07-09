"use client";

import { useState } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [result, setResult] = useState<{ success: boolean } | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!name.trim() || !email.trim() || !message.trim()) return;

    setSubmitting(true);
    setResult(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, businessName, message }),
      });

      if (!res.ok) {
        setResult({ success: false });
      } else {
        setResult({ success: true });
        setName("");
        setEmail("");
        setBusinessName("");
        setMessage("");
      }
    } catch {
      setResult({ success: false });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm text-text-dim mb-2">
            Your name
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full bg-surface border border-border rounded-xl px-4 py-3 text-text placeholder:text-text-dimmer focus:outline-none focus:border-brand-green/50 transition"
            placeholder="Jane Murphy"
          />
        </div>
        <div>
          <label className="block text-sm text-text-dim mb-2">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full bg-surface border border-border rounded-xl px-4 py-3 text-text placeholder:text-text-dimmer focus:outline-none focus:border-brand-green/50 transition"
            placeholder="jane@yourbusiness.ie"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm text-text-dim mb-2">
          Business name (optional)
        </label>
        <input
          type="text"
          value={businessName}
          onChange={(e) => setBusinessName(e.target.value)}
          className="w-full bg-surface border border-border rounded-xl px-4 py-3 text-text placeholder:text-text-dimmer focus:outline-none focus:border-brand-green/50 transition"
          placeholder="Your Business Ltd"
        />
      </div>

      <div>
        <label className="block text-sm text-text-dim mb-2">
          Tell us about your project
        </label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          rows={6}
          className="w-full bg-surface border border-border rounded-xl px-4 py-3 text-text placeholder:text-text-dimmer focus:outline-none focus:border-brand-green/50 transition resize-none"
          placeholder="What does your business do, and what are you hoping your website could do for you?"
        />
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="w-full brand-gradient text-bg font-semibold px-6 py-4 rounded-full hover:opacity-90 transition disabled:opacity-50"
      >
        {submitting ? "Sending..." : "Send Message"}
      </button>

      {result?.success && (
        <p className="text-brand-green-bright text-sm text-center">
          Thanks — we&apos;ve got your message and will be in touch soon.
        </p>
      )}

      {result && !result.success && (
        <p className="text-red-400 text-sm text-center">
          Something went wrong sending your message. Please try again, or
          email info@scholardigitalsolutions.ie directly.
        </p>
      )}
    </form>
  );
}
