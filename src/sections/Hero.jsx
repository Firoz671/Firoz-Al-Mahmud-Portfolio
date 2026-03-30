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

    // Removed old parallax scroll effect transforms

    return (
        <section ref={ref} id="home" className="min-h-screen relative pt-32 pb-20 flex flex-col justify-center overflow-hidden bg-[#F4F4F1]">

            {/* Background Grid Lines for Editorial structure */}
            <div className="absolute inset-0 pointer-events-none opacity-20">
                <div className="absolute left-1/4 top-0 bottom-0 border-l border-slate-400 hidden lg:block"></div>
                <div className="absolute right-1/4 top-0 bottom-0 border-r border-slate-400 hidden lg:block"></div>
            </div>

            <div className="w-full max-w-7xl mx-auto px-6 lg:px-8 z-10 flex flex-col lg:flex-row items-center lg:items-end justify-between gap-16">

                {/* Left: Typography Focus */}
                <div className="flex-1 order-2 lg:order-1 relative z-20 w-full">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="flex flex-col mb-8"
                    >
                        <span className="text-xs font-mono uppercase tracking-[0.2em] text-accent font-bold mb-4 block">
                            Edition 2026
                        </span>
                        <h1 className="text-5xl md:text-7xl lg:text-[7.5rem] font-bold text-slate-900 leading-[0.9] font-heading tracking-tighter mix-blend-multiply">
                            <StaggeredText text="Firoz" delay={0.1} />
                            <br />
                            <StaggeredText text="Al Mahmud" delay={0.3} className="ml-0 lg:ml-12" />
                        </h1>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
                        className="pl-0 lg:pl-12 border-l-0 lg:border-l-2 border-slate-900/40 max-w-xl"
                    >
                        <p className="text-slate-700 mb-10 text-lg sm:text-xl leading-relaxed font-medium">
                            <strong className="text-slate-900 font-bold block mb-2 uppercase tracking-widest text-sm text-justify"></strong>
                            Highly motivated Computer Science and Engineering graduate from Daffodil International University
                            seeking a challenging technical role to leverage a strong academic foundation. Passionate about
                            delivering innovative solutions through expertise in Web Development, Database Management, and
                            AI/ML/NLP research. Committed to applying analytical problem-solving skills and a dedication to
                            emerging technologies to drive high-quality results within a professional team.
                        </p>

                        <div className="flex flex-col sm:flex-row items-start lg:items-center gap-6">
                            <MagneticWrapper>
                                <a href="#projects" className="btn-primary flex items-center gap-3 group">
                                    <span>Selected Works</span>
                                    <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform duration-300" />
                                </a>
                            </MagneticWrapper>
                            <MagneticWrapper>
                                <button onClick={() => setIsResumeOpen(true)} className="btn-secondary flex items-center gap-3 group">
                                    <FileText size={16} className="text-accent group-hover:-translate-y-1 transition-transform" />
                                    <span>Curriculum Vitae</span>
                                </button>
                            </MagneticWrapper>
                        </div>
                    </motion.div>
                </div>

                {/* Right: Sharp Image Offset */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="flex-1 order-1 lg:order-2 flex justify-center lg:justify-end w-full lg:w-auto relative"
                >
                    <div className="relative w-full max-w-[320px] lg:max-w-md aspect-[3/4] group mt-12 lg:mt-0">
                        {/* Sharp border accent */}
                        <div className="absolute -inset-4 border border-slate-900 bg-transparent translate-x-3 translate-y-3 -z-10 transition-transform duration-500 group-hover:translate-x-5 group-hover:translate-y-5 hidden sm:block"></div>

                        {/* Main Image */}
                        <div className="w-full h-full overflow-hidden bg-slate-200 relative z-10">
                            <div className="absolute inset-0 bg-slate-900/10 mix-blend-multiply z-10 transition-opacity duration-500 group-hover:opacity-0"></div>
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
                        </div>

                        {/* Minimal Tag */}
                        <motion.div
                            className="absolute -left-8 -bottom-8 z-20 bg-[#F4F4F1] p-5 border border-slate-900 shadow-2xl hidden sm:block"
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 1 }}
                        >
                            <p className="text-[10px] font-mono uppercase tracking-widest text-slate-500 mb-1">Focus</p>
                            <p className="text-xl font-bold text-slate-900 font-heading">Performance</p>
                        </motion.div>
                    </div>
                </motion.div>
            </div>

            {/* Social Links - Vertical on Desktop */}
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="hidden lg:flex flex-col gap-8 absolute left-8 lg:left-12 top-1/2 -translate-y-1/2 z-20"
            >
                <div className="w-[1px] h-16 bg-slate-400 mx-auto mb-2"></div>
                <a href={github} target="_blank" rel="noreferrer" className="text-slate-900 hover:text-accent transition-colors hover:-translate-y-1 transform">
                    <Github size={20} />
                </a>
                <a href={linkedin} target="_blank" rel="noreferrer" className="text-slate-900 hover:text-accent transition-colors hover:-translate-y-1 transform">
                    <Linkedin size={20} />
                </a>
                <a href={`mailto:${email}`} className="text-slate-900 hover:text-accent transition-colors hover:-translate-y-1 transform">
                    <Mail size={20} />
                </a>
                <div className="w-[1px] h-16 bg-slate-400 mx-auto mt-2"></div>
            </motion.div>

            {/* Mobile Social Links */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="lg:hidden flex justify-center gap-8 mt-16 z-20 relative"
            >
                <a href={github} target="_blank" rel="noreferrer" className="text-slate-900 hover:text-accent transition-colors">
                    <Github size={24} />
                </a>
                <a href={linkedin} target="_blank" rel="noreferrer" className="text-slate-900 hover:text-accent transition-colors">
                    <Linkedin size={24} />
                </a>
                <a href={`mailto:${email}`} className="text-slate-900 hover:text-accent transition-colors">
                    <Mail size={24} />
                </a>
            </motion.div>

            <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
        </section>
    );
};

export default Hero;
