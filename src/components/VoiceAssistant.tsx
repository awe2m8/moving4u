import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mic, X, Phone, MessageSquare } from 'lucide-react';

export const VoiceAssistant = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isConnecting, setIsConnecting] = useState(false);
  const [isCallActive, setIsCallActive] = useState(false);

  // Monitor widget state to detect when call is active
  useEffect(() => {
    const checkWidgetState = () => {
      // Check for various indicators that a call is in progress
      const agentTalking = document.querySelector('.wcw-agent-talking');
      const userTalking = document.querySelector('.wcw-user-talking');
      const rippleContainer = document.querySelector('.ripple-container');
      const loading = document.querySelector('.wcw-loading');

      // Check if any of these elements are visible (display !== 'none')
      const isAgentVisible = agentTalking && window.getComputedStyle(agentTalking).display !== 'none';
      const isUserVisible = userTalking && window.getComputedStyle(userTalking).display !== 'none';
      const isRippleVisible = rippleContainer && window.getComputedStyle(rippleContainer).display !== 'none';
      const isLoadingVisible = loading && window.getComputedStyle(loading).display !== 'none';

      const callActive = isAgentVisible || isUserVisible || isRippleVisible || isLoadingVisible;

      setIsCallActive(callActive);

      // If call just became active, turn off connecting state
      if (callActive && isConnecting) {
        setIsConnecting(false);
      }
    };

    // Check immediately
    checkWidgetState();

    // Set up polling to monitor state changes
    const interval = setInterval(checkWidgetState, 500);

    return () => clearInterval(interval);
  }, [isConnecting]);

  return (
    <>
      {/* Floating Orb Button */}
      <motion.button
        onClick={() => setIsExpanded(!isExpanded)}
        className={`fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full bg-primary flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300 ${isCallActive ? 'ring-4 ring-primary/50 ring-offset-2' : ''
          }`}
        animate={isExpanded ? { scale: 0.9 } : { scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Open AI assistant"
      >
        {/* Ripple animations - enhanced when call is active */}
        <span className={`absolute inset-0 rounded-full bg-primary ${isCallActive ? 'animate-ping' : 'animate-pulse'}`} />
        <span className="absolute inset-0 rounded-full bg-primary/50 animate-pulse" style={{ animationDelay: '0.5s' }} />
        <span className="absolute inset-0 rounded-full bg-primary/30 animate-pulse" style={{ animationDelay: '1s' }} />

        {/* Active call indicator - pulsing ring */}
        {isCallActive && (
          <motion.span
            className="absolute inset-[-8px] rounded-full border-4 border-accent"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.8, 0.4, 0.8]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        )}

        {/* Icon */}
        <motion.div
          animate={{ rotate: isExpanded ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="relative z-10"
        >
          {isExpanded ? (
            <X className="w-7 h-7 text-primary-foreground" />
          ) : (
            <Mic className={`w-7 h-7 text-primary-foreground ${isCallActive ? 'animate-pulse' : ''}`} />
          )}
        </motion.div>
      </motion.button>

      {/* Expanded Panel - Always rendered but hidden when closed to keep widget state */}
      <motion.div
        initial="closed"
        animate={isExpanded ? "open" : "closed"}
        variants={{
          open: {
            opacity: 1,
            scale: 1,
            y: 0,
            display: "block"
          },
          closed: {
            opacity: 0,
            scale: 0.95,
            y: 20,
            transitionEnd: {
              display: "none"
            }
          }
        }}
        transition={{ duration: 0.2 }}
        className="fixed bottom-24 right-6 z-50 w-80 rounded-2xl shadow-2xl border border-border bg-card overflow-hidden"
      >
        {/* Header */}
        <div className="bg-primary p-5">
          <h3 className="text-primary-foreground font-heading text-lg font-bold">
            Hi, I'm Lucas! 🚚
          </h3>
          <p className="text-primary-foreground/90 text-sm mt-1">
            I'm Moving4U's AI Assistant. How can I help you today?
          </p>
        </div>

        {/* Content */}
        <div className="p-5 space-y-4">
          {/* Voice AI Option - Custom Trigger */}
          <button
            onClick={() => {
              setIsConnecting(true);
              const widget = document.querySelector('.wcw-state-container') as HTMLElement;
              if (widget) {
                widget.click();
                // Reset connecting state after 5 seconds (fallback)
                setTimeout(() => setIsConnecting(false), 5000);
              }
            }}
            className={`w-full p-4 rounded-xl flex items-center gap-4 text-foreground transition-all text-left relative overflow-hidden ${isCallActive
                ? 'bg-accent/20 ring-2 ring-accent/70'
                : isConnecting
                  ? 'bg-primary/10 ring-2 ring-primary/50 animate-pulse'
                  : 'bg-muted/50 hover:bg-muted'
              }`}
          >
            {/* Pulsing border effect when connecting */}
            {isConnecting && (
              <motion.div
                className="absolute inset-0 border-2 border-primary rounded-xl"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            )}

            {/* Active call indicator - pulsing border */}
            {isCallActive && (
              <motion.div
                className="absolute inset-0 border-2 border-accent rounded-xl"
                animate={{ opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            )}

            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center relative z-10">
              {isCallActive ? (
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Mic className="w-6 h-6 text-accent" />
                </motion.div>
              ) : isConnecting ? (
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                >
                  <Mic className="w-6 h-6 text-primary" />
                </motion.div>
              ) : (
                <Mic className="w-6 h-6 text-primary" />
              )}
            </div>
            <div className="relative z-10">
              <p className="font-heading font-semibold">
                {isCallActive ? 'Call in progress' : isConnecting ? 'Connecting...' : 'Talk to me now'}
              </p>
              <p className="text-sm text-muted-foreground">
                {isCallActive ? 'Tap to end call' : isConnecting ? 'Please wait' : 'Voice assistant'}
              </p>
            </div>
          </button>

          {/* Hidden Widget Container - kept in DOM for script to initialize */}
          <div className="absolute opacity-0 pointer-events-none" aria-hidden="true" style={{ width: 0, height: 0, overflow: 'hidden' }}>
            <div
              data-widget-key="77a32e86-dc90-4ed8-9c94-e9ac28b8cc5f"
            >
              {/* The script will inject the widget here. */}
            </div>
          </div>

          {/* Phone Option */}
          <a
            href="tel:+61403916194"
            className="w-full p-4 rounded-xl flex items-center gap-4 bg-muted/50 hover:bg-muted text-foreground transition-colors"
          >
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <Phone className="w-6 h-6 text-primary" />
            </div>
            <div className="text-left">
              <p className="font-heading font-semibold">Call us on 0403 916 194</p>
              <p className="text-sm text-muted-foreground">0403 916 194</p>
            </div>
          </a>

          {/* SMS Option */}
          <a
            href="sms:+61403916194"
            className="w-full p-4 rounded-xl flex items-center gap-4 bg-muted/50 hover:bg-muted text-foreground transition-colors"
          >
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <MessageSquare className="w-6 h-6 text-primary" />
            </div>
            <div className="text-left">
              <p className="font-heading font-semibold">Send SMS</p>
              <p className="text-sm text-muted-foreground">Quick text message</p>
            </div>
          </a>
        </div>

        {/* Footer */}
        <div className="px-4 pb-4 text-center text-xs text-muted-foreground">
          Available 24/7 • Powered by AI
        </div>
      </motion.div>
    </>
  );
};

export default VoiceAssistant;
