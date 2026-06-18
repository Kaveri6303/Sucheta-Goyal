import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import fertilityImg from "@/assets/programs/fertility-coaching.jpeg";
import ivfImg from "@/assets/programs/ivf-support.jpeg";
import nutritionImg from "@/assets/programs/nutrition.jpeg";
import lifestyleImg from "@/assets/programs/Transformation.jpeg";
import yogaImg from "@/assets/programs/yoga.jpeg";

export const Route = createFileRoute("/programs")({
  head: () => ({
    meta: [
      { title: "Programs — Sucheta Goyal" },
      {
        name: "description",
        content: "Fertility coaching, IVF support, nutrition planning, lifestyle transformation, and yoga programs.",
      },
      { property: "og:title", content: "Programs — Sucheta Goyal" },
      { property: "og:description", content: "Personalised holistic programs to nurture fertility and wellness." },
      { property: "og:url", content: "/programs" },
    ],
    links: [{ rel: "canonical", href: "/programs" }],
  }),
  component: ProgramsPage,
});

const programs = [
  {
    img: fertilityImg,
    title: "Fertility Coaching",
    tag: "Holistic Conception",
    body: "Restore your body's natural rhythm through cycle-syncing, hormone balance, and emotional clearing — the foundation of conscious conception.",
  },
  {
    img: ivfImg,
    title: "IVF Support",
    tag: "Mind–Body Care",
    body: "Walk the IVF path with grace — preparation protocols, mind–body care, nutrition and emotional support before, during, and after.",
  },
  {
    img: nutritionImg,
    title: "Nutrition Planning",
    tag: "Ayurveda · Nutrigenomics",
    body: "Bespoke nutrition plans that integrate Ayurveda and nutrigenomics to promote hormonal balance, fertility, thyroid health, and optimal metabolic function.",
  },
  {
    img: lifestyleImg,
    title: "Lifestyle Transformation",
    tag: "Sustainable Shifts",
    body: "Restorative shifts in sleep, stress, environment, and movement that compound into lifelong vitality.",
  },
  {
    img: yogaImg,
    title: "Yoga & Pranayama",
    tag: "Breath · Stillness",
    body: "Pre & post-natal yoga, breathwork and meditation grounded in the Yogic tradition for inner stillness and reproductive health.",
  },
];

function ProgramsPage() {
  return (
    <>
      <section className="section-major bg-light-sage">
        <div className="container-luxury max-w-5xl text-center">
          <Reveal>
            <span className="section-eyebrow">Programs</span>
            <h1 className="font-display text-5xl md:text-7xl mt-4 text-forest">Pathways to Wholeness</h1>
            <p className="mt-6 text-lg text-foreground/80 max-w-2xl mx-auto">
              Each program is shaped around you — your body, your story, your dreams.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section-major bg-cream">
        <div className="container-luxury grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08}>
              <div className="group h-full rounded-[24px] overflow-hidden bg-white border border-sage/10 shadow-soft hover-lift">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={p.img}
                    alt={p.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-[24px] text-[10px] uppercase tracking-[0.25em] bg-white/90 border border-sage/15 text-forest">
                    {p.tag}
                  </span>
                </div>
                <div className="p-7">
                  <h3 className="font-display text-2xl mb-3 text-forest">{p.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">{p.body}</p>
                  <Link to="/consult" className="inline-flex items-center gap-1 mt-6 text-sm text-sage group-hover:gap-2 transition-all">
                    Enquire <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
