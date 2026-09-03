import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import { Twitter, Instagram, Youtube, MessageCircle, Gift, Users } from "lucide-react";

const SOCIAL_LINKS = [
  { 
    icon: Instagram, 
    handle: "@Race.sense.app", 
    platform: "Instagram", 
    description: "Behind the scenes and visual content",
    link: "https://instagram.com/Race.sense.app"
  },
  { 
    icon: Twitter, 
    handle: "Coming Soon", 
    platform: "Twitter/X", 
    description: "Latest updates and race analysis",
    link: "#"
  },
  { 
    icon: Youtube, 
    handle: "Coming Soon", 
    platform: "YouTube", 
    description: "Tutorials and feature walkthroughs",
    link: "#"
  },
  { 
    icon: Users, 
    handle: "Coming Soon", 
    platform: "Discord", 
    description: "Join the community discussion",
    link: "#"
  }
];

const INSTAGRAM_POSTS = [
  {
    // Add your Instagram post URLs here in the format: "https://www.instagram.com/p/POST_ID/"
    url: "https://www.instagram.com/p/Dc0Q2qyDYNZ/?img_index=1",
    caption: "Get in touch!"
  },
  {
    url: "https://www.instagram.com/p/DcyGsgDDV-o/?img_index=1",
    caption: "Early Access Updates!"
  },
  {
    url: "https://www.instagram.com/p/DcyazjKjQV-/?img_index=1",
    caption: "Web Version Coming Soon!"
  }
];

const ENGAGEMENT_OFFERS = [
  {
    icon: Gift,
    title: "Early Bird Discount",
    description: "Sign up before launch and get 20% off your first subscription",
    status: "Available",
    action: "Join the Grid"
  },
  {
    icon: MessageCircle,
    title: "Community Competition",
    description: "Share your race data and compete for featured spot on our social channels",
    status: "Coming Soon",
    action: "Learn More"
  },
  {
    icon: Gift,
    title: "Referral Program",
    description: "Invite friends and earn credits towards your subscription",
    status: "Planned",
    action: "Get Notified"
  }
];

export default function Social() {
  return (
    <div className="bg-[#101012] min-h-screen">
      <Nav />
      <section className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="font-mono text-[12px] tracking-[0.3em] uppercase text-[#ccff00] mb-8">
            Socials & Community
          </h1>
          
          <div className="mb-16">
            <h2 className="font-mono text-[11px] tracking-[0.2em] uppercase text-[#8E8E93] mb-6">
              Connect With Us
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {SOCIAL_LINKS.map((social) => (
                social.link === "#" ? (
                  <div 
                    key={social.platform} 
                    className="bg-white/5 border border-white/10 p-6 opacity-60"
                  >
                    <div className="flex items-start gap-4">
                      <social.icon className="w-6 h-6 text-[#8E8E93]" strokeWidth={1.5} />
                      <div className="flex-1">
                        <h3 className="font-jetbrains text-[16px] font-semibold text-[#F4F4F9] mb-1">
                          {social.platform}
                        </h3>
                        <p className="font-mono text-[12px] tracking-[0.15em] uppercase text-[#8E8E93] mb-2">
                          {social.handle}
                        </p>
                        <p className="text-[#8E8E93] text-sm">
                          {social.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ) : (
                  <a 
                    key={social.platform} 
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/5 border border-white/10 p-6 hover:border-[#ccff00]/50 transition-colors group"
                  >
                    <div className="flex items-start gap-4">
                      <social.icon className="w-6 h-6 text-[#ccff00] group-hover:text-[#F4F4F9] transition-colors" strokeWidth={1.5} />
                      <div className="flex-1">
                        <h3 className="font-jetbrains text-[16px] font-semibold text-[#F4F4F9] mb-1">
                          {social.platform}
                        </h3>
                        <p className="font-mono text-[12px] tracking-[0.15em] uppercase text-[#ccff00] mb-2">
                          {social.handle}
                        </p>
                        <p className="text-[#8E8E93] text-sm">
                          {social.description}
                        </p>
                      </div>
                    </div>
                  </a>
                )
              ))}
            </div>
          </div>

          <div className="mb-16">
            <h2 className="font-mono text-[11px] tracking-[0.2em] uppercase text-[#8E8E93] mb-6">
              Latest from Instagram
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {INSTAGRAM_POSTS.map((post, index) => {
                const postId = post.url?.split('/p/')?.[1]?.split('/')?.[0];
                return (
                  <div key={index} className="bg-white/5 border border-white/10 p-4">
                    {postId ? (
                      <iframe
                        src={`https://www.instagram.com/${postId}/embed`}
                        className="w-full aspect-square"
                        frameBorder="0"
                        scrolling="no"
                        allowtransparency="true"
                      />
                    ) : (
                      <div className="aspect-square bg-white/5 flex flex-col items-center justify-center border border-dashed border-white/20">
                        <Instagram className="w-12 h-12 text-[#8E8E93] mb-3" strokeWidth={1} />
                        <p className="text-[#8E8E93] text-xs text-center px-4">
                          Add Instagram post URL to display embed
                        </p>
                      </div>
                    )}
                    <p className="text-[#8E8E93] text-sm mt-4 h-10 overflow-hidden">
                      {post.caption}
                    </p>
                  </div>
                );
              })}
            </div>
            <div className="mt-4 text-center">
              <a
                href="https://instagram.com/Race.sense.app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#ccff00] hover:text-white transition-colors text-sm"
              >
                Follow @Race.sense.app on Instagram →
              </a>
            </div>
          </div>

          <div>
            <h2 className="font-mono text-[11px] tracking-[0.2em] uppercase text-[#8E8E93] mb-6">
              Special Offers & Engagement
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {ENGAGEMENT_OFFERS.map((offer) => (
                <div key={offer.title} className="bg-white/5 border border-white/10 p-6">
                  <div className="flex items-start justify-between mb-4">
                    <offer.icon className="w-6 h-6 text-[#ccff00]" strokeWidth={1.5} />
                    <span className={`font-mono text-[10px] tracking-[0.15em] uppercase px-2 py-1 ${
                      offer.status === 'Available' ? 'bg-[#ccff00]/20 text-[#ccff00]' :
                      offer.status === 'Coming Soon' ? 'bg-white/10 text-[#8E8E93]' :
                      'bg-white/5 text-[#8E8E93]'
                    }`}>
                      {offer.status}
                    </span>
                  </div>
                  <h3 className="font-jetbrains text-[16px] font-semibold text-[#F4F4F9] mb-2">
                    {offer.title}
                  </h3>
                  <p className="text-[#8E8E93] text-sm leading-relaxed mb-4">
                    {offer.description}
                  </p>
                  <button className="w-full font-mono text-[11px] tracking-[0.2em] uppercase bg-[#ccff00] text-black px-4 py-2 hover:bg-white transition-colors">
                    {offer.action}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}