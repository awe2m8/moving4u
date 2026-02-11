import { motion } from "framer-motion";
import { Heart, Users, Award } from "lucide-react";

const values = [
  { icon: Heart, title: "Genuine Care", desc: "We wrap, pack, lift, and transport with the same care we'd give our own possessions." },
  { icon: Users, title: "Trusted Team", desc: "Handpicked for reliability, attention to detail, and a conscientious approach." },
  { icon: Award, title: "20+ Years", desc: "Two decades of perfecting stress-free moves across Sydney and beyond." },
];

const AboutSection = () => (
  <section id="about" className="py-20 lg:py-28 bg-card">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto text-center mb-16"
      >
        <span className="font-heading text-sm font-semibold tracking-widest uppercase text-primary mb-3 block">
          About Us
        </span>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
          Meet Moving<span className="text-primary">4U</span> Removals
        </h2>
        <p className="text-muted-foreground text-lg leading-relaxed">
          For over 20 years, Moving4U has been helping families and individuals move with confidence
          and care. What sets us apart isn't just our experience — it's our genuine commitment to
          treating every item, every box, and every home as if it were our own.
        </p>
        <p className="text-muted-foreground text-lg leading-relaxed mt-4">
          Today, we're blending that traditional care with modern automation and AI tools to make your
          move even smoother — from instant online quotes to real-time tracking and automated updates.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8">
        {values.map((v, i) => (
          <motion.div
            key={v.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.5 }}
            className="bg-background rounded-xl p-8 text-center shadow-sm border border-border hover:shadow-md transition-shadow"
          >
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5">
              <v.icon className="w-7 h-7 text-primary" />
            </div>
            <h3 className="font-heading font-bold text-xl text-foreground mb-3">{v.title}</h3>
            <p className="text-muted-foreground leading-relaxed">{v.desc}</p>
          </motion.div>
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="text-center mt-12 font-heading text-xl font-semibold text-foreground"
      >
        Why choose us? <span className="text-primary">Because your move deserves professionals who truly care.</span>
      </motion.p>
    </div>
  </section>
);

export default AboutSection;
