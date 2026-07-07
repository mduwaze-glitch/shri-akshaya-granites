"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MessageSquare, Palette, Scissors, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    step: "01",
    title: "Consultation",
    description:
      "Share your requirements with our experts. We'll discuss your vision, budget, and timeline to understand your needs.",
  },
  {
    icon: Palette,
    step: "02",
    title: "Selection",
    description:
      "Visit our showroom to handpick from hundreds of granite and marble slabs. We'll help you find the perfect match.",
  },
  {
    icon: Scissors,
    step: "03",
    title: "Fabrication",
    description:
      "Our skilled craftsmen precision-cut and shape your chosen stone using advanced CNC technology.",
  },
  {
    icon: CheckCircle,
    step: "04",
    title: "Installation",
    description:
      "Expert installation team ensures flawless fitting with minimal disruption to your space.",
  },
];

export default function Process() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 bg-secondary text-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-semibold tracking-widest mb-4">
            HOW IT WORKS
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Simple 4-Step Process
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            We make your stone project effortless with our streamlined process,
            from initial consultation to final installation.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative text-center"
            >
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-[60%] w-[80%] h-0.5 bg-white/20" />
              )}

              {/* Step Number */}
              <div className="w-24 h-24 mx-auto mb-6 bg-white/10 rounded-full flex items-center justify-center relative">
                <step.icon size={32} className="text-white" />
                <span className="absolute -top-2 -right-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm">
                  {step.step}
                </span>
              </div>

              <h3 className="text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-center mt-16"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-secondary transition-all duration-300"
          >
            Start Your Project Today
          </a>
        </motion.div>
      </div>
    </section>
  );
}
