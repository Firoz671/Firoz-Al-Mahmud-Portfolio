import { motion } from 'framer-motion';
import { Target, Zap, ShieldCheck } from 'lucide-react';

const About = () => {
    return (
        <section id="about" className="py-24 relative overflow-hidden bg-white/50 dark:bg-slate-900/50 transition-colors duration-500">
            <div className="w-11/12 max-w-7xl mx-auto px-4 sm:px-6 relative z-10">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="text-center mb-20"
                >
                    <span className="inline-block py-1.5 px-4 rounded-full bg-secondary/10 dark:bg-secondary/20 text-secondary dark:text-purple-300 font-bold text-sm mb-4 tracking-wider uppercase border border-secondary/20">The Narrative</span>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6 font-heading tracking-tight">
                        Why <span className="text-gradient">Hire Me?</span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-6 relative overflow-hidden">
                        <motion.div
                            initial={{ x: "-100%" }}
                            whileInView={{ x: "100%" }}
                            transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                            className="absolute inset-0 bg-white/50 w-full h-full skew-x-12"
                        ></motion.div>
                    </div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={{
                            hidden: { opacity: 0 },
                            visible: {
                                opacity: 1,
                                transition: { staggerChildren: 0.05 }
                            }
                        }}
                        className="max-w-3xl mx-auto text-lg md:text-xl font-medium leading-relaxed flex flex-wrap justify-center gap-x-1.5"
                    >
                        {"I don't just write code; I solve business problems. My philosophy is rooted in building digital products that are as performant as they are beautiful.".split(" ").map((word, idx) => (
                            <motion.span
                                key={idx}
                                variants={{
                                    hidden: { y: 20, opacity: 0 },
                                    visible: { y: 0, opacity: 1 }
                                }}
                                className="text-slate-600 dark:text-slate-400"
                            >
                                {word}
                            </motion.span>
                        ))}
                    </motion.div>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">

                    {/* The Story Section */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="lg:col-span-5 space-y-8"
                    >
                        <div className="glass-card p-8 md:p-10 border border-slate-200 dark:border-white/10 rounded-3xl relative overflow-hidden">
                            {/* Decorative background glow */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

                            <h3 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 dark:from-white dark:via-slate-300 dark:to-white font-heading mb-6">The Journey</h3>
                            <div className="space-y-6 text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
                                <p>
                                    My frontend journey started with a deep curiosity for how users interact with digital spaces. I realized early on that incredible design loses its impact if the engineering behind it is slow or inaccessible.
                                </p>
                                <p>
                                    Today, my focus is laser-sharp: <strong className="text-slate-900 dark:text-slate-200">React ecosystems, micro-interactions, and enterprise-grade performance.</strong> I love transforming complex data systems into intuitive, accessible dashboards and captivating landing pages.
                                </p>
                                <p>
                                    When I'm not optimizing component renders, I'm analyzing top-tier SaaS interfaces or contributing to modern UI design systems.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* The Value Props */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6"
                    >
                        {[
                            {
                                icon: Target,
                                color: "text-emerald-500",
                                bg: "bg-emerald-500/10",
                                border: "border-emerald-500/20",
                                title: "Pixel-Perfect Engineering",
                                desc: "Design handoffs aren't just suggestions. I map Figma coordinates to responsive CSS with ruthless precision and zero visual regressions."
                            },
                            {
                                icon: Zap,
                                color: "text-amber-500",
                                bg: "bg-amber-500/10",
                                border: "border-amber-500/20",
                                title: "Performance First",
                                desc: "I prioritize 90+ Lighthouse scores. Core Web Vitals, lazy-loading, and bundle optimization are baked into my workflow from day one."
                            },
                            {
                                icon: ShieldCheck,
                                color: "text-blue-500",
                                bg: "bg-blue-500/10",
                                border: "border-blue-500/20",
                                title: "Scalable Architectures",
                                desc: "Clean abstractions, highly reusable components, and strict TypeScript/React patterns ensure codebases survive long after v1."
                            }
                        ].map((item, idx) => (
                            <motion.div
                                key={idx}
                                whileHover={{ y: -5 }}
                                className={`glass p-8 rounded-[2rem] border ${item.border} hover:border-slate-300 dark:hover:border-slate-600 transition-all duration-300 ${idx === 2 ? 'md:col-span-2' : ''}`}
                            >
                                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${item.bg} ${item.color}`}>
                                    <item.icon size={26} />
                                </div>
                                <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3 font-heading">{item.title}</h4>
                                <p className="text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
                                    {item.desc}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
