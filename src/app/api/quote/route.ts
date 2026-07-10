import { NextResponse } from "next/server";

export const runtime = "nodejs";

const MAX_ATTACHMENT_BYTES = 9 * 1024 * 1024;

function esc(v: string) {
  return v.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

export async function POST(req: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.QUOTE_TO_EMAIL;
  if (!apiKey || !to) {
    return NextResponse.json({ ok: false, error: "not configured" }, { status: 500 });
  }

  let form: FormData;
  try {
    form = await req.formData();
  } catch {
    return NextResponse.json({ ok: false, error: "bad request" }, { status: 400 });
  }

  // honeypot: silently accept bot submissions without sending
  if (String(form.get("_honey") || "").length > 0) {
    return NextResponse.json({ ok: true });
  }

  const name = String(form.get("name") || "").slice(0, 200);
  const email = String(form.get("email") || "").slice(0, 200);
  const phone = String(form.get("phone") || "").slice(0, 100);
  const trade = String(form.get("trade") || "").slice(0, 200);
  const message = String(form.get("message") || "").slice(0, 5000);
  if (!name || !email) {
    return NextResponse.json({ ok: false, error: "name and email required" }, { status: 400 });
  }

  const rows = [
    ["Name", name],
    ["Email", email],
    ["Phone", phone],
    ["Trade", trade],
    ["Project", message],
  ]
    .filter(([, v]) => v)
    .map(
      ([k, v]) =>
        `<tr><td style="padding:6px 12px;border:1px solid #e2e4e8;font-weight:bold;background:#f7f7f5">${k}</td><td style="padding:6px 12px;border:1px solid #e2e4e8">${esc(v)}</td></tr>`
    )
    .join("");

  const payload: Record<string, unknown> = {
    from: process.env.QUOTE_FROM_EMAIL || "Buildexa Estimate <onboarding@resend.dev>",
    to: [to],
    reply_to: email,
    subject: `New quote request: ${name}${trade ? ` (${trade})` : ""}`,
    html: `<h2 style="font-family:Arial,sans-serif;color:#232f42">New quote request from buildexaestimate.com</h2><table style="border-collapse:collapse;font-family:Arial,sans-serif;font-size:14px">${rows}</table>`,
  };

  const file = form.get("attachment");
  if (file instanceof File && file.size > 0 && file.size <= MAX_ATTACHMENT_BYTES) {
    const buf = Buffer.from(await file.arrayBuffer());
    payload.attachments = [{ filename: file.name, content: buf.toString("base64") }];
  }

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
    if (!res.ok) {
      const detail = await res.text();
      console.error("resend error", res.status, detail);
      return NextResponse.json({ ok: false, error: "send failed" }, { status: 502 });
    }
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("resend fetch failed", err);
    return NextResponse.json({ ok: false, error: "send failed" }, { status: 502 });
  }
}
