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
        <section id="contact" className="py-24 relative overflow-hidden bg-slate-50/50 dark:bg-slate-900/50 transition-colors duration-500">
            {/* Background Orbs */}
            <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-primary/5 dark:bg-primary/10 blur-[100px] rounded-full pointer-events-none"></div>
            <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-secondary/5 dark:bg-secondary/10 blur-[100px] rounded-full pointer-events-none"></div>

            <div className="w-11/12 max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="text-center mb-20"
                >
                    <span className="inline-block py-1.5 px-4 rounded-full bg-primary/10 dark:bg-primary/20 text-primary dark:text-sky-300 font-bold text-sm mb-4 tracking-wider uppercase border border-primary/20">Connect</span>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6 font-heading">
                        Get In <span className="text-gradient">Touch</span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-6"></div>
                    <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg font-medium">
                        Have a project in mind or just want to say hi? Feel free to connect!
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
                    {/* Contact Information */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="space-y-10"
                    >
                        <div>
                            <h3 className="text-3xl font-extrabold text-slate-900 dark:text-white mb-4 tracking-tight font-heading">Let's build something awesome together!</h3>
                            <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed font-medium">
                                I am currently open to new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                            </p>
                        </div>

                        <div className="space-y-8">
                            {[
                                { icon: Mail, label: 'Email Me', value: email, link: `mailto:${email}`, color: 'text-primary', bgHover: 'group-hover:bg-primary' },
                                { icon: Phone, label: 'Call Me', value: phone, link: `tel:${phone}`, color: 'text-secondary', bgHover: 'group-hover:bg-secondary' },
                                { icon: MapPin, label: 'Location', value: location, link: null, color: 'text-emerald-500', bgHover: 'group-hover:bg-emerald-500' }
                            ].map((info, index) => (
                                <MagneticWrapper key={index} className="flex items-center gap-6 group cursor-pointer w-max">
                                    <div className={`w-14 h-14 bg-white dark:bg-slate-800/80 backdrop-blur-md rounded-2xl flex items-center justify-center ${info.color} shadow-[0_5px_15px_rgba(0,0,0,0.05)] dark:shadow-[0_5px_15px_rgba(0,0,0,0.2)] border border-slate-100 dark:border-slate-700/50 ${info.bgHover} group-hover:text-white group-hover:-translate-y-1 group-hover:scale-105 transition-all duration-300 pointer-events-none`}>
                                        <info.icon size={24} />
                                    </div>
                                    <div>
                                        <p className="text-sm text-slate-500 dark:text-slate-400 font-bold tracking-wide uppercase mb-1 pointer-events-none">{info.label}</p>
                                        {info.link ? (
                                            <a href={info.link} className="text-xl font-bold text-slate-900 dark:text-white hover:text-primary dark:hover:text-primary transition-colors inline-block pointer-events-auto">
                                                {info.value}
                                            </a>
                                        ) : (
                                            <p className="text-xl font-bold text-slate-900 dark:text-white pointer-events-none">{info.value}</p>
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
                        className="bg-white/80 dark:bg-slate-800/40 backdrop-blur-xl p-8 sm:p-10 rounded-[2rem] border border-slate-200 dark:border-slate-700/50 shadow-xl relative overflow-hidden"
                    >
                        {/* Shimmer effect line */}
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-primary opacity-50 bg-[length:200%_auto] animate-[shimmer_3s_linear_infinite]"></div>

                        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div className="group">
                                    <label htmlFor="name" className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2 group-focus-within:text-primary transition-colors">Your Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        className="w-full bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700/50 rounded-xl px-5 py-4 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all shadow-inner"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div className="group">
                                    <label htmlFor="email" className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2 group-focus-within:text-primary transition-colors">Your Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="w-full bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700/50 rounded-xl px-5 py-4 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all shadow-inner"
                                        placeholder="john@example.com"
                                    />
                                </div>
                            </div>
                            <div className="group">
                                <label htmlFor="subject" className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2 group-focus-within:text-primary transition-colors">Subject</label>
                                <input
                                    type="text"
                                    id="subject"
                                    className="w-full bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700/50 rounded-xl px-5 py-4 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all shadow-inner"
                                    placeholder="Project Inquiry"
                                />
                            </div>
                            <div className="group">
                                <label htmlFor="message" className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2 group-focus-within:text-primary transition-colors">Message</label>
                                <textarea
                                    id="message"
                                    rows="5"
                                    className="w-full bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700/50 rounded-xl px-5 py-4 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all resize-none shadow-inner"
                                    placeholder="Hello, I'd like to talk about..."
                                ></textarea>
                            </div>

                            <MagneticWrapper>
                                <button
                                    type="submit"
                                    className="w-full py-4.5 bg-gradient-to-r from-primary to-sky-500 text-white rounded-xl font-bold flex items-center justify-center gap-3 hover:shadow-[0_10px_30px_rgba(14,165,233,0.3)] transition-all duration-300 hover:scale-[1.02]"
                                >
                                    <span>Send Message</span>
                                    <Send size={20} className="animate-pulse" />
                                </button>
                            </MagneticWrapper>
                            <p className="text-center text-xs text-slate-500 dark:text-slate-400 mt-4 font-medium flex items-center justify-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
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
