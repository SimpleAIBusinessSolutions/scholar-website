import { NextRequest, NextResponse } from "next/server";

const EMAIL_TO = "kevin@simpleaibusinesssolutions.ie";

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

    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      console.error("RESEND_API_KEY is not configured");
      return NextResponse.json(
        { error: "Email is not configured" },
        { status: 500 }
      );
    }

    const bodyText = [
      `Name: ${name}`,
      `Email: ${email}`,
      businessName ? `Business: ${businessName}` : null,
      "",
      message,
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
        reply_to: email,
        subject: `New enquiry from ${name}${
          businessName ? ` (${businessName})` : ""
        }`,
        text: bodyText,
      }),
    });

    if (!res.ok) {
      const errText = await res.text();
      console.error("Resend error:", errText);
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
