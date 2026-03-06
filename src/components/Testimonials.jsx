import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const Testimonials = () => {
    const testimonials = [
        {
            text: "Firoz has an exceptional eye for detail. He doesn't just build what is asked; he anticipates user friction and engineers elegant solutions. A true rising 1% developer.",
            author: "Sarah Jenkins",
            role: "Product Manager at TechFlow",
            initial: "S",
            color: "bg-emerald-100 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-400"
        },
        {
            text: "His ability to translate complex Figma prototypes into pixel-perfect, accessible React components is unmatched. The performance improvements he drove were phenomenal.",
            author: "Marcus Chen",
            role: "Lead Designer at Visionary",
            initial: "M",
            color: "bg-blue-100 text-blue-600 dark:bg-blue-500/20 dark:text-blue-400"
        },
        {
            text: "A rare breed of frontend engineer who deeply understands state management, component architecture, and the importance of Core Web Vitals.",
            author: "Elena Rodriguez",
            role: "Senior Engineering Manager",
            initial: "E",
            color: "bg-purple-100 text-purple-600 dark:bg-purple-500/20 dark:text-purple-400"
        }
    ];

    return (
        <section id="testimonials" className="py-24 relative overflow-hidden bg-slate-50 dark:bg-slate-900 transition-colors duration-500">
            {/* Background elements */}
            <div className="absolute top-1/2 left-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px] -translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>
            <div className="absolute top-1/2 right-0 w-64 h-64 bg-secondary/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

            <div className="w-11/12 max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="text-center mb-16"
                >
                    <span className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold text-sm mb-4 tracking-wider uppercase border border-slate-300 dark:border-slate-700">
                        <Quote size={14} /> Endorsements
                    </span>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6 font-heading tracking-tight">
                        Words of <span className="text-gradient">Impact</span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-6 relative overflow-hidden">
                        <motion.div
                            initial={{ x: "-100%" }}
                            whileInView={{ x: "100%" }}
                            transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                            className="absolute inset-0 bg-white/50 w-full h-full skew-x-12"
                        ></motion.div>
                    </div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ delay: idx * 0.15 }}
                            className="glass p-8 rounded-[2rem] border border-slate-200 dark:border-slate-800 relative group flex flex-col justify-between hover:shadow-2xl hover:border-primary/50 transition-all duration-300 h-full"
                        >
                            <Quote className="absolute top-6 right-6 text-slate-200 dark:text-slate-800/50 w-16 h-16 -z-10 group-hover:text-primary/10 transition-colors" />

                            <p className="text-slate-700 dark:text-slate-300 font-medium leading-relaxed italic mb-8 relative z-10">
                                "{item.text}"
                            </p>

                            <div className="flex items-center gap-4 border-t border-slate-200 dark:border-slate-800 pt-6 mt-auto">
                                <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg ${item.color}`}>
                                    {item.initial}
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-900 dark:text-white">{item.author}</h4>
                                    <p className="text-sm font-medium text-slate-500 dark:text-slate-400">{item.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
