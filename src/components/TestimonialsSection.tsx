import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    quote: "These guys handled my grandmother's antique furniture like it was their own. So careful and professional!",
    name: "Sarah T.",
  },
  {
    quote: "Best move we've ever had. The online quote was spot-on and the team was fantastic.",
    name: "Michael R.",
  },
  {
    quote: "20 years in business shows — they know exactly what they're doing.",
    name: "Lisa P.",
  },
];

const TestimonialsSection = () => (
  <section id="testimonials" className="py-20 lg:py-28 bg-background">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <span className="font-heading text-sm font-semibold tracking-widest uppercase text-primary mb-3 block">
          Testimonials
        </span>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
          What Our Customers Say
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.5 }}
            className="bg-card rounded-xl p-8 border border-border relative"
          >
            <Quote className="w-8 h-8 text-primary/20 absolute top-6 right-6" />
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, j) => (
                <Star key={j} className="w-4 h-4 fill-primary text-primary" />
              ))}
            </div>
            <p className="text-foreground leading-relaxed mb-6 italic">"{t.quote}"</p>
            <p className="font-heading font-semibold text-foreground">— {t.name}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
