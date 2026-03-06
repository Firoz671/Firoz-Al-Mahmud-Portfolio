import { motion } from 'framer-motion';
import { GitHubCalendar } from 'react-github-calendar';
import { BookOpen, TrendingUp, GitBranch } from 'lucide-react';
import { portfolioData } from '../data';

const StatsSection = () => {
    // Custom theme for the GitHub Calendar to match the portfolio's premium look
    const explicitTheme = {
        light: ['#f1f5f9', '#bae6fd', '#38bdf8', '#0284c7', '#0369a1'],
        dark: ['#1e293b', '#0369a1', '#0284c7', '#38bdf8', '#7dd3fc'],
    };

    return (
        <section id="stats" className="py-24 relative overflow-hidden bg-white/50 dark:bg-slate-900/50 transition-colors duration-500">
            <div className="w-11/12 max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="text-center mb-16"
                >
                    <span className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-primary/10 dark:bg-primary/20 text-primary dark:text-sky-300 font-bold text-sm mb-4 tracking-wider uppercase border border-primary/20">
                        <TrendingUp size={16} /> Continuous Growth
                    </span>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6 font-heading tracking-tight">
                        By The <span className="text-gradient">Numbers</span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-6"></div>
                    <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg font-medium">
                        Consistency is the ultimate compounding asset. Here is a snapshot of my recent code contributions and current learning trajectory.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mt-12">

                    {/* GitHub Contributions Graph */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="lg:col-span-8 glass-card p-8 md:p-10 border border-slate-200 dark:border-white/10 rounded-[2.5rem] relative overflow-hidden h-full shadow-xl"
                    >
                        <div className="flex items-center justify-between mb-8">
                            <h3 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-3 font-heading">
                                <GitBranch className="text-primary" size={24} />
                                GitHub Contributions
                            </h3>
                            <a href={portfolioData.personalInfo.github} target="_blank" rel="noreferrer" className="text-sm font-bold text-primary dark:text-sky-400 hover:text-secondary transition-colors underline-offset-4 hover:underline">
                                @Firoz671
                            </a>
                        </div>

                        <div className="w-full overflow-x-auto pb-4 custom-scrollbar">
                            <div className="min-w-[700px]">
                                <GitHubCalendar
                                    username="Firoz671"
                                    blockSize={12}
                                    blockMargin={4}
                                    colorScheme={document.documentElement.classList.contains('dark') ? 'dark' : 'light'}
                                    theme={explicitTheme}
                                    fontSize={14}
                                />
                            </div>
                        </div>
                    </motion.div>

                    {/* Currently Learning */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="lg:col-span-4 flex flex-col gap-6 h-full"
                    >
                        <div className="glass p-8 rounded-[2.5rem] border border-slate-200 dark:border-white/10 h-full shadow-xl">
                            <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/20">
                                <BookOpen size={26} />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 font-heading">Currently Learning</h3>

                            <div className="space-y-6">
                                {[
                                    { title: "Next.js 14 App Router", desc: "Mastering React Server Components, Streaming, and Edge rendering optimizations." },
                                    { title: "Advanced WebGL", desc: "Exploring Three.js to weave uncompressed 3D elements into standard HTML layouts." },
                                    { title: "System Architecture", desc: "Studying scalable micro-frontend boundaries and enterprise monorepo management." }
                                ].map((item, idx) => (
                                    <div key={idx} className="group cursor-default">
                                        <div className="flex items-center gap-3 mb-1">
                                            <div className="w-2 h-2 rounded-full bg-slate-300 dark:bg-slate-700 group-hover:bg-primary transition-colors"></div>
                                            <h4 className="font-bold text-slate-800 dark:text-slate-200 text-lg group-hover:text-primary dark:group-hover:text-sky-300 transition-colors">{item.title}</h4>
                                        </div>
                                        <p className="text-slate-500 dark:text-slate-400 text-sm pl-5 font-medium leading-relaxed">
                                            {item.desc}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default StatsSection;
