import { motion } from 'framer-motion';
import { Target, Zap, ShieldCheck } from 'lucide-react';

const About = () => {
    return (
        <section id="about" className="py-24 md:py-32 relative overflow-hidden bg-white transition-colors duration-500 border-t border-slate-900">
            <div className="w-11/12 max-w-7xl mx-auto px-4 sm:px-6 relative z-10">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="text-center mb-20"
                >
                    <span className="inline-block py-1 mb-6 text-slate-900 font-bold text-xs tracking-[0.2em] uppercase border-b border-slate-900">The Narrative</span>
                    <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold text-slate-900 mb-8 font-heading tracking-tighter uppercase">
                        Why Hire Me?
                    </h2>
                    <div className="w-16 h-1 bg-slate-900 mx-auto mb-10"></div>

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
                                className="text-slate-600 "
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
                        <div className="bg-[#F4F4F1] p-8 md:p-12 relative overflow-hidden editorial-border h-full flex flex-col justify-center">
                            
                            <h3 className="text-3xl lg:text-5xl font-bold text-slate-900 font-heading mb-8 uppercase tracking-tighter">The Journey</h3>
                            <div className="space-y-6 text-slate-700 font-medium leading-relaxed text-lg">
                                <p>
                                    <span className="text-5xl font-bold float-left mr-3 -mt-2 text-slate-900 font-heading">M</span>y frontend journey started with a deep curiosity for how users interact with digital spaces. I realized early on that incredible design loses its impact if the engineering behind it is slow or inaccessible.
                                </p>
                                <p>
                                    Today, my focus is laser-sharp: <strong className="text-slate-900 border-b border-slate-900">React ecosystems, micro-interactions, and enterprise-grade performance.</strong> I love transforming complex data systems into intuitive, accessible dashboards and captivating landing pages.
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
                                color: "text-slate-900",
                                bg: "bg-transparent",
                                border: "border-slate-900",
                                title: "Pixel-Perfect Engineering",
                                desc: "Design handoffs aren't just suggestions. I map Figma coordinates to responsive CSS with ruthless precision and zero visual regressions."
                            },
                            {
                                icon: Zap,
                                color: "text-slate-900",
                                bg: "bg-transparent",
                                border: "border-slate-900/50 border-t-0 md:border-t md:border-l-0 border-b md:border-b-0",
                                title: "Performance First",
                                desc: "I prioritize 90+ Lighthouse scores. Core Web Vitals, lazy-loading, and bundle optimization are baked into my workflow."
                            },
                            {
                                icon: ShieldCheck,
                                color: "text-slate-900",
                                bg: "bg-transparent",
                                border: "border-t md:border-t-0 border-slate-900",
                                title: "Scalable Architectures",
                                desc: "Clean abstractions, highly reusable components, and strict TypeScript/React patterns ensure codebases survive long after v1."
                            }
                        ].map((item, idx) => (
                            <motion.div
                                key={idx}
                                className={`p-8 bg-white editorial-border hover:bg-slate-900 hover:text-white transition-colors duration-300 group flex flex-col justify-between ${idx === 2 ? 'md:col-span-2' : ''}`}
                            >
                                <div className={`mb-8 opacity-80 group-hover:opacity-100 group-hover:text-white transition-colors`}>
                                    <item.icon size={32} strokeWidth={1.5} />
                                </div>
                                <div>
                                    <h4 className="text-2xl font-bold mb-4 font-heading group-hover:text-white tracking-tight">{item.title}</h4>
                                    <p className="text-slate-600 group-hover:text-slate-300 font-medium leading-relaxed">
                                        {item.desc}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
