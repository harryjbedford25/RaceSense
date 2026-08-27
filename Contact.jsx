import React, { useState } from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import emailjs from '@emailjs/browser';

emailjs.init("SdIwxbCEG1c7rzxSD");

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(false);

    try {
      const result = await emailjs.send(
        'service_9v51njl',
        'template_crwqm7y',
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        }
      );

      if (result.text === 'OK') {
        setIsSubmitted(true);
        setTimeout(() => setIsSubmitted(false), 3000);
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitError(true);
        setTimeout(() => setSubmitError(false), 3000);
      }
    } catch (error) {
      console.error('EmailJS error:', error);
      setSubmitError(true);
      setTimeout(() => setSubmitError(false), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-[#101012] min-h-screen">
      <Nav />
      <section className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="font-mono text-[12px] tracking-[0.3em] uppercase text-[#ccff00] mb-8">
            Get in Touch
          </h1>
          
          {isSubmitted ? (
            <div className="text-center py-12">
              <p className="font-jetbrains text-2xl text-[#ccff00] mb-4">Message Sent!</p>
              <p className="text-[#8E8E93]">We'll get back to you soon.</p>
            </div>
          ) : submitError ? (
            <div className="text-center py-12">
              <p className="font-jetbrains text-2xl text-red-500 mb-4">Error Sending Message</p>
              <p className="text-[#8E8E93]">Please try again later.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block font-mono text-[11px] tracking-[0.2em] uppercase text-[#8E8E93] mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/5 border border-white/20 text-[#F4F4F9] px-4 py-3 font-mono text-[12px] tracking-[0.1em] uppercase placeholder:text-[#8E8E93]/50 focus:outline-none focus:border-[#ccff00] transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block font-mono text-[11px] tracking-[0.2em] uppercase text-[#8E8E93] mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/5 border border-white/20 text-[#F4F4F9] px-4 py-3 font-mono text-[12px] tracking-[0.1em] uppercase placeholder:text-[#8E8E93]/50 focus:outline-none focus:border-[#ccff00] transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              
              <div>
                <label className="block font-mono text-[11px] tracking-[0.2em] uppercase text-[#8E8E93] mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full bg-white/5 border border-white/20 text-[#F4F4F9] px-4 py-3 font-mono text-[12px] tracking-[0.1em] uppercase placeholder:text-[#8E8E93]/50 focus:outline-none focus:border-[#ccff00] transition-colors resize-none"
                  placeholder="Your message..."
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full font-mono text-[12px] tracking-[0.2em] uppercase bg-[#ccff00] text-black px-7 py-4 hover:bg-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          )}
        </div>
      </section>
      <Footer />
    </div>
  );
}