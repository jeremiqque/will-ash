"use client";

import Link from "next/link";
import { useActionState, useEffect, useRef } from "react";
import clsx from "clsx";
import { sendEnquiry, type ContactField, type ContactState } from "@/app/contact/actions";
import { practiceAreas } from "@/content/practice-areas";
import { Select } from "./select";

const initialState: ContactState = { status: "idle", message: "", errors: {}, values: {} };

const inputBase =
  "text-body-md block min-h-[52px] w-full rounded-xs border bg-canvas px-4 py-3 text-ink placeholder:text-slate/80 transition-colors focus:border-ink focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary";

function Field({
  id,
  label,
  optional,
  error,
  children,
}: {
  id: ContactField;
  label: string;
  optional?: boolean;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="text-caps mb-2 flex justify-between text-ink">
        {label}
        {optional && <span className="text-slate normal-case tracking-normal">Optional</span>}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} className="text-caption mt-2 text-primary">
          {error}
        </p>
      )}
    </div>
  );
}

export function ContactForm({ defaultPractice }: { defaultPractice?: string }) {
  const [state, formAction, pending] = useActionState(sendEnquiry, initialState);
  const statusRef = useRef<HTMLDivElement>(null);
  const { errors, values } = state;

  // Move focus to the status message so screen readers announce the result.
  useEffect(() => {
    if (state.status !== "idle") statusRef.current?.focus();
  }, [state]);

  const aria = (id: ContactField) => ({
    "aria-invalid": errors[id] ? true : undefined,
    "aria-describedby": errors[id] ? `${id}-error` : undefined,
  });
  const border = (id: ContactField) => (errors[id] ? "border-primary" : "border-hairline hover:border-ink/40");

  if (state.status === "success") {
    return (
      <div ref={statusRef} tabIndex={-1} role="status" className="rounded-card border border-hairline p-8 focus:outline-none">
        <p className="text-eyebrow text-primary">Message sent</p>
        <p className="text-display-sm mt-4">{state.message}</p>
      </div>
    );
  }

  return (
    <form action={formAction} noValidate className="space-y-6">
      {state.status === "error" && (
        <div
          ref={statusRef}
          tabIndex={-1}
          role="alert"
          className="text-body-sm rounded-xs border border-primary px-4 py-3 text-primary focus:outline-none"
        >
          {state.message}
        </div>
      )}

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <Field id="name" label="Full name" error={errors.name}>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            required
            defaultValue={values.name}
            className={clsx(inputBase, border("name"))}
            {...aria("name")}
          />
        </Field>
        <Field id="email" label="Email" error={errors.email}>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            defaultValue={values.email}
            className={clsx(inputBase, border("email"))}
            {...aria("email")}
          />
        </Field>
        <Field id="phone" label="Phone" optional error={errors.phone}>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            defaultValue={values.phone}
            className={clsx(inputBase, border("phone"))}
            {...aria("phone")}
          />
        </Field>
        <Field id="practice" label="Practice area" optional error={errors.practice}>
          <Select
            id="practice"
            name="practice"
            placeholder="Select an area"
            defaultValue={values.practice ?? defaultPractice ?? ""}
            options={[
              ...practiceAreas.map((p) => ({ value: p.title, label: p.title })),
              { value: "Not sure", label: "Not sure" },
            ]}
            invalid={Boolean(errors.practice)}
            describedBy={errors.practice ? "practice-error" : undefined}
          />
        </Field>
      </div>

      <Field id="message" label="How can we help?" error={errors.message}>
        <textarea
          id="message"
          name="message"
          rows={6}
          required
          defaultValue={values.message}
          placeholder="Briefly describe your matter. Please don’t include highly sensitive details at this stage."
          className={clsx(inputBase, border("message"), "resize-y")}
          {...aria("message")}
        />
      </Field>

      {/* Honeypot (hidden from people and assistive tech) */}
      <div aria-hidden className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <label htmlFor="company_website">Leave this field empty</label>
        <input id="company_website" name="company_website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div>
        <label htmlFor="consent" className="text-body-sm flex cursor-pointer items-start gap-3 text-slate">
          <input
            id="consent"
            name="consent"
            type="checkbox"
            value="yes"
            required
            className="mt-1 size-5 shrink-0 cursor-pointer accent-primary"
            {...aria("consent")}
          />
          <span>
            I agree to Will &amp; Ash processing my details to respond to this enquiry, as described in the{" "}
            <Link href="/privacy" className="text-ink underline decoration-primary underline-offset-4">
              Privacy Policy
            </Link>
            .
          </span>
        </label>
        {errors.consent && (
          <p id="consent-error" className="text-caption mt-2 text-primary">
            {errors.consent}
          </p>
        )}
      </div>

      <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          disabled={pending}
          className="text-button inline-flex min-h-[52px] items-center justify-center rounded-xs border border-primary bg-primary px-8 text-canvas transition-colors hover:bg-primary-hover disabled:cursor-wait disabled:opacity-70"
        >
          {pending ? "Sending…" : "Send enquiry"}
        </button>
        <p className="text-caption text-slate">Submitting this form does not create a lawyer and client relationship.</p>
      </div>
    </form>
  );
}
