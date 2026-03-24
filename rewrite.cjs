const fs = require('fs');

const b = Array.from({length:6}, (_,i)=>`b${i+1}`);
const h = Array.from({length:6}, (_,i)=>`h${i+1}`);
const m = Array.from({length:8}, (_,i)=>`m${i+1}`);
const o = Array.from({length:11}, (_,i)=>`o${i+1}`);

const imports = [...b, ...h, ...m, ...o].map(n => `import ${n} from "../../assets/images/${n === 'm8' ? 'mm' : n}.png";`);

const bObjs = b.map((n,i)=>({ id: `b_${i}`, category: "Bridal", image: n }));
const hObjs = h.map((n,i)=>({ id: `h_${i}`, category: "Hair Styling", image: n }));
const mObjs = m.map((n,i)=>({ id: `m_${i}`, category: "Makeovers", image: n }));
const oObjs = o.map((n,i)=>({ id: `o_${i}`, category: "Models", image: n }));

let arr = [];
let maxLen = Math.max(oObjs.length, mObjs.length, hObjs.length, bObjs.length);
for(let i=0; i<maxLen; i++){
    if(oObjs[i]) arr.push(oObjs[i]);
    if(mObjs[i]) arr.push(mObjs[i]);
    if(bObjs[i]) arr.push(bObjs[i]);
    if(hObjs[i]) arr.push(hObjs[i]);
}

const arrStr = "[\n" + arr.map(a => `  { id: "${a.id}", category: "${a.category}", image: ${a.image} }`).join(",\n") + "\n]";

const content = `import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const categories = ["All", "Bridal", "Hair Styling", "Models", "Makeovers"];

${imports.join("\n")}

const portfolioData = ${arrStr};

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
              className={\`px-6 py-2 rounded-full font-semibold transition \${
                activeCategory === category
                  ? "bg-pink-600 text-white"
                  : "bg-pink-100 text-pink-700 hover:bg-pink-200"
              }\`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Image Grid */}
        <motion.div layout className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
          <AnimatePresence>
            {filteredPortfolio.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="relative group overflow-hidden rounded-3xl break-inside-avoid shadow-lg mb-6 inline-block w-full"
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
`;

fs.writeFileSync('c:/A__WEBSITES/BEAUTY/src/components/Portfolio.jsx', content);
console.log('rewritten successfully');
