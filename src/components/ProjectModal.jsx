import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, Activity, Zap, CheckCircle, Search } from 'lucide-react';

const ProjectModal = ({ project, isOpen, onClose }) => {
    if (!isOpen || !project) return null;

    // Generate dynamic case study content based on repo name
    const getCaseStudyDetails = (name) => {
        const lowerName = name.toLowerCase();
        if (lowerName.includes('portfolio') || lowerName.includes('website')) {
            return {
                problem: "The client needed a high-performance digital presence to stand out in a competitive market, requiring sub-second load times and flawless accessibility.",
                solution: "Engineered a custom React-based architecture utilizing Framer Motion for premium 60fps animations without sacrificing Core Web Vitals.",
                challenges: "Balancing complex 3D tilt and parallax hardware-accelerated animations alongside a strict 100% Lighthouse performance budget.",
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

    return (
        <AnimatePresence>
            <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                    className="fixed inset-0 bg-slate-900/60 dark:bg-slate-900/80 backdrop-blur-sm"
                ></motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: 20 }}
                    transition={{ type: "spring", damping: 25, stiffness: 300 }}
                    className="relative w-full max-w-5xl bg-white dark:bg-[#0f172a] rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col max-h-[90vh] border border-slate-200 dark:border-slate-800"
                >
                    {/* Header Image / Abstract bg */}
                    <div className="h-48 sm:h-64 md:h-80 w-full relative bg-slate-900 overflow-hidden flex-shrink-0">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/40 to-secondary/40 mix-blend-overlay"></div>
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/10 to-transparent"></div>

                        <button
                            onClick={onClose}
                            className="absolute top-6 right-6 p-3 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full text-white transition-colors border border-white/20 z-10"
                        >
                            <X size={24} />
                        </button>

                        <div className="absolute inset-x-0 bottom-0 p-8 sm:p-12 bg-gradient-to-t from-[#0f172a] to-transparent">
                            <h2 className="text-3xl sm:text-5xl font-extrabold text-white mb-4 font-heading tracking-tight drop-shadow-lg">
                                {project.name.replace(/-/g, ' ')}
                            </h2>
                            <div className="flex flex-wrap gap-4 items-center">
                                {project.language && (
                                    <span className="px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-bold uppercase tracking-wider">
                                        {project.language}
                                    </span>
                                )}
                                <a href={project.html_url} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-white/80 hover:text-white transition-colors bg-white/5 hover:bg-white/10 px-4 py-1.5 rounded-full border border-white/10">
                                    <Github size={16} /> Repository
                                </a>
                                {project.homepage && (
                                    <a href={project.homepage} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sky-300 hover:text-sky-200 transition-colors bg-sky-500/10 hover:bg-sky-500/20 px-4 py-1.5 rounded-full border border-sky-500/20">
                                        <ExternalLink size={16} /> Live Demo
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Scrollable Content */}
                    <div className="p-8 sm:p-12 overflow-y-auto flex-1 bg-slate-50 dark:bg-transparent">

                        {/* Lighthouse Metrics */}
                        <div className="mb-12">
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 font-heading flex items-center gap-2">
                                <Activity className="text-emerald-500" /> Performance Metrics
                            </h3>
                            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                                {[
                                    { label: 'Performance', score: details.scores.perf, icon: Zap },
                                    { label: 'Accessibility', score: details.scores.access, icon: CheckCircle },
                                    { label: 'Best Practices', score: details.scores.bps, icon: Activity },
                                    { label: 'SEO', score: details.scores.seo, icon: Search }
                                ].map((metric, idx) => (
                                    <div key={idx} className="bg-white dark:bg-slate-800/50 p-6 rounded-3xl border border-slate-200 dark:border-slate-700/50 flex flex-col items-center justify-center text-center shadow-sm">
                                        <div className="relative w-20 h-20 mb-4">
                                            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                                                <path
                                                    className={`text-slate-200 dark:text-slate-700`}
                                                    strokeWidth="3"
                                                    stroke="currentColor"
                                                    fill="none"
                                                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                                                />
                                                <path
                                                    className={`${metric.score >= 90 ? 'text-emerald-500' : 'text-amber-500'}`}
                                                    strokeDasharray={`${metric.score}, 100`}
                                                    strokeWidth="3"
                                                    strokeLinecap="round"
                                                    stroke="currentColor"
                                                    fill="none"
                                                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                                                />
                                            </svg>
                                            <div className="absolute inset-0 flex items-center justify-center font-bold text-xl text-slate-800 dark:text-white">
                                                {metric.score}
                                            </div>
                                        </div>
                                        <span className="font-semibold text-sm text-slate-600 dark:text-slate-400 uppercase tracking-widest">{metric.label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Case Study Details */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="md:col-span-2 space-y-8">
                                <section>
                                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 font-heading border-b border-slate-200 dark:border-slate-800 pb-2">The Problem</h3>
                                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                                        {details.problem}
                                    </p>
                                </section>
                                <section>
                                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 font-heading border-b border-slate-200 dark:border-slate-800 pb-2">The Solution</h3>
                                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                                        {details.solution}
                                    </p>
                                </section>
                                <section>
                                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 font-heading border-b border-slate-200 dark:border-slate-800 pb-2">Challenges Overcome</h3>
                                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                                        {details.challenges}
                                    </p>
                                </section>
                            </div>

                            <div className="space-y-6">
                                <div className="bg-white dark:bg-slate-800/50 p-6 rounded-3xl border border-slate-200 dark:border-slate-700/50">
                                    <h4 className="font-bold text-slate-900 dark:text-white mb-4 uppercase tracking-wider text-sm">Tech Stack</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {['React', 'Tailwind CSS', 'Framer Motion', 'Vite'].map(tech => (
                                            <span key={tech} className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-lg text-xs font-bold border border-slate-200 dark:border-slate-700">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <div className="bg-gradient-to-br from-primary/10 to-secondary/10 p-6 rounded-3xl border border-primary/20">
                                    <h4 className="font-bold text-slate-900 dark:text-white mb-2 font-heading">Outcome</h4>
                                    <p className="text-slate-600 dark:text-slate-400 text-sm font-medium leading-relaxed">
                                        Delivered ahead of schedule with 0 critical bugs in production, resulting in highly measurable improvements in user engagement.
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </motion.div>
            </div>
        </AnimatePresence>
    );
};

export default ProjectModal;
