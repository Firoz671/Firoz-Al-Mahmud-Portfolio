import { motion, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { GitHubCalendar } from 'react-github-calendar';
import { Code2, GitCommit, Layers, Zap, FolderDot, TrendingUp } from 'lucide-react';

// Animated Counter Hook
const useCounter = (end, duration = 2) => {
    const [count, setCount] = useState(0);
    const nodeRef = useRef(null);
    const inView = useInView(nodeRef, { once: true, margin: "-100px" });

    useEffect(() => {
        if (!inView) return;

        let startTimestamp = null;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);

            // Ease out quad
            const easeOutProgress = progress * (2 - progress);
            setCount(Math.floor(easeOutProgress * end));

            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };

        window.requestAnimationFrame(step);
    }, [inView, end, duration]);

    return { count, nodeRef };
};

const StatCard = ({ icon: Icon, number, suffix, label, description, delay, colorClass }) => {
    const { count, nodeRef } = useCounter(number);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: delay * 0.1 }}
            className="bg-white/90 backdrop-blur-md border border-slate-100 rounded-[2rem] p-8 shadow-glass transition-all duration-300 hover:shadow-glass-card hover:-translate-y-1 group relative overflow-hidden flex flex-col items-start"
        >
            {/* Soft gradient background hover effect */}
            <div className={`absolute inset-0 bg-gradient-to-br from-transparent to-${colorClass}-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 bg-${colorClass}-50 text-${colorClass}-600 border border-${colorClass}-100 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 relative z-10`}>
                <Icon size={26} strokeWidth={2} />
            </div>

            <div className="relative z-10 w-full" ref={nodeRef}>
                <div className="flex items-baseline gap-1 mb-2">
                    <span className="text-4xl md:text-5xl font-extrabold text-slate-900 font-heading tracking-tight">
                        {count}
                    </span>
                    <span className={`text-2xl font-bold text-${colorClass}-500`}>{suffix}</span>
                </div>

                <h3 className="text-lg font-bold text-slate-800 mb-2">{label}</h3>
                <p className="text-sm text-slate-500 font-medium leading-relaxed">
                    {description}
                </p>
            </div>
        </motion.div>
    );
};

const Impact = () => {
    const calendarTheme = {
        light: ['#f0fdfa', '#ccfbf1', '#5eead4', '#14b8a6', '#0f766e']
    };

    const stats = [
        {
            icon: FolderDot,
            number: 32,
            suffix: "+",
            label: "Projects Built",
            description: "Modern web applications built using React, Next.js, and Tailwind CSS.",
            colorClass: "sky"
        },
        {
            icon: GitCommit,
            number: 1200,
            suffix: "+",
            label: "GitHub Commits",
            description: "Consistent daily contributions, pushing features and fixing bugs.",
            colorClass: "emerald"
        },
        {
            icon: Layers,
            number: 15,
            suffix: "+",
            label: "Technologies Mastered",
            description: "Deep expertise in frontend ecosystems and modern build tools.",
            colorClass: "violet"
        },
        {
            icon: Zap,
            number: 40,
            suffix: "%",
            label: "Performance Gains",
            description: "Average speed improvement through code splitting and efficient rendering.",
            colorClass: "amber"
        }
    ];

    return (
        <section id="impact" className="py-24 relative overflow-hidden bg-white/50 transition-colors duration-500">
            {/* Background elements */}
            <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-primary/5 blur-[100px] rounded-full pointer-events-none"></div>
            <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-emerald-500/5 blur-[100px] rounded-full pointer-events-none"></div>

            <div className="w-11/12 max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="text-center mb-16 lg:mb-20"
                >
                    <span className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-emerald-500/10 text-emerald-600 font-bold text-sm mb-4 tracking-wider uppercase border border-emerald-500/20">
                        <TrendingUp size={16} /> Developer Impact
                    </span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-6 font-heading tracking-tight">
                        Impact & <span className="text-gradient">Contributions</span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-cyan-500 mx-auto rounded-full mb-6 relative overflow-hidden"></div>
                    <p className="text-slate-600 max-w-2xl mx-auto text-lg font-medium lg:text-xl">
                        A snapshot of my development journey, focusing on consistent growth, architecture, and delivering high-performance user experiences.
                    </p>
                </motion.div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-16 lg:mb-24">
                    {stats.map((stat, idx) => (
                        <StatCard key={idx} {...stat} delay={idx} />
                    ))}
                </div>

                {/* GitHub Heatmap Highlight */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="glass-premium p-8 md:p-12 rounded-[2.5rem] relative overflow-hidden flex flex-col items-center justify-center max-w-5xl mx-auto group shadow-glass-premium hover:shadow-glass-card"
                >
                    <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-10 w-full border-b border-slate-200/60 pb-8">
                        <div className="flex items-center gap-4">
                            <div className="p-4 bg-emerald-500/10 rounded-2xl text-emerald-600 border border-emerald-500/20 transition-transform duration-300 group-hover:scale-110">
                                <GitCommit size={28} strokeWidth={2} />
                            </div>
                            <div>
                                <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 font-heading">Open Source Activity</h3>
                                <p className="text-slate-500 font-medium mt-1">Consistency is the ultimate compounding asset.</p>
                            </div>
                        </div>
                        <a
                            href="https://github.com/Firoz671"
                            target="_blank"
                            rel="noreferrer"
                            className="px-6 py-2.5 rounded-full bg-slate-900 text-white font-bold text-sm tracking-wide hover:bg-slate-800 transition-colors shadow-lg hover:shadow-xl shrink-0"
                        >
                            @Firoz671
                        </a>
                    </div>

                    <div className="w-full overflow-x-auto pb-4 custom-scrollbar flex justify-center md:justify-center items-center">
                        <div className="min-w-max p-6 bg-white/60 rounded-3xl border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
                            <GitHubCalendar
                                username="Firoz671"
                                blockSize={15}
                                blockMargin={6}
                                colorScheme="light"
                                theme={calendarTheme}
                                fontSize={14}
                            />
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Impact;
