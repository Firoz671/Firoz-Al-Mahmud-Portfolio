import { motion, useScroll, useTransform } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import { Github, Linkedin, Mail, Download, ArrowRight } from 'lucide-react';
import { portfolioData } from '../data';
import { useRef } from 'react';

const Hero = () => {
    const { name, title, github, linkedin } = portfolioData.personalInfo;
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    });

    // Parallax effect on scroll
    const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacityBg = useTransform(scrollYProgress, [0, 1], [1, 0]);

    return (
        <section ref={ref} id="home" className="min-h-screen flex items-center justify-center relative pt-20 overflow-hidden">
            <motion.div style={{ y: yBg, opacity: opacityBg }} className="w-full max-w-7xl mx-auto px-6 lg:px-8 z-10 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">

                {/* Text Content */}
                <div className="text-center lg:text-left flex-1 order-2 lg:order-1 mt-12 lg:mt-0">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                        <span className="inline-block py-1.5 px-4 rounded-full bg-primary/10 dark:bg-primary/20 text-primary dark:text-sky-300 font-semibold text-sm mb-6 border border-primary/20 dark:border-primary/30 shadow-none dark:shadow-[0_0_15px_rgba(14,165,233,0.15)] uppercase tracking-wider">
                            Frontend Developer | React Specialist
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                        className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight leading-[1.1]"
                    >
                        Hi, I'm <span className="text-gradient block mt-2">{name.split(' ')[0]}</span>
                    </motion.h1>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                        className="text-xl md:text-3xl font-semibold text-slate-700 dark:text-slate-300 mb-6 h-12 flex items-center justify-center lg:justify-start"
                    >
                        <span className="mr-2">I build</span>
                        <span className="text-primary dark:text-sky-400 border-b-2 border-primary/30">
                            <Typewriter
                                words={['Scalable Web Apps', 'Interactive UIs', 'Modern Experiences', 'Premium Portfolios']}
                                loop={true}
                                cursor
                                cursorStyle='|'
                                typeSpeed={60}
                                deleteSpeed={40}
                                delaySpeed={1500}
                            />
                        </span>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                        className="max-w-2xl mx-auto lg:mx-0 text-slate-600 dark:text-slate-400 mb-10 text-lg leading-relaxed font-medium"
                    >
                        I engineer robust, high-performance web applications using React and modern frontend ecosystems. Focused on delivering seamless user experiences and maintainable, scalable code architectures.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                        className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
                    >
                        <a href="#projects" className="group relative px-8 py-4 bg-primary text-white rounded-full font-bold overflow-hidden shadow-[0_4px_15px_rgba(14,165,233,0.2)] hover:shadow-[0_4px_25px_rgba(14,165,233,0.4)] transition-all w-full sm:w-auto text-center flex items-center justify-center gap-2">
                            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shimmer"></span>
                            <span>View My Work</span>
                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </a>
                        <a href="/FirozAlMahmud.pdf" download className="group px-8 py-4 glass-card text-slate-800 dark:text-white rounded-full font-semibold flex items-center justify-center gap-2 w-full sm:w-auto hover:bg-slate-100 dark:hover:bg-white/10 transition-all border-slate-300 dark:border-primary/30">
                            <Download size={18} className="group-hover:-translate-y-1 transition-transform" />
                            <span>Download Resume</span>
                        </a>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
                        className="flex items-center justify-center lg:justify-start gap-4 mt-12"
                    >
                        <a href={github} target="_blank" rel="noreferrer" aria-label="Github" className="text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors p-3 glass-card rounded-full hover:-translate-y-1 hover:shadow-lg">
                            <Github size={22} />
                        </a>
                        <a href={linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-slate-500 dark:text-slate-400 hover:text-[#0a66c2] transition-colors p-3 glass-card rounded-full hover:-translate-y-1 hover:shadow-lg">
                            <Linkedin size={22} />
                        </a>
                        <a href="#contact" aria-label="Email" className="text-slate-500 dark:text-slate-400 hover:text-red-500 transition-colors p-3 glass-card rounded-full hover:-translate-y-1 hover:shadow-lg">
                            <Mail size={22} />
                        </a>
                    </motion.div>
                </div>

                {/* Profile Image / Abstract Visual */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, type: "spring", stiffness: 100 }}
                    className="flex-1 order-1 lg:order-2 flex justify-center w-full max-w-md lg:max-w-none relative mt-8 lg:mt-0"
                >
                    <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-[450px] lg:h-[450px] flex items-center justify-center">
                        {/* Premium Glow effect */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500 to-indigo-500 rounded-[2rem] sm:rounded-[3rem] rotate-6 opacity-20 dark:opacity-40 blur-2xl animate-pulse"></div>
                        <div className="absolute inset-0 bg-gradient-to-tl from-purple-500 to-primary rounded-[2rem] sm:rounded-[3rem] -rotate-6 opacity-20 dark:opacity-40 blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>

                        {/* Image / Shape wrapper */}
                        <motion.div
                            whileHover={{ scale: 1.02, rotate: 2 }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                            className="relative w-full h-full rounded-[2rem] sm:rounded-[3rem] border border-slate-200 dark:border-white/10 bg-white/50 dark:bg-slate-900/50 backdrop-blur-xl p-3 shadow-2xl overflow-hidden glass group flex items-center justify-center text-slate-300"
                        >
                            <img
                                src="/profile.jpg"
                                alt={name}
                                className="w-full h-full object-cover rounded-[1.5rem] sm:rounded-[2.5rem] grayscale group-hover:grayscale-0 transition-all duration-700"
                                onError={(e) => {
                                    e.target.onerror = null;
                                    e.target.src = "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1000";
                                }}
                            />
                            {/* Overlay Gradient */}
                            <div className="absolute inset-0 rounded-[1.5rem] sm:rounded-[2.5rem] bg-gradient-to-t from-slate-900/60 dark:from-slate-900/80 via-transparent to-transparent opacity-60 group-hover:opacity-20 transition-opacity duration-500"></div>
                        </motion.div>

                        {/* Floating Badges */}
                        <motion.div
                            animate={{ y: [-15, 15, -15] }}
                            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                            className="absolute -top-6 -right-4 glass-card px-5 py-3 rounded-2xl border border-slate-200 dark:border-white/20 z-20 flex items-center gap-3 shadow-xl"
                        >
                            <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-500/20 flex items-center justify-center text-blue-600 dark:text-blue-400 text-xl">
                                ⚛️
                            </div>
                            <div>
                                <p className="text-xs text-slate-500 dark:text-slate-400 font-semibold uppercase tracking-wider">Specialist</p>
                                <p className="text-sm font-bold text-slate-800 dark:text-white">React.js</p>
                            </div>
                        </motion.div>

                        <motion.div
                            animate={{ y: [15, -15, 15] }}
                            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
                            className="absolute bottom-10 -left-6 lg:-left-12 glass-card px-5 py-3 rounded-2xl border border-slate-200 dark:border-white/20 z-20 flex items-center gap-3 shadow-xl"
                        >
                            <div className="w-10 h-10 rounded-full bg-purple-100 dark:bg-purple-500/20 flex items-center justify-center text-purple-600 dark:text-purple-400 text-xl">
                                🚀
                            </div>
                            <div>
                                <p className="text-xs text-slate-500 dark:text-slate-400 font-semibold uppercase tracking-wider">Focus</p>
                                <p className="text-sm font-bold text-slate-800 dark:text-white">Performance</p>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>

            </motion.div>
        </section>
    );
};

export default Hero;
