"use server";

import { getDb } from "@/lib/mongodb";
import nodemailer from "nodemailer";

type VoucherState = {
  success: boolean;
  message: string;
  voucherCode?: string;
  expiryDate?: string;
  issueDate?: string;
  status?: string;
  isExisting?: boolean;
} | null;

function generateVoucherCode(length = 10) {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let code = "KYTWO-";

  for (let i = 0; i < length; i++) {
    const index = Math.floor(Math.random() * chars.length);
    code += chars[index];
  }

  return code;
}

async function sendVoucherEmail(
  email: string,
  voucherCode: string,
  firstName?: string | null,
  expiryDate?: Date,
  status?: string,
  issueDate?: Date,
  isExistingVoucher?: boolean
) {
  const host = process.env.SMTP_HOST;
  const port = process.env.SMTP_PORT
    ? Number(process.env.SMTP_PORT)
    : undefined;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const fromEmail = process.env.SMTP_FROM || user;

  if (!host || !port || !user || !pass || !fromEmail) {
    throw new Error("SMTP configuration is incomplete.");
  }

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure: port === 465, // true for 465, false for 587
    auth: {
      user,
      pass,
    },
  });

  const expiryText = expiryDate
    ? expiryDate.toISOString().split("T")[0]
    : "the next 30 days";
  const issueText = issueDate
    ? issueDate.toISOString().split("T")[0]
    : new Date().toISOString().split("T")[0];
  // Prevent auto-link styling in some email clients by inserting
  // zero-width spaces so the address isn't detected as a mailto link.
  const safeEmailHtml = email
    .replace("@", "@&#8203;")
    .replace(/\./g, ".&#8203;");
  const greetingName =
    firstName && firstName.trim().length > 0 ? firstName : "there";
  const displayName =
    firstName && firstName.trim().length > 0 ? firstName.trim() : "Kytwo Guest";

  // Use a fully qualified, publicly accessible logo URL so it works
  // even when NEXT_PUBLIC_SITE_URL points to localhost in dev.
  const logoUrl = "https://www.kytwo.com/logo/logo-white.png";

  // Determine email content based on status
  const now = new Date();
  const isExpired = status === "expired" || (expiryDate && expiryDate < now);
  const isUsed = status === "used";
  const isActive = status === "issued" && expiryDate && expiryDate >= now;

  let subject: string;
  let introText: string;
  let callToAction: string;
  let statusBadge: string;
  let statusColor: string;

  if (isUsed) {
    subject = "Your Kytwo voucher has been redeemed 🎉";
    introText = isExistingVoucher
      ? `Great news! Your voucher <strong>${voucherCode}</strong> (originally issued on ${issueText}) has been successfully applied to your project. Your $300 is now in action!`
      : `Great news! Your voucher <strong>${voucherCode}</strong> has been successfully applied to your project. Your $300 is now in action!`;
    callToAction =
      "Thank you for choosing Kytwo! If you need anything else or want to discuss your next project, we're here to help. Just reply to this email or reach out at hello@kytwo.com.";
    statusBadge = "REDEEMED";
    statusColor = "#10b981"; // green
  } else if (isExpired) {
    subject = "Your Kytwo voucher has expired ⏰";
    introText = isExistingVoucher
      ? `We noticed your voucher <strong>${voucherCode}</strong> (originally issued on ${issueText}) expired on <strong>${expiryText}</strong>. Don't worry—we'd love to help you get back on track!`
      : `We noticed your voucher <strong>${voucherCode}</strong> expired on <strong>${expiryText}</strong>. Don't worry—we'd love to help you get back on track!`;
    callToAction =
      "Let's discuss renewal options or kickstart a new project together. Reply to this email or contact us at hello@kytwo.com—we're here to make it happen!";
    statusBadge = "EXPIRED";
    statusColor = "#ef4444"; // red
  } else {
    // Active voucher (issued and not expired) - could be new or existing
    subject = isExistingVoucher
      ? "Your Kytwo voucher is ready to use 🚀"
      : "Your $300 Kytwo voucher is here! 🎁";
    introText = isExistingVoucher
      ? `Ready to build something amazing? Your <strong>$300 voucher</strong> (originally issued on ${issueText}) is still active and waiting for you. Apply it toward strategy, UX design, or development work with Kytwo.`
      : `You're all set! Your <strong>$300 voucher</strong> is ready to use. Apply it toward strategy, UX design, or development work with Kytwo and let's bring your vision to life.`;
    callToAction =
      "Ready to get started? Reply to this email or contact hello@kytwo.com and share your voucher code. We'll help you turn this credit into something incredible!";
    statusBadge = isActive ? "ACTIVE" : "NEW";
    statusColor = isActive ? "#10b981" : "#3b82f6"; // green for active, blue for new
  }

  const textContent = `Hi ${greetingName},

${
  isUsed
    ? `Great news! Your voucher ${voucherCode} has been successfully applied to your project. Your $300 is now in action!`
    : isExpired
    ? `We noticed your voucher ${voucherCode} expired on ${expiryText}. Don't worry—we'd love to help you get back on track!`
    : `You're all set! Your $300 Kytwo voucher is ready to use.`
}

  Code: ${voucherCode}
  Name: ${displayName}
  Email: ${email}
  Issued: ${issueText}
  ${!isUsed ? `Expires: ${expiryText}` : "Status: Redeemed"}
  Balance: ${isUsed ? "$0.00" : "$300.00"}

