import { motion } from "framer-motion";
import { Zap, MapPin, Bell, RefreshCw } from "lucide-react";

const features = [
  { icon: Zap, title: "Instant AI Quotes", desc: "Get an accurate quote in seconds, not days." },
  { icon: MapPin, title: "Real-Time Tracking", desc: "Know exactly where your belongings are at all times." },
  { icon: Bell, title: "Automated Updates", desc: "SMS and email notifications at every stage of your move." },
  { icon: RefreshCw, title: "Smart Follow-Up", desc: "We help past customers with future moves or referrals through intelligent systems." },
];

const WhyChooseSection = () => (
  <section id="why-us" className="py-20 lg:py-28 bg-card">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <span className="font-heading text-sm font-semibold tracking-widest uppercase text-primary mb-3 block">
          Why Us
        </span>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
          Traditional Care. Modern Efficiency.
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          For 20 years we've perfected the art of careful moving. Now we're enhancing it with intelligent automation.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12, duration: 0.5 }}
            className="flex gap-4 bg-background rounded-xl p-6 border border-border"
          >
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
              <f.icon className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="font-heading font-bold text-foreground mb-1">{f.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="text-center bg-primary/5 rounded-xl p-8 max-w-2xl mx-auto border border-primary/20"
      >
        <p className="text-foreground font-heading text-lg font-medium leading-relaxed">
          Your belongings are <span className="text-primary font-bold">safe with us</span>.
          Your time is <span className="text-primary font-bold">respected</span>.
        </p>
      </motion.div>
    </div>
  </section>
);

export default WhyChooseSection;
