import { Phone, FileText } from "lucide-react";
import { motion } from "framer-motion";
import heroImg from "@/assets/hero-moving.jpg";
import { CheckCircle2, Shield, Clock, Star } from "lucide-react";

const trustItems = [
  { icon: Clock, label: "20+ Years Experience" },
  { icon: Shield, label: "Fully Insured" },
  { icon: CheckCircle2, label: "Conscientious Care" },
  { icon: Star, label: "Free Quotes" },
];

const HeroSection = () => (
  <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
    {/* Background image */}
    <div className="absolute inset-0">
      <img src={heroImg} alt="" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-gray-dark/90 via-gray-dark/75 to-gray-dark/50" />
    </div>

    <div className="relative container mx-auto px-4 py-20 lg:py-32">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-2xl"
      >
        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold text-cream leading-tight mb-6">
          Moving <span className="text-gradient-orange">4U</span> –{" "}
          <span className="block">Careful Hands,</span>
          Modern Moves
        </h1>

        <p className="text-cream/80 text-lg md:text-xl leading-relaxed mb-8 max-w-xl font-body">
          With 20 years of experience, we treat your belongings as if they were our own.
          Stress-free household removals across Sydney and beyond — backed by smart technology
          for seamless service.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mb-12">
          <a
            href="#quote"
            className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-heading font-bold text-base px-8 py-4 rounded-lg hover:bg-orange-dark transition-all shadow-lg hover:shadow-xl"
          >
            <FileText className="w-5 h-5" />
            Get Your Free Quote Now
          </a>
          <a
            href="tel:0403916194"
            className="inline-flex items-center justify-center gap-2 border-2 border-cream/40 text-cream font-heading font-semibold text-base px-8 py-4 rounded-lg hover:bg-cream/10 transition-all"
          >
            <Phone className="w-5 h-5" />
            Call Us: 0403 916 194
          </a>
        </div>
      </motion.div>

      {/* Trust bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="flex flex-wrap gap-4 md:gap-6"
      >
        {trustItems.map((item) => (
          <div
            key={item.label}
            className="flex items-center gap-2 bg-cream/10 backdrop-blur-sm rounded-full px-4 py-2 border border-cream/20"
          >
            <item.icon className="w-4 h-4 text-primary" />
            <span className="text-cream text-sm font-medium font-heading">{item.label}</span>
          </div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
