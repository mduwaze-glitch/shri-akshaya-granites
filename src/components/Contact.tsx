"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle,
} from "lucide-react";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    setFormData({ name: "", email: "", phone: "", service: "", message: "" });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      details: ["+91 98765 43210", "+91 98765 43211"],
      link: "tel:+919876543210",
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["info@shriakshayagranites.com", "sales@shriakshayagranites.com"],
      link: "mailto:info@shriakshayagranites.com",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: [
        "Rasipalli Village,",
        "Achamangalam, Tamil Nadu",
        "India - 600001",
      ],
      link: "#",
    },
    {
      icon: Clock,
      title: "Working Hours",
      details: ["Mon - Sat: 9:00 AM - 7:00 PM", "Sunday: By Appointment"],
      link: "#",
    },
  ];

  return (
    <>
      {/* Pre-Contact Banner */}
      <div className="bg-secondary py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-primary font-semibold tracking-widest mb-4">
              READY TO BEGIN?
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Let&apos;s Create Something Beautiful
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto mb-8">
              Whether you&apos;re renovating your kitchen, designing a new bathroom,
              or working on a commercial project, our team is ready to help you
              find the perfect stone.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-secondary transition-all duration-300"
            >
              Get in Touch Today
            </a>
          </motion.div>
        </div>
      </div>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-background" ref={ref}>
        <div className="max-w-7xl mx-auto px-4">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-primary font-semibold tracking-widest mb-4">
              GET IN TOUCH
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-dark mb-6">
              Let&apos;s Start Your Project
            </h2>
            <p className="text-dark/60 max-w-2xl mx-auto">
              Ready to transform your space? Contact us for a free consultation
              and quote. Our experts are here to help.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              {contactInfo.map((info) => (
                <a
                  key={info.title}
                  href={info.link}
                  className="flex items-start gap-4 p-4 bg-white rounded-xl hover:shadow-lg transition-all group"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors">
                    <info.icon
                      size={24}
                      className="text-primary group-hover:text-white transition-colors"
                    />
                  </div>
                  <div>
                    <p className="font-bold text-dark mb-1">{info.title}</p>
                    {info.details.map((detail, i) => (
                      <p key={i} className="text-dark/60 text-sm">
                        {detail}
                      </p>
                    ))}
                  </div>
                </a>
              ))}
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="lg:col-span-2"
            >
              <form
                onSubmit={handleSubmit}
                className="bg-white rounded-2xl p-8 shadow-lg"
              >
                {submitted && (
                  <div className="mb-6 p-4 bg-primary/10 rounded-lg flex items-center gap-3">
                    <CheckCircle className="text-primary" size={24} />
                    <p className="text-primary font-medium">
                      Thank you! We&apos;ll get back to you soon.
                    </p>
                  </div>
                )}

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-dark font-medium mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full px-4 py-3 bg-background rounded-lg border border-cream focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label className="block text-dark font-medium mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full px-4 py-3 bg-background rounded-lg border border-cream focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-dark font-medium mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="w-full px-4 py-3 bg-background rounded-lg border border-cream focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                      placeholder="+91 98765 43210"
                    />
                  </div>

                  <div>
                    <label className="block text-dark font-medium mb-2">
                      Service Required
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) =>
                        setFormData({ ...formData, service: e.target.value })
                      }
                      className="w-full px-4 py-3 bg-background rounded-lg border border-cream focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    >
                      <option value="">Select a service</option>
                      <option value="granite">Granite Supply</option>
                      <option value="marble">Marble Supply</option>
                      <option value="fabrication">Custom Fabrication</option>
                      <option value="installation">Installation</option>
                      <option value="consultation">Consultation</option>
                    </select>
                  </div>
                </div>

                <div className="mt-6">
                  <label className="block text-dark font-medium mb-2">
                    Your Message
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-background rounded-lg border border-cream focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <button
                  type="submit"
                  className="mt-6 w-full bg-primary text-white py-4 rounded-full font-semibold hover:bg-secondary transition-all duration-300 flex items-center justify-center gap-2 group"
                >
                  Send Message
                  <Send
                    size={18}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
