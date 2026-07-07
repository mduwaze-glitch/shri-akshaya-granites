"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Ruler, Scissors, Wrench, Truck, CheckCircle } from "lucide-react";

const services = [
  {
    icon: Scissors,
    title: "Custom Fabrication",
    description:
      "Precision cutting and shaping of granite and marble slabs to your exact specifications using state-of-the-art CNC machinery.",
    features: [
      "CNC Precision Cutting",
      "Custom Edge Profiles",
      "Cutout for Sinks & Hobs",
      "Polishing & Finishing",
    ],
  },
  {
    icon: Wrench,
    title: "Professional Installation",
    description:
      "Expert installation services ensuring perfect fit and finish for countertops, flooring, wall cladding, and more.",
    features: [
      "Kitchen Countertops",
      "Bathroom Vanities",
      "Flooring Installation",
      "Wall Cladding",
    ],
  },
  {
    icon: Ruler,
    title: "Templating & Design",
    description:
      "Accurate measurement and custom design consultation to bring your vision to life with detailed 3D renderings.",
    features: [
      "On-Site Measurement",
      "3D Design Preview",
      "Material Consultation",
      "Color Matching",
    ],
  },
  {
    icon: Truck,
    title: "Delivery & Logistics",
    description:
      "Safe and timely delivery of your stone products with proper handling and insurance coverage throughout transit.",
    features: [
      "Secure Packaging",
      "Timely Delivery",
      "Pan-India Shipping",
      "Insurance Coverage",
    ],
  },
];

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-24 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-semibold tracking-widest mb-4">
            WHAT WE OFFER
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-dark mb-6">
            End-to-End Stone Solutions
          </h2>
          <p className="text-dark/60 max-w-2xl mx-auto">
            From initial consultation to final installation, we provide
            comprehensive services to make your stone project a seamless success.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-background rounded-2xl p-8 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <service.icon
                    size={28}
                    className="text-primary group-hover:text-white transition-colors"
                  />
                </div>

                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-dark mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-dark/60 mb-4">{service.description}</p>

                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2 text-dark/70"
                      >
                        <CheckCircle size={16} className="text-primary" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
