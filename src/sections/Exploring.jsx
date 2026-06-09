import { motion } from 'framer-motion';
import { Compass, Sparkles, BookOpen } from 'lucide-react';
import exploringData from '../data/exploring.json';

const Exploring = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.1,
            }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { 
            opacity: 1, 
            y: 0, 
            transition: { 
                type: "spring", 
                stiffness: 100, 
                damping: 20 
            } 
        }
    };

    return (
        <section id="exploring" className="py-24 relative overflow-hidden bg-[#fafafa] transition-colors duration-500 border-t border-slate-200">
            <div className="w-11/12 max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
                
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="text-center mb-16 lg:mb-20"
                >
                    <span className="inline-flex items-center gap-2 py-1.5 px-4 bg-emerald-50 text-emerald-700 border border-emerald-100 rounded-full font-bold tracking-[0.2em] text-xs uppercase mb-6">
                        <Compass size={14} className="animate-spin-slow" />
                        Current Focus
                    </span>
                    <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold text-slate-900 mb-8 font-heading uppercase tracking-tighter">
                        What I'm Exploring
                    </h2>
                    <div className="w-16 h-1 bg-slate-900 mx-auto mb-10 rounded-full"></div>
                </motion.div>

                {/* Grid Layout */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8"
                >
                    {exploringData.map((item, index) => (
                        <motion.div
                            key={index}
                            variants={cardVariants}
                            className="bg-white p-8 md:p-10 polished-card group hover:-translate-y-2 hover:shadow-xl hover:border-slate-300 transition-all duration-500 ease-out relative overflow-hidden flex flex-col h-full"
                        >
                            {/* Subtle background glow effect on hover */}
                            <div className="absolute -top-10 -right-10 w-32 h-32 bg-slate-50 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>

                            <div className="relative z-10 mb-6 flex items-center gap-4">
                                <div className="p-3 bg-slate-50 text-slate-700 rounded-xl border border-slate-100 shadow-sm group-hover:bg-slate-900 group-hover:text-white transition-colors duration-500 ease-out flex-shrink-0">
                                    <BookOpen size={20} strokeWidth={2} />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 tracking-tight font-heading leading-snug">
                                    {item.title}
                                </h3>
                            </div>
                            
                            <p className="text-slate-600 font-medium leading-relaxed relative z-10 text-[15px] opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                                {item.description}
                            </p>
                            
                            <div className="mt-auto pt-6 border-t border-slate-50 relative z-10 hidden group-hover:block transition-all duration-300">
                                <span className="text-xs uppercase tracking-widest text-slate-400 font-bold flex items-center gap-2">
                                    <Sparkles size={12} className="text-amber-400" /> Working on it
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

            </div>
        </section>
    );
};

export default Exploring;
