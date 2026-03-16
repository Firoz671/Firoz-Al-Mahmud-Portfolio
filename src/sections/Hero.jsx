import { motion, useScroll, useTransform } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import { Github, Linkedin, Mail, ArrowRight, FileText } from 'lucide-react';
import { portfolioData } from '../data';
import { useState, useRef } from 'react';
import ResumeModal from '../components/ui/ResumeModal';
import MagneticWrapper from '../components/ui/MagneticWrapper';

// Helper component for staggered word reveal
const StaggeredText = ({ text, className, delay = 0 }) => {
    const words = text.split(" ");

    const container = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: delay }
        }
    };

    const child = {
        visible: {
            opacity: 1,
            y: 0,
            rotate: 0,
            transition: { type: "spring", damping: 12, stiffness: 100 }
        },
        hidden: {
            opacity: 0,
            y: 40,
            rotate: 5,
            transition: { type: "spring", damping: 12, stiffness: 100 }
        }
    };

    return (
        <motion.div
            style={{ display: "flex", flexWrap: "wrap", gap: "0.25em" }}
            variants={container}
            initial="hidden"
            animate="visible"
            className={className}
        >
            {words.map((word, index) => (
                <motion.span variants={child} key={index} style={{ display: "inline-block" }}>
                    {word}
                </motion.span>
            ))}
        </motion.div>
    );
};

