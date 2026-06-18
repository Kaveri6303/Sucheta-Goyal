import { Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const navItems = [
  { label: "Home", to: "/" },
  { label: "Programs", to: "/programs" },
  { label: "Blog", to: "/blog" },
  { label: "Testimonials", to: "/testimonials" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 shadow-soft border-b border-sage/10" : "bg-cream/80"
      }`}
    >
      <nav className="container-luxury py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <img
            src={logo}
            alt="Sucheta logo"
            className="w-11 h-11 rounded-full ring-2 ring-sage/20 group-hover:ring-sage/40 transition"
          />
          <div className="leading-tight">
            <div className="font-display text-xl font-semibold tracking-wide text-forest">Sucheta Goyal</div>
            <div className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
              Holistic Fertility & Wellness
            </div>
          </div>
        </Link>

        <div className="hidden lg:flex items-center gap-1">
          {navItems.map((it) => (
            <Link
              key={it.label}
              to={it.to}
              className="relative px-4 py-2 text-[13px] uppercase tracking-[0.22em] text-foreground/75 hover:text-sage transition-colors after:absolute after:left-4 after:right-4 after:-bottom-0.5 after:h-px after:bg-sage after:origin-left after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
            >
              {it.label}
            </Link>
          ))}
          <Link to="/contact" className="btn-primary ml-4 text-[13px] uppercase tracking-[0.2em]">
            Contact
          </Link>
        </div>

        <button className="lg:hidden p-2 text-forest" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {open && (
        <div className="lg:hidden bg-white border-t border-sage/10 px-6 py-6 space-y-2 shadow-soft">
          {navItems.map((it) => (
            <Link
              key={it.label}
              to={it.to}
              onClick={() => setOpen(false)}
              className="block py-2 uppercase tracking-wider text-sm text-forest"
            >
              {it.label}
            </Link>
          ))}
          <Link to="/contact" onClick={() => setOpen(false)} className="btn-primary mt-3 text-sm uppercase tracking-wider">
            Contact
          </Link>
        </div>
      )}
    </header>
  );
}
