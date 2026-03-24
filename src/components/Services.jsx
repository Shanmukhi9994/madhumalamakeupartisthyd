import React from "react";
import { motion } from "framer-motion";

import makeup from "../../assets/images/makeup.jpg";
import after from "../../assets/images/after.jpg";
import hair from "../../assets/images/hair.jpg";
import bridalImg from "../../assets/images/b5.png";
import partyImg from "../../assets/images/m3.png";
import modelsImg from "../../assets/images/o1.png";
import pleatingImg from "../../assets/images/m2.png";

const services = [
  {
    title: "Parlour Services",
    description:
      "Comprehensive parlour services designed for your relaxation and beauty maintenance. Pamper yourself with our premium treatments.",
    subServices: ["Wax", "Pedicure", "Manicure", "Threading", "Head Massage"],
  },
  {
    title: "Bridal Makeup",
    description:
      "Flawless, long-lasting makeup customized for your big day. We ensure that you look radiant from the first photo to the last dance.",
    image: bridalImg,
    imgClass: "object-top",
  },
  {
    title: "Party & Event Makeup",
    description:
      "Glamorous and chic looks for your special occasions. Turn heads at any event with a look tailored perfectly to your outfit and the occasion.",
    image: partyImg,
  },
  {
    title: "Models",
    description:
      "Beautiful, camera-ready styles for your romantic portraits. We create versatile looks that work beautifully under any lighting condition.",
    image: modelsImg,
  },
  {
    title: "Hairstyling",
    description:
      "Elegant updos, soft curls, and traditional styles. Complete your look with a hairstyle that complements your facial features and attire.",
    image: hair,
  },
  {
    title: "Saree Pre-pleating",
    description:
      "Perfectly pinned, ironed, and pre-pleated sarees ready to wear in minutes. Ensures a flawless drape and saves you time on your big day.",
    image: pleatingImg,
  },
];

const Services = () => {
  return (
    <section id="services" className="py-32 bg-pink-50 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <h2 className="text-4xl md:text-6xl font-playfair font-bold text-gray-900 mb-6">
            Premium <span className="text-pink-600">Services</span>
          </h2>

          <p className="text-gray-600 text-xl max-w-2xl mx-auto leading-relaxed">
            Discover our range of professional beauty services tailored to make
            you look and feel your absolute best.
          </p>
        </motion.div>

        <div className="space-y-32">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5 }}
              viewport={{ once: true }}
              className={`flex flex-col md:flex-row gap-12 lg:gap-20 items-center ${
                index % 2 !== 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Image */}
              {service.image && (
                <div className="w-full md:w-1/2 aspect-video md:aspect-[4/3] relative rounded-3xl overflow-hidden shadow-2xl group">
                  <img
                    src={service.image}
                    alt={service.title}
                    className={`w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 ${service.imgClass || "object-center"}`}
                  />
                </div>
              )}

              {/* Text */}
              <div className={`w-full ${service.image ? 'md:w-1/2' : 'max-w-4xl mx-auto'} space-y-6`}>
                <h3 className="text-3xl lg:text-4xl font-playfair font-bold text-pink-700">
                  {service.title}
                </h3>

                <div className="w-16 h-1 bg-pink-300 rounded"></div>

                <p className="text-gray-600 text-lg leading-relaxed">
                  {service.description}
                </p>

                {service.subServices && (
                  <div className="flex overflow-x-auto gap-3 pt-2 pb-4 snap-x [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                    {service.subServices.map((sub, i) => (
                      <span key={i} className="snap-start shrink-0 px-5 py-2.5 bg-gradient-to-r from-pink-500 to-pink-600 text-white rounded-full text-sm font-bold shadow-md shadow-pink-500/30 border border-pink-400">
                        {sub}
                      </span>
                    ))}
                  </div>
                )}

                <a href="#contact" className="mt-8 px-8 py-3 bg-white text-pink-600 font-bold rounded-full shadow-md hover:shadow-lg transition-all border border-pink-100 inline-flex items-center w-max gap-2 group">
                  Book this service
                  <span className="transform transition-transform group-hover:translate-x-2">
                    →
                  </span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;