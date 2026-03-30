import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { portfolioData } from '../data';
import { useRef, useState } from 'react';

// Custom Magnetic effect wrapper
const MagneticWrapper = ({ children, className }) => {
    const ref = useRef(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouse = (e) => {
        const { clientX, clientY } = e;
        const { height, width, left, top } = ref.current.getBoundingClientRect();
        const middleX = clientX - (left + width / 2);
        const middleY = clientY - (top + height / 2);
        setPosition({ x: middleX * 0.2, y: middleY * 0.2 });
    };

    const reset = () => {
        setPosition({ x: 0, y: 0 });
    };

    const { x, y } = position;
    return (
        <motion.div
            style={{ position: 'relative' }}
            ref={ref}
            onMouseMove={handleMouse}
            onMouseLeave={reset}
            animate={{ x, y }}
            transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

const Contact = () => {
    const { email, phone, location } = portfolioData.personalInfo;

    return (
        <section id="contact" className="py-24 relative overflow-hidden bg-white transition-colors duration-500">

            <div className="w-11/12 max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="text-center mb-20 md:mb-28"
                >
                    <span className="inline-block py-1 px-4 text-slate-900 font-bold tracking-[0.2em] text-xs uppercase mb-6 border-b border-slate-900">Connect</span>
                    <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold text-slate-900 mb-8 font-heading uppercase tracking-tighter">
                        Get In Touch
                    </h2>
                    <div className="w-16 h-1 bg-slate-900 mx-auto mb-10"></div>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
                    {/* Contact Information */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="space-y-10"
                    >
                        <div className="border-b border-slate-900 pb-8 mb-8">
                            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tighter font-heading uppercase">Let's build something awesome together.</h3>
                            <p className="text-slate-900 opacity-80 text-lg leading-relaxed font-mono text-sm uppercase tracking-wider">
                                I am currently open to new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you.
                            </p>
                        </div>

                        <div className="space-y-6">
                            {[
                                { icon: Mail, label: 'Email Me', value: email, link: `mailto:${email}` },
                                { icon: Phone, label: 'Call Me', value: phone, link: `tel:${phone}` },
                                { icon: MapPin, label: 'Location', value: location, link: null }
                            ].map((info, index) => (
                                <MagneticWrapper key={index} className="flex items-center gap-6 group cursor-pointer w-full p-6 bg-[#F4F4F1] editorial-border hover:bg-slate-900 hover:text-white transition-colors duration-300">
                                    <div className={`text-slate-900 group-hover:text-white transition-colors duration-300 pointer-events-none`}>
                                        <info.icon size={28} strokeWidth={1} />
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold tracking-widest uppercase mb-1 opacity-60 pointer-events-none">{info.label}</p>
                                        {info.link ? (
                                            <a href={info.link} className="text-lg md:text-xl font-bold tracking-tight inline-block pointer-events-auto">
                                                {info.value}
                                            </a>
                                        ) : (
                                            <p className="text-lg md:text-xl font-bold tracking-tight pointer-events-none">{info.value}</p>
                                        )}
                                    </div>
                                </MagneticWrapper>
                            ))}
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="bg-[#F4F4F1] p-8 md:p-12 editorial-border relative overflow-hidden shadow-[8px_8px_0px_#1c1c1c]"
                    >
                        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div className="group">
                                    <label htmlFor="name" className="block text-xs font-bold text-slate-900 uppercase tracking-widest mb-3">Your Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        className="w-full bg-white border border-slate-300 px-5 py-4 text-slate-900 focus:outline-none focus:border-slate-900 transition-colors rounded-none"
                                        placeholder="Firoz Al Mahmud"
                                    />
                                </div>
                                <div className="group">
                                    <label htmlFor="email" className="block text-xs font-bold text-slate-900 uppercase tracking-widest mb-3">Your Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="w-full bg-white border border-slate-300 px-5 py-4 text-slate-900 focus:outline-none focus:border-slate-900 transition-colors rounded-none"
                                        placeholder="firoz@example.com"
                                    />
                                </div>
                            </div>
                            <div className="group">
                                <label htmlFor="subject" className="block text-xs font-bold text-slate-900 uppercase tracking-widest mb-3">Subject</label>
                                <input
                                    type="text"
                                    id="subject"
                                    className="w-full bg-white border border-slate-300 px-5 py-4 text-slate-900 focus:outline-none focus:border-slate-900 transition-colors rounded-none"
                                    placeholder="Project Inquiry"
                                />
                            </div>
                            <div className="group">
                                <label htmlFor="message" className="block text-xs font-bold text-slate-900 uppercase tracking-widest mb-3">Message</label>
                                <textarea
                                    id="message"
                                    rows="5"
                                    className="w-full bg-white border border-slate-300 px-5 py-4 text-slate-900 focus:outline-none focus:border-slate-900 transition-colors resize-none rounded-none"
                                    placeholder="Hello, I'd like to talk about..."
                                ></textarea>
                            </div>

                            <MagneticWrapper>
                                <motion.button
                                    whileTap={{ scale: 0.98 }}
                                    type="submit"
                                    className="btn-primary w-full flex items-center justify-center gap-3"
                                >
                                    <span>Send Message</span>
                                    <Send size={18} />
                                </motion.button>
                            </MagneticWrapper>
                            <p className="text-center text-xs text-slate-500 mt-6 font-mono uppercase tracking-widest flex items-center justify-center gap-2">
                                <span className="w-2 h-2 rounded-none bg-slate-900"></span>
                                Typically replies within 24 hours
                            </p>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
