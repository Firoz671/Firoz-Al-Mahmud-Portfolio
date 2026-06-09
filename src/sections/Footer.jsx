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
        <footer className="relative bg-[#F4F4F1] pt-20 pb-10 overflow-hidden border-t border-slate-200 transition-colors duration-500">
            <div className="w-11/12 max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-16">
                    {/* Brand & description */}
                    <div className="lg:col-span-2">
                        <span className="text-5xl font-bold text-slate-900 mb-6 inline-block font-heading tracking-tighter uppercase">FIROZ</span>
                        <p className="text-slate-900 opacity-80 leading-relaxed max-w-sm mb-8 text-base">
                            Building exceptional digital experiences with modern web technologies. Focused on beautiful design, clean code, and interactive user interfaces.
                        </p>
                        <div className="flex items-center gap-4">
                            <MagneticWrapper>
                                <a href={github} target="_blank" rel="noreferrer" className="w-12 h-12 bg-white border border-slate-200 rounded-full flex items-center justify-center text-slate-700 shadow-sm hover:text-white hover:bg-slate-900 hover:border-slate-900 hover:shadow-lg transition-all duration-500 ease-out">
                                    <FaGithub size={20} />
                                </a>
                            </MagneticWrapper>
                            <MagneticWrapper>
                                <a href={linkedin} target="_blank" rel="noreferrer" className="w-12 h-12 bg-white border border-slate-200 rounded-full flex items-center justify-center text-slate-700 shadow-sm hover:text-white hover:bg-slate-900 hover:border-slate-900 hover:shadow-lg transition-all duration-500 ease-out">
                                    <FaLinkedin size={20} />
                                </a>
                            </MagneticWrapper>
                            <MagneticWrapper>
                                <a href={`mailto:${email}`} className="w-12 h-12 bg-white border border-slate-200 rounded-full flex items-center justify-center text-slate-700 shadow-sm hover:text-white hover:bg-slate-900 hover:border-slate-900 hover:shadow-lg transition-all duration-500 ease-out">
                                    <Mail size={20} />
                                </a>
                            </MagneticWrapper>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-slate-900 font-bold mb-6 uppercase tracking-widest text-xs flex items-center gap-3">
                            <span className="w-2 h-2 rounded-full bg-slate-900 border border-slate-900"></span>
                            Quick Links
                        </h4>
                        <ul className="space-y-4">
                            {['Home', 'Skills', 'Projects', 'Education', 'Contact'].map((item) => (
                                <li key={item}>
                                    <a href={`#${item.toLowerCase()}`} className="text-slate-900 opacity-80 hover:opacity-100 flex items-center gap-3 transition-opacity duration-300 group text-sm font-bold uppercase tracking-wider">
                                        <span className="w-1 h-1 rounded-full bg-slate-900 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out"></span>
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact details */}
                    <div>
                        <h4 className="text-slate-900 font-bold mb-6 uppercase tracking-widest text-xs flex items-center gap-3">
                            <span className="w-2 h-2 rounded-full bg-transparent border border-slate-900"></span>
                            Contact Info
                        </h4>
                        <ul className="space-y-6 text-sm font-mono uppercase tracking-widest opacity-80">
                            <li className="flex items-start gap-4 text-slate-900">
                                <div className="mt-0.5">
                                    <MapPin size={16} />
                                </div>
                                <span className="pt-0.5 leading-tight">{location}</span>
                            </li>
                            <li className="flex items-center gap-4 text-slate-900">
                                <div>
                                    <Phone size={16} />
                                </div>
                                <span>{phone}</span>
                            </li>
                            <li className="flex items-center gap-4 text-slate-900">
                                <div>
                                    <Mail size={16} />
                                </div>
                                <a href={`mailto:${email}`} className="hover:text-slate-900 transition-colors block truncate font-bold">{email}</a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-slate-200 pt-8 pb-4 flex flex-col md:flex-row items-center justify-between gap-6 relative">
                    <p className="text-slate-900 text-xs uppercase tracking-widest font-bold flex items-center gap-2">
                        © {new Date().getFullYear()} {name}. <Heart size={14} className="text-slate-900 fill-slate-900" />
                    </p>

                    {/* Back to top magnetic button */}
                    <MagneticWrapper className="absolute -top-6 right-4 md:static">
                        <button
                            onClick={scrollToTop}
                            className="w-12 h-12 rounded-full bg-white border border-slate-200 shadow-sm hover:bg-slate-900 hover:text-white flex items-center justify-center text-slate-700 transition-all duration-500 ease-out group overflow-hidden"
                            aria-label="Scroll to top"
                        >
                            <ArrowUp size={20} className="group-hover:-translate-y-12 transition-transform duration-500 ease-out" />
                            <ArrowUp size={20} className="absolute translate-y-12 group-hover:translate-y-0 text-white transition-transform duration-500 ease-out" />
                        </button>
                    </MagneticWrapper>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
