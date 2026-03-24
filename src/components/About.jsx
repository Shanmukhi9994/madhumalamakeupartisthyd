import React from "react";
import { motion } from "framer-motion";
import { Star, Heart, Sparkles } from "lucide-react";
import aboutImg1 from "../../assets/images/image.png";
import aboutImg2 from "../../assets/images/image1.png";

const About = () => {
  return (
    <section id="about" className="py-32 bg-white relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">

          {/* Text Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 space-y-6"
          >
            <h4 className="text-pink-600 font-bold uppercase tracking-widest text-sm">
              About The Artist
            </h4>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Meet Madhumala_makeupartist
            </h2>

            <div className="w-20 h-1 bg-pink-400 rounded"></div>

            <p className="text-gray-600 text-lg leading-relaxed">
              With a passion for highlighting natural beauty and years of
              experience in the industry, Madhumala_makeupartist has become a trusted name
              for elegant and flawless makeovers.
            </p>

            <p className="text-gray-600 text-lg leading-relaxed">
              Every brush stroke is a step towards realizing your vision,
              ensuring that you not only look stunning but feel confident
              on your special day.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 pt-6">

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center text-pink-600">
                  <Star size={24} />
                </div>

                <div>
                  <h5 className="font-bold text-gray-900 text-xl">5+ Years</h5>
                  <p className="text-gray-500 text-sm">Experience</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center text-pink-600">
                  <Heart size={24} />
                </div>

                <div>
                  <h5 className="font-bold text-gray-900 text-xl">500+</h5>
                  <p className="text-gray-500 text-sm">Happy Brides</p>
                </div>
              </div>

            </div>
          </motion.div>

          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 relative flex items-center gap-4 sm:gap-6"
          >
            {/* Left Image: Arched Top */}
            <div className="w-1/2 mt-12 sm:mt-20">
              <div className="aspect-[4/5] overflow-hidden rounded-t-[100px] rounded-b-3xl shadow-xl">
                <img
                  src={aboutImg1}
                  alt="Makeup Artist Work 1"
                  className="w-full h-full object-cover hover:scale-105 transition duration-700"
                />
              </div>
            </div>

            {/* Right Image: Rounded Rectangle */}
            <div className="w-1/2 pb-12 sm:pb-20">
              <div className="aspect-[3/4] overflow-hidden rounded-3xl shadow-xl">
                <img
                  src={aboutImg2}
                  alt="Makeup Artist Work 2"
                  className="w-full h-full object-cover hover:scale-105 transition duration-700"
                />
              </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute bottom-4 sm:bottom-10 left-1/2 -translate-x-1/2 lg:-left-4 lg:translate-x-0 z-10 bg-white p-4 sm:p-5 rounded-xl shadow-lg flex items-center gap-3 w-max">
              <div className="w-10 h-10 bg-pink-500 text-white rounded-full flex items-center justify-center">
                <Sparkles size={20} />
              </div>

              <div>
                <p className="text-pink-600 font-bold">Certified</p>
                <p className="text-gray-500 text-sm">Professional MUA</p>
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;