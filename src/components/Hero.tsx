"use client";

import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-background via-background to-cream/50 overflow-hidden"
    >
      {/* Decorative Elements */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-primary font-semibold tracking-widest mb-4"
            >
              PREMIUM STONE SOLUTIONS
            </motion.p>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-dark leading-tight mb-6">
              Timeless Stone
              <span className="block text-primary">for Modern</span>
              <span className="block text-dark">Spaces</span>
            </h1>

            <p className="text-dark/60 text-lg mb-8 max-w-lg leading-relaxed">
              Transform your spaces with our exquisite collection of granite and
              marble. From quarry to countertop, we deliver perfection with every
              slab.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-full font-semibold hover:bg-secondary transition-all duration-300"
              >
                Get Free Quote
                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </a>
              <a
                href="tel:+918778184915"
                className="inline-flex items-center gap-2 border-2 border-primary text-primary px-8 py-4 rounded-full font-semibold hover:bg-primary hover:text-white transition-all duration-300"
              >
                <Phone size={20} />
                Call Now
              </a>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-8 mt-12 pt-8 border-t border-cream">
              {[
                { number: "15+", label: "Years Experience" },
                { number: "5000+", label: "Projects Done" },
                { number: "500+", label: "Happy Clients" },
              ].map((badge) => (
                <div key={badge.label}>
                  <p className="text-3xl font-bold text-primary">{badge.number}</p>
                  <p className="text-dark/50 text-sm">{badge.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Image/Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative w-full aspect-square">
              {/* Main Image */}
              <div className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1767554261805-95185e9ecf87?w=800&h=800&fit=crop"
                  alt="Geometric marble floor pattern"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/40 to-transparent" />
              </div>

              {/* Floating Card */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1 }}
                className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl"
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-2xl">✦</span>
                  </div>
                  <div>
                    <p className="font-bold text-dark">Quality Assured</p>
                    <p className="text-dark/50 text-sm">ISO Certified</p>
                  </div>
                </div>
              </motion.div>

              {/* Floating Badge */}
              <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.2 }}
                className="absolute -top-6 -right-6 bg-primary text-white p-4 rounded-2xl shadow-xl"
              >
                <p className="font-bold text-2xl">100%</p>
                <p className="text-sm">Natural Stone</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
