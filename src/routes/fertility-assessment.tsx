import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, Check, Sparkles } from "lucide-react";
import { z } from "zod";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/fertility-assessment")({
  head: () => ({
    meta: [
      { title: "Fertility & Hormonal Health Assessment — Sucheta Goyal" },
      { name: "description", content: "Take the detailed fertility and hormonal health assessment to uncover the root cause of your symptoms and receive personalized guidance." },
      { property: "og:title", content: "Fertility & Hormonal Health Assessment" },
      { property: "og:description", content: "A premium multi-step assessment to understand your body, fertility and hormonal health." },
      { property: "og:url", content: "/fertility-assessment" },
    ],
    links: [{ rel: "canonical", href: "/fertility-assessment" }],
  }),
  component: AssessmentPage,
});

const TOTAL = 5;

type FormState = {
  fullName: string; age: string; height: string; weight: string; occupation: string; city: string; phone: string; email: string;
  challenges: string; duration: string; diagnosis: string[]; diagnosisOther: string;
  symptoms: string[]; periodStatus: string; conceiveHistory: string; fertilityConcern: string;
  stress: number; sleep: string; exercise: string; lifestyle: string; previousTreatments: string; gaps: string;
  goals: string; readiness: string; urgency: string; loves: string; referral: string;
};

const initial: FormState = {
  fullName: "", age: "", height: "", weight: "", occupation: "", city: "", phone: "", email: "",
  challenges: "", duration: "", diagnosis: [], diagnosisOther: "",
  symptoms: [], periodStatus: "", conceiveHistory: "", fertilityConcern: "",
  stress: 5, sleep: "", exercise: "", lifestyle: "", previousTreatments: "", gaps: "",
  goals: "", readiness: "", urgency: "", loves: "", referral: "",
};

const step1Schema = z.object({
  fullName: z.string().trim().min(2, "Please enter your name").max(100),
  age: z.string().regex(/^\d{1,3}$/, "Enter a valid age"),
  height: z.string().trim().min(1).max(20),
  weight: z.string().trim().min(1).max(20),
  occupation: z.string().trim().min(1).max(100),
  city: z.string().trim().min(1).max(100),
  phone: z.string().trim().regex(/^[+\d\s-]{7,20}$/, "Enter a valid phone number"),
  email: z.string().trim().email("Enter a valid email").max(255),
});

const diagnosisOptions = ["PCOS", "Thyroid", "Fibroids", "Low AMH", "Endometriosis", "Adenomyosis", "Insulin Resistance", "Irregular Cycles", "None"];
const symptomOptions = ["Fatigue", "Acne", "Hair Loss", "Weight Gain", "Mood Swings", "Anxiety", "Bloating", "Painful Periods", "Heavy Bleeding", "Low Libido", "Sleep Issues", "Hot Flashes"];

