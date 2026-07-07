"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const products = [
  {
    id: 1,
    name: "Absolute Black Granite",
    category: "Granite",
    description:
      "Deep black granite with a consistent finish, perfect for modern kitchens and bathrooms.",
    image: "https://images.unsplash.com/photo-1694381873620-4bf6396eccce?w=800&h=600&fit=crop",
  },
  {
    id: 2,
    name: "Fantasy Brown Marble",
    category: "Marble",
    description:
      "Stunning brown and white veined marble that adds warmth and luxury to any space.",
    image: "https://images.unsplash.com/photo-1770065805058-3bfed55e23ee?w=800&h=600&fit=crop",
  },
  {
    id: 3,
    name: "Colonial White Granite",
    category: "Granite",
    description:
      "Elegant white granite with subtle gray and burgundy specks for a classic look.",
    image: "https://images.unsplash.com/photo-1710580891760-3518b21ddaaf?w=800&h=600&fit=crop",
  },
  {
    id: 4,
    name: "Green Marble",
    category: "Marble",
    description:
      "Rich green marble with unique patterns, ideal for statement pieces and flooring.",
    image: "https://images.unsplash.com/photo-1532644440111-bc94f97955c1?w=800&h=600&fit=crop",
  },
  {
    id: 5,
    name: "Kashmir White Granite",
    category: "Granite",
    description:
      "Pristine white granite with delicate gray veining for a sophisticated aesthetic.",
    image: "https://images.unsplash.com/photo-1694382224140-cb7443c6a3ec?w=800&h=600&fit=crop",
  },
  {
    id: 6,
    name: "Emperador Dark Marble",
    category: "Marble",
    description:
      "Deep brown marble with dramatic white veins, perfect for luxury interiors.",
    image: "https://images.pexels.com/photos/12932845/pexels-photo-12932845.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
  },
];

export default function Products() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="products" className="py-24 bg-background" ref={ref}>
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-semibold tracking-widest mb-4">
            OUR COLLECTION
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-dark mb-6">
            Premium Granite & Marble
          </h2>
          <p className="text-dark/60 max-w-2xl mx-auto">
            Explore our extensive collection of natural stones, carefully
            selected from the finest quarries to bring you unmatched quality and
            beauty.
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              {/* Image */}
              <div className="h-72 relative overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 text-dark text-xs font-semibold px-3 py-1 rounded-full">
                    {product.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-dark mb-2 group-hover:text-primary transition-colors">
                  {product.name}
                </h3>
                <p className="text-dark/60 text-sm mb-4">{product.description}</p>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-primary font-semibold text-sm group-hover:gap-3 transition-all"
                >
                  Enquire Now
                  <ArrowRight size={16} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-center mt-12"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 border-2 border-primary text-primary px-8 py-3 rounded-full font-semibold hover:bg-primary hover:text-white transition-all duration-300"
          >
            View Complete Collection
            <ArrowRight size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
