import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
    {
        name: "Priya Sharma",
        event: "Bridal Makeup",
        text: "Madhumala_makeupartist is truly a magician! She made me look so natural yet glamorous on my wedding day. Her attention to detail is unmatched, and the makeup stayed flawless through all the ceremonies.",
        rating: 5
    },
    {
        name: "Anjali Verma",
        event: "Party Look",
        text: "I booked her for my sister's reception and I received so many compliments. She understood exactly what I wanted and executed it perfectly. Highly recommend her services!",
        rating: 5
    },
    {
        name: "Neha Gupta",
        event: "Pre-Wedding Shoot",
        text: "Absolutely loved the looks she created for my pre-wedding shoot. She is super professional, friendly, and makes you feel very comfortable. The products used were top-notch.",
        rating: 5
    }
];

const Testimonials = () => {
    return (
        <section id="testimonials" className="py-32 bg-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-pink-100/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-pink-100/50 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1.5 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-5xl font-playfair font-bold text-gray-900 mb-6">Client <span className="text-pink-600">Love</span></h2>
                    <p className="text-gray-600 text-xl max-w-2xl mx-auto leading-relaxed">Hear what our beautiful brides and clients have to say about their experience.</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 80 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.5, delay: index * 0.3 }}
                            viewport={{ once: true, margin: "-50px" }}
                            className="bg-pink-50/50 backdrop-blur border border-pink-100 p-10 rounded-[2.5rem] shadow-xl shadow-pink-100/20 relative group hover:-translate-y-2 transition-transform duration-500"
                        >
                            <div className="text-pink-400 mb-8 flex gap-1">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                    </svg>
                                ))}
                            </div>
                            <p className="text-gray-700 italic mb-10 text-lg leading-relaxed relative z-10 before:content-['\201C'] before:text-8xl before:text-pink-200/50 before:absolute before:-top-10 before:-left-4 before:-z-10 group-hover:before:text-pink-300 transition-colors duration-500">"{testimonial.text}"</p>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-pink-200 flex items-center justify-center text-pink-700 font-bold text-xl uppercase">
                                    {testimonial.name.charAt(0)}
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900 text-lg">{testimonial.name}</h4>
                                    <p className="text-pink-600 text-sm font-semibold tracking-wider uppercase">{testimonial.event}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
