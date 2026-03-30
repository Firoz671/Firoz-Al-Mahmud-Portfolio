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

const StatCard = ({ icon: Icon, number, suffix, label, description, delay }) => {
    const { count, nodeRef } = useCounter(number);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: delay * 0.1 }}
            className="bg-white editorial-border p-8 transition-all duration-300 hover:-translate-y-2 group relative overflow-hidden flex flex-col items-start hover:bg-slate-900 hover:text-white"
        >
            <div className={`w-12 h-12 flex items-center justify-center mb-6 text-slate-900 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 group-hover:text-white relative z-10`}>
                <Icon size={32} strokeWidth={1.5} />
            </div>

            <div className="relative z-10 w-full" ref={nodeRef}>
                <div className="flex items-baseline gap-1 mb-4 border-b border-slate-900/10 group-hover:border-white/20 pb-4">
                    <span className="text-5xl md:text-6xl font-bold text-slate-900 font-heading tracking-tighter group-hover:text-white transition-colors">
                        {count}
                    </span>
                    <span className={`text-3xl font-bold text-slate-900 group-hover:text-white transition-colors`}>{suffix}</span>
                </div>

                <h3 className="text-xl font-bold font-heading mb-2 uppercase tracking-tight">{label}</h3>
                <p className="text-sm font-medium leading-relaxed opacity-70">
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
            description: "Modern web applications built using React, Next.js, and Tailwind CSS."
        },
        {
            icon: GitCommit,
            number: 1200,
            suffix: "+",
            label: "GitHub Commits",
            description: "Consistent daily contributions, pushing features and fixing bugs."
        },
        {
            icon: Layers,
            number: 15,
            suffix: "+",
            label: "Technologies Mastered",
            description: "Deep expertise in frontend ecosystems and modern build tools."
        },
        {
            icon: Zap,
            number: 40,
            suffix: "%",
            label: "Performance Gains",
            description: "Average speed improvement through code splitting and efficient rendering."
        }
    ];

    return (
        <section id="impact" className="py-24 relative overflow-hidden bg-[#F4F4F1] transition-colors duration-500 border-t border-slate-900 border-b">

            <div className="w-11/12 max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="text-center mb-16 lg:mb-20"
                >
                    <span className="inline-block py-1 px-4 text-slate-900 font-bold tracking-[0.2em] text-xs uppercase mb-6 border-b border-slate-900">Developer Impact</span>
                    <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold text-slate-900 mb-8 font-heading uppercase tracking-tighter">
                        Code & Contributions
                    </h2>
                    <div className="w-16 h-1 bg-slate-900 mx-auto mb-10"></div>
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
                    className="bg-white p-8 md:p-12 editorial-border relative overflow-hidden flex flex-col items-center justify-center max-w-5xl mx-auto group shadow-[8px_8px_0px_#1c1c1c]"
                >
                    <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-10 w-full border-b border-slate-900 pl-4 md:pl-0 pb-8">
                        <div className="flex items-center gap-4">
                            <div className="text-slate-900 transition-transform duration-300 group-hover:rotate-12">
                                <GitCommit size={36} strokeWidth={1} />
                            </div>
                            <div>
                                <h3 className="text-2xl md:text-4xl font-bold text-slate-900 font-heading uppercase tracking-tighter">Open Source Activity</h3>
                                <p className="text-slate-900 font-mono text-sm uppercase tracking-widest mt-2 opacity-80">Consistency is the ultimate compounding asset.</p>
                            </div>
                        </div>
                        <a
                            href="https://github.com/Firoz671"
                            target="_blank"
                            rel="noreferrer"
                            className="btn-secondary whitespace-nowrap"
                        >
                            @Firoz671
                        </a>
                    </div>

                    <div className="w-full overflow-x-auto pb-4 custom-scrollbar flex justify-center md:justify-center items-center">
                        <div className="min-w-max p-4 md:p-6 bg-[#F4F4F1] border border-slate-900">
                            <GitHubCalendar
                                username="Firoz671"
                                blockSize={14}
                                blockMargin={5}
                                colorScheme="light"
                                theme={{
                                    light: ['#e2e8f0', '#94a3b8', '#64748b', '#334155', '#0f172a']
                                }}
                                fontSize={12}
                            />
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Impact;
