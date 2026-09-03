import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import { Instagram, Mail, MessageCircle } from "lucide-react";

const CONTACT_METHODS = [
  {
    icon: Instagram,
    title: "Instagram",
    handle: "@Race.sense.app",
    link: "https://instagram.com/Race.sense.app",
    description: "Follow us for updates and behind-the-scenes content"
  },
  {
    icon: MessageCircle,
    title: "Social Media",
    handle: "Check our Social page",
    link: "/social",
    description: "Connect with us on various platforms"
  }
];

export default function Contact() {
  return (
    <div className="bg-[#101012] min-h-screen">
      <Nav />
      <section className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="font-mono text-[12px] tracking-[0.3em] uppercase text-[#ccff00] mb-8">
            Get in Touch
          </h1>
          
          <div className="mb-8">
            <p className="text-[#8E8E93] text-lg mb-4">
              We'd love to hear from you! Connect with us through our social channels or check out our community page.
            </p>
          </div>

          <div className="space-y-4">
            {CONTACT_METHODS.map((method) => (
              <a
                key={method.title}
                href={method.link}
                className="block bg-white/5 border border-white/10 p-6 hover:border-[#ccff00]/50 transition-colors group"
              >
                <div className="flex items-start gap-4">
                  <method.icon className="w-6 h-6 text-[#ccff00] group-hover:text-[#F4F4F9] transition-colors" strokeWidth={1.5} />
                  <div className="flex-1">
                    <h3 className="font-jetbrains text-[16px] font-semibold text-[#F4F4F9] mb-1">
                      {method.title}
                    </h3>
                    <p className="font-mono text-[12px] tracking-[0.15em] uppercase text-[#ccff00] mb-2">
                      {method.handle}
                    </p>
                    <p className="text-[#8E8E93] text-sm">
                      {method.description}
                    </p>
                  </div>
                </div>
              </a>
            ))}
          </div>

          <div className="mt-12 bg-white/5 border border-white/10 p-6">
            <h2 className="font-mono text-[11px] tracking-[0.2em] uppercase text-[#8E8E93] mb-4">
              Response Time
            </h2>
            <p className="text-[#8E8E93]">
              We typically respond to social media messages within 24-48 hours. For urgent matters, please reach out through our Instagram account.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}