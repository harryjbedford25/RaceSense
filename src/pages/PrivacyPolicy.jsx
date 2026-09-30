import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import NavHUD from "@/components/racesense/NavHUD";

export default function PrivacyPolicy() {
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
          // PRIVACY POLICY
        </motion.div>
        <motion.h1 variants={itemVariants} className="font-heading text-4xl leading-[0.95] tracking-[-0.02em] sm:text-5xl mb-8">
          PRIVACY POLICY
        </motion.h1>

        <motion.div variants={itemVariants} className="prose prose-lg max-w-none">
          <p className="text-muted-foreground mb-6">
            Last updated: September 30, 2024
          </p>

          <h2 className="font-heading text-2xl tracking-[-0.02em] mt-8 mb-4">1. Information We Collect</h2>
          <p className="text-muted-foreground mb-4">
            RaceSense collects the following information to provide our services:
          </p>
          <ul className="list-disc pl-6 text-muted-foreground mb-6 space-y-2">
            <li>Email address (for account creation and communication)</li>
            <li>Kart number and series selection (for live timing functionality)</li>
            <li>Device information (for app performance and troubleshooting)</li>
            <li>Usage data (for improving our services)</li>
          </ul>

          <h2 className="font-heading text-2xl tracking-[-0.02em] mt-8 mb-4">2. How We Use Your Information</h2>
          <p className="text-muted-foreground mb-4">
            We use your information to:
          </p>
          <ul className="list-disc pl-6 text-muted-foreground mb-6 space-y-2">
            <li>Provide live timing and race updates</li>
            <li>Improve app functionality and user experience</li>
            <li>Communicate about service updates and support</li>
            <li>Analyze usage patterns to enhance features</li>
          </ul>

          <h2 className="font-heading text-2xl tracking-[-0.02em] mt-8 mb-4">3. Data Security</h2>
          <p className="text-muted-foreground mb-6">
            We implement appropriate security measures to protect your personal information. All data is encrypted in transit and at rest. We regularly review our security practices to ensure your information remains safe.
          </p>

          <h2 className="font-heading text-2xl tracking-[-0.02em] mt-8 mb-4">4. Third-Party Services</h2>
          <p className="text-muted-foreground mb-6">
            RaceSense integrates with third-party timing systems to provide live race data. These integrations are necessary for our core functionality and are conducted according to their respective privacy policies.
          </p>

          <h2 className="font-heading text-2xl tracking-[-0.02em] mt-8 mb-4">5. Your Rights</h2>
          <p className="text-muted-foreground mb-4">
            You have the right to:
          </p>
          <ul className="list-disc pl-6 text-muted-foreground mb-6 space-y-2">
            <li>Access your personal data</li>
            <li>Request deletion of your account and data</li>
            <li>Opt out of non-essential data collection</li>
            <li>Update your information at any time</li>
          </ul>

          <h2 className="font-heading text-2xl tracking-[-0.02em] mt-8 mb-4">6. Contact Us</h2>
          <p className="text-muted-foreground mb-6">
            If you have questions about this privacy policy or our data practices, please contact us at:
          </p>
          <p className="text-muted-foreground mb-6">
            Email: privacy@racesense.info<br />
            Website: https://racesense.info
          </p>

          <motion.div variants={itemVariants} className="mt-12 p-6 border border-primary/30 rounded-lg bg-primary/5">
            <p className="text-sm text-muted-foreground">
              This privacy policy may be updated from time to time. We will notify users of significant changes via email or app notification.
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
      </section>
    </div>
  );
}