function AssessmentPage() {
  const [step, setStep] = useState(1);
  const [data, setData] = useState<FormState>(initial);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const update = <K extends keyof FormState>(k: K, v: FormState[K]) => setData((d) => ({ ...d, [k]: v }));
  const toggle = (k: "diagnosis" | "symptoms", v: string) =>
    setData((d) => ({ ...d, [k]: d[k].includes(v) ? d[k].filter((x) => x !== v) : [...d[k], v] }));

  const validateStep = () => {
    setErrors({});
    if (step === 1) {
      const r = step1Schema.safeParse(data);
      if (!r.success) {
        const e: Record<string, string> = {};
        r.error.issues.forEach((i) => { e[i.path[0] as string] = i.message; });
        setErrors(e);
        return false;
      }
    }
    if (step === 2 && data.challenges.trim().length < 3) { setErrors({ challenges: "Please share your top challenges" }); return false; }
    if (step === 3 && !data.periodStatus) { setErrors({ periodStatus: "Please select an option" }); return false; }
    if (step === 4 && !data.sleep) { setErrors({ sleep: "Please share your average sleep" }); return false; }
    if (step === 5 && data.goals.trim().length < 3) { setErrors({ goals: "Please share your goals" }); return false; }
    return true;
  };

  const next = () => { if (validateStep()) setStep((s) => Math.min(TOTAL, s + 1)); };
  const back = () => setStep((s) => Math.max(1, s - 1));

  const submit = async () => {
    if (!validateStep()) return;
    setLoading(true);
    try {
      // CRM-ready API integration point
      await fetch("/api/public/fertility-assessment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      }).catch(() => null);
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  const progress = (step / TOTAL) * 100;

  if (submitted) return <ThankYou />;

  return (
    <section className="relative min-h-screen section-major bg-cream overflow-hidden">
      <div className="container-luxury max-w-3xl">
        <Reveal>
          <div className="text-center mb-10">
            <span className="section-eyebrow">Fertility & Hormonal Health</span>
            <h1 className="font-display text-4xl md:text-5xl mt-4 text-forest leading-tight">Your Personalized Assessment</h1>
            <p className="mt-4 text-foreground/75">A few mindful minutes to help us understand you completely.</p>
          </div>
        </Reveal>

        <div className="mb-8">
          <div className="flex items-center justify-between text-xs uppercase tracking-[0.2em] text-foreground/70 mb-3">
            <span>Step {step} of {TOTAL}</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <div className="h-1.5 rounded-full bg-sage/15 overflow-hidden">
            <motion.div className="h-full bg-orange" initial={false} animate={{ width: `${progress}%` }} transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }} />
          </div>
        </div>

        <div className="luxury-card p-8 md:p-10">
          <AnimatePresence mode="wait">
            <motion.div key={step} initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }} transition={{ duration: 0.4 }}>
              {step === 1 && <Step1 data={data} update={update} errors={errors} />}
              {step === 2 && <Step2 data={data} update={update} toggle={toggle} errors={errors} />}
              {step === 3 && <Step3 data={data} update={update} toggle={toggle} errors={errors} />}
              {step === 4 && <Step4 data={data} update={update} errors={errors} />}
              {step === 5 && <Step5 data={data} update={update} errors={errors} />}
            </motion.div>
          </AnimatePresence>

          <div className="mt-10 flex items-center justify-between gap-4">
            <button onClick={back} disabled={step === 1} className="btn-secondary disabled:opacity-30 disabled:cursor-not-allowed">
              <ArrowLeft className="w-4 h-4" /> Back
            </button>
            {step < TOTAL ? (
              <button onClick={next} className="btn-primary group">
                Continue <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
              </button>
            ) : (
              <button onClick={submit} disabled={loading} className="btn-primary disabled:opacity-60">
                {loading ? "Submitting..." : "Submit Assessment"} <Check className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        <p className="text-center text-xs text-foreground/60 mt-6">Your information is private and used only to personalize your guidance.</p>
      </div>
    </section>
  );
}

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="block text-sm font-medium text-foreground/85 mb-2">{label}</label>
      {children}
      {error && <p className="text-xs text-destructive mt-1.5">{error}</p>}
    </div>
  );
}

const inputCls = "input-luxury";

function StepHeader({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="mb-8">
      <h2 className="font-display text-2xl md:text-3xl text-forest">{title}</h2>
      <p className="text-sm text-foreground/70 mt-1">{subtitle}</p>
    </div>
  );
}

