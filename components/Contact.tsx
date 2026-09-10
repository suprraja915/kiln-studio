"use client";

import { FormEvent, useState } from "react";

type Errors = Partial<Record<"name" | "email" | "message", string>>;

export default function Contact() {
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);

  function validate(data: FormData): Errors {
    const next: Errors = {};
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const message = String(data.get("message") || "").trim();

    if (!name) next.name = "Tell us your name.";
    if (!email) {
      next.email = "We need an email to reply to.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      next.email = "That email doesn't look complete.";
    }
    if (!message) next.message = "Give us a line or two about the project.";

    return next;
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const validationErrors = validate(data);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      // No backend wired up yet — the assignment scope is front-end,
      // so this confirms the flow without pretending to send anything.
      setSubmitted(true);
      e.currentTarget.reset();
    }
  }

  if (submitted) {
    return (
      <section id="contact" className="border-t border-line dark:border-line-dark">
        <div className="mx-auto max-w-content px-6 py-20 sm:px-10">
          <div className="max-w-prose rounded-md border border-line dark:border-line-dark p-8">
            <h2 className="font-slab text-2xl">Got it.</h2>
            <p className="mt-3 text-ink-soft">
              We read every message ourselves and reply within two working
              days. We&apos;ll get back to you at the address you sent.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="mt-6 text-sm font-medium text-amber underline underline-offset-4"
            >
              Send another message
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="border-t border-line dark:border-line-dark">
      <div className="mx-auto max-w-content px-6 py-20 sm:px-10">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1fr]">
          <div className="max-w-prose">
            <h2 className="font-slab text-3xl tracking-tight sm:text-4xl">
              Tell us what you&apos;re building.
            </h2>
            <p className="mt-4 text-ink-soft">
              A couple of lines is enough to start. If it&apos;s a fit,
              we&apos;ll set up a call.
            </p>
          </div>

          <form onSubmit={handleSubmit} noValidate className="max-w-prose space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                className="mt-2 w-full rounded-md border border-ink/25 dark:border-ink-inverse/25 bg-transparent px-4 py-3 text-sm"
                aria-invalid={Boolean(errors.name)}
                aria-describedby={errors.name ? "name-error" : undefined}
              />
              {errors.name && (
                <p id="name-error" className="mt-2 text-sm text-rust">
                  {errors.name}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                className="mt-2 w-full rounded-md border border-ink/25 dark:border-ink-inverse/25 bg-transparent px-4 py-3 text-sm"
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? "email-error" : undefined}
              />
              {errors.email && (
                <p id="email-error" className="mt-2 text-sm text-rust">
                  {errors.email}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium">
                Project
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="mt-2 w-full rounded-md border border-ink/25 dark:border-ink-inverse/25 bg-transparent px-4 py-3 text-sm"
                aria-invalid={Boolean(errors.message)}
                aria-describedby={errors.message ? "message-error" : undefined}
              />
              {errors.message && (
                <p id="message-error" className="mt-2 text-sm text-rust">
                  {errors.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="rounded-full bg-amber px-6 py-3 text-sm font-medium text-ink transition-transform hover:-translate-y-0.5"
            >
              Send message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
