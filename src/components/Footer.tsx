import { Link } from "@tanstack/react-router";
import { Instagram, Mail, Phone, MapPin, Facebook } from "lucide-react";
import logo from "@/assets/logo.png";

export function Footer() {
  return (
    <footer className="relative mt-8 border-t border-sage/15 bg-forest text-white">
      <div className="container-luxury py-20 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3 mb-4">
            <img src={logo} alt="Sucheta logo" className="w-12 h-12 rounded-full ring-2 ring-white/20" />
            <div>
              <div className="font-display text-2xl text-white">Sucheta Goyal</div>
              <div className="text-xs uppercase tracking-[0.25em] text-white/60">Holistic Wellness</div>
            </div>
          </div>
          <p className="text-sm text-white/70 max-w-md leading-relaxed">
            A compassionate guide on your journey to fertility, healing, and holistic well-being — blending ancient
            wisdom with modern science.
          </p>
        </div>
        <div>
          <h4 className="font-display text-lg mb-4 text-white">Explore</h4>
          <ul className="space-y-2 text-sm text-white/70">
            <li>
              <Link to="/consult" className="hover:text-orange transition-colors">
                Consult
              </Link>
            </li>
            <li>
              <Link to="/programs" className="hover:text-orange transition-colors">
                Programs
              </Link>
            </li>
            <li>
              <Link to="/testimonials" className="hover:text-orange transition-colors">
                Testimonials
              </Link>
            </li>
            <li>
              <Link to="/blog" className="hover:text-orange transition-colors">
                Blog
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-orange transition-colors">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-display text-lg mb-4 text-white">Reach Out</h4>
          <ul className="space-y-2 text-sm text-white/70">
            <li className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-orange" /> Raipur, India
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-orange" />{" "}
              <a href="mailto:hello@suchetagoyal.com" className="hover:text-orange transition-colors">
                hello@suchetagoyal.com
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-orange" />{" "}
              <a href="tel:+919301742000" className="hover:text-orange transition-colors">
                +91 93017 42000
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Instagram className="w-4 h-4 text-orange" />{" "}
              <a
                href="https://www.instagram.com/coachsuchetagoyal?utm_source=qr&igsh=MWZ3MWZpaWhhOGJibg%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-orange transition-colors"
              >
                Instagram
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Facebook className="w-4 h-4 text-orange" />{" "}
              <a
                href="https://www.facebook.com/share/1Ekfd7syX7/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-orange transition-colors"
              >
                Facebook
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-6 text-center text-xs text-white/50">
        © {new Date().getFullYear()} Sucheta Goyal · Crafted with care
      </div>
    </footer>
  );
}
