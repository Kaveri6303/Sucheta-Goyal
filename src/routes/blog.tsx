import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, X, Clock } from "lucide-react";
import { useState } from "react";
import { Reveal } from "@/components/Reveal";
import fertilityImg from "@/assets/programs/fertility-coaching.jpeg";
import ivfImg from "@/assets/programs/ivf-support.jpeg";
import nutritionImg from "@/assets/programs/nutrition.jpeg";
import lifestyleImg from "@/assets/programs/Transformation.jpeg";
import yogaImg from "@/assets/programs/yoga.jpeg";
import consultImg from "@/assets/consult.jpg";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog — Sucheta Goyal" },
      { name: "description", content: "Articles on fertility, holistic healing, ayurveda, nutrition, IVF support and wellness." },
      { property: "og:title", content: "Blog — Sucheta Goyal" },
      { property: "og:description", content: "Insights for your fertility and wellness journey." },
      { property: "og:url", content: "/blog" },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
  component: BlogPage,
});

type Post = {
  slug: string; title: string; excerpt: string; tag: string;
  image: string; readTime: string; content: string[];
};

const posts: Post[] = [
  {
    slug: "cycle-syncing-101", title: "Cycle-Syncing 101: Your Body's Sacred Rhythm",
    excerpt: "How aligning with your hormonal phases can transform fertility and energy.",
    tag: "Fertility", image: fertilityImg, readTime: "6 min read",
    content: [
      "Your menstrual cycle is far more than a monthly inconvenience — it is a finely tuned hormonal symphony designed to nourish life. When you learn to live in rhythm with your four phases (menstrual, follicular, ovulatory, luteal), you unlock a kind of energy, clarity, and fertility that the modern world rarely teaches.",
      "In the follicular phase, oestrogen rises and so does your creativity. This is the time for new beginnings, fresh ideas, and gentle but progressive movement. Honour this window with leafy greens, sprouts, and fermented foods to support oestrogen metabolism.",
      "Around ovulation, your body is at its most magnetic — physically and emotionally. Communication flows, libido peaks, and conception is most likely. Prioritise zinc, selenium, and antioxidant-rich foods such as berries, pumpkin seeds, and Brazil nuts.",
      "The luteal phase asks for inward care. Progesterone needs warmth, rest, and steady blood sugar. Add magnesium-rich foods, root vegetables, and slow yoga. Finally, the menstrual phase is a sacred reset — not a problem to push through. Rest is medicine.",
      "When you stop fighting your cycle and start dancing with it, fertility becomes a natural expression of a body that finally feels safe.",
    ],
  },
  {
    slug: "ivf-prep-naturally", title: "Preparing for IVF, Naturally",
    excerpt: "Nutrition, mindset and yoga practices that complement your IVF protocol.",
    tag: "IVF", image: ivfImg, readTime: "7 min read",
    content: [
      "IVF is a profound act of hope. Yet the success of any protocol rests heavily on the soil in which that tiny embryo is being asked to grow — your body, your mind, your nervous system.",
      "Begin your preparation at least 90 days before stimulation. Eggs take roughly three months to mature, and every meal, every thought, every night of sleep becomes part of their making. Anti-inflammatory foods, omega-3s, CoQ10-rich nutrition, and adequate protein form the foundation.",
      "Mindset matters as much as medicine. Daily breathwork, restorative yoga, and gentle journaling lower cortisol — which directly improves implantation rates. Avoid the trap of constant research; choose one trusted guide and follow the path.",
      "Acupuncture, fertility massage, and warm castor oil packs improve uterine blood flow. Sleep before 10:30 pm. Keep screens away from the bedroom. Drink warm water, never iced.",
      "Above all, surround yourself with people who hold the vision of your motherhood with you. IVF is not just a procedure — it is a passage. Walk it with grace.",
    ],
  },
  {
    slug: "womens-hormonal-balance", title: "The Quiet Power of Women's Hormonal Balance",
    excerpt: "Why balanced hormones are the foundation of beauty, mood, and fertility.",
    tag: "Women's Health", image: yogaImg, readTime: "5 min read",
    content: [
      "Hormones are the invisible orchestra behind every woman's vitality. When they sing in harmony, skin glows, moods soften, sleep deepens, and conception becomes effortless. When they fall out of tune, every system whispers the imbalance.",
      "The modern woman lives in a world that quietly disrupts her hormones — endocrine disruptors in plastics, chronic stress, blue light at night, and ultra-processed food. The good news: the body is wildly forgiving when given the right inputs.",
      "Start with the basics. Eat protein at breakfast within an hour of waking. Walk after meals. Replace plastic with glass. Sleep in pitch darkness. Switch to clean skincare. These small shifts return enormous dividends.",
      "Track your cycle. Know your luteal length. Listen to PMS as data, not drama. Your body is always speaking — fluent womanhood is simply the art of listening.",
    ],
  },
  {
    slug: "fertility-nutrition", title: "The Fertility Plate: Eating for Two Before There Are Two",
    excerpt: "Foods, rituals and Ayurvedic wisdom that prepare your body for life.",
    tag: "Nutrition", image: nutritionImg, readTime: "6 min read",
    content: [
      "Long before conception, your body is being asked to build a home. The bricks of that home are the nutrients you eat today. Fertility nutrition is not about restriction — it is about reverence.",
      "Eat warm, freshly cooked meals. Cold and raw foods extinguish digestive fire, which Ayurveda calls Agni — and weak Agni means weak Ojas, the subtle essence required for conception.",
      "Soak almonds overnight and eat them with two dates each morning. Add ghee to your meals. Choose seasonal, local, and organic produce. Sip CCF tea (cumin, coriander, fennel) between meals.",
      "Avoid the modern fertility-killers: refined sugar, alcohol, excess caffeine, and inflammatory seed oils. Replace them with cold-pressed sesame, ghee, coconut, and mustard oil — the oils your ancestors trusted.",
      "Food is the first medicine. Cook it with love, eat it in stillness, and watch your body remember its design.",
    ],
  },
  {
    slug: "pregnancy-preparation", title: "Preparing the Womb: A 12-Month Pregnancy Roadmap",
    excerpt: "The sacred year before motherhood — and what to do in it.",
    tag: "Pregnancy", image: consultImg, readTime: "8 min read",
    content: [
      "The healthiest pregnancies begin a year before the positive test. The womb, like a garden, needs preparation — clearing, nourishing, watering, and then planting.",
      "Months 1–3: detoxify gently. Eliminate alcohol, smoking, plastics, and processed food. Replace personal care products with clean alternatives. Heal the gut with bone broths, fermented foods, and triphala.",
      "Months 4–6: nourish deeply. Build iron, B12, folate, choline, omega-3s, and vitamin D. Sleep eight hours. Walk daily in nature. Add daily abhyanga (warm oil massage).",
      "Months 7–9: align emotionally. Process old grief, fears, and family patterns with the help of a therapist or coach. The womb listens to your story.",
      "Months 10–12: open to conception with surrender, not pressure. Track ovulation gently. Make love, not babies. The soul of your child is choosing you, too.",
    ],
  },
  {
    slug: "lifestyle-rituals", title: "Seven Daily Rituals of a Truly Fertile Life",
    excerpt: "Tiny, repeatable habits that build a body, mind, and life ready for life.",
    tag: "Lifestyle", image: lifestyleImg, readTime: "5 min read",
    content: [
      "Fertility is not a destination — it is a way of living. Below are seven daily rituals my clients adopt to soften their nervous system and remind their body it is safe to create.",
      "1. Wake before sunrise. Sip warm water with a squeeze of lemon. 2. Move your body for twenty minutes — yoga, walking, dancing. 3. Eat a protein-rich breakfast in stillness.",
      "4. Step outside for ten minutes of morning sunlight on bare skin. 5. Practise four rounds of box breathing before lunch. 6. Eat dinner before sunset whenever possible.",
      "7. End the day with three lines of gratitude in a journal beside your bed. Then sleep — early, deeply, in darkness.",
      "None of these rituals are dramatic. That is precisely why they work. Fertility flowers in the soil of consistency.",
    ],
  },
];

