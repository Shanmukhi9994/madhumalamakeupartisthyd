import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Transformations from './components/Transformations';
import Testimonials from './components/Testimonials';
import Booking from './components/Booking';
import Footer from './components/Footer';

const App = () => {
    return (
        <div className="min-h-screen font-montserrat tracking-tight selection:bg-pink-200 selection:text-pink-900">
            <Header />
            <Hero />
            <About />
            <Services />
            <Portfolio />
            <Transformations />
            <Testimonials />
            <Booking />
            <Footer />
        </div>
    );
};

export default App;
