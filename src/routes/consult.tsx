import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  ArrowRight,
  Building2,
  Check,
  Coffee,
  Globe2,
  MessageCircle,
  Upload,
} from "lucide-react";
import consultImg from "@/assets/consult.jpg";
import logo from "@/assets/logo.png";
import { Reveal } from "@/components/Reveal";
import { PACKAGES, getPackageById } from "@/lib/packages";
import { saveRegistrationDraft, type RegistrationDraft } from "@/lib/registration";

export const Route = createFileRoute("/consult")({
  head: () => ({
    meta: [
      { title: "Consult — Sucheta Goyal" },
      {
        name: "description",
        content:
          "An exclusive fertility & wellness consultation program. Personalised, global, and rooted in holistic care.",
      },
      { property: "og:title", content: "Consult — Sucheta Goyal" },
      {
        property: "og:description",
        content: "Fertility is a journey — let's walk it together, naturally.",
      },
      { property: "og:url", content: "/consult" },
    ],
    links: [{ rel: "canonical", href: "/consult" }],
  }),
  component: ConsultPage,
});

function ConsultPage() {
  return (
    <>
      <Hero />
      <About />
      <Global />
      <WeWorkWithEveryone />
      <Program />
      <HowItWorks />
      <SignUp />
    </>
  );
}

