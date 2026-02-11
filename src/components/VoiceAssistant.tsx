import { useState, useEffect } from "react";
import { Mic, Phone, MessageSquare, X } from "lucide-react";

const VoiceAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [bounceOffset, setBounceOffset] = useState(0);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const y = window.scrollY;
          setBounceOffset(Math.sin(y * 0.02) * 8);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Floating Mic Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 group"
        style={{ transform: `translateY(${bounceOffset}px)` }}
        aria-label="Open voice assistant"
      >
        {/* Pulse rings */}
        <span className="absolute inset-0 rounded-full bg-primary/20 animate-ping" />
        <span className="absolute -inset-2 rounded-full bg-primary/10 animate-pulse" />
        {/* Button */}
        <span className="relative flex items-center justify-center w-14 h-14 rounded-full bg-primary text-primary-foreground shadow-lg transition-transform group-hover:scale-110">
          {isOpen ? <X className="w-6 h-6" /> : <Mic className="w-6 h-6" />}
        </span>
      </button>

      {/* Dialog */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-80 rounded-2xl shadow-2xl border border-border bg-card animate-scale-in overflow-hidden">
          {/* Header */}
          <div className="bg-primary p-5">
            <h3 className="text-primary-foreground font-heading text-lg font-bold">
              Hi, I'm Lucas! 🚚
            </h3>
            <p className="text-primary-foreground/90 text-sm mt-1">
              I'm Moving4U's AI Assistant. How can I help you today?
            </p>
          </div>

          {/* Options */}
          <div className="p-4 flex flex-col gap-3">
            <a
              href="#quote"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-4 p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors"
            >
              <span className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">
                <Mic className="w-5 h-5 text-primary" />
              </span>
              <div>
                <p className="font-heading font-semibold text-foreground">Talk to me now</p>
                <p className="text-sm text-muted-foreground">Voice assistant</p>
              </div>
            </a>

            <a
              href="tel:0403916194"
              className="flex items-center gap-4 p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors"
            >
              <span className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">
                <Phone className="w-5 h-5 text-primary" />
              </span>
              <div>
                <p className="font-heading font-semibold text-foreground">Call us on 0403 916 194</p>
                <p className="text-sm text-muted-foreground">0403 916 194</p>
              </div>
            </a>

            <a
              href="sms:0403916194"
              className="flex items-center gap-4 p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors"
            >
              <span className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">
                <MessageSquare className="w-5 h-5 text-primary" />
              </span>
              <div>
                <p className="font-heading font-semibold text-foreground">Send SMS</p>
                <p className="text-sm text-muted-foreground">Quick text message</p>
              </div>
            </a>
          </div>

          {/* Footer */}
          <div className="px-4 pb-4 text-center text-xs text-muted-foreground">
            Available 24/7 • Powered by AI
          </div>
        </div>
      )}
    </>
  );
};

export default VoiceAssistant;
