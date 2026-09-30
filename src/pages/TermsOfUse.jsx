import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import NavHUD from "@/components/racesense/NavHUD";

export default function TermsOfUse() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
    <div className="relative bg-background text-foreground">
      <NavHUD />
      <section className="pt-20 py-20 sm:py-28">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="px-6 sm:px-10 max-w-4xl mx-auto"
        >
        <motion.div variants={itemVariants} className="font-mono text-[10px] tracking-[0.3em] text-primary mb-4">
          // TERMS OF USE
        </motion.div>
        <motion.h1 variants={itemVariants} className="font-heading text-4xl leading-[0.95] tracking-[-0.02em] sm:text-5xl mb-8">
          TERMS OF USE
        </motion.h1>

        <motion.div variants={itemVariants} className="prose prose-lg max-w-none">
          <p className="text-muted-foreground mb-6">
            Last updated: September 30, 2024
          </p>

          <h2 className="font-heading text-2xl tracking-[-0.02em] mt-8 mb-4">1. Acceptance of Terms</h2>
          <p className="text-muted-foreground mb-6">
            By downloading, accessing, or using RaceSense, you agree to be bound by these Terms of Use. If you do not agree to these terms, please do not use our application.
          </p>

          <h2 className="font-heading text-2xl tracking-[-0.02em] mt-8 mb-4">2. Description of Service</h2>
          <p className="text-muted-foreground mb-6">
            RaceSense is a mobile application that provides live timing information and spoken race updates for karting enthusiasts. The service connects to live timing feeds at participating tracks and delivers real-time race information through audio.
          </p>

          <h2 className="font-heading text-2xl tracking-[-0.02em] mt-8 mb-4">3. User Responsibilities</h2>
          <p className="text-muted-foreground mb-4">
            As a user of RaceSense, you agree to:
          </p>
          <ul className="list-disc pl-6 text-muted-foreground mb-6 space-y-2">
            <li>Use the application only for its intended purpose</li>
            <li>Not attempt to circumvent security measures or exploit vulnerabilities</li>
            <li>Not share your account credentials with others</li>
            <li>Comply with all applicable laws and regulations</li>
            <li>Respect the privacy and rights of other users</li>
          </ul>

          <h2 className="font-heading text-2xl tracking-[-0.02em] mt-8 mb-4">4. Prohibited Activities</h2>
          <p className="text-muted-foreground mb-4">
            You may not:
          </p>
          <ul className="list-disc pl-6 text-muted-foreground mb-6 space-y-2">
            <li>Reverse engineer or attempt to extract source code</li>
            <li>Use the application for illegal or unauthorized purposes</li>
            <li>Interfere with or disrupt the service or servers</li>
            <li>Transmit malware or harmful code through the service</li>
            <li>Attempt to gain unauthorized access to any part of the service</li>
          </ul>

          <h2 className="font-heading text-2xl tracking-[-0.02em] mt-8 mb-4">5. Disclaimer of Warranties</h2>
          <p className="text-muted-foreground mb-6">
            RaceSense is provided "as is" without warranties of any kind, either express or implied. We do not guarantee that the service will be uninterrupted, timely, secure, or error-free. Race timing data is provided by third-party systems and may be subject to delays or inaccuracies.
          </p>

          <h2 className="font-heading text-2xl tracking-[-0.02em] mt-8 mb-4">6. Limitation of Liability</h2>
          <p className="text-muted-foreground mb-6">
            In no event shall RaceSense be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the application. Our total liability shall not exceed the amount you paid, if any, for the service.
          </p>

          <h2 className="font-heading text-2xl tracking-[-0.02em] mt-8 mb-4">7. Intellectual Property</h2>
          <p className="text-muted-foreground mb-6">
            All content, features, and functionality of RaceSense are owned by RaceSense and are protected by international copyright, trademark, and other intellectual property laws. You may not reproduce, modify, or distribute any part of the application without our express written consent.
          </p>

          <h2 className="font-heading text-2xl tracking-[-0.02em] mt-8 mb-4">8. Termination</h2>
          <p className="text-muted-foreground mb-6">
            We reserve the right to suspend or terminate your access to RaceSense at any time, with or without cause, with or without notice. Upon termination, your right to use the service will immediately cease.
          </p>

          <h2 className="font-heading text-2xl tracking-[-0.02em] mt-8 mb-4">9. Governing Law</h2>
          <p className="text-muted-foreground mb-6">
            These terms shall be governed by and construed in accordance with the laws of the jurisdiction in which RaceSense operates, without regard to its conflict of law provisions.
          </p>

          <h2 className="font-heading text-2xl tracking-[-0.02em] mt-8 mb-4">10. Changes to Terms</h2>
          <p className="text-muted-foreground mb-6">
            We reserve the right to modify these terms at any time. Continued use of the application after changes constitutes acceptance of the new terms. We will notify users of significant changes via email or app notification.
          </p>

          <h2 className="font-heading text-2xl tracking-[-0.02em] mt-8 mb-4">11. Contact Information</h2>
          <p className="text-muted-foreground mb-6">
            For questions about these Terms of Use, please contact us at:
          </p>
          <p className="text-muted-foreground mb-6">
            Email: legal@racesense.info<br />
            Website: https://racesense.info
          </p>

          <motion.div variants={itemVariants} className="mt-12 p-6 border border-primary/30 rounded-lg bg-primary/5">
            <p className="text-sm text-muted-foreground">
              By using RaceSense, you acknowledge that you have read, understood, and agree to be bound by these Terms of Use.
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
      </section>
    </div>
  );
}
