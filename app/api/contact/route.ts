import { NextRequest, NextResponse } from "next/server";

const EMAIL_TO = "kevin@simpleaibusinesssolutions.ie";

// Not exposed to the browser (no NEXT_PUBLIC_ prefix) since this fetch
// happens server-side, inside this API route.
const LEADS_ENDPOINT =
  process.env.DASHBOARD_LEADS_URL ||
  "https://dashboard.scholardigitalsolutions.ie/api/leads";

const SITE_KEY = "scholar";

async function sendEmail(params: {
  name: string;
  email: string;
  businessName?: string;
  message: string;
}) {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    throw new Error("RESEND_API_KEY is not configured");
  }

  const bodyText = [
    `Name: ${params.name}`,
    `Email: ${params.email}`,
    params.businessName ? `Business: ${params.businessName}` : null,
    "",
    params.message,
  ]
    .filter(Boolean)
    .join("\n");

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from:
        process.env.CONTACT_EMAIL_FROM ||
        "Scholar Digital Solutions <onboarding@resend.dev>",
      to: [EMAIL_TO],
      reply_to: params.email,
      subject: `New enquiry from ${params.name}${
        params.businessName ? ` (${params.businessName})` : ""
      }`,
      text: bodyText,
    }),
  });

  if (!res.ok) {
    const errText = await res.text();
    throw new Error(`Resend error: ${errText}`);
  }
}

async function logLead(params: {
  name: string;
  email: string;
  businessName?: string;
  message: string;
}) {
  const res = await fetch(LEADS_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      site_key: SITE_KEY,
      name: params.name,
      email: params.email,
      business_name: params.businessName || null,
      message: params.message,
      source_page: "/contact",
    }),
  });

  if (!res.ok) {
    const errText = await res.text();
    throw new Error(`Lead logging error: ${errText}`);
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, businessName, message } = body as {
      name: string;
      email: string;
      businessName?: string;
      message: string;
    };

    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const params = { name, email, businessName, message };

    // Send the email and log the lead in parallel — one failing
    // shouldn't block the other, and the submitter should still see
    // success as long as at least the email (their expected confirmation
    // that someone will see this) goes through.
    const [emailResult, leadResult] = await Promise.allSettled([
      sendEmail(params),
      logLead(params),
    ]);

    if (emailResult.status === "rejected") {
      console.error("Contact email error:", emailResult.reason);
    }
    if (leadResult.status === "rejected") {
      console.error("Lead logging error:", leadResult.reason);
    }

    if (emailResult.status === "rejected" && leadResult.status === "rejected") {
      return NextResponse.json(
        { error: "Failed to send message" },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }
}
