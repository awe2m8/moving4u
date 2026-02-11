import { useState } from "react";
import { Phone, Menu, X } from "lucide-react";
import logo from "@/assets/move4u-logo.png";

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why-us" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#quote" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-b border-border shadow-sm">
      <div className="container mx-auto flex items-center justify-between py-3 px-4">
        <a href="#hero" className="flex items-center gap-2">
          <img src={logo} alt="Moving4U Removals" className="h-12 w-auto" />
        </a>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="font-heading text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-4">
          <a
            href="tel:0403916194"
            className="flex items-center gap-2 font-heading font-semibold text-primary"
          >
            <Phone className="w-4 h-4" />
            0403 916 194
          </a>
          <a
            href="#quote"
            className="bg-primary text-primary-foreground font-heading font-semibold text-sm px-5 py-2.5 rounded-lg hover:bg-orange-dark transition-colors shadow-md"
          >
            Free Quote
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-card border-t border-border animate-fade-in">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            {navLinks.map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={() => setOpen(false)}
                className="font-heading text-sm font-medium text-foreground/80 hover:text-primary transition-colors py-1"
              >
                {l.label}
              </a>
            ))}
            <a
              href="tel:0403916194"
              className="flex items-center gap-2 font-heading font-semibold text-primary"
            >
              <Phone className="w-4 h-4" />
              0403 916 194
            </a>
            <a
              href="#quote"
              onClick={() => setOpen(false)}
              className="bg-primary text-primary-foreground font-heading font-semibold text-sm px-5 py-2.5 rounded-lg text-center"
            >
              Free Quote
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
