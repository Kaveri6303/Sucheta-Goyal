import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowRight, Flower2, Heart, Sparkles, Sun } from "lucide-react";
import fertilityImg from "@/assets/programs/fertility-coaching.jpeg";
import ivfImg from "@/assets/programs/ivf-support.jpeg";
import nutritionImg from "@/assets/programs/nutrition.jpeg";
import lifestyleImg from "@/assets/programs/Transformation.jpeg";
import yogaImg from "@/assets/programs/yoga.jpeg";
import founderPortrait from "@/assets/founder-portrait.png";
import consultImg from "@/assets/consult.jpg";
import logo from "@/assets/logo.png";
import t1 from "@/assets/testimonial-1.jpg";
import t2 from "@/assets/testimonial-2.jpg";
import t3 from "@/assets/testimonial-3.jpg";
import t4 from "@/assets/testimonial-4.jpg";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sucheta Goyal — Holistic Fertility & Wellness" },
      {
        name: "description",
        content:
          "It's not just about pregnancy. It's about creating a fertile body, mind and life. Begin your holistic journey with Sucheta Goyal.",
      },
      { property: "og:title", content: "Sucheta Goyal — Holistic Fertility & Wellness" },
      {
        property: "og:description",
        content: "Compassionate coaching for fertility, IVF support, nutrition, yoga and inner harmony.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  const [showStory, setShowStory] = useState(false);
  return (
    <>
      <Hero />
      <CinematicIntro onReadMore={() => setShowStory(true)} />
      {showStory && <StoryOverlay onClose={() => setShowStory(false)} />}
      <ConsultHero />
      <ConsultProgram />
      <HowItWorks />
      <ServicesGrid />
      <TestimonialsTeaser />
      <AssessmentSection />
      <CTA />
    </>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-cream hero-section">
      {/* Decorative background blobs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-sage/8 via-light-sage/40 to-transparent rounded-full -translate-y-1/4 translate-x-1/4 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-orange/5 via-cream to-transparent rounded-full translate-y-1/4 -translate-x-1/4 pointer-events-none" />

      <div className="container-luxury grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        {/* Left — text */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className="order-2 lg:order-1 lg:col-span-6 py-4"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-sage/25 bg-white/80 backdrop-blur-sm mb-7 shadow-sm">
            <Sparkles className="w-3 h-3 text-sage" />
            <span className="text-[10px] uppercase tracking-[0.28em] text-sage font-medium">Holistic Fertility & Wellness</span>
          </div>

          <h1 className="font-display text-[2.6rem] md:text-5xl lg:text-[3.5rem] leading-[1.07] text-forest">
            It's not just about{" "}
            <span className="text-orange italic">pregnancy</span>.
            <span className="block mt-3 font-light text-[#5A7060] text-[2rem] md:text-[2.4rem] lg:text-[2.8rem] leading-[1.15]">
              It's about creating a fertile body, mind & life.
            </span>
          </h1>

          <p className="mt-7 text-base md:text-[1.05rem] leading-[1.85] text-foreground/65 max-w-lg">
            Compassionate, root-cause wellness coaching for fertility, IVF support, hormonal balance, and inner
            harmony — where ancient wisdom meets modern science.
          </p>

          {/* Signature */}
          <div className="mt-7 mb-1">
            <span className="signature-name">Sucheta Goyal</span>
            <div className="signature-line" />
            <p className="text-[10px] uppercase tracking-[0.28em] text-sage/70 mt-2">Holistic Fertility &amp; Wellness</p>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/consult" className="btn-primary group">
              Book Consultation <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
            </Link>
            <Link to="/programs" className="btn-secondary">
              Explore Programs
            </Link>
          </div>
        </motion.div>

        {/* Right — image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          className="relative order-1 lg:order-2 lg:col-span-6 flex justify-center"
        >
          {/* Layered glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-sage/12 via-[#EEF3EC]/80 to-orange/6 rounded-[36px] scale-105 -z-10" />
          <div className="absolute -inset-3 bg-gradient-to-tr from-cream via-light-sage/60 to-cream rounded-[40px] -z-20" />

          <motion.img
            src={founderPortrait}
            alt="Sucheta Goyal — Holistic Fertility & Wellness Coach"
            className="relative w-full max-w-[340px] md:max-w-[420px] lg:max-w-full mx-auto rounded-[28px] object-cover object-top shadow-[0_32px_80px_rgba(36,49,38,0.14)]"
            style={{ aspectRatio: "3/4" }}
            whileHover={{ scale: 1.018, y: -6 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          />

          {/* Badge */}
          <div className="absolute -bottom-3 left-4 md:left-0 lg:-left-5 flex items-center gap-3 px-5 py-3 rounded-[20px] bg-white border border-sage/12 shadow-[0_8px_24px_rgba(36,49,38,0.10)]">
            <span className="w-2 h-2 rounded-full bg-orange shrink-0" />
            <span className="text-[10px] uppercase tracking-[0.28em] text-foreground/65">1000+ Souls Healed</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function CinematicIntro({ onReadMore }: { onReadMore: () => void }) {
  return (
    <section className="section-internal bg-light-sage">
      <div className="container-luxury max-w-4xl text-center">
        <Reveal>
          <img src={logo} alt="Sruchetna logo" className="w-32 h-32 mx-auto rounded-full shadow-soft mb-10" />
        </Reveal>
        <Reveal delay={0.15}>
          <p className="font-display text-2xl md:text-4xl leading-relaxed text-forest/90 italic">
            "For those seeking a compassionate and knowledgeable guide in their pursuit of holistic well-being,{" "}
            <span className="text-orange not-italic">Sucheta stands as a beacon of expertise and dedication.</span>"
          </p>
        </Reveal>
        <Reveal delay={0.3}>
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <button onClick={onReadMore} className="btn-primary">
              Read More
            </button>
            <Link to="/consult" className="btn-secondary">
              Consult Sucheta
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function StoryOverlay({ onClose }: { onClose: () => void }) {
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[60] overflow-y-auto scroll-smooth bg-cream animate-in fade-in duration-500">
      <button
        onClick={onClose}
        className="fixed top-6 right-6 z-[70] w-12 h-12 rounded-[24px] bg-white border border-sage/20 flex items-center justify-center hover:bg-sage hover:text-white transition shadow-soft"
        aria-label="Close"
      >
        ✕
      </button>

      <div className="container-luxury py-20 lg:py-28">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
          <div className="w-full lg:w-3/5 order-2 lg:order-1 space-y-14">
            <Reveal>
              <div className="flex items-center gap-4">
                <span className="h-px w-12 bg-sage/40" />
                <span className="section-eyebrow">My Story</span>
              </div>
              <h2 className="font-display text-4xl md:text-6xl mt-6 text-forest leading-[1.05]">About Sucheta Goyal</h2>
              <p className="mt-8 text-lg leading-[1.85] text-foreground/85">
                Sucheta Goyal is a passionate Holistic Fertility and Wellness Coach, helping individuals and couples
                find natural balance and lasting healing. She believes true wellness begins by nurturing the root
                cause—not just treating the symptoms.
              </p>
              <p className="mt-5 text-lg leading-[1.85] text-foreground/80">
                Her approach gently blends ancient wisdom with modern science to support both men and women on their
                journey to improved fertility, inner harmony, and vibrant health. With love and clarity, she guides each
                soul toward a life of wholeness, hope, and new beginnings.
              </p>
              <p className="mt-8 font-display text-2xl text-orange">A Holistic Path to Parenthood</p>
            </Reveal>

            <Reveal>
              <div className="luxury-card p-8 md:p-10">
                <h3 className="font-display text-2xl md:text-3xl mb-6 text-forest">Academic Qualifications</h3>
                <ul className="grid sm:grid-cols-2 gap-3 text-sm text-foreground/80">
                  {[
                    "YIC — Vyasa Bangalore",
                    "NDDY",
                    "MA in Yoga",
                    "Pre & Post Natal Care — USA Alliance",
                    "Garbha Sanskar",
                    "Female Health",
                    "Health Coach",
                    "Nutri Genomics, Germany",
                    "Ayurveda & Modern Nutrition",
                    "CPT-K11",
                  ].map((q) => (
                    <li key={q} className="flex items-start gap-2">
                      <Sparkles className="w-4 h-4 text-sage mt-1 shrink-0" /> {q}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal>
              <div className="luxury-card p-8 md:p-10">
                <h3 className="font-display text-2xl md:text-3xl mb-3 text-forest">Clientele</h3>
                <p className="text-foreground/80 leading-[1.85]">
                  Sucheta has worked with clients from all walks of life. Till now she has helped{" "}
                  <span className="text-orange font-semibold text-2xl">more than 1000 clients</span> to reverse their
                  diseases and manage their health challenges holistically.
                </p>
              </div>
            </Reveal>

            <Reveal>
              <div className="pt-6">
                <h3 className="font-display text-3xl md:text-5xl text-forest leading-tight">
                  My Story: From Darkness to Light
                </h3>
                <p className="mt-3 italic text-muted-foreground">A Journey of Natural Healing</p>
              </div>
            </Reveal>

            {[
              "Born into a humble family, I grew up deeply inspired by my mother. From her, I inherited the value of continuous learning and the belief in giving your best—not because a self-help book said so, but because it was simply the right thing to do.",
              "In 2002, life took a new turn when I got married. By 2010, I was a mother of three beautiful children, immersed in the rhythm of family life. But in the midst of taking care of everyone else, I forgot the most important person—Myself.",
              "I ignored my health, brushed off the signals my body was giving me. Like many women, I thought sacrificing myself was love. But slowly, the sacrifice became a burden. My health began to crumble.",
              "I found myself trapped in a storm of physical and emotional pain—anxiety, anger, suicidal thoughts, mood swings, constant irritation. My skin lost its glow, hair thinned, weight piled on.",
              "Diagnosed with thyroid, peripheral neuropathy, hyperhidrosis, gut issues, fatty liver, adenomyosis, cysts, bulky uterus, fibroids, and endometrial hyperplasia—conditions that screamed for attention.",
              "I tried everything—All the Pathy. But nothing gave me lasting relief. I was tired. Broken. Disheartened.",
              "But one day, something in me lit up. A Mashaal—a flame. I made a decision: I will take charge. I will heal. I will rise. Naturally. Without medicines.",
            ].map((p, i) => (
              <Reveal key={i} delay={i * 0.04}>
                <p className="text-lg leading-[1.9] text-foreground/85">{p}</p>
              </Reveal>
            ))}

            <Reveal>
              <div className="pt-6 space-y-4">
                <p className="font-display text-2xl md:text-3xl text-forest leading-snug">
                  That fire in me led to the birth of a new purpose:
                </p>
                <p className="text-lg text-foreground/85">To help others live a Medicine-Free Life.</p>
                <p className="text-lg text-foreground/85">To guide women like me who are silently suffering.</p>
                <p className="italic text-foreground/75 text-lg">
                  To remind them—<span className="text-orange font-semibold">Sabse Pehle Nirogi Kaya</span>. Because when
                  your health is right, everything else falls into place.
                </p>
                <p className="text-base text-muted-foreground pt-4 leading-relaxed">
                  Today, I continue to learn, to grow, and to serve—because <em>Healing is a Journey, not a Destination</em>.
                  And this journey has just begun.
                </p>
              </div>
            </Reveal>

            <Reveal>
              <div className="pt-8 pb-6">
                <Link to="/consult" onClick={onClose} className="btn-primary">
                  Begin Your Journey <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </Reveal>
          </div>

          <aside className="w-full lg:w-2/5 order-1 lg:order-2">
            <div className="lg:sticky lg:top-28">
              <img
                src={founderPortrait}
                alt="Sucheta Goyal portrait"
                className="w-full rounded-[24px] shadow-soft object-cover aspect-[3/4]"
              />
              <div className="mt-6 text-center">
                <p className="font-display text-2xl text-forest">Sucheta Goyal</p>
                <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground mt-2">
                  Holistic Fertility & Wellness Coach
                </p>
                <div className="h-px w-24 bg-sage/30 mx-auto mt-4" />
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}

function ConsultHero() {
  return (
    <section className="relative section-major overflow-hidden">
      {/* Background image — fully visible */}
      <img
        src={consultImg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover object-center"
      />
      {/* Warm light overlay — 25% max so image stays prominent */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#F8F6F1]/88 via-[#F8F6F1]/65 to-[#F8F6F1]/25" />
      <div className="absolute inset-0 bg-[#4F6F52]/8" />

      <div className="relative container-luxury max-w-5xl">
        <Reveal>
          <span className="section-eyebrow">Begin Your Journey</span>
          <h2 className="font-display text-4xl md:text-6xl max-w-3xl mt-4 leading-[1.06] text-forest">
            Fertility is a journey —{" "}
            <span className="text-orange">let's walk it together, naturally.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="mt-8 text-lg text-foreground/75 max-w-2xl leading-relaxed">
            I help both men and women overcome fertility challenges by restoring balance at the root—physically,
            emotionally, and hormonally. It's not just about pregnancy—it's about creating a fertile body, mind, and
            life.
          </p>
        </Reveal>
        <Reveal delay={0.3}>
          <Link to="/consult" className="btn-primary mt-10">
            Explore the Program <ArrowRight className="w-4 h-4" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

function ConsultProgram() {
  return (
    <section className="section-major bg-cream">
      <div className="container-luxury grid lg:grid-cols-2 gap-16 items-center">
        <Reveal>
          <img src={logo} alt="Sruchetna" className="w-full max-w-md mx-auto rounded-[24px] shadow-soft bg-white p-12" />
        </Reveal>
        <Reveal delay={0.15}>
          <div>
            <span className="section-eyebrow">Ancient Wisdom · Modern Science</span>
            <h2 className="font-display text-4xl md:text-5xl mt-4 mb-6 text-forest">Fertility, in Sacred Balance</h2>
            <p className="text-foreground/80 leading-relaxed text-lg">
              In ancient Indian wisdom, fertility is much more than the meeting of a sperm and egg. It is a sacred
              connection between energy (Shakti) and consciousness (Shiva), working in harmony with nature. Fertility
              depends on healthy reproductive energy (Shukra Dhatu), good nourishment (Rasa), and strong inner strength
              (Ojas).
            </p>
            <p className="text-foreground/70 leading-relaxed mt-4">
              For a new life to begin, four things are essential — right timing, a healthy womb, nourishment, and healthy
              sperm and egg. When all come together with grace, creating a baby becomes natural and full of awareness.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

const steps = [
  {
    n: "1",
    title: "Pre-Consultation",
    body: "Fill our short ‘Getting to Know You’ form. We craft a session schedule around your life and send a simple prep guide so you arrive ready.",
  },
  {
    n: "2",
    title: "Consultation",
    body: "Begin with a 45-minute session to build mind–body connection. Ongoing reviews, WhatsApp + email support, and meal plans for travel, festivals & weddings.",
  },
  {
    n: "3",
    title: "Post-Consultation",
    body: "We stay connected for life. A take-away guide summarises your learnings with practical tips for real-life situations.",
  },
];

function HowItWorks() {
  return (
    <section className="section-major bg-light-sage">
      <div className="container-luxury">
        <Reveal>
          <div className="text-center mb-16">
            <span className="section-eyebrow">The Process</span>
            <h2 className="font-display text-5xl md:text-6xl mt-4 text-forest">How It Works</h2>
          </div>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.15}>
              <div className="luxury-card p-10 h-full hover-lift">
                <div className="font-display text-7xl text-orange leading-none mb-4">{s.n}</div>
                <h3 className="font-display text-2xl mb-3 text-forest">{s.title}</h3>
                <p className="text-foreground/75 leading-relaxed">{s.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const services = [
  {
    img: fertilityImg,
    title: "Fertility Coaching",
    body: "Holistic guidance to awaken your body's natural ability to conceive.",
  },
  {
    img: ivfImg,
    title: "IVF Support",
    body: "Compassionate companionship and preparation through every IVF stage.",
  },
  {
    img: nutritionImg,
    title: "Nutrition Planning",
    body: "Bespoke nutrition plans that integrate Ayurveda and nutrigenomics to promote hormonal balance, fertility, thyroid health, and optimal metabolic function.",
  },
  {
    img: lifestyleImg,
    title: "Lifestyle Transformation",
    body: "Sustainable shifts in sleep, stress, and movement for lasting vitality.",
  },
  {
    img: yogaImg,
    title: "Yoga & Pranayama",
    body: "Pre & post-natal yoga, breathwork and meditation for inner harmony.",
  },
];

function ServicesGrid() {
  return (
    <section className="section-major bg-cream">
      <div className="container-luxury">
        <Reveal>
          <div className="text-center mb-16">
            <span className="section-eyebrow">Programs</span>
            <h2 className="font-display text-5xl md:text-6xl mt-4 text-forest">Pathways to Wellness</h2>
          </div>
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.08}>
              <div className="group h-full rounded-[24px] overflow-hidden bg-white border border-sage/10 shadow-soft hover-lift">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={s.img}
                    alt={s.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-7">
                  <h3 className="font-display text-2xl mb-2 text-forest">{s.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">{s.body}</p>
                  <Link to="/programs" className="inline-flex items-center gap-1 mt-5 text-sm text-sage group-hover:gap-2 transition-all">
                    Learn more <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialsTeaser() {
  const items = [
    { type: "video", src: "/videos/video-1.mp4" },
    { type: "image", src: t1 },
    { type: "video", src: "/videos/video-2.mp4" },
    { type: "image", src: t3 },
    { type: "video", src: "/videos/video-3.mp4" },
    { type: "image", src: t4 },
    { type: "image", src: t2 },
    { type: "video", src: "/videos/video-5.mp4" },
  ];
  return (
    <section className="section-major bg-light-sage overflow-hidden">
      <Reveal>
        <div className="text-center mb-16 px-6">
          <span className="section-eyebrow">Success Stories</span>
          <h2 className="font-display text-5xl md:text-6xl mt-4 text-forest">Whispers of Transformation</h2>
        </div>
      </Reveal>
      <div className="relative">
        <div
          className="flex gap-6 animate-[scroll_40s_linear_infinite] hover:[animation-play-state:paused]"
          style={{ width: "max-content" }}
        >
          {[...items, ...items].map((it, i) => (
            <div
              key={i}
              className="w-[280px] sm:w-[340px] h-[460px] rounded-[24px] overflow-hidden shadow-soft shrink-0 bg-white border border-sage/10"
            >
              {it.type === "image" ? (
                <img src={it.src} alt="testimonial" loading="lazy" decoding="async" className="w-full h-full object-cover" />
              ) : (
                <video src={it.src} autoPlay muted loop playsInline preload="metadata" className="w-full h-full object-cover" />
              )}
            </div>
          ))}
        </div>
      </div>
      <style>{`@keyframes scroll { from { transform: translateX(0); } to { transform: translateX(-50%); } }`}</style>
      <div className="text-center mt-12">
        <Link to="/testimonials" className="btn-secondary">
          See all stories <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="section-internal bg-cream">
      <div className="container-luxury max-w-5xl">
        <Reveal>
          <div className="rounded-[32px] p-12 md:p-20 text-center border border-sage/15 shadow-soft bg-gradient-to-br from-light-sage via-white to-cream">
            <span className="section-eyebrow">Start Today</span>
            <h2 className="font-display text-4xl md:text-6xl mt-4 text-forest">Begin your journey today</h2>
            <p className="mt-6 text-lg text-foreground/70 max-w-2xl mx-auto leading-relaxed">
              A 45-minute consultation could be the first step toward a fertile body, mind, and life.
            </p>
            <Link to="/consult" className="btn-primary mt-10">
              Book Consultation <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function AssessmentSection() {
  const features = [
    {
      icon: Heart,
      title: "Hormonal Health Analysis",
      body: "PCOS, thyroid, fatigue, acne, weight gain, irregular cycles, hormonal imbalance patterns.",
    },
    {
      icon: Flower2,
      title: "Fertility Assessment",
      body: "Conception challenges, cycle health, egg quality concerns, fertility readiness.",
    },
    {
      icon: Sun,
      title: "Lifestyle & Stress Review",
      body: "Sleep, stress levels, nutrition, exercise, emotional health.",
    },
    {
      icon: Sparkles,
      title: "Personalized Guidance",
      body: "Tailored recommendations based on complete health profile.",
    },
  ];
  const flow = [
    { n: "01", title: "Complete Health Assessment" },
    { n: "02", title: "Share Symptoms & History" },
    { n: "03", title: "Get Personalized Guidance" },
  ];
  return (
    <section className="section-major bg-cream">
      <div className="container-luxury">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="section-eyebrow">Fertility & Hormonal Health Assessment</span>
            <h2 className="font-display text-4xl md:text-6xl mt-4 leading-[1.1] text-forest">
              Discover What's Really Affecting Your <span className="text-orange">Fertility & Hormonal Health</span>
            </h2>
            <p className="mt-6 text-lg text-foreground/80 leading-relaxed">
              Understand your body better through a detailed fertility and hormonal health assessment covering symptoms,
              lifestyle, medical history, and wellness goals.
            </p>
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={i * 0.08}>
              <div className="luxury-card p-7 h-full hover-lift">
                <div className="w-12 h-12 rounded-[16px] bg-sage flex items-center justify-center mb-5">
                  <f.icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-display text-xl mb-2 text-forest">{f.title}</h3>
                <p className="text-sm text-foreground/75 leading-relaxed">{f.body}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="grid md:grid-cols-3 gap-6 mb-16 relative">
            {flow.map((s, i) => (
              <div key={s.n} className="relative">
                <div className="luxury-card p-8 text-center">
                  <div className="font-display text-5xl text-orange mb-3">{s.n}</div>
                  <div className="text-xs uppercase tracking-[0.25em] text-sage mb-2">Step {i + 1}</div>
                  <h4 className="font-display text-xl text-forest">{s.title}</h4>
                </div>
                {i < flow.length - 1 && (
                  <ArrowRight className="hidden md:block absolute top-1/2 -right-5 -translate-y-1/2 w-6 h-6 text-sage" />
                )}
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal>
          <div className="luxury-card p-12 md:p-16 text-center bg-light-sage border-sage/10">
            <h3 className="font-display text-3xl md:text-5xl text-forest leading-tight">
              Ready To Understand The Root Cause Of Your Symptoms?
            </h3>
            <p className="mt-6 text-base md:text-lg text-foreground/80 max-w-2xl mx-auto leading-relaxed">
              Take our detailed Fertility & Hormonal Health Assessment and receive personalized insights based on your
              body, lifestyle, and fertility goals.
            </p>
            <Link to="/fertility-assessment" className="btn-primary mt-10 group">
              Start Free Assessment <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
