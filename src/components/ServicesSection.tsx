import { motion } from "framer-motion";
import {
  Truck,
  Package,
  Wrench,
  Warehouse,
  Building2,
  BrainCircuit,
  Route,
  CalendarClock,
} from "lucide-react";

const services = [
  { icon: Truck, title: "Local & Interstate Moves", desc: "Sydney metro to anywhere in NSW and beyond." },
  { icon: Package, title: "Careful Packing & Unpacking", desc: "Professional materials and techniques to protect your valuables." },
  { icon: Wrench, title: "Furniture Disassembly & Reassembly", desc: "Expert handling of all items, big or small." },
  { icon: Warehouse, title: "Storage Solutions", desc: "Secure, short or long-term storage options." },
  { icon: Building2, title: "Office & Commercial Removals", desc: "Minimal downtime for your business." },
];

const smartFeatures = [
  { icon: BrainCircuit, title: "AI Volume Estimates", desc: "Accurate volume estimates powered by intelligent automation." },
  { icon: Route, title: "Optimized Routing", desc: "Faster moves with smart route planning." },
  { icon: CalendarClock, title: "Automated Scheduling", desc: "So you always know what's happening and when." },
];

const ServicesSection = () => (
  <section id="services" className="py-20 lg:py-28 bg-background">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <span className="font-heading text-sm font-semibold tracking-widest uppercase text-primary mb-3 block">
          What We Do
        </span>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
          Our Removal Services
        </h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="bg-card rounded-xl p-6 border border-border hover:border-primary/30 transition-all group hover:shadow-md"
          >
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
              <s.icon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-heading font-bold text-lg text-foreground mb-2">{s.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Smart Features */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-gray-dark rounded-2xl p-8 md:p-12"
      >
        <h3 className="font-heading text-2xl font-bold text-cream text-center mb-2">
          Smart Moving Features
        </h3>
        <p className="text-cream/70 text-center mb-10 max-w-xl mx-auto">
          Our AI-powered system enhances your moving experience with intelligent automation.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {smartFeatures.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
              className="text-center"
            >
              <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <f.icon className="w-7 h-7 text-primary" />
              </div>
              <h4 className="font-heading font-semibold text-cream mb-2">{f.title}</h4>
              <p className="text-cream/60 text-sm">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default ServicesSection;
