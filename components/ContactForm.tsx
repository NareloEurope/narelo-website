'use client';

import { useState } from 'react';
import { contactPage } from '@/content/pages';

type Status = 'idle' | 'submitting' | 'success' | 'error';

/**
 * Recreates the Wix contact form UI 1:1 — same four fields, all required,
 * same SEND label.
 *
 * On Wix, submissions landed in the site's Wix inbox. That backend does not
 * migrate, so this posts to a stub.
 *
 * TODO: connect to form backend
 *   Replace the body of `submit()` with a real call — e.g. POST to a form
 *   service (Formspree / Basin), a serverless function, or an email API.
 *   Note that `output: 'export'` means there is no Next.js server to POST to;
 *   the endpoint must be external, or the site must move off static export.
 */
export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle');

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('submitting');

    const data = Object.fromEntries(new FormData(e.currentTarget));

    // TODO: connect to form backend — this only logs and fakes a round-trip.
    console.info('[narelo] contact form submission (not yet delivered anywhere):', data);
    await new Promise((r) => setTimeout(r, 600));

    setStatus('success');
    e.currentTarget.reset();
  }

  if (status === 'success') {
    return (
      <div role="status" className="border-t border-sage/15 pt-10 text-center">
        {/*
          The live Wix confirmation message could not be captured without
          submitting to the real inbox — see MIGRATION-AUDIT.md §9.
          TODO: replace with Narelo's actual confirmation copy.
        */}
        <p className="display mb-3 text-2xl">Thank you.</p>
        <p className="body-copy text-warm-grey">We’ll be in touch shortly.</p>
        <button type="button" onClick={() => setStatus('idle')} className="eyebrow mt-8 border-b border-sage/40 pb-1 text-sage">
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="grid grid-cols-1 gap-7 sm:grid-cols-2" noValidate={false}>
      {contactPage.fields.map((field) => {
        const id = `contact-${field.name}`;
        // Name and Email sit side by side; phone and message span the row.
        const span = field.name === 'name' || field.name === 'email' ? '' : 'sm:col-span-2';
        return (
          <div key={field.name} className={`flex flex-col gap-2 ${span}`}>
            <label htmlFor={id} className="body-copy text-sm text-warm-grey">
              {field.label}
              {field.required && (
                <span aria-hidden="true" className="text-rust">
                  {' '}
                  *
                </span>
              )}
            </label>

            {field.type === 'textarea' ? (
              <textarea
                id={id}
                name={field.name}
                required={field.required}
                rows={5}
                autoComplete={field.autoComplete}
                className="body-copy resize-y border-b border-sage/30 bg-transparent pb-3 text-sage outline-none transition-colors focus:border-forest"
              />
            ) : (
              <input
                id={id}
                name={field.name}
                type={field.type}
                required={field.required}
                autoComplete={field.autoComplete}
                className="body-copy border-b border-sage/30 bg-transparent pb-3 text-sage outline-none transition-colors focus:border-forest"
              />
            )}
          </div>
        );
      })}

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="eyebrow mt-4 w-full bg-forest px-10 py-4 !tracking-[0.14em] text-cream transition-opacity hover:opacity-90 disabled:opacity-60 sm:col-span-2 sm:w-auto sm:justify-self-center sm:px-20"
      >
        {status === 'submitting' ? 'Sending…' : contactPage.submitLabel}
      </button>

      {status === 'error' && (
        <p role="alert" className="body-copy text-sm text-rust">
          Something went wrong. Please email {`hello@narelo.es`} instead.
        </p>
      )}
    </form>
  );
}
