import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const FAQS = [
  {
    question: "What devices does RaceSense work on?",
    answer: "RaceSense is currently available on Android devices. We're working on an iOS version and will announce when it's available."
  },
  {
    question: "Does RaceSense work with all karting tracks?",
    answer: "RaceSense works with any track that uses a supported live timing system. We currently support several major timing providers and are adding more regularly."
  },
  {
    question: "How does the audio work during a race?",
    answer: "RaceSense connects to the live timing feed and speaks updates through your Bluetooth headphones or connected audio. You'll hear lap times, position changes, gaps, and race control updates in real-time."
  },
  {
    question: "Is there a subscription fee?",
    answer: "RaceSense is currently in beta and free to use. We'll announce pricing details before the full launch."
  },
  {
    question: "Can I use RaceSense during practice sessions?",
    answer: "Yes! RaceSense works during practice, qualifying, and race sessions. It's designed to help you improve your lap times in any session."
  },
  {
    question: "What if my track's timing system isn't supported?",
    answer: "We're constantly adding support for new timing systems. Contact us with your track details and we'll prioritize adding support for your system."
  },
];

export default function FAQ() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [openIndex, setOpenIndex] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="relative bg-background py-20 sm:py-28">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="px-6 sm:px-10 max-w-4xl mx-auto"
      >
        <motion.div variants={itemVariants} className="font-mono text-[10px] tracking-[0.3em] text-primary mb-4">
          // FAQ
        </motion.div>
        <motion.h1 variants={itemVariants} className="font-heading text-4xl leading-[0.95] tracking-[-0.02em] sm:text-5xl mb-12">
          FREQUENTLY ASKED QUESTIONS
        </motion.h1>

        <motion.div variants={itemVariants} className="space-y-4">
          {FAQS.map((faq, index) => (
            <div
              key={index}
              className="border border-border rounded-lg overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-muted/50 transition-colors"
              >
                <span className="font-heading text-lg tracking-[-0.02em]">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="px-6 pb-6 pt-0"
                >
                  <p className="font-body text-base leading-relaxed text-muted-foreground">
                    {faq.answer}
                  </p>
                </motion.div>
              )}
            </div>
          ))}
        </motion.div>

        <motion.div variants={itemVariants} className="mt-12 p-6 border border-primary/30 rounded-lg bg-primary/5">
          <h3 className="font-heading text-xl tracking-[-0.02em] mb-2">
            Still have questions?
          </h3>
          <p className="font-body text-base leading-relaxed text-muted-foreground mb-4">
            Contact us at support@racesense.info and we'll get back to you as soon as possible.
          </p>
          <a
            href="mailto:support@racesense.info"
            className="inline-block bg-primary px-6 py-3 font-mono text-xs font-bold tracking-[0.2em] text-primary-foreground transition-opacity hover:opacity-85"
          >
            CONTACT SUPPORT
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
