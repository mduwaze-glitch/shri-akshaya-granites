"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, Gem, Users, Award } from "lucide-react";
import Image from "next/image";

const stats = [
  { icon: Shield, title: "Quality First", desc: "Only premium grade stones" },
  { icon: Gem, title: "Wide Selection", desc: "500+ varieties available" },
  { icon: Users, title: "Expert Team", desc: "Skilled craftsmen & designers" },
  { icon: Award, title: "Trusted Brand", desc: "15+ years of excellence" },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative">
              <div className="w-full aspect-[4/5] rounded-3xl overflow-hidden shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1774578341998-d1e9a74e82f6?w=600&h=750&fit=crop"
                  alt="Grey marble bathroom with double vanity"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Experience Badge */}
              <div className="absolute -bottom-8 -right-8 bg-primary text-white p-6 rounded-2xl shadow-xl">
                <p className="text-4xl font-bold">15+</p>
                <p className="text-sm">Years of Excellence</p>
              </div>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-primary font-semibold tracking-widest mb-4">
              ABOUT US
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-dark mb-6 leading-tight">
              Your Trusted Partner in{" "}
              <span className="text-primary">Premium Stones</span>
            </h2>

            <p className="text-dark/60 mb-6 leading-relaxed">
              Shri Akshaya Granites has been a cornerstone of the stone industry
              in Tamil Nadu since our establishment. We source the finest granite
              and marble from quarries across India, bringing you an
              unmatched selection of natural stones.
            </p>

            <p className="text-dark/60 mb-8 leading-relaxed">
              Our state-of-the-art fabrication facility combined with our
              experienced team ensures every project receives the attention to
              detail it deserves. From residential countertops to commercial
              installations, we deliver excellence at every step.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="flex items-start gap-4 p-4 bg-background rounded-xl"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <stat.icon className="text-primary" size={24} />
                  </div>
                  <div>
                    <p className="font-bold text-dark">{stat.title}</p>
                    <p className="text-dark/50 text-sm">{stat.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