function Step1({ data, update, errors }: any) {
  return (
    <div>
      <StepHeader title="Personal Information" subtitle="Tell us a little about you." />
      <div className="grid sm:grid-cols-2 gap-5">
        <Field label="Full Name" error={errors.fullName}><input className={inputCls} value={data.fullName} onChange={(e) => update("fullName", e.target.value)} /></Field>
        <Field label="Age" error={errors.age}><input className={inputCls} value={data.age} onChange={(e) => update("age", e.target.value)} /></Field>
        <Field label="Height" error={errors.height}><input className={inputCls} placeholder="e.g. 5'4&quot; or 163cm" value={data.height} onChange={(e) => update("height", e.target.value)} /></Field>
        <Field label="Weight" error={errors.weight}><input className={inputCls} placeholder="e.g. 60kg" value={data.weight} onChange={(e) => update("weight", e.target.value)} /></Field>
        <Field label="Occupation" error={errors.occupation}><input className={inputCls} value={data.occupation} onChange={(e) => update("occupation", e.target.value)} /></Field>
        <Field label="City" error={errors.city}><input className={inputCls} value={data.city} onChange={(e) => update("city", e.target.value)} /></Field>
        <Field label="Contact Number" error={errors.phone}><input className={inputCls} value={data.phone} onChange={(e) => update("phone", e.target.value)} /></Field>
        <Field label="Email ID" error={errors.email}><input type="email" className={inputCls} value={data.email} onChange={(e) => update("email", e.target.value)} /></Field>
      </div>
    </div>
  );
}

function Step2({ data, update, toggle, errors }: any) {
  return (
    <div>
      <StepHeader title="Health Challenges & Diagnosis" subtitle="Share what your body is asking for help with." />
      <div className="space-y-5">
        <Field label="Your top 3 health challenges" error={errors.challenges}>
          <textarea rows={3} className={inputCls} value={data.challenges} onChange={(e) => update("challenges", e.target.value)} placeholder="e.g. fatigue, weight gain, irregular periods" />
        </Field>
        <Field label="How long have you been experiencing these issues?">
          <input className={inputCls} value={data.duration} onChange={(e) => update("duration", e.target.value)} placeholder="e.g. 2 years" />
        </Field>
        <Field label="Medical diagnosis (select all that apply)">
          <div className="flex flex-wrap gap-2">
            {diagnosisOptions.map((d) => (
              <button type="button" key={d} onClick={() => toggle("diagnosis", d)}
                className={`px-4 py-2 rounded-[24px] text-sm border transition ${data.diagnosis.includes(d) ? "bg-orange text-white border-orange" : "bg-white border-sage/20 hover:border-sage"}`}>
                {d}
              </button>
            ))}
          </div>
        </Field>
        <Field label="Other diagnosis (optional)">
          <input className={inputCls} value={data.diagnosisOther} onChange={(e) => update("diagnosisOther", e.target.value)} />
        </Field>
      </div>
    </div>
  );
}

function Step3({ data, update, toggle, errors }: any) {
  return (
    <div>
      <StepHeader title="Symptoms & Fertility Health" subtitle="The signals your body is sending." />
      <div className="space-y-5">
        <Field label="Symptoms checklist">
          <div className="flex flex-wrap gap-2">
            {symptomOptions.map((d) => (
              <button type="button" key={d} onClick={() => toggle("symptoms", d)}
                className={`px-4 py-2 rounded-[24px] text-sm border transition ${data.symptoms.includes(d) ? "bg-orange text-white border-orange" : "bg-white border-sage/20 hover:border-sage"}`}>
                {d}
              </button>
            ))}
          </div>
        </Field>
        <Field label="Period status" error={errors.periodStatus}>
          <select className={inputCls} value={data.periodStatus} onChange={(e) => update("periodStatus", e.target.value)}>
            <option value="">Select…</option>
            <option>Regular</option><option>Irregular</option><option>Absent</option><option>Heavy</option><option>Light</option><option>Painful</option>
          </select>
        </Field>
        <Field label="Trying to conceive — for how long?">
          <input className={inputCls} value={data.conceiveHistory} onChange={(e) => update("conceiveHistory", e.target.value)} placeholder="e.g. 1 year / Not trying yet" />
        </Field>
        <Field label="What do you feel is affecting your fertility or hormones the most right now?">
          <textarea
            rows={3}
            className={inputCls}
            value={data.fertilityConcern}
            onChange={(e) => update("fertilityConcern", e.target.value)}
            placeholder="e.g. frustration, burnout, marriage pressure, office stress, repeated failures, others…"
          />
        </Field>
      </div>
    </div>
  );
}

