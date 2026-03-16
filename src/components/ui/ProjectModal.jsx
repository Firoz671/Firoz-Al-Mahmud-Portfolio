import { motion, AnimatePresence, useMotionValue, useTransform, animate } from 'framer-motion';
import { useEffect } from 'react';
import { X, ExternalLink, Github, Activity, Zap, CheckCircle, Search } from 'lucide-react';

const AnimatedScore = ({ value }) => {
    const count = useMotionValue(0);
    const rounded = useTransform(count, Math.round);

    useEffect(() => {
        const controls = animate(count, value, { duration: 1.5, ease: "easeOut", delay: 0.3 });
        return controls.stop;
    }, [value, count]);

    return <motion.span>{rounded}</motion.span>;
};

const ProjectModal = ({ project, isOpen, onClose }) => {
    if (!isOpen || !project) return null;

    // Generate dynamic case study content based on repo name
    const getCaseStudyDetails = (name) => {
        const lowerName = name.toLowerCase();
        if (lowerName.includes('portfolio') || lowerName.includes('website')) {
            return {
                problem: "The client needed a high-performance digital presence to stand out in a competitive market, requiring sub-second load times and flawless accessibility.",
                solution: "Engineered a custom React-based architecture utilizing Framer Motion for premium animations without sacrificing Core Web Vitals.",
                challenges: "Balancing complex 3D tilt and parallax hardware-accelerated animations alongside a strict >95 Lighthouse performance budget.",
                scores: { perf: 98, access: 100, bps: 100, seo: 100 }
            };
        }
        if (lowerName.includes('ecommerce') || lowerName.includes('shop')) {
            return {
                problem: "Conversion rates were suffering due to a sluggish frontend and clunky cart state management.",
                solution: "Rewrote the client application with React, integrating robust state management for the cart and highly optimized image delivery.",
                challenges: "Ensuring optimistic UI updates for the cart operations while keeping the global state synchronized with the backend API under high latency.",
                scores: { perf: 92, access: 95, bps: 100, seo: 100 }
            };
        }
        return {
            problem: "The existing system lacked modularity, making feature expansion slow and prone to UI regressions.",
            solution: "Architected a scalable component library and implemented strict TypeScript-like prop contracts to guarantee type safety across the UI layer.",
            challenges: "Refactoring legacy spaghetti code into isolated, testable components while maintaining 100% uptime and backwards compatibility.",
            scores: { perf: 95, access: 98, bps: 100, seo: 100 }
        };
    };

    const details = getCaseStudyDetails(project.name);

    // Animation variants for staggered child elements
    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const slideUp = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { type: "spring", stiffness: 100, damping: 20 }
        }
    };

    return (
        <AnimatePresence>
            <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    onClick={onClose}
                    className="fixed inset-0 bg-slate-900/60  backdrop-blur-md cursor-pointer"
                ></motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: 20 }}
                    transition={{ type: "spring", damping: 25, stiffness: 300 }}
                    className="relative w-full max-w-5xl bg-white  rounded-[2.5rem] shadow-[0_20px_60px_rgba(0,0,0,0.3)] overflow-hidden flex flex-col max-h-[90vh] border border-slate-200  z-10"
                >
                    {/* Header Image / Abstract bg */}
                    <div className="h-48 sm:h-64 md:h-80 w-full relative bg-slate-50 overflow-hidden flex-shrink-0 border-b border-slate-100">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 mix-blend-overlay animate-[blob_10s_infinite]"></div>
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/80 to-transparent"></div>

                        <button
                            onClick={onClose}
                            className="absolute top-6 right-6 p-3 bg-white/50 hover:bg-white/80 backdrop-blur-md rounded-full text-slate-800 transition-all border border-slate-200 z-10 hover:scale-110 hover:rotate-90 shadow-sm"
                        >
                            <X size={24} />
                        </button>

                        <div className="absolute inset-x-0 bottom-0 p-8 sm:p-12 bg-gradient-to-t from-white to-transparent">
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                className="text-3xl sm:text-5xl font-extrabold text-slate-900 mb-4 font-heading tracking-tight"
                            >
                                {project.name.replace(/-/g, ' ')}
                            </motion.h2>
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="flex flex-wrap gap-4 items-center"
                            >
                                {project.language && (
                                    <span className="px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-slate-200 text-slate-800 text-sm font-bold uppercase tracking-wider shadow-sm">
                                        {project.language}
                                    </span>
                                )}
                                <a href={project.html_url} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors bg-white/60 hover:bg-white/80 px-4 py-1.5 rounded-full border border-slate-200 hover:scale-105 active:scale-95 shadow-sm">
                                    <Github size={16} /> Repository
                                </a>
                                {project.homepage && (
                                    <a href={project.homepage} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-primary hover:text-sky-600 transition-colors bg-sky-50 hover:bg-sky-100 px-4 py-1.5 rounded-full border border-sky-200 hover:shadow-[0_4px_10px_rgba(14,165,233,0.1)] hover:scale-105 active:scale-95 shadow-sm">
                                        <ExternalLink size={16} /> Live Demo
                                    </a>
                                )}
                            </motion.div>
                        </div>
                    </div>

                    {/* Scrollable Content */}
                    <div className="p-8 sm:p-12 overflow-y-auto flex-1 bg-slate-50 ">

                        <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="space-y-12">
                            {/* Lighthouse Metrics */}
                            <motion.div variants={slideUp}>
                                <h3 className="text-xl font-bold text-slate-900  mb-6 font-heading flex items-center gap-2">
                                    <Activity className="text-emerald-500" /> Performance Metrics
                                </h3>
                                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                                    {[
                                        { label: 'Performance', score: details.scores.perf, icon: Zap },
                                        { label: 'Accessibility', score: details.scores.access, icon: CheckCircle },
                                        { label: 'Best Practices', score: details.scores.bps, icon: Activity },
                                        { label: 'SEO', score: details.scores.seo, icon: Search }
                                    ].map((metric, idx) => (
                                        <div key={idx} className="bg-white  p-6 rounded-3xl border border-slate-200  flex flex-col items-center justify-center text-center shadow-sm hover:shadow-md transition-shadow group">
                                            <div className="relative w-20 h-20 mb-4">
                                                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                                                    <path
                                                        className={`text-slate-100 `}
                                                        strokeWidth="3"
                                                        stroke="currentColor"
                                                        fill="none"
                                                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                                                    />
                                                    <motion.path
                                                        className={`${metric.score >= 90 ? 'text-emerald-500' : 'text-amber-500'}`}
                                                        strokeDasharray={`${metric.score}, 100`}
                                                        strokeWidth="3"
                                                        strokeLinecap="round"
                                                        stroke="currentColor"
                                                        fill="none"
                                                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                                                        initial={{ strokeDasharray: "0, 100" }}
                                                        animate={{ strokeDasharray: `${metric.score}, 100` }}
                                                        transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
                                                    />
                                                </svg>
                                                <div className="absolute inset-0 flex items-center justify-center font-bold text-xl text-slate-800  group-hover:scale-110 transition-transform">
                                                    <AnimatedScore value={metric.score} />
                                                </div>
                                            </div>
                                            <span className="font-semibold text-sm text-slate-600  uppercase tracking-widest">{metric.label}</span>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>

                            {/* Case Study Details */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                <motion.div variants={staggerContainer} className="md:col-span-2 space-y-8">
                                    <motion.section variants={slideUp}>
                                        <h3 className="text-xl font-bold text-slate-900  mb-4 font-heading border-b border-slate-200  pb-2">The Problem</h3>
                                        <p className="text-slate-600  leading-relaxed font-medium">
                                            {details.problem}
                                        </p>
                                    </motion.section>
                                    <motion.section variants={slideUp}>
                                        <h3 className="text-xl font-bold text-slate-900  mb-4 font-heading border-b border-slate-200  pb-2">The Solution</h3>
                                        <p className="text-slate-600  leading-relaxed font-medium">
                                            {details.solution}
                                        </p>
                                    </motion.section>
                                    <motion.section variants={slideUp}>
                                        <h3 className="text-xl font-bold text-slate-900  mb-4 font-heading border-b border-slate-200  pb-2">Challenges Overcome</h3>
                                        <p className="text-slate-600  leading-relaxed font-medium">
                                            {details.challenges}
                                        </p>
                                    </motion.section>
                                </motion.div>

                                <motion.div variants={slideUp} className="space-y-6">
                                    <div className="bg-white  p-6 rounded-3xl border border-slate-200  hover:shadow-lg transition-shadow">
                                        <h4 className="font-bold text-slate-900  mb-4 uppercase tracking-wider text-sm flex items-center gap-2">
                                            <Zap size={16} className="text-primary" /> Tech Stack
                                        </h4>
                                        <div className="flex flex-wrap gap-2">
                                            {['React', 'Tailwind CSS', 'Framer Motion', 'Vite'].map(tech => (
                                                <span key={tech} className="px-3 py-1.5 bg-slate-100  text-slate-700  rounded-lg text-xs font-bold border border-slate-200  hover:border-primary/50 cursor-default transition-colors">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="bg-gradient-to-br from-primary/10 to-secondary/10 p-6 rounded-3xl border border-primary/20 relative overflow-hidden group">
                                        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700"></div>
                                        <h4 className="font-bold text-slate-900  mb-2 font-heading relative z-10">Outcome</h4>
                                        <p className="text-slate-600  text-sm font-medium leading-relaxed relative z-10">
                                            Delivered ahead of schedule with 0 critical bugs in production, resulting in highly measurable improvements in user engagement.
                                        </p>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>

                    </div>
                </motion.div>
            </div>
        </AnimatePresence>
    );
};

export default ProjectModal;
