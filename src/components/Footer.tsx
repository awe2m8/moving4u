import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => (
  <footer className="bg-foreground py-12">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-3 gap-10 mb-10">
        <div>
          <h3 className="font-heading font-bold text-xl text-background mb-4">
            Moving<span className="text-primary">4U</span> Removals
          </h3>
          <p className="text-background/60 text-sm leading-relaxed">
            Treating your belongings with the care they deserve for over 20 years.
          </p>
        </div>
        <div>
          <h4 className="font-heading font-semibold text-background mb-4">Contact</h4>
          <div className="space-y-3">
            <a href="tel:0403916194" className="flex items-center gap-2 text-background/70 hover:text-primary transition-colors text-sm">
              <Phone className="w-4 h-4" /> 0403 916 194
            </a>
            <a href="mailto:Lucas@move4u.com.au" className="flex items-center gap-2 text-background/70 hover:text-primary transition-colors text-sm">
              <Mail className="w-4 h-4" /> Lucas@move4u.com.au
            </a>
            <div className="flex items-center gap-2 text-background/70 text-sm">
              <MapPin className="w-4 h-4" /> Sydney & surrounding regions
            </div>
          </div>
        </div>
        <div>
          <h4 className="font-heading font-semibold text-background mb-4">Quick Links</h4>
          <div className="space-y-2">
            {["About", "Services", "Why Us", "Testimonials", "Free Quote"].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase().replace(" ", "-").replace("free-quote", "quote")}`}
                className="block text-background/70 hover:text-primary transition-colors text-sm"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-background/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-background/40 text-xs">
          © {new Date().getFullYear()} Moving4U Removals. All rights reserved.
        </p>
        <p className="text-primary font-heading font-semibold text-sm">
          Free Quotes Available
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