function BlogPage() {
  const [active, setActive] = useState<Post | null>(null);
  return (
    <>
      <section className="section-major bg-light-sage overflow-hidden">
        <div className="container-luxury max-w-5xl text-center">
          <Reveal>
            <span className="section-eyebrow">Journal</span>
            <h1 className="font-display text-5xl md:text-7xl mt-4 text-forest">Notes on Fertility & Healing</h1>
            <p className="mt-6 max-w-2xl mx-auto text-muted-foreground">
              Compassionate writing on fertility, IVF, women's health, nutrition and the rituals of a fertile life.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section-major bg-cream">
        <div className="container-luxury grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.06}>
              <button
                onClick={() => setActive(p)}
                className="group h-full text-left rounded-[24px] overflow-hidden bg-white border border-sage/10 shadow-soft hover-lift flex flex-col"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img src={p.image} alt={p.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <span className="absolute top-4 left-4 text-[10px] uppercase tracking-[0.25em] text-forest bg-white/90 px-3 py-1 rounded-[24px] border border-sage/15">
                    {p.tag}
                  </span>
                </div>
                <div className="p-7 flex flex-col flex-1">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                    <Clock className="w-3.5 h-3.5" /> {p.readTime}
                  </div>
                  <h2 className="font-display text-2xl leading-tight mb-3 text-forest group-hover:text-orange transition">
                    {p.title}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed flex-1">{p.excerpt}</p>
                  <span className="inline-flex items-center gap-1 mt-6 text-sm text-sage group-hover:gap-2 transition-all">
                    Read more <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </section>

      {active && (
        <div className="fixed inset-0 z-[60] flex items-start justify-center overflow-y-auto bg-forest/40 p-4 md:p-10" onClick={() => setActive(null)}>
          <article
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-3xl bg-white rounded-[24px] shadow-soft overflow-hidden my-8"
          >
            <button
              onClick={() => setActive(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-[24px] bg-white border border-sage/20 flex items-center justify-center shadow-soft hover:bg-sage hover:text-white transition"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="aspect-[16/9] overflow-hidden">
              <img src={active.image} alt={active.title} className="w-full h-full object-cover" />
            </div>
            <div className="p-8 md:p-12">
              <span className="section-eyebrow">{active.tag}</span>
              <h2 className="font-display text-3xl md:text-5xl mt-3 leading-tight text-forest">{active.title}</h2>
              <div className="flex items-center gap-2 text-xs text-muted-foreground mt-4">
                <Clock className="w-3.5 h-3.5" /> {active.readTime}
              </div>
              <div className="mt-8 space-y-5 text-foreground/85 leading-relaxed">
                {active.content.map((para, idx) => (
                  <p key={idx}>{para}</p>
                ))}
              </div>
            </div>
          </article>
        </div>
      )}
    </>
  );
}