function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden">
      {/* Background image — fully visible */}
      <img
        src={consultImg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover object-center"
      />
      {/* Subtle warm overlay — 25% opacity only */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#F8F6F1]/90 via-[#F8F6F1]/70 to-[#F8F6F1]/30" />
      <div className="absolute inset-0 bg-[#2D4739]/10" />

      <div className="relative container-luxury py-32">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="section-eyebrow">Exclusive Consultation</span>
          <h1 className="font-display text-5xl md:text-7xl mt-5 max-w-3xl leading-[1.05] text-forest">
            Fertility is a Journey —{" "}
            <span className="text-orange">Let's Walk it Together, Naturally.</span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 text-lg md:text-xl text-foreground/75 max-w-xl leading-relaxed"
        >
          Compassionate, root-cause wellness coaching for fertility, IVF support, hormonal balance,
          and inner harmony — where ancient wisdom meets modern science.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.38, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <a href="#signup" className="btn-primary">
            Book Consultation <ArrowRight className="w-4 h-4" />
          </a>
          <a href="#how" className="btn-secondary">
            How It Works
          </a>
        </motion.div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="section-major bg-cream">
      <div className="container-luxury max-w-4xl space-y-6 text-lg leading-relaxed text-foreground/85">
        <Reveal>
          <h2 className="font-display text-4xl md:text-5xl text-forest">About the Exclusive Consultation Program</h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p>
            I help both <strong>men and women</strong> overcome fertility challenges by restoring balance at the
            root—physically, emotionally, and hormonally.
          </p>
        </Reveal>
        <Reveal delay={0.15}>
          <p>
            My approach combines <strong>cycle-syncing</strong> (for women), nutrition, lifestyle shifts, and stress
            detox to awaken the body's natural ability to conceive.
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <p>
            It's not just about pregnancy—it's about creating a <em>fertile body, mind, and life</em>. Together, we
            move from confusion to clarity, from pressure to empowerment. This isn't a temporary fix — it's a lasting
            lifestyle shift.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function Global() {
  return (
    <section className="section-major bg-light-sage">
      <div className="container-luxury grid md:grid-cols-2 gap-10">
        <Reveal>
          <div className="luxury-card p-8 hover-lift">
            <Globe2 className="w-8 h-8 text-sage mb-4" />
            <h3 className="font-display text-2xl mb-3 text-forest">🌏 We Work Globally — From Raipur with Love!</h3>
            <p className="text-foreground/80">
              Our special consultation program is designed so you can follow it from anywhere in the world 🌍✨.
              Sessions happen over Skype, Zoom, or phone — whatever works best for you 📱💻.
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.15}>
          <div className="luxury-card p-8 hover-lift">
            <Coffee className="w-8 h-8 text-sage mb-4" />
            <h3 className="font-display text-2xl mb-3 text-forest">In Raipur? Let's Meet ☕</h3>
            <p className="text-foreground/80">
              If you're in Raipur, we'd love to meet you in person and chat over a cup of coffee 😊. 🚫 We don't have
              any other office, representative or center anywhere outside Raipur.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function WeWorkWithEveryone() {
  return (
    <section className="section-major bg-cream">
      <div className="container-luxury max-w-4xl space-y-6">
        <Reveal>
          <h2 className="font-display text-4xl md:text-5xl text-forest">We Work With Everyone</h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="text-lg text-foreground/85 leading-relaxed">
            We support clients from all walks of life—across countries, professions, age groups, and backgrounds. Our
            clients include students, working professionals, school teachers, homemakers, entrepreneurs, doctors,
            engineers, artists, IT professionals, bankers, corporate executives, athletes, police officers, social
            workers, lawyers, and even retired individuals.
          </p>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="text-lg text-foreground/85 leading-relaxed">
            We work with both women and men, helping them through a wide range of health concerns — from simple weight
            loss to more complex issues like PCOS, endometriosis, fibroids, hypothyroidism, anovulation, blocked
            fallopian tubes, and autoimmune conditions. We also help men with concerns such as low sperm count, poor
            motility, abnormal shape, varicocele, erectile dysfunction, premature ejaculation, hormonal imbalances, and
            even genetic disorders.
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="text-lg text-foreground/85 leading-relaxed">
            Our diverse client base is proof that the fundamentals of a healthy lifestyle are universal. We just
            personalize them based on individual needs.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function Program() {
  return (
    <section className="section-major bg-light-sage">
      <div className="container-luxury grid lg:grid-cols-2 gap-16 items-center">
        <Reveal>
          <div className="relative">
            <img src={logo} alt="Sruchetna" className="relative w-full max-w-md mx-auto rounded-[24px] shadow-soft bg-white p-12" />
          </div>
        </Reveal>
        <Reveal delay={0.15}>
          <div>
            <span className="section-eyebrow">Sacred Wisdom</span>
            <h2 className="font-display text-4xl md:text-5xl mt-4 mb-6 text-forest">Fertility as Sacred Balance</h2>
            <p className="text-foreground/80 leading-relaxed text-lg">
              In ancient Indian wisdom, fertility is much more than the meeting of a sperm and egg. It is a sacred
              connection between energy (Shakti) and consciousness (Shiva), working in harmony with nature. Fertility
              happens when our body, mind, and emotions are in balance. It depends on healthy reproductive energy (
              <em>Shukra Dhatu</em>), good nourishment (<em>Rasa</em>), and strong inner strength (<em>Ojas</em>).
            </p>
            <p className="text-foreground/70 leading-relaxed mt-4 text-lg">
              For a new life to begin, four things are essential — right timing, a healthy womb, good nutrition, and
              healthy sperm and egg. When all come together with grace, creating a baby becomes natural and full of
              awareness.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

const stages = [
  {
    n: "1",
    title: "Pre-Consultation Stage",
    items: [
      "Fill out a short 'Getting to Know You' form",
      "We craft a session schedule around your availability ⏰",
      "Receive a simple prep guide 📄 before your first session",
    ],
  },
  {
    n: "2",
    title: "Consultation Stage",
    items: [
      "45-minute foundational session — mind–body connection & clarity",
      "Ongoing progress reviews and lifestyle adjustments",
      "Full WhatsApp + email support 💬📧 — we're here for you",
      "🍽️ Special meal planning for travel, holidays, weddings & festivals",
    ],
  },
  {
    n: "3",
    title: "Post-Consultation Stage",
    items: [
      "We stay connected for life",
      "Lifetime support whenever you need advice or a check-in",
      "📄 Take-away guide with a summary and practical real-life tips",
    ],
  },
];

function HowItWorks() {
  return (
    <section id="how" className="section-major bg-cream">
      <div className="container-luxury">
        <Reveal>
          <div className="text-center mb-16">
            <span className="section-eyebrow">The Process</span>
            <h2 className="font-display text-5xl md:text-6xl mt-4 text-forest">How It Works</h2>
          </div>
        </Reveal>
        <div className="space-y-8">
          {stages.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.1}>
              <div className="luxury-card p-8 md:p-12 hover-lift grid md:grid-cols-[auto_1fr] gap-8 items-start">
                <div className="font-display text-7xl md:text-8xl text-orange leading-none">{s.n}</div>
                <div>
                  <h3 className="font-display text-3xl mb-5 text-forest">{s.title}</h3>
                  <ul className="space-y-3">
                    {s.items.map((it) => (
                      <li key={it} className="flex items-start gap-3 text-foreground/80">
                        <Check className="w-5 h-5 text-sage mt-1 shrink-0" />
                        <span>{it}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function SignUp() {
  const navigate = useNavigate();
  const [pkg, setPkg] = useState(PACKAGES[1].id);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleContinue = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = Object.fromEntries(fd.entries()) as Record<string, string>;
    const errs: Record<string, string> = {};

    if (!data.name || data.name.trim().length < 2) errs.name = "Please enter your full name";
    if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) errs.email = "Valid email required";
    if (!data.phone || data.phone.trim().length < 6) errs.phone = "Valid phone required";
    if (!data.package) errs.package = "Please select a package";

    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }

    const selected = getPackageById(data.package);
    if (!selected) {
      setErrors({ package: "Please select a valid package" });
      return;
    }

    setErrors({});
    const draft: RegistrationDraft = {
      packageId: selected.id,
      packageName: selected.label,
      packagePrice: selected.cost,
      fullName: data.name.trim(),
      email: data.email.trim(),
      phone: data.phone.trim(),
      about: (data.message ?? "").trim(),
    };
    saveRegistrationDraft(draft);
    navigate({ to: "/payment" });
  };

  return (
    <section id="signup" className="section-major bg-light-sage">
      <div className="container-luxury">
        <Reveal>
          <div className="text-center mb-16">
            <span className="section-eyebrow">Programs</span>
            <h2 className="font-display text-5xl md:text-6xl mt-4 text-forest">Choose Your Path</h2>
            <p className="mt-4 text-foreground/70 max-w-xl mx-auto">
              Select a program, complete your registration, and proceed to payment.
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {PACKAGES.map((p, i) => (
            <Reveal key={p.id} delay={i * 0.1}>
              <button
                type="button"
                onClick={() => setPkg(p.id)}
                className={`w-full text-left rounded-[24px] p-8 border-2 transition-all duration-300 hover-lift ${
                  pkg === p.id
                    ? "border-orange bg-white shadow-soft-hover"
                    : "border-sage/20 bg-white/80 hover:border-sage/40"
                }`}
              >
                <div className="font-display text-3xl text-forest">{p.label}</div>
                <div className="text-xs uppercase tracking-[0.2em] text-sage mt-2">{p.meet}</div>
                <p className="text-sm text-muted-foreground mt-4">{p.details}</p>
                <div className="font-display text-4xl text-orange mt-6">{p.cost}</div>
              </button>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <form onSubmit={handleContinue} className="luxury-card p-8 md:p-12 max-w-3xl mx-auto space-y-5">
            <h3 className="font-display text-3xl text-center mb-2 text-forest">Registration Form</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <Field name="name" label="Full Name" error={errors.name} required />
              <Field name="email" type="email" label="Email" error={errors.email} required />
              <Field name="phone" label="Phone / WhatsApp" error={errors.phone} required />
              <div>
                <label className="label-luxury">Package</label>
                <select
                  name="package"
                  value={pkg}
                  onChange={(e) => setPkg(e.target.value)}
                  className="input-luxury"
                  required
                >
                  {PACKAGES.map((p) => (
                    <option key={p.id} value={p.id}>
                      {p.label} — {p.cost}
                    </option>
                  ))}
                </select>
                {errors.package && <p className="text-destructive text-xs mt-1">{errors.package}</p>}
              </div>
            </div>
            <div>
              <label className="label-luxury">Tell Us About You</label>
              <textarea name="message" rows={4} className="input-luxury resize-none" />
            </div>
            <button type="submit" className="btn-primary w-full">
              Continue To Payment <ArrowRight className="w-4 h-4" />
            </button>
            <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground pt-2">
              <MessageCircle className="w-3.5 h-3.5" /> Prefer WhatsApp?{" "}
              <Link to="/contact" className="text-sage hover:underline">
                Reach us directly →
              </Link>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

function Field({
  name,
  label,
  type = "text",
  error,
  required,
}: {
  name: string;
  label: string;
  type?: string;
  error?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="label-luxury">{label}</label>
      <input
        name={name}
        type={type}
        required={required}
        maxLength={255}
        className={`input-luxury ${error ? "border-destructive" : ""}`}
      />
      {error && <p className="text-destructive text-xs mt-1">{error}</p>}
    </div>
  );
}
