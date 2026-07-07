"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "Modern Kitchen Countertop",
    location: "Chennai Residence",
    category: "Granite",
    image: "https://images.unsplash.com/photo-1683629357884-11440746a7ec?w=600&h=400&fit=crop",
  },
  {
    id: 2,
    title: "Luxury Bathroom Vanity",
    location: "Coimbatore Villa",
    category: "Marble",
    image: "https://images.unsplash.com/photo-1759223607861-f0ef3e617739?w=600&h=400&fit=crop",
  },
  {
    id: 3,
    title: "Office Lobby Flooring",
    location: "Bangalore Corporate",
    category: "Granite",
    image: "https://images.unsplash.com/photo-1767554261805-95185e9ecf87?w=600&h=400&fit=crop",
  },
  {
    id: 4,
    title: "Temple Wall Cladding",
    location: "Madurai Heritage",
    category: "Marble",
    image: "https://images.unsplash.com/photo-1779861656641-478f35db8e9e?w=600&h=400&fit=crop",
  },
  {
    id: 5,
    title: "Restaurant Table Tops",
    location: "Hyderabad Bistro",
    category: "Granite",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop",
  },
  {
    id: 6,
    title: "Staircase Railings",
    location: "Pune Mansion",
    category: "Marble",
    image: "https://images.unsplash.com/photo-1758548157499-c61b0730dc42?w=600&h=400&fit=crop",
  },
];

export default function Gallery() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="gallery" className="py-24 bg-background" ref={ref}>
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-semibold tracking-widest mb-4">
            OUR WORK
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-dark mb-6">
            Featured Projects
          </h2>
          <p className="text-dark/60 max-w-2xl mx-auto">
            Take a look at some of our finest installations across residential
            and commercial spaces.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative rounded-2xl overflow-hidden cursor-pointer"
            >
              {/* Image */}
              <div className="h-72 relative overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="text-primary text-sm font-semibold">
                    {project.category}
                  </span>
                  <h3 className="text-white text-xl font-bold mt-1">
                    {project.title}
                  </h3>
                  <p className="text-white/60 text-sm mt-1">
                    {project.location}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
