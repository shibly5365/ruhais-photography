import { Link } from "react-router-dom";
import { Instagram, Facebook, Twitter, Mail, Phone, MapPin } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border/50">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <h3 className="font-display text-2xl font-bold mb-4">
              <span className="gold-gradient-text">Ruhh</span>{" "}
              <span className="font-light">Studio</span>
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Capturing life's most beautiful moments with artistry, passion, and a keen eye for detail.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Quick Links</h4>
            <div className="flex flex-col gap-3">
              {["Portfolio", "Services", "About", "Testimonials", "Contact"].map((item) => (
                <Link
                  key={item}
                  to={`/${item.toLowerCase()}`}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Contact</h4>
            <div className="flex flex-col gap-3 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <Phone size={14} className="text-primary" /> +91 7736256589
              </span>
              <span className="flex items-center gap-2">
                <Mail size={14} className="text-primary" /> ruhaismuhammed@gnail.com
              </span>
              <span className="flex items-center gap-2">
                <MapPin size={14} className="text-primary" /> Feroke,
                  Kozhikode, Kerala, India
              </span>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              {[
                { icon: Instagram, href: "https://www.instagram.com/ruhh.photography?stkn=bnp5NmY3MWUxc3Bx&utm_source=qr" },
                { icon: FaWhatsapp, href: "https://wa.me/917736256589" },
              ].map(({ icon: Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border/50 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Ruhh Studio. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
