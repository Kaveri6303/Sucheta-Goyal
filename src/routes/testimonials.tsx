import { createFileRoute } from "@tanstack/react-router";
import t1 from "@/assets/testimonial-1.jpg";
import t2 from "@/assets/testimonial-2.jpg";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    meta: [
      { title: "Testimonials — Sucheta Goyal" },
      {
        name: "description",
        content: "Real stories of healing, fertility, and transformation from clients across the world.",
      },
      { property: "og:title", content: "Testimonials — Sucheta Goyal" },
      { property: "og:description", content: "Whispers of transformation from 1000+ clients." },
      { property: "og:url", content: "/testimonials" },
    ],
    links: [{ rel: "canonical", href: "/testimonials" }],
  }),
  component: TestimonialsPage,
});

const media: Array<{ type: "image" | "video"; src: string }> = [
  { type: "video", src: "/videos/video-1.mp4" },
  { type: "image", src: t1 },
  { type: "video", src: "/videos/video-3.mp4" },
  { type: "image", src: t2 },
  { type: "video", src: "/videos/video-5.mp4" },
];

function TestimonialsPage() {
  return (
    <>
      <section className="section-major bg-light-sage overflow-hidden">
        <div className="container-luxury max-w-5xl text-center">
          <Reveal>
            <span className="section-eyebrow">Success Stories</span>
            <h1 className="font-display text-5xl md:text-7xl mt-4 text-forest">Whispers of Transformation</h1>
            <p className="mt-6 text-lg text-foreground/80 max-w-2xl mx-auto">
              Over a thousand journeys — each one a quiet miracle of returning to wholeness.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section-major bg-cream overflow-hidden">
        <div className="relative">
          <div
            className="flex gap-6 animate-[scroll_50s_linear_infinite] hover:[animation-play-state:paused]"
            style={{ width: "max-content" }}
          >
            {[...media, ...media].map((m, i) => (
              <div
                key={i}
                className="w-[320px] sm:w-[380px] h-[520px] rounded-[24px] overflow-hidden shadow-soft shrink-0 bg-white border border-sage/10"
              >
                {m.type === "image" ? (
                  <img src={m.src} alt="testimonial" loading="lazy" decoding="async" className="w-full h-full object-cover" />
                ) : (
                  <video src={m.src} autoPlay muted loop playsInline preload="metadata" className="w-full h-full object-cover" />
                )}
              </div>
            ))}
          </div>
        </div>
        <style>{`@keyframes scroll { from { transform: translateX(0); } to { transform: translateX(-50%); } }`}</style>
      </section>
    </>
  );
}
