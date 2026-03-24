import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Instagram } from 'lucide-react';

const Booking = () => {

const [formData, setFormData] = useState({
firstName: "",
lastName: "",
email: "",
service: "",
message: ""
});

const handleChange = (e) => {
setFormData({
...formData,
[e.target.name]: e.target.value
});
};

const sendToWhatsApp = () => {

const phoneNumber = "918919886895";

const message = `
New Booking Request

Name: ${formData.firstName} ${formData.lastName}
Email: ${formData.email}
Service: ${formData.service}

Message:
${formData.message}
`;

const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

window.open(url, "_blank");

};

return (
<section id="contact" className="py-32 bg-pink-50 relative">

<div className="container mx-auto px-6 max-w-6xl">

<motion.div
initial={{ opacity: 0, y: 100 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
transition={{ duration: 1.5 }}
className="bg-white rounded-[3rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row"
>

{/* Contact Info */}

<div className="w-full lg:w-2/5 p-10 bg-pink-600 text-white flex flex-col justify-center">

<h3 className="text-4xl font-bold mb-6">Let's Talk Beauty</h3>

<p className="text-pink-100 mb-10">
Ready to look your best? Book an appointment or contact us directly.
</p>

<div className="space-y-8">

<div className="flex items-center gap-4">
<Phone size={22} />
<p>8919886895</p>
</div>

<div className="flex items-center gap-4">
<Mail size={22} />
<p>hello@madhumala_makeupartist.com</p>
</div>

<div className="flex items-start gap-4">
<MapPin size={22} />
<div>
<p>Madhumala Makeupartist Wanaparthy</p>

<a
href="https://www.google.com/maps/place/Madhumala+make-up+artist/@16.3698437,78.0657988,17z/data=!3m1!4b1!4m6!3m5!1s0x3bca054b39f2a0bf:0x1efa1e52d022e90e!8m2!3d16.3698437!4d78.0683737!16s%2Fg%2F11wmhhcgd4?entry=ttu&g_ep=EgoyMDI2MDMxOC4xIKXMDSoASAFQAw%3D%3D"
target="_blank"
rel="noopener noreferrer"
className="underline text-white hover:text-pink-200"
>
View on Google Maps
</a>

</div>
</div>

{/* Instagram */}
<div className="flex items-center gap-4">
<Instagram size={22} />
<a
href="https://www.instagram.com/madhumala_makeupartist?igsh=MTd5bWVsd3l6NTJnbg=="
target="_blank"
rel="noopener noreferrer"
className="underline hover:text-pink-200"
>
Follow on Instagram
</a>
</div>

</div>

</div>

{/* Booking Form */}

<div className="w-full lg:w-3/5 p-10">

<h3 className="text-3xl font-bold mb-8">
Book an <span className="text-pink-600">Appointment</span>
</h3>

<form className="space-y-6">

<div className="grid md:grid-cols-2 gap-6">

<input
type="text"
name="firstName"
placeholder="First Name"
onChange={handleChange}
className="w-full px-5 py-3 border rounded-lg"
/>

<input
type="text"
name="lastName"
placeholder="Last Name"
onChange={handleChange}
className="w-full px-5 py-3 border rounded-lg"
/>

</div>

<input
type="email"
name="email"
placeholder="Email Address"
onChange={handleChange}
className="w-full px-5 py-3 border rounded-lg"
/>

<select
name="service"
onChange={handleChange}
className="w-full px-5 py-3 border rounded-lg"
>
<option value="">Select Service</option>
<option>Bridal Makeup</option>
<option>Party Makeup</option>
<option>Pre-Wedding Shoot</option>
<option>Hairstyling</option>
</select>

<textarea
rows="4"
name="message"
placeholder="Tell us about your event..."
onChange={handleChange}
className="w-full px-5 py-3 border rounded-lg"
/>

<button
type="button"
onClick={sendToWhatsApp}
className="w-full bg-black text-white py-4 rounded-lg hover:bg-pink-600 transition"
>
Send Request
</button>

</form>

</div>

</motion.div>

{/* Google Map */}

<div className="mt-16 rounded-3xl overflow-hidden shadow-xl">

<iframe
title="Madhumala Makeup Artist Location"
src="https://maps.google.com/maps?q=Madhumala+Makeup+Artist,+Wanaparthy&z=15&output=embed"
className="w-full h-96 border-0"
loading="lazy"
></iframe>

</div>

</div>

</section>
);
};

export default Booking;