function Step4({ data, update, errors }: any) {
  return (
    <div>
      <StepHeader title="Lifestyle Assessment" subtitle="A glimpse into your everyday rhythm." />
      <div className="space-y-6">
        <Field label={`Stress level: ${data.stress}/10`}>
          <input type="range" min={1} max={10} value={data.stress} onChange={(e) => update("stress", Number(e.target.value))} className="w-full accent-primary" />
        </Field>
        <Field label="Average sleep (hours per night)" error={errors.sleep}>
          <input className={inputCls} value={data.sleep} onChange={(e) => update("sleep", e.target.value)} placeholder="e.g. 6-7 hours" />
        </Field>
        <Field label="Exercise habits">
          <input className={inputCls} value={data.exercise} onChange={(e) => update("exercise", e.target.value)} placeholder="e.g. Yoga 3x a week" />
        </Field>
        <Field label="Lifestyle patterns (diet, screen time, routine)">
          <textarea rows={3} className={inputCls} value={data.lifestyle} onChange={(e) => update("lifestyle", e.target.value)} />
        </Field>
        <Field label="Previous treatments tried">
          <textarea rows={3} className={inputCls} value={data.previousTreatments} onChange={(e) => update("previousTreatments", e.target.value)} />
        </Field>
        <Field label="What do you feel was missing in those treatments?">
          <textarea rows={3} className={inputCls} value={data.gaps} onChange={(e) => update("gaps", e.target.value)} />
        </Field>
      </div>
    </div>
  );
}

function Step5({ data, update, errors }: any) {
  return (
    <div>
      <StepHeader title="Goals & Commitment" subtitle="Where you want to go from here." />
      <div className="space-y-5">
        <Field label="Your health & fertility goals" error={errors.goals}>
          <textarea rows={3} className={inputCls} value={data.goals} onChange={(e) => update("goals", e.target.value)} />
        </Field>
        <Field label="Are you open to making sustainable food, lifestyle, and stress-management changes to improve your hormones naturally?">
          <select className={inputCls} value={data.readiness} onChange={(e) => update("readiness", e.target.value)}>
            <option value="">Select…</option>
            <option>Yes, fully committed</option><option>Somewhat open</option><option>Need guidance / support</option>
          </select>
        </Field>
        <Field label="Why do you feel NOW is the right time for you to focus on your health?">
          <textarea rows={3} className={inputCls} value={data.urgency} onChange={(e) => update("urgency", e.target.value)} />
        </Field>
        <Field label="What are the 5 things you love about your life?">
          <textarea rows={4} className={inputCls} value={data.loves} onChange={(e) => update("loves", e.target.value)} placeholder="1.&#10;2.&#10;3.&#10;4.&#10;5." />
        </Field>
        <Field label="Where did you get our reference from?">
          <input className={inputCls} value={data.referral} onChange={(e) => update("referral", e.target.value)} />
        </Field>
      </div>
    </div>
  );
}

function ThankYou() {
  return (
    <section className="relative min-h-screen flex items-center justify-center section-major bg-light-sage overflow-hidden">
      <div className="container-luxury max-w-2xl text-center">
        <Reveal>
          <div className="inline-flex w-20 h-20 rounded-[24px] bg-sage items-center justify-center shadow-soft mb-8">
            <Sparkles className="w-8 h-8 text-white" />
          </div>
          <h1 className="font-display text-4xl md:text-6xl text-forest leading-tight">Thank You</h1>
          <p className="mt-6 text-lg text-foreground/80 leading-relaxed">
            Your assessment has been successfully submitted. Our team will review your responses and contact you with personalized guidance.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link to="/consult" className="btn-primary">
              Schedule Consultation <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/" className="btn-secondary">
              Back Home
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}