${callToAction}

- The Kytwo team`;

  const htmlContent = `
    <div style="margin:0;padding:0;background-color:#0b0b10;">
      <div
        style="
          max-width:600px;
          margin:0 auto;
          padding:32px 24px 40px;
          font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;
          color:#f9fafb;
        "
      >
        <p style="margin:0 0 16px;font-size:16px;line-height:1.5;">
          Hi ${greetingName},
        </p>
        <p style="margin:0 0 20px;font-size:15px;line-height:1.6;color:#e5e7eb;">
          ${introText}
        </p>

        <!-- Card -->
        <div
          style="
            position:relative;
            margin:0 0 24px;
            padding:24px 22px 20px;
            border-radius:18px;
            overflow:hidden;
            background:${
              isExpired
                ? "radial-gradient(circle at top left,#ef4444,#dc2626 55%,#020617 100%)"
                : isUsed
                ? "radial-gradient(circle at top left,#10b981,#059669 55%,#020617 100%)"
                : "radial-gradient(circle at top left,#4f46e5,#312e81 55%,#020617 100%)"
            };
            box-shadow:0 18px 45px rgba(15,23,42,0.85);
          "
        >
          <!-- Glow accents -->
          <div
            style="
              position:absolute;
              inset:auto -40%;
              top:-40%;
              height:220px;
              background:radial-gradient(circle at top,${
                isExpired ? "#f87171 0" : isUsed ? "#34d399 0" : "#818cf8 0"
              },transparent 60%);
              opacity:0.4;
              pointer-events:none;
            "
          ></div>

          <div style="position:relative;z-index:1;">
            <!-- Top row: logo + amount -->
            <div
              style="
                display:flex;
                align-items:center;
                justify-content:space-between;
                gap:10px;
                margin-bottom:20px;
              "
            >
              <div style="display:flex;align-items:center;gap:8px;padding-left:2px;">
                <img
                  src="${logoUrl}"
                  alt="Kytwo"
                  style="height:26px;width:auto;display:block;margin-left:0;"
                />
                <span
                  style="
                    font-size:11px;
                    font-weight:700;
                    letter-spacing:0.18em;
                    text-transform:uppercase;
                    color:#e5e7eb;
                  "
                >
                  KYTWO
                </span>
              </div>
              <div style="text-align:right;">
                <div
                  style="
                    font-size:11px;
                    text-transform:uppercase;
                    letter-spacing:0.16em;
                    color:#c7d2fe;
                  "
                >
                  Voucher Balance
                </div>
                <div
                  style="
                    margin-top:4px;
                    font-size:18px;
                    font-weight:700;
                    letter-spacing:0.04em;
                    color:#eef2ff;
                  "
                >
                  ${isUsed ? "$0.00" : "$300.00"}
                </div>
              </div>
            </div>

            <!-- Voucher code -->
            <div style="margin-bottom:18px;">
              <div
                style="
                  font-size:11px;
                  text-transform:uppercase;
                  letter-spacing:0.18em;
                  color:#c7d2fe;
                  opacity:0.85;
                  margin-bottom:6px;
                "
              >
                Voucher Code
              </div>
              <div style="display:flex;align-items:center;gap:10px;flex-wrap:wrap;">
                <div
                  style="
                    display:inline-block;
                    padding:10px 14px;
                    border-radius:999px;
                    background:rgba(15,23,42,0.55);
                    border:1px solid rgba(191,219,254,0.45);
                    font-size:15px;
                    font-weight:600;
                    letter-spacing:0.22em;
                    color:#f9fafb;
                    white-space:nowrap;
                  "
                >
                  ${voucherCode}
                </div>
                ${
                  isActive || isExpired || isUsed
                    ? `
                <div
                  style="
                    display:inline-block;
                    padding:6px 12px;
                    border-radius:999px;
                    background:${
                      isExpired || isUsed ? "#ffffff" : `${statusColor}20`
                    };
                    border:1px solid ${statusColor}60;
                    font-size:11px;
                    font-weight:700;
                    letter-spacing:0.12em;
                    color:${statusColor};
                    text-transform:uppercase;
                  "
                >
                  ${statusBadge}
                </div>
                `
                    : ""
                }
              </div>
            </div>

            <!-- Details row -->
            <div
              style="
                display:flex;
                flex-wrap:wrap;
                gap:14px 28px;
                font-size:11px;
                line-height:1.4;
                color:#e5e7eb;
              "
            >
              <div style="min-width:120px;">
                <div
                  style="
                    text-transform:uppercase;
                    letter-spacing:0.16em;
                    color:#c7d2fe;
                    opacity:0.85;
                    margin-bottom:4px;
                  "
                >
                  Name
                </div>
                <div style="font-size:13px;font-weight:500;color:#e5e7eb;">
                  ${displayName}
                </div>
              </div>

              <div style="min-width:160px;">
                <div
                  style="
                    text-transform:uppercase;
                    letter-spacing:0.16em;
                    color:#c7d2fe;
                    opacity:0.85;
                    margin-bottom:4px;
                  "
                >
                  Email
                </div>
                <div style="font-size:13px;font-weight:500;word-break:break-all;color:#e5e7eb;">
                  <span style="color:#e5e7eb;text-decoration:none;">${safeEmailHtml}</span>
                </div>
              </div>

              <div style="min-width:120px;">
                <div
                  style="
                    text-transform:uppercase;
                    letter-spacing:0.16em;
                    color:#c7d2fe;
                    opacity:0.85;
                    margin-bottom:4px;
                  "
                >
                  Issued
                </div>
                <div style="font-size:13px;font-weight:500;color:#e5e7eb;">
                  ${issueText}
                </div>
              </div>

              <div style="min-width:120px;">
                <div
                  style="
                    text-transform:uppercase;
                    letter-spacing:0.16em;
                    color:#c7d2fe;
                    opacity:0.85;
                    margin-bottom:4px;
                  "
                >
                  ${isUsed ? "Status" : "Expires"}
                </div>
                <div style="font-size:13px;font-weight:500;color:#e5e7eb;">
                  ${isUsed ? "Used" : expiryText}
                </div>
              </div>
            </div>
          </div>
        </div>

        ${
          !isUsed && !isExpired
            ? `
        <p style="margin:0 0 10px;font-size:14px;line-height:1.6;color:#e5e7eb;">
          You can apply this credit toward eligible ecommerce strategy, design,
          or development work with Kytwo. This voucher is valid until
          <strong> ${expiryText}</strong>.
        </p>
        `
            : ""
        }
        <p style="margin:0 0 6px;font-size:14px;line-height:1.6;color:#e5e7eb;">
          ${callToAction}
        </p>
        <p style="margin:18px 0 0;font-size:13px;line-height:1.6;color:#9ca3af;">
          – The Kytwo team
        </p>
      </div>
    </div>
  `;

  await transporter.sendMail({
    from: fromEmail,
    to: email,
    subject,
    text: textContent,
    html: htmlContent,
  });
}

export async function submitVoucher(
  prevState: VoucherState,
  formData: FormData
) {
  try {
    // Honeypot: if this is filled, silently succeed without hitting external services
    const honeypot = formData.get("company");
    if (typeof honeypot === "string" && honeypot.trim().length > 0) {
      return {
        success: true,
        message:
          "Thanks! If this were a real submission, you'd receive your voucher by email shortly.",
      };
    }

    const email = formData.get("email");
    const firstName = formData.get("first_name") ?? formData.get("firstname");

    if (!email || typeof email !== "string") {
      return {
        success: false,
        message: "Please enter a valid email address.",
      };
    }

    const db = await getDb();
    const vouchers = db.collection("vouchers");

    // Check for ANY existing voucher for this email (including expired ones)
    const now = new Date();
    const existing = await vouchers.findOne<{
      voucherCode: string;
      expiryDate?: Date;
      status?: string;
      firstName?: string | null;
      createdAt?: Date;
    }>({
      email,
    });

    let voucherCode: string;
    let expiryDate: Date;
    let status: string;
    let issueDate: Date;
    let isExisting = false;

    if (existing) {
      // User already has a voucher - return its status
      voucherCode = existing.voucherCode;
      expiryDate =
        existing.expiryDate instanceof Date ? existing.expiryDate : new Date();
      status = existing.status || "issued";
      issueDate =
        existing.createdAt instanceof Date ? existing.createdAt : new Date();
      isExisting = true;

      // Determine if expired
      if (expiryDate < now && status !== "expired" && status !== "used") {
        status = "expired";
        // Update status in DB
        await vouchers.updateOne(
          { email },
          { $set: { status: "expired", updatedAt: now } }
        );
      }

      // Resend email with existing voucher details
      await sendVoucherEmail(
        email,
        voucherCode,
        existing.firstName ||
          (typeof firstName === "string" ? firstName : null),
        expiryDate,
        status,
        issueDate,
        true
      );

      const expiryText = expiryDate.toISOString().split("T")[0];
      const issueText = issueDate.toISOString().split("T")[0];
      const isExpired = expiryDate < now;
      const isUsed = status === "used";

      if (isUsed) {
        return {
          success: true,
          message: `Your voucher ${voucherCode} has been redeemed! Check your email for details. Need anything else? Contact us at hello@kytwo.com.`,
          voucherCode,
          expiryDate: expiryText,
          issueDate: issueText,
          status,
          isExisting: true,
        };
      }

      if (isExpired) {
        return {
          success: true,
          message: `Your voucher ${voucherCode} expired on ${expiryText}. We've sent you the details via email. Let's get you back on track—contact hello@kytwo.com to discuss options.`,
          voucherCode,
          expiryDate: expiryText,
          issueDate: issueText,
          status,
          isExisting: true,
        };
      }

      return {
        success: true,
        message: `Found your voucher! Check your email for ${voucherCode} (expires ${expiryText}). Ready to use it? Reply to the email or contact hello@kytwo.com.`,
        voucherCode,
        expiryDate: expiryText,
        issueDate: issueText,
        status,
        isExisting: true,
      };
    }

    // Create new voucher
    voucherCode = generateVoucherCode();
    expiryDate = new Date();
    // 3 months validity
    expiryDate.setMonth(expiryDate.getMonth() + 3);
    status = "issued";
    issueDate = now;

    await vouchers.insertOne({
      email,
      firstName: typeof firstName === "string" ? firstName : null,
      voucherCode,
      status,
      expiryDate,
      createdAt: now,
      updatedAt: now,
    });

    await sendVoucherEmail(
      email,
      voucherCode,
      typeof firstName === "string" ? firstName : null,
      expiryDate,
      status,
      issueDate,
      false
    );

    const expiryText = expiryDate.toISOString().split("T")[0];
    const issueText = issueDate.toISOString().split("T")[0];

    return {
      success: true,
      message: `You're all set! Check your email for voucher ${voucherCode} (expires ${expiryText}). Ready to use it? Reply to the email or contact hello@kytwo.com.`,
      voucherCode,
      expiryDate: expiryText,
      issueDate: issueText,
      status,
      isExisting: false,
    };
  } catch (error) {
    return {
      success: false,
      message:
        "We couldn't issue your voucher right now. Please try again shortly or email us at hello@kytwo.com.",
    };
  }
}
