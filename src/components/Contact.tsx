"use client";
import { useRef, useState, type FormEvent } from "react";
import { profile } from "@/content/portfolio";
export default function Contact() {
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");
  const busy = useRef(false);
  const config = {
    service: process.env.NEXT_PUBLIC_SERVICE_ID,
    template: process.env.NEXT_PUBLIC_TEMPLATE_ID,
    key: process.env.NEXT_PUBLIC_USER_ID,
  };
  const configured = Boolean(config.service && config.template && config.key);
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (busy.current || !configured) return;
    const form = event.currentTarget;
    if (!form.reportValidity()) return;
    const values = new FormData(form);
    if (
      ["from_name", "user_email", "message"].some(
        (name) => !String(values.get(name) ?? "").trim(),
      )
    ) {
      setStatus("error");
      return;
    }
    busy.current = true;
    setStatus("sending");
    try {
      const { default: emailjs } = await import("@emailjs/browser");
      await emailjs.sendForm(config.service!, config.template!, form, {
        publicKey: config.key!,
      });
      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    } finally {
      busy.current = false;
    }
  }
  return (
    <section id="contact" className="contact-section">
      <div className="shell contact-grid">
        <div>
          <p className="section-intro">Always up for a good conversation</p>
          <h2>
            An idea, a question,
            <br />
            or just hello?
          </h2>
          <p className="contact-description">
            A product to build, a team to join, or a good problem to work
            through. I’d like to hear about it.
          </p>
          <a className="text-link" href={profile.links.linkedin}>
            Connect on LinkedIn <span aria-hidden="true">↗</span>
          </a>
        </div>
        <noscript>
          <p>
            Please get in touch using the LinkedIn link. This form needs
            JavaScript to send a message.
          </p>
        </noscript>
        <form
          onSubmit={submit}
          className="contact-form"
          aria-busy={status === "sending"}
        >
          <div className="form-pair">
            <label>
              Your name
              <input
                required
                autoComplete="name"
                name="from_name"
                maxLength={120}
                placeholder="Alex Taylor"
              />
            </label>
            <label>
              Email address
              <input
                required
                autoComplete="email"
                type="email"
                name="user_email"
                maxLength={254}
                placeholder="alex@company.com"
              />
            </label>
          </div>
          <label>
            What are you thinking?
            <textarea
              required
              name="message"
              minLength={10}
              maxLength={5000}
              rows={4}
              placeholder="Tell me a little about your project or opportunity."
            />
          </label>
          <div className="form-bottom">
            <p>Your message goes directly to me.</p>
            <button
              className="button button-primary"
              disabled={!configured || status === "sending"}
              type="submit"
            >
              {status === "sending" ? "Sending…" : "Send message"}
              <span aria-hidden="true">↗</span>
            </button>
          </div>
          <div role="status" aria-live="polite" className="form-status">
            {!configured ? (
              <>
                The form is currently unavailable. Please{" "}
                <a href={profile.links.linkedin}>get in touch on LinkedIn</a>.
              </>
            ) : status === "success" ? (
              "Thanks for reaching out. Your message has been sent."
            ) : status === "error" ? (
              "Your message could not be sent. Check the fields and try again, or contact me on LinkedIn."
            ) : (
              ""
            )}
          </div>
        </form>
      </div>
    </section>
  );
}
