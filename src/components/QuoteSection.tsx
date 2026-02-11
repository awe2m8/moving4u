import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Send } from "lucide-react";
import logo from "@/assets/move4u-logo.png";

const QuoteSection = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="quote" className="py-20 lg:py-28 bg-gray-dark">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="font-heading text-sm font-semibold tracking-widest uppercase text-primary mb-3 block">
            Get Started
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-cream mb-4">
            Ready to Move? Let's Make It Easy.
          </h2>
          <p className="text-cream/70 text-lg max-w-xl mx-auto">
            Enter a few details and we'll get back to you with an estimate. Or call us directly on{" "}
            <a href="tel:0403916194" className="text-primary font-semibold hover:underline">
              0403 916 194
            </a>
            .
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10 max-w-5xl mx-auto items-start">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            {submitted ? (
              <div className="bg-card rounded-xl p-10 text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Send className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-heading font-bold text-xl text-foreground mb-2">Thank You!</h3>
                <p className="text-muted-foreground">We'll get back to you shortly with your free quote.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-card rounded-xl p-8 shadow-lg space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5 font-heading">Full Name</label>
                    <input
                      required
                      type="text"
                      className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5 font-heading">Phone</label>
                    <input
                      required
                      type="tel"
                      className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                      placeholder="Your phone number"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5 font-heading">Email</label>
                  <input
                    required
                    type="email"
                    className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                    placeholder="your@email.com"
                  />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5 font-heading">Moving From</label>
                    <input
                      required
                      type="text"
                      className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                      placeholder="Suburb / Postcode"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5 font-heading">Moving To</label>
                    <input
                      required
                      type="text"
                      className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                      placeholder="Suburb / Postcode"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5 font-heading">Message</label>
                  <textarea
                    rows={3}
                    className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
                    placeholder="Tell us about your move..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground font-heading font-bold text-base py-4 rounded-lg hover:bg-orange-dark transition-colors shadow-lg"
                >
                  Get Your Free Quote
                </button>
              </form>
            )}
          </motion.div>

          {/* Business card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="lg:col-span-2 flex flex-col items-center gap-6"
          >
            <div className="bg-card rounded-xl p-6 shadow-lg border border-border w-full">
              <img src={logo} alt="Moving4U Business Card" className="w-full rounded-lg mb-4" />
              <div className="text-center">
                <p className="font-heading font-bold text-foreground text-lg">Moving4U Removals</p>
                <p className="text-muted-foreground text-sm mt-1">Treating your belongings with care for 20+ years</p>
              </div>
            </div>
            <a
              href="tel:0403916194"
              className="flex items-center gap-3 bg-primary text-primary-foreground font-heading font-bold text-lg px-8 py-4 rounded-lg hover:bg-orange-dark transition-colors shadow-lg w-full justify-center"
            >
              <Phone className="w-5 h-5" />
              0403 916 194
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default QuoteSection;
