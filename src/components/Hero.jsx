import React from "react";
import { motion } from "framer-motion";
import heroBg from "../../assets/images/makeup.jpg";   // import image

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 3, ease: "easeOut" }}
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundPositionY: "20%",
        }}
      >
        <div className="absolute inset-0 bg-white/40 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-pink-100/80 to-transparent"></div>
      </motion.div>

      <div className="container relative z-10 px-6 mx-auto flex flex-col items-start pt-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.8, ease: "easeOut", delay: 0.2 }}
          className="max-w-2xl"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 1 }}
            className="text-sm md:text-md uppercase tracking-[0.3em] text-pink-700 font-semibold mb-4"
          >
            Welcome to Madhumala Makeup Artist
          </motion.p>

          <h1 className="text-5xl md:text-7xl font-playfair font-bold text-gray-900 leading-tight mb-8">
            Enhance Your <br />
            <span className="text-pink-600">Natural Beauty</span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 1.2 }}
            className="text-lg text-gray-800 mb-10 max-w-xl leading-relaxed"
          >
            Premium bridal and party makeup services by expert artist
            Madhumala_makeupartist. We bring out your inner radiance for the moments that
            truly matter.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 1.5 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#booking"
              className="bg-pink-600 text-white px-8 py-4 rounded-full font-semibold shadow-xl shadow-pink-500/30 hover:bg-pink-700 transition-all hover:-translate-y-1 text-center"
            >
              Book an Appointment
            </a>

            <a
              href="#portfolio"
              className="bg-white text-pink-700 px-8 py-4 rounded-full font-semibold shadow-md border border-pink-100 hover:bg-pink-50 transition-all text-center"
            >
              View Portfolio
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;