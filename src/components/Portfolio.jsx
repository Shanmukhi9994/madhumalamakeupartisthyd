import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const categories = ["All", "Bridal", "Hair Styling", "Models", "Makeovers"];

import b1 from "../../assets/images/b1.png";
import b2 from "../../assets/images/b2.png";
import b3 from "../../assets/images/b3.png";
import b4 from "../../assets/images/b4.png";
import b5 from "../../assets/images/b5.png";
import b6 from "../../assets/images/b6.png";
import h1 from "../../assets/images/h1.png";
import h2 from "../../assets/images/h2.png";
import h3 from "../../assets/images/h3.png";
import h4 from "../../assets/images/h4.png";
import h5 from "../../assets/images/h5.png";
import h6 from "../../assets/images/h6.png";
import m1 from "../../assets/images/m1.png";
import m2 from "../../assets/images/m2.png";
import m3 from "../../assets/images/m3.png";
import m4 from "../../assets/images/m4.png";
import m5 from "../../assets/images/m5.png";
import m6 from "../../assets/images/m6.png";
import m7 from "../../assets/images/m7.png";
import m8 from "../../assets/images/mm.png";
import o1 from "../../assets/images/o1.png";
import o2 from "../../assets/images/o2.png";
import o3 from "../../assets/images/o3.png";
import o4 from "../../assets/images/o4.png";
import o5 from "../../assets/images/o5.png";
import o6 from "../../assets/images/o6.png";
import o7 from "../../assets/images/o7.png";
import o8 from "../../assets/images/o8.png";
import o9 from "../../assets/images/o9.png";
import o10 from "../../assets/images/o10.png";
import o11 from "../../assets/images/o11.png";

const portfolioData = [
  { id: "o_0", category: "Models", image: o1 },
  { id: "m_0", category: "Makeovers", image: m1 },
  { id: "b_0", category: "Bridal", image: b1 },
  { id: "h_0", category: "Hair Styling", image: h1 },
  { id: "o_1", category: "Models", image: o2 },
  { id: "m_1", category: "Makeovers", image: m2 },
  { id: "b_1", category: "Bridal", image: b2 },
  { id: "h_1", category: "Hair Styling", image: h2 },
  { id: "o_2", category: "Models", image: o3 },
  { id: "m_2", category: "Makeovers", image: m3 },
  { id: "b_2", category: "Bridal", image: b3 },
  { id: "h_2", category: "Hair Styling", image: h3 },
  { id: "o_3", category: "Models", image: o4 },
  { id: "m_3", category: "Makeovers", image: m4 },
  { id: "b_3", category: "Bridal", image: b4 },
  { id: "h_3", category: "Hair Styling", image: h4 },
  { id: "o_4", category: "Models", image: o5 },
  { id: "m_4", category: "Makeovers", image: m5 },
  { id: "b_4", category: "Bridal", image: b5 },
  { id: "h_4", category: "Hair Styling", image: h5 },
  { id: "o_5", category: "Models", image: o6 },
  { id: "m_5", category: "Makeovers", image: m6 },
  { id: "b_5", category: "Bridal", image: b6 },
  { id: "h_5", category: "Hair Styling", image: h6 },
  { id: "o_6", category: "Models", image: o7 },
  { id: "m_6", category: "Makeovers", image: m7 },
  { id: "o_7", category: "Models", image: o8 },
  { id: "m_7", category: "Makeovers", image: m8 },
  { id: "o_8", category: "Models", image: o9 },
  { id: "o_9", category: "Models", image: o10 },
  { id: "o_10", category: "Models", image: o11 }
];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPortfolio =
    activeCategory === "All"
      ? portfolioData
      : portfolioData.filter((item) => item.category === activeCategory);

  return (
    <section id="portfolio" className="py-32 bg-white">
      <div className="container mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="text-pink-600">Portfolio</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore some of our favorite transformations and signature looks.
          </p>
        </motion.div>

        {/* Category Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-14">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full font-semibold transition ${
                activeCategory === category
                  ? "bg-pink-600 text-white"
                  : "bg-pink-100 text-pink-700 hover:bg-pink-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Image Grid */}
        <motion.div layout className="columns-3 sm:columns-3 lg:columns-3 xl:columns-4 gap-1 sm:gap-6 space-y-1 sm:space-y-6">
          <AnimatePresence>
            {filteredPortfolio.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="relative group overflow-hidden rounded-lg sm:rounded-3xl break-inside-avoid shadow-lg mb-1 sm:mb-6 inline-block w-full"
              >
                <img
                  src={item.image}
                  alt={item.category}
                  loading="lazy"
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition flex items-end p-6">
                  <div className="text-white">
                    <p className="text-pink-300 text-sm uppercase">
                      {item.category}
                    </p>
                    <h3 className="text-2xl font-bold">Stunning Look</h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Instagram Button */}
        <div className="text-center mt-20">
          <button className="px-10 py-3 border-2 border-pink-600 text-pink-600 rounded-full font-semibold hover:bg-pink-600 hover:text-white transition">
            View Instagram For More →
          </button>
        </div>

      </div>
    </section>
  );
};

export default Portfolio;
