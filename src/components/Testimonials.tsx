"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Rajesh Kumar",
    role: "Interior Designer, Chennai",
    rating: 5,
    text: "Shri Akshaya Granites has been our go-to supplier for over 5 years. Their quality is unmatched and their fabrication team is incredibly skilled. Highly recommended!",
    avatar: "RK",
  },
  {
    id: 2,
    name: "Priya Sharma",
    role: "Homeowner, Coimbatore",
    rating: 5,
    text: "The marble selection at their showroom is stunning. They helped us choose the perfect stone for our new home, and the installation was flawless. Thank you!",
    avatar: "PS",
  },
  {
    id: 3,
    name: "Arjun Patel",
    role: "Contractor, Bangalore",
    rating: 5,
    text: "As a contractor, I need reliable suppliers. Shri Akshaya Granites delivers consistently high-quality materials on time, every time. A trusted partner.",
    avatar: "AP",
  },
  {
    id: 4,
    name: "Meena Devi",
    role: "Architect, Madurai",
    rating: 5,
    text: "Their attention to detail in fabrication is remarkable. The CNC work on our temple project was precise and beautiful. Excellent craftsmanship!",
    avatar: "MD",
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () =>
    setCurrent(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );

  return (
    <section className="py-24 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-semibold tracking-widest mb-4">
            TESTIMONIALS
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-dark mb-6">
            What Our Clients Say
          </h2>
        </motion.div>

        {/* Testimonial Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-background rounded-3xl p-8 md:p-12 relative">
            {/* Quote Icon */}
            <Quote
              size={64}
              className="absolute top-8 right-8 text-primary/10"
            />

            {/* Content */}
            <div className="relative z-10">
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonials[current].rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={20}
                    className="fill-primary text-primary"
                  />
                ))}
              </div>

              {/* Text */}
              <p className="text-dark/80 text-lg md:text-xl leading-relaxed mb-8">
                &ldquo;{testimonials[current].text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {testimonials[current].avatar}
                </div>
                <div>
                  <p className="font-bold text-dark text-lg">
                    {testimonials[current].name}
                  </p>
                  <p className="text-dark/50">{testimonials[current].role}</p>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-8 pt-6 border-t border-cream">
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrent(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      index === current
                        ? "bg-primary w-8"
                        : "bg-cream hover:bg-tan"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <div className="flex gap-2">
                <button
                  onClick={prev}
                  className="w-12 h-12 rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all flex items-center justify-center"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={next}
                  className="w-12 h-12 rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all flex items-center justify-center"
                  aria-label="Next testimonial"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
