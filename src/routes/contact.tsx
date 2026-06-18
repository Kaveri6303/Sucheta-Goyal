import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Sucheta Goyal" },
      {
        name: "description",
        content: "Reach out to Sucheta Goyal for fertility coaching, IVF support, and holistic wellness — globally, from Raipur.",
      },
      { property: "og:title", content: "Contact — Sucheta Goyal" },
      { property: "og:description", content: "Let's begin a conversation." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = Object.fromEntries(fd.entries()) as Record<string, string>;
    const errs: Record<string, string> = {};
    if (!data.name || data.name.length < 2) errs.name = "Please enter your name";
    if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) errs.email = "Valid email required";
    if (!data.message || data.message.length < 5) errs.message = "Tell us a little more";
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setStatus("sending");
    try {
      await new Promise((r) => setTimeout(r, 900));
      setStatus("done");
      (e.target as HTMLFormElement).reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <>
      <section className="section-major bg-light-sage overflow-hidden">
        <div className="container-luxury max-w-5xl text-center">
          <Reveal>
            <span className="section-eyebrow">Contact</span>
            <h1 className="font-display text-5xl md:text-7xl mt-4 text-forest">Let's Begin a Conversation</h1>
            <p className="mt-6 text-lg text-foreground/80 max-w-2xl mx-auto">Reach out — we usually respond within a day.</p>
          </Reveal>
        </div>
      </section>

      <section className="section-major bg-cream">
        <div className="container-luxury grid lg:grid-cols-[1fr_1.3fr] gap-10">
          <Reveal>
            <div className="space-y-4">
              {[
                { icon: MapPin, label: "Raipur, Chhattisgarh, India" },
                { icon: Mail, label: "hello@suchetagoyal.com" },
                { icon: Phone, label: "+91 93017 42000" },
                { icon: MessageCircle, label: "WhatsApp — chat anytime" },
              ].map((c) => (
                <div key={c.label} className="luxury-card p-5 flex items-center gap-4">
                  <div className="w-11 h-11 rounded-[16px] bg-sage flex items-center justify-center">
                    <c.icon className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-foreground/85">{c.label}</span>
                </div>
              ))}
              <a
                href="https://wa.me/919301742000"
                target="_blank"
                rel="noreferrer"
                className="btn-primary block text-center w-full mt-4"
              >
                Chat on WhatsApp
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <form onSubmit={onSubmit} className="luxury-card p-8 md:p-10 space-y-5">
              <h3 className="font-display text-3xl text-forest">Send a Message</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <Field name="name" label="Name" error={errors.name} />
                <Field name="email" type="email" label="Email" error={errors.email} />
                <Field name="phone" label="Phone (optional)" />
                <Field name="subject" label="Subject" />
              </div>
              <div>
                <label className="label-luxury">Message</label>
                <textarea
                  name="message"
                  rows={5}
                  maxLength={1000}
                  className={`input-luxury resize-none ${errors.message ? "border-destructive" : ""}`}
                />
                {errors.message && <p className="text-destructive text-xs mt-1">{errors.message}</p>}
              </div>
              <button type="submit" disabled={status === "sending"} className="btn-primary w-full">
                {status === "sending" ? "Sending…" : status === "done" ? "Sent ✓ Thank you" : "Send Message"}
              </button>
              {status === "error" && <p className="text-destructive text-center text-sm">Something went wrong.</p>}
            </form>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function Field({ name, label, type = "text", error }: { name: string; label: string; type?: string; error?: string }) {
  return (
    <div>
      <label className="label-luxury">{label}</label>
      <input
        name={name}
        type={type}
        maxLength={255}
        className={`input-luxury ${error ? "border-destructive" : ""}`}
      />
      {error && <p className="text-destructive text-xs mt-1">{error}</p>}
    </div>
  );
}
