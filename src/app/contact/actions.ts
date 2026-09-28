"use server";

import { site } from "@/content/site";
import { practiceAreas } from "@/content/practice-areas";

export type ContactField = "name" | "email" | "phone" | "practice" | "message" | "consent";

export type ContactState = {
  status: "idle" | "success" | "error";
  message: string;
  errors: Partial<Record<ContactField, string>>;
  values: Partial<Record<Exclude<ContactField, "consent">, string>>;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const clean = (v: FormDataEntryValue | null, max = 5000) => String(v ?? "").trim().slice(0, max);

/**
 * Validates the enquiry and emails it to the firm via Resend.
 * Required env vars (see .env.example): RESEND_API_KEY, CONTACT_TO_EMAIL, CONTACT_FROM_EMAIL.
 */
export async function sendEnquiry(_prev: ContactState, formData: FormData): Promise<ContactState> {
  const values = {
    name: clean(formData.get("name"), 120),
    email: clean(formData.get("email"), 200),
    phone: clean(formData.get("phone"), 40),
    practice: clean(formData.get("practice"), 120),
    message: clean(formData.get("message"), 5000),
  };

  // Honeypot — real people never fill this hidden field.
  if (clean(formData.get("company_website"))) {
    return { status: "success", message: "Thank you. We will be in touch shortly.", errors: {}, values: {} };
  }

  const errors: ContactState["errors"] = {};
  if (values.name.length < 2) errors.name = "Please enter your full name.";
  if (!EMAIL_RE.test(values.email)) errors.email = "Please enter a valid email address.";
  if (values.phone && !/^[+()\d\s-]{7,}$/.test(values.phone)) errors.phone = "Please enter a valid phone number.";
  if (values.practice && !practiceAreas.some((p) => p.title === values.practice) && values.practice !== "Not sure")
    errors.practice = "Please choose an option from the list.";
  if (values.message.length < 10) errors.message = "Please tell us a little more about your matter.";
  if (formData.get("consent") !== "yes") errors.consent = "Please confirm you agree to our Privacy Policy.";

  if (Object.keys(errors).length > 0) {
    return { status: "error", message: "Please check the highlighted fields.", errors, values };
  }

  // Only the API key is required. Enquiries go to the firm's Outlook inbox by default,
  // sent from Resend's shared address until the firm's own domain is verified.
  const RESEND_API_KEY = process.env.RESEND_API_KEY;
  const CONTACT_TO_EMAIL = process.env.CONTACT_TO_EMAIL || site.email;
  const CONTACT_FROM_EMAIL = process.env.CONTACT_FROM_EMAIL || "Will & Ash Website <onboarding@resend.dev>";
  if (!RESEND_API_KEY) {
    console.warn("[contact] Email is not configured: set RESEND_API_KEY in .env.local.");
    return {
      status: "error",
      message: `Our online form is temporarily unavailable. Please email us directly at ${site.email}.`,
      errors: {},
      values,
    };
  }

  const text = [
    `Name: ${values.name}`,
    `Email: ${values.email}`,
    `Phone: ${values.phone || "Not provided"}`,
    `Practice area: ${values.practice || "Not selected"}`,
    "",
    values.message,
  ].join("\n");

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${RESEND_API_KEY}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from: CONTACT_FROM_EMAIL,
        to: CONTACT_TO_EMAIL.split(",").map((s) => s.trim()),
        reply_to: values.email,
        subject: `New website enquiry from ${values.name}`,
        text,
      }),
    });
    if (!res.ok) throw new Error(`Resend responded ${res.status}`);
  } catch (err) {
    console.error("[contact] Failed to send enquiry", err);
    return {
      status: "error",
      message: `Sorry, something went wrong sending your message. Please try again or email ${site.email}.`,
      errors: {},
      values,
    };
  }

  return {
    status: "success",
    message: "Thank you. Your enquiry has been received. A member of our team will respond within one business day.",
    errors: {},
    values: {},
  };
}