const Hero = () => {
    const { name, github, linkedin, email } = portfolioData.personalInfo;
    const ref = useRef(null);
    const [isResumeOpen, setIsResumeOpen] = useState(false);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    });

    // Advanced Parallax effect on scroll
    const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "80%"]);
    const opacityBg = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
    const scaleBg = useTransform(scrollYProgress, [0, 1], [1, 0.9]);

    return (
        <section ref={ref} id="home" className="min-h-screen flex items-center justify-center relative pt-20 overflow-hidden">
            <motion.div style={{ y: yBg, opacity: opacityBg, scale: scaleBg }} className="w-full max-w-7xl mx-auto px-6 lg:px-8 z-10 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">

                {/* Text Content */}
                <div className="text-center lg:text-left flex-1 order-2 lg:order-1 mt-12 lg:mt-0 relative z-20">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-6"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600  text-sm font-semibold tracking-wide backdrop-blur-md">
                            <span className="relative flex h-2.5 w-2.5">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                            </span>
                            Available for Opportunities
                        </div>
                        <span className="hidden sm:inline-block py-1.5 px-4 rounded-full bg-primary/10  text-primary  font-semibold text-sm border border-primary/20  uppercase tracking-wider backdrop-blur-md">
                            Frontend Specialist
                        </span>
                    </motion.div>

                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-slate-900  mb-6 tracking-tight leading-[1.1] relative">
                        <StaggeredText text="Hi, I'm" delay={0.1} />
                        <motion.span
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                            className="text-gradient-premium block mt-2"
                        >
                            {name.split(' ')[0]}
                        </motion.span>
                    </h1>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
                        className="text-xl md:text-3xl font-semibold text-slate-700  mb-6 h-12 flex items-center justify-center lg:justify-start"
                    >
                        <span className="mr-2 opacity-80">I build</span>
                        <span className="text-primary  border-b-[3px] border-primary/30">
                            <Typewriter
                                words={['Scalable Web Apps', 'Interactive UIs', 'Award-Winning Experiences', 'High-Performance Systems']}
                                loop={true}
                                cursor
                                cursorStyle={<span className="text-secondary opacity-70">|</span>}
                                typeSpeed={60}
                                deleteSpeed={40}
                                delaySpeed={2000}
                            />
                        </span>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="max-w-2xl mx-auto lg:mx-0 text-slate-600  mb-10 text-lg sm:text-xl leading-relaxed font-medium"
                    >
                        Bridging the gap between <strong className="text-slate-900 ">limitless design</strong> and <strong className="text-slate-900 ">flawless engineering</strong>. I architect pixel-perfect, accessible, and high-performance digital experiences that drive business value and captivate users.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6"
                    >
                        <MagneticWrapper>
                            <a href="#projects" className="group relative px-8 py-4 bg-gradient-to-r from-primary to-sky-500 text-white rounded-full font-bold overflow-hidden shadow-[0_8px_20px_rgba(14,165,233,0.3)] hover:shadow-[0_12px_30px_rgba(14,165,233,0.5)] transition-all w-full sm:w-auto text-center flex items-center justify-center gap-2">
                                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></span>
                                <span>View My Work</span>
                                <ArrowRight size={18} className="group-hover:translate-x-1 group-hover:-rotate-12 transition-transform duration-300" />
                            </a>
                        </MagneticWrapper>

                        <MagneticWrapper>
                            <button onClick={() => setIsResumeOpen(true)} className="group px-8 py-4 glass-premium text-slate-800  rounded-full font-bold flex items-center justify-center gap-2 w-full sm:w-auto hover:bg-white/90  transition-all border-slate-300/50 ">
                                <FileText size={18} className="text-primary  group-hover:-translate-y-1 transition-transform duration-300" />
                                <span>Résumé / CV</span>
                            </button>
                        </MagneticWrapper>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
                        className="flex items-center justify-center lg:justify-start gap-4 mt-12"
                    >
                        <MagneticWrapper>
                            <a href={github} target="_blank" rel="noreferrer" aria-label="Github" className="text-slate-600  hover:text-slate-900  transition-colors p-3.5 glass-premium rounded-full hover:-translate-y-1 hover:shadow-lg flex items-center justify-center">
                                <Github size={22} className="group-hover:scale-110 transition-transform" />
                            </a>
                        </MagneticWrapper>
                        <MagneticWrapper>
                            <a href={linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-slate-600  hover:text-[#0a66c2] transition-colors p-3.5 glass-premium rounded-full hover:-translate-y-1 hover:shadow-lg flex items-center justify-center">
                                <Linkedin size={22} className="group-hover:scale-110 transition-transform" />
                            </a>
                        </MagneticWrapper>
                        <MagneticWrapper>
                            <a href={`mailto:${email}`} aria-label="Email" className="text-slate-600  hover:text-red-500 transition-colors p-3.5 glass-premium rounded-full hover:-translate-y-1 hover:shadow-lg flex items-center justify-center">
                                <Mail size={22} className="group-hover:scale-110 transition-transform" />
                            </a>
                        </MagneticWrapper>
                    </motion.div>
                </div>

                {/* Profile Image / Abstract Visual */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ duration: 1.2, delay: 0.4, type: "spring", stiffness: 80, damping: 20 }}
                    className="flex-1 order-1 lg:order-2 flex justify-center w-full max-w-md lg:max-w-none relative mt-8 lg:mt-0"
                >
                    <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-[450px] lg:h-[450px] flex items-center justify-center perspective-[1000px]">
                        {/* Premium Glow effect */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-cyan-400 to-indigo-500 rounded-[2rem] sm:rounded-[3rem] rotate-6 opacity-15 blur-3xl animate-[blob_7s_infinite]"></div>
                        <div className="absolute inset-0 bg-gradient-to-tl from-purple-500 to-primary rounded-[2rem] sm:rounded-[3rem] -rotate-6 opacity-15 blur-3xl animate-[blob_7s_infinite]" style={{ animationDelay: '2s' }}></div>

                        {/* Image / Shape wrapper */}
                        <motion.div
                            whileHover={{ scale: 1.03, rotateX: 5, rotateY: -5 }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                            className="relative w-full h-full rounded-[2rem] sm:rounded-[3rem] border border-white/60 bg-white/40 backdrop-blur-2xl p-3 shadow-[0_20px_40px_rgba(0,0,0,0.04)] overflow-hidden group flex items-center justify-center transform-gpu"
                        >
                            <div className="relative w-full h-full overflow-hidden rounded-[1.5rem] sm:rounded-[2.5rem]">
                                <img
                                    src="/profile.jpg"
                                    alt={name}
                                    loading="lazy"
                                    className="w-full h-full object-cover scale-105 group-hover:scale-100 grayscale hover:grayscale-0 transition-all duration-700 ease-out"
                                    onError={(e) => {
                                        e.target.onerror = null;
                                        e.target.src = "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1000";
                                    }}
                                />
                                {/* Overlay Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-white/60 via-transparent to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none"></div>
                            </div>
                        </motion.div>

                        {/* Floating Badges (Parallax bound) */}
                        <motion.div
                            animate={{ y: [-20, 20, -20] }}
                            transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
                            className="absolute -top-6 -right-4 lg:-top-10 lg:-right-10 glass-premium px-6 py-4 rounded-3xl z-20 flex items-center gap-4 shadow-[0_15px_30px_rgba(0,0,0,0.1)] "
                        >
                            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-100 to-cyan-100   flex items-center justify-center text-blue-600  text-2xl shadow-inner border border-white/50 ">
                                ⚛️
                            </div>
                            <div>
                                <p className="text-xs text-slate-500  font-bold uppercase tracking-widest mb-0.5">Specialist</p>
                                <p className="text-base font-extrabold text-slate-800 ">React.js</p>
                            </div>
                        </motion.div>

                        <motion.div
                            animate={{ y: [20, -20, 20] }}
                            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 1 }}
                            className="absolute bottom-10 -left-6 lg:bottom-16 lg:-left-16 glass-premium px-6 py-4 rounded-3xl z-20 flex items-center gap-4 shadow-[0_15px_30px_rgba(0,0,0,0.1)] "
                        >
                            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-100 to-pink-100   flex items-center justify-center text-purple-600  text-2xl shadow-inner border border-white/50 ">
                                🚀
                            </div>
                            <div>
                                <p className="text-xs text-slate-500  font-bold uppercase tracking-widest mb-0.5">Focus</p>
                                <p className="text-base font-extrabold text-slate-800 ">Performance</p>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>

            </motion.div>
            <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
        </section>
    );
};

export default Hero;
