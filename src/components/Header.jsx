import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Services', href: '#services' },
        { name: 'Portfolio', href: '#portfolio' },
        { name: 'Testimonials', href: '#testimonials' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-4' : 'bg-transparent py-6'}`}>
            <div className="container mx-auto px-6 flex justify-between items-center">
                <a href="#home" className={`text-2xl lg:text-3xl font-bold font-playfair tracking-wide ${isScrolled ? 'text-pink-700' : 'text-pink-900 drop-shadow-sm'}`}>
                    Madhumala_makeupartist
                </a>

                {/* Desktop Nav */}
                <nav className="hidden lg:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <a key={link.name} href={link.href} className={`text-sm tracking-widest uppercase hover:text-pink-600 transition-colors font-medium ${isScrolled ? 'text-gray-700' : 'text-gray-900 drop-shadow-sm'}`}>
                            {link.name}
                        </a>
                    ))}
                    <a href="#booking" className="bg-pink-600 text-white px-6 py-2 rounded-full hover:bg-pink-700 transition-all shadow-md hover:shadow-lg flex items-center gap-2 text-sm font-semibold">
                        <Phone size={16} /> Book Now
                    </a>
                </nav>

                {/* Mobile menu button */}
                <button
                    className="lg:hidden text-gray-800 focus:outline-none"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Nav */}
            <div className={`lg:hidden absolute top-full left-0 w-full bg-white shadow-lg transition-all duration-300 overflow-hidden ${isMobileMenuOpen ? 'max-h-96 py-4' : 'max-h-0'}`}>
                <div className="flex flex-col items-center space-y-4">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-gray-800 font-medium hover:text-pink-600"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {link.name}
                        </a>
                    ))}
                    <a href="#booking" onClick={() => setIsMobileMenuOpen(false)} className="bg-pink-600 text-white px-8 py-2 rounded-full font-semibold shadow-md">
                        Book Now
                    </a>
                </div>
            </div>
        </header>
    );
};

export default Header;
