import { Phone } from "lucide-react";
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
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-b border-border shadow-sm">
      <div className="container mx-auto flex items-center justify-between py-3 px-4">
        <a href="#hero" className="flex items-center gap-2 shrink-0">
          <img src={logo} alt="Moving4U Removals" className="h-12 w-auto" />
        </a>

        <div className="flex items-center gap-2 sm:gap-4 md:gap-6 lg:gap-8">
          {navLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="font-heading text-[10px] sm:text-xs md:text-sm font-medium text-foreground/80 hover:text-primary transition-colors whitespace-nowrap"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2 md:gap-4 shrink-0">
          <a
            href="tel:0403916194"
            className="hidden sm:flex items-center gap-2 font-heading font-semibold text-primary text-xs md:text-sm"
          >
            <Phone className="w-4 h-4" />
            0403 916 194
          </a>
          <a
            href="#quote"
            className="bg-primary text-primary-foreground font-heading font-semibold text-[10px] sm:text-xs md:text-sm px-3 md:px-5 py-2 md:py-2.5 rounded-lg hover:bg-orange-dark transition-colors shadow-md whitespace-nowrap"
          >
            Free Quote
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
