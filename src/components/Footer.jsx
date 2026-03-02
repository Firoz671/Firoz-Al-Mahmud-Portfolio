import { motion } from 'framer-motion';
import { Heart, ArrowUp, Mail, MapPin, Phone } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
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

const Footer = () => {
    const { name, github, linkedin, email, phone, location } = portfolioData.personalInfo;

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="relative bg-white dark:bg-[#020617] pt-20 pb-10 overflow-hidden border-t border-slate-200 dark:border-slate-800/50 transition-colors duration-500">
            {/* Animated Gradient Border Top */}
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-primary to-secondary opacity-30 dark:opacity-50"></div>

            {/* Background Glows */}
            <div className="absolute -top-40 left-1/4 w-96 h-96 bg-primary/5 dark:bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none"></div>
            <div className="absolute -bottom-40 right-1/4 w-96 h-96 bg-secondary/5 dark:bg-purple-500/10 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="w-11/12 max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-16">
                    {/* Brand & description */}
                    <div className="lg:col-span-2">
                        <span className="text-3xl font-extrabold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-5 inline-block font-heading tracking-tight">Firoz.</span>
                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed max-w-sm mb-8 text-base font-medium">
                            Building exceptional digital experiences with modern web technologies. Focused on beautiful design, clean code, and interactive user interfaces.
                        </p>
                        <div className="flex items-center gap-5">
                            <MagneticWrapper>
                                <a href={github} target="_blank" rel="noreferrer" className="w-12 h-12 rounded-2xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/50 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-white dark:hover:bg-slate-800 hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_10px_20px_rgba(255,255,255,0.1)] transition-all duration-300">
                                    <FaGithub size={22} />
                                </a>
                            </MagneticWrapper>
                            <MagneticWrapper>
                                <a href={linkedin} target="_blank" rel="noreferrer" className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-slate-800/80 border border-blue-100 dark:border-slate-700/50 flex items-center justify-center text-blue-600 dark:text-slate-400 hover:text-white hover:bg-[#0A66C2] dark:hover:bg-[#0A66C2] dark:hover:text-white hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(10,102,194,0.3)] transition-all duration-300">
                                    <FaLinkedin size={22} />
                                </a>
                            </MagneticWrapper>
                            <MagneticWrapper>
                                <a href={`mailto:${email}`} className="w-12 h-12 rounded-2xl bg-pink-50 dark:bg-slate-800/80 border border-pink-100 dark:border-slate-700/50 flex items-center justify-center text-pink-600 dark:text-slate-400 hover:text-white hover:bg-pink-500 dark:hover:bg-pink-500 dark:hover:text-white hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(236,72,153,0.3)] transition-all duration-300">
                                    <Mail size={22} />
                                </a>
                            </MagneticWrapper>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-slate-900 dark:text-white font-bold mb-6 uppercase tracking-wider text-sm flex items-center gap-2">
                            <span className="w-2.5 h-2.5 rounded-full bg-primary animate-[pulse_2s_infinite]"></span>
                            Quick Links
                        </h4>
                        <ul className="space-y-4 font-medium">
                            {['Home', 'Skills', 'Projects', 'Education', 'Contact'].map((item) => (
                                <li key={item}>
                                    <a href={`#${item.toLowerCase()}`} className="text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary flex items-center gap-3 transition-colors duration-300 group text-base">
                                        <span className="w-0 h-[2px] bg-primary group-hover:w-4 transition-all duration-300 ease-out rounded-full"></span>
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact details */}
                    <div>
                        <h4 className="text-slate-900 dark:text-white font-bold mb-6 uppercase tracking-wider text-sm flex items-center gap-2">
                            <span className="w-2.5 h-2.5 rounded-full bg-secondary animate-[pulse_2s_infinite_1s]"></span>
                            Contact Info
                        </h4>
                        <ul className="space-y-5 text-base font-medium">
                            <li className="flex items-start gap-4 text-slate-600 dark:text-slate-400 group">
                                <div className="mt-0.5 p-2 bg-primary/10 rounded-xl text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                    <MapPin size={18} />
                                </div>
                                <span className="pt-1 leading-tight">{location}</span>
                            </li>
                            <li className="flex items-center gap-4 text-slate-600 dark:text-slate-400 group">
                                <div className="p-2 bg-secondary/10 rounded-xl text-secondary group-hover:bg-secondary group-hover:text-white transition-colors duration-300">
                                    <Phone size={18} />
                                </div>
                                <span>{phone}</span>
                            </li>
                            <li className="flex items-center gap-4 text-slate-600 dark:text-slate-400 group">
                                <div className="p-2 bg-pink-500/10 rounded-xl text-pink-500 group-hover:bg-pink-500 group-hover:text-white transition-colors duration-300">
                                    <Mail size={18} />
                                </div>
                                <a href={`mailto:${email}`} className="hover:text-slate-900 dark:hover:text-white transition-colors block truncate">{email}</a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-slate-200 dark:border-slate-800/80 pt-8 pb-4 flex flex-col md:flex-row items-center justify-between gap-6 relative">
                    <p className="text-slate-600 dark:text-slate-500 text-sm flex items-center gap-2 font-bold">
                        © {new Date().getFullYear()} {name}. Built with <Heart size={16} className="text-red-500 fill-red-500 animate-[pulse_2s_infinite] drop-shadow-[0_0_8px_rgba(239,68,68,0.5)]" /> & React.
                    </p>

                    {/* Back to top magnetic button */}
                    <MagneticWrapper className="absolute -top-6 right-4 md:static">
                        <button
                            onClick={scrollToTop}
                            className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white dark:bg-slate-800/80 backdrop-blur-md border border-slate-200 dark:border-slate-700/50 hover:bg-slate-50 dark:hover:bg-slate-700/80 flex items-center justify-center text-primary transition-all duration-300 group hover:shadow-[0_10px_20px_rgba(14,165,233,0.3)] hover:border-primary/50 overflow-hidden"
                            aria-label="Scroll to top"
                        >
                            <ArrowUp size={24} className="group-hover:-translate-y-12 transition-transform duration-300" />
                            <ArrowUp size={24} className="absolute translate-y-12 group-hover:translate-y-0 text-secondary transition-transform duration-300" />
                        </button>
                    </MagneticWrapper>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
