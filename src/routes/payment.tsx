import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { ArrowLeft, CheckCircle2, Copy, Upload } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { clearRegistrationDraft, loadRegistrationDraft, type RegistrationDraft } from "@/lib/registration";

export const Route = createFileRoute("/payment")({
  head: () => ({
    meta: [
      { title: "Complete Your Registration — Sucheta Goyal" },
      {
        name: "description",
        content: "Complete your registration payment via QR code, UPI, or bank transfer.",
      },
      { property: "og:title", content: "Complete Your Registration — Sucheta Goyal" },
      { property: "og:url", content: "/payment" },
    ],
    links: [{ rel: "canonical", href: "/payment" }],
  }),
  component: PaymentPage,
});

const PAYMENT_DETAILS = [
  { label: "Account Holder Name", value: "SUCHETA GOYAL" },
  { label: "Bank Name", value: "ICICI BANK" },
  { label: "Account Number", value: "134801511071" },
  { label: "Account Type", value: "Savings" },
  { label: "IFSC Code", value: "ICIC0001348" },
  { label: "UPI Number", value: "93017 42000" },
  { label: "UPI ID", value: "9301742000.etb@icici" },
];

function PaymentPage() {
  const navigate = useNavigate();
  const [draft, setDraft] = useState<RegistrationDraft | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [status, setStatus] = useState<"idle" | "sending" | "error">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const fileRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const data = loadRegistrationDraft();
    if (!data) {
      navigate({ to: "/consult", hash: "signup" });
      return;
    }
    setDraft(data);
  }, [navigate]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!draft) return;

    const fd = new FormData(e.currentTarget);
    const transactionId = String(fd.get("transactionId") ?? "").trim();
    const screenshot = fd.get("screenshot");
    const errs: Record<string, string> = {};

    if (!(screenshot instanceof File) || screenshot.size === 0) {
      errs.screenshot = "Payment screenshot is required";
    } else {
      const allowed = ["image/jpeg", "image/jpg", "image/png", "application/pdf"];
      if (!allowed.includes(screenshot.type)) {
        errs.screenshot = "Accepted formats: JPG, JPEG, PNG, PDF";
      }
    }
    if (!transactionId) errs.transactionId = "Transaction ID / UTR is required";

    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }

    setErrors({});
    setStatus("sending");

    const payload = new FormData();
    payload.append("packageName", draft.packageName);
    payload.append("packagePrice", draft.packagePrice);
    payload.append("fullName", draft.fullName);
    payload.append("email", draft.email);
    payload.append("phone", draft.phone);
    payload.append("about", draft.about);
    payload.append("transactionId", transactionId);
    payload.append("screenshot", screenshot as File);

    try {
      const res = await fetch("/api/public/registration-payment", {
        method: "POST",
        body: payload,
      });
      if (!res.ok) throw new Error("Submission failed");
      clearRegistrationDraft();
      setSubmitted(true);
      setStatus("idle");
    } catch {
      setStatus("error");
    }
  };

  if (submitted) {
    return (
      <section className="section-major bg-cream min-h-[70vh] flex items-center">
        <div className="container-luxury max-w-2xl text-center">
          <Reveal>
            <div className="luxury-card p-12 md:p-16">
              <CheckCircle2 className="w-16 h-16 text-sage mx-auto mb-6" />
              <h1 className="font-display text-4xl md:text-5xl text-forest mb-4">
                Payment Details Submitted Successfully
              </h1>
              <p className="text-lg text-foreground/80 leading-relaxed mb-4">
                Thank you for registering with Sucheta Goyal Holistic Fertility & Wellness.
              </p>
              <p className="text-foreground/70 leading-relaxed">
                Your registration and payment details have been received successfully. Our team will verify the payment
                and contact you shortly.
              </p>
              <Link to="/" className="btn-primary mt-10">
                Return Home
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    );
  }

  if (!draft) return null;

  return (
    <section className="section-major bg-cream">
      <div className="container-luxury max-w-4xl">
        <Reveal>
          <Link to="/consult" hash="signup" className="inline-flex items-center gap-2 text-sm text-sage hover:text-forest mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Registration
          </Link>
          <div className="text-center mb-16">
            <h1 className="font-display text-4xl md:text-5xl text-forest">Complete Your Registration</h1>
            <p className="mt-4 text-lg text-foreground/75 max-w-2xl mx-auto">
              Please complete your payment using the QR code, UPI or Bank Transfer details below.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <div className="luxury-card p-8 mb-10 grid sm:grid-cols-2 gap-6">
            <div>
              <p className="label-luxury">Selected Package</p>
              <p className="font-display text-2xl text-forest">{draft.packageName}</p>
            </div>
            <div>
              <p className="label-luxury">Amount Payable</p>
              <p className="font-display text-2xl text-orange">{draft.packagePrice}</p>
            </div>
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-10 mb-10">
          <Reveal delay={0.1}>
            <div className="luxury-card p-8 flex flex-col items-center">
              <h2 className="font-display text-2xl text-forest mb-6 text-center">Scan to Pay</h2>
              <img
                src="/payment-qr.png"
                alt="UPI QR Code — SUCHETA GOYAL — 9301742000.etb@icici"
                className="w-full max-w-[320px] md:max-w-[360px] mx-auto rounded-[16px]"
              />
              <p className="mt-6 text-sm text-muted-foreground text-center">
                Scan this QR code with any UPI app to complete your payment.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="luxury-card p-8">
              <h2 className="font-display text-2xl text-forest mb-6">Payment Details</h2>
              <dl className="space-y-4">
                {PAYMENT_DETAILS.map((item) => (
                  <div key={item.label} className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 py-3 border-b border-sage/10 last:border-0">
                    <dt className="text-sm text-muted-foreground">{item.label}:</dt>
                    <dd className="font-medium text-forest flex items-center gap-2">
                      {item.value}
                      <button
                        type="button"
                        onClick={() => navigator.clipboard.writeText(item.value.replace(/\s/g, ""))}
                        className="p-1 text-sage hover:text-orange transition-colors"
                        aria-label={`Copy ${item.label}`}
                      >
                        <Copy className="w-3.5 h-3.5" />
                      </button>
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.2}>
          <form onSubmit={handleSubmit} className="luxury-card p-8 md:p-12 space-y-6">
            <h2 className="font-display text-3xl text-forest">Payment Verification</h2>

            <div>
              <label className="label-luxury">Upload Payment Screenshot *</label>
              <div
                className={`border-2 border-dashed rounded-[16px] p-8 text-center cursor-pointer transition-colors ${
                  errors.screenshot ? "border-destructive bg-red-50/30" : "border-sage/25 hover:border-sage/50 bg-light-sage/50"
                }`}
                onClick={() => fileRef.current?.click()}
              >
                <Upload className="w-8 h-8 text-sage mx-auto mb-3" />
                <p className="text-sm text-foreground/75">Click to upload payment proof</p>
                <p className="text-xs text-muted-foreground mt-1">Accepted: JPG, JPEG, PNG, PDF</p>
                <input
                  ref={fileRef}
                  type="file"
                  name="screenshot"
                  accept=".jpg,.jpeg,.png,.pdf,image/jpeg,image/png,application/pdf"
                  className="hidden"
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) {
                      const label = e.target.parentElement?.querySelector("p.text-sm");
                      if (label) label.textContent = file.name;
                    }
                  }}
                />
              </div>
              {errors.screenshot && <p className="text-destructive text-xs mt-1">{errors.screenshot}</p>}
            </div>

            <div>
              <label className="label-luxury">Transaction ID / UTR Number *</label>
              <input
                name="transactionId"
                type="text"
                required
                maxLength={100}
                placeholder="Enter your transaction reference number"
                className={`input-luxury ${errors.transactionId ? "border-destructive" : ""}`}
              />
              {errors.transactionId && <p className="text-destructive text-xs mt-1">{errors.transactionId}</p>}
            </div>

            <button type="submit" disabled={status === "sending"} className="btn-primary w-full">
              {status === "sending" ? "Submitting…" : "Submit Payment Details"}
            </button>
            {status === "error" && (
              <p className="text-destructive text-center text-sm">Something went wrong. Please try again.</p>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  );
}
