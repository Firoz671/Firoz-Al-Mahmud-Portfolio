import { motion } from 'framer-motion';
import { Heart, ArrowUp, Mail, MapPin, Phone } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { portfolioData } from '../data';

const Footer = () => {
    const { name, github, linkedin, email, phone, location } = portfolioData.personalInfo;

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="relative bg-[#020617] pt-20 pb-10 overflow-hidden border-t border-slate-800/50">
            {/* Animated Gradient Border Top */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500 to-purple-500 opacity-50"></div>

            {/* Background Glows */}
            <div className="absolute -top-40 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none"></div>
            <div className="absolute -bottom-40 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="w-11/12 mx-auto px-6 sm:px-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand & description */}
                    <div className="lg:col-span-2">
                        <span className="text-3xl font-extrabold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-4 block inline-block">Firoz.</span>
                        <p className="text-slate-400 leading-relaxed max-w-sm mb-8 text-sm sm:text-base">
                            Building exceptional digital experiences with modern web technologies. Focused on beautiful design, clean code, and interactive user interfaces.
                        </p>
                        <div className="flex items-center gap-4">
                            <a href={github} target="_blank" rel="noreferrer" className="w-12 h-12 rounded-2xl bg-slate-800/80 border border-slate-700/50 flex items-center justify-center text-slate-400 hover:text-white hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-all duration-300">
                                <FaGithub size={20} />
                            </a>
                            <a href={linkedin} target="_blank" rel="noreferrer" className="w-12 h-12 rounded-2xl bg-slate-800/80 border border-slate-700/50 flex items-center justify-center text-slate-400 hover:text-[#0A66C2] hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(10,102,194,0.3)] transition-all duration-300">
                                <FaLinkedin size={20} />
                            </a>
                            <a href={`mailto:${email}`} className="w-12 h-12 rounded-2xl bg-slate-800/80 border border-slate-700/50 flex items-center justify-center text-slate-400 hover:text-pink-400 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(244,114,182,0.3)] transition-all duration-300">
                                <Mail size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
                            Quick Links
                        </h4>
                        <ul className="space-y-4">
                            {['Home', 'Skills', 'Projects', 'Education', 'Contact'].map((item) => (
                                <li key={item}>
                                    <a href={`#${item.toLowerCase()}`} className="text-slate-400 hover:text-cyan-400 flex items-center gap-3 transition-colors duration-300 group text-sm sm:text-base font-medium">
                                        <span className="w-0 h-[2px] bg-cyan-400 group-hover:w-4 transition-all duration-300 ease-out"></span>
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact details */}
                    <div>
                        <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse"></span>
                            Contact Info
                        </h4>
                        <ul className="space-y-5 text-sm sm:text-base">
                            <li className="flex items-start gap-4 text-slate-400 group">
                                <div className="mt-1 p-2 bg-cyan-500/10 rounded-lg text-cyan-400 group-hover:bg-cyan-500/20 transition-colors">
                                    <MapPin size={16} />
                                </div>
                                <span className="pt-1">{location}</span>
                            </li>
                            <li className="flex items-center gap-4 text-slate-400 group">
                                <div className="p-2 bg-purple-500/10 rounded-lg text-purple-400 group-hover:bg-purple-500/20 transition-colors">
                                    <Phone size={16} />
                                </div>
                                <span>{phone}</span>
                            </li>
                            <li className="flex items-center gap-4 text-slate-400 group">
                                <div className="p-2 bg-pink-500/10 rounded-lg text-pink-400 group-hover:bg-pink-500/20 transition-colors">
                                    <Mail size={16} />
                                </div>
                                <a href={`mailto:${email}`} className="hover:text-white transition-colors block truncate">{email}</a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-slate-800/60 pt-8 pb-4 flex flex-col md:flex-row items-center justify-between gap-6 relative">
                    <p className="text-slate-500 text-sm flex items-center gap-2 font-medium">
                        © {new Date().getFullYear()} {name}. Built with <Heart size={14} className="text-red-500 fill-red-500 animate-pulse drop-shadow-[0_0_5px_rgba(239,68,68,0.5)]" /> & React.
                    </p>

                    {/* Back to top button */}
                    <button
                        onClick={scrollToTop}
                        className="w-12 h-12 absolute -top-6 right-0 md:static md:w-14 md:h-14 rounded-full bg-slate-800/80 backdrop-blur-md border border-slate-700/50 hover:bg-slate-700/80 flex items-center justify-center text-cyan-400 transition-all duration-300 group hover:shadow-[0_0_20px_rgba(34,211,238,0.3)] hover:border-cyan-500/30 overflow-hidden"
                        aria-label="Scroll to top"
                    >
                        <ArrowUp size={22} className="group-hover:-translate-y-12 transition-transform duration-300" />
                        <ArrowUp size={22} className="absolute translate-y-12 group-hover:translate-y-0 transition-transform duration-300" />
                    </button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
