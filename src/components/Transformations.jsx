import React from 'react';
import { motion } from 'framer-motion';
import beforeImg from "../../assets/images/before.png";
import afterImg from "../../assets/images/after.png";

const Transformations = () => {
    return (
        <section id="transformations" className="py-32 bg-pink-50/50">
            <div className="container mx-auto px-6 max-w-6xl">

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.5 }}
                    className="text-center mb-24"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        Real <span className="text-pink-600">Transformations</span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

                    {/* Before */}
                    <div className="aspect-[3/4] rounded-3xl overflow-hidden shadow-xl relative">
                        <p className="absolute top-6 left-6 bg-white px-6 py-2 rounded-full text-sm font-bold">
                            Before
                        </p>

                        <img
                            src={beforeImg}
                            alt="Before Makeup"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* After */}
                    <div className="aspect-[3/4] rounded-3xl overflow-hidden shadow-xl relative">
                        <p className="absolute top-6 right-6 bg-pink-600 text-white px-6 py-2 rounded-full text-sm font-bold">
                            After
                        </p>

                        <img
                            src={afterImg}
                            alt="After Makeup"
                            className="w-full h-full object-cover"
                        />
                    </div>

                </div>

            </div>
        </section>
    );
};

export default Transformations;