import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white pt-24 pb-10 overflow-hidden">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">

                    {/* Brand */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 1.5, delay: 0.1 }}
                        className="space-y-8 lg:col-span-1"
                    >
                        <h2 className="text-4xl font-bold text-pink-500">
                            Madhumala Makeup Artist
                        </h2>

                        <p className="text-gray-400 leading-relaxed text-lg">
                            Enhancing natural beauty with premium makeup services tailored for your most precious moments.
                        </p>

                        {/* Social Icons */}
                        <div className="flex space-x-4">

                            {/* Instagram */}
                            <a 
                                href="https://www.instagram.com/risewithshannu"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center hover:bg-pink-600 transition"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058z" clipRule="evenodd" />
                                </svg>
                            </a>

                        </div>
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, delay: 0.3 }}
                    >
                        <h4 className="text-xl font-bold mb-6">Quick Links</h4>
                        <ul className="space-y-3 text-gray-400">
                            <li><a href="#home" className="hover:text-pink-500">Home</a></li>
                            <li><a href="#about" className="hover:text-pink-500">About</a></li>
                            <li><a href="#services" className="hover:text-pink-500">Services</a></li>
                            <li><a href="#portfolio" className="hover:text-pink-500">Portfolio</a></li>
                        </ul>
                    </motion.div>

                    {/* Services */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, delay: 0.5 }}
                    >
                        <h4 className="text-xl font-bold mb-6">Services</h4>
                        <ul className="space-y-3 text-gray-400">
                            <li>Bridal Makeup</li>
                            <li>Party Makeup</li>
                            <li>Pre-Wedding Shoots</li>
                            <li>Hairstyling</li>
                        </ul>
                    </motion.div>

                    {/* Working Hours */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, delay: 0.7 }}
                    >
                        <h4 className="text-xl font-bold mb-6">Working Hours</h4>
                        <ul className="space-y-3 text-gray-400">
                            <li>Mon - Fri: 10 AM - 7 PM</li>
                            <li>Saturday: 9 AM - 8 PM</li>
                            <li className="text-pink-500">Sunday: By Appointment</li>
                        </ul>
                    </motion.div>

                </div>

                {/* Bottom */}
                <div className="border-t border-gray-800 pt-6 text-center text-gray-400">
                    <p>
                        © {new Date().getFullYear()} Madhumala Makeup Artist. All Rights Reserved.
                    </p>

                    <p className="mt-2 text-sm">
                        Developed by{" "}
                        <a
                            href="https://www.instagram.com/shannu_webdesigner"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-pink-500 hover:underline"
                        >
                            shannu_webdesigner
                        </a>{" "}
                        | 📞 9381341369
                    </p>
                </div>

            </div>
        </footer>
    );
};

export default Footer;