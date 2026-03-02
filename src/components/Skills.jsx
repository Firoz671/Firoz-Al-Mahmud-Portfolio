import { motion } from 'framer-motion';
import { portfolioData } from '../data';
import { Code2, PenTool } from 'lucide-react';

const Skills = () => {
    const { frontend, tools } = portfolioData.skills;

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { type: 'spring', stiffness: 100 }
        }
    };

    return (
        <section id="skills" className="py-24 relative overflow-hidden">
            {/* Decorative background lines */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

            <div className="w-11/12 mx-auto px-6 sm:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="text-center mb-20"
                >
                    <span className="text-cyan-400 font-semibold tracking-wider uppercase text-sm mb-2 block">My Arsenal</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Technical <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Skills</span></h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full mb-6 shadow-[0_0_15px_rgba(6,182,212,0.5)]"></div>
                    <p className="text-slate-400 max-w-2xl mx-auto text-lg hover:text-slate-300 transition-colors">
                        Technologies I've mastered to build modern, scalable, and exceptional digital experiences.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
                    {/* Frontend Category */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-3xl relative overflow-hidden group shadow-2xl"
                    >
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-50 group-hover:opacity-100 transition-opacity"></div>

                        <div className="flex items-center gap-4 mb-10">
                            <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 border border-cyan-500/20 shadow-[0_0_15px_rgba(6,182,212,0.15)]">
                                <Code2 size={28} />
                            </div>
                            <h3 className="text-2xl font-bold text-white">Frontend Development</h3>
                        </div>

                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                            {frontend.map((skill, index) => {
                                const Icon = skill.icon;
                                return (
                                    <motion.div
                                        key={index}
                                        variants={itemVariants}
                                        className={`bg-slate-800/40 border border-slate-700/50 p-6 rounded-2xl flex flex-col items-center justify-center gap-4 cursor-pointer group/item shadow-lg transition-all duration-300 hover:-translate-y-2 hover:scale-105 ${skill.hoverBorder} ${skill.hoverGlow}`}
                                    >
                                        <Icon className={`w-12 h-12 ${skill.color} group-hover/item:scale-110 drop-shadow-md transition-transform duration-300`} />
                                        <span className="text-slate-300 font-medium text-sm text-center group-hover/item:text-white transition-colors">{skill.name}</span>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </motion.div>

                    {/* Tools Category */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-3xl relative overflow-hidden group shadow-2xl"
                    >
                        <div className="absolute top-0 right-0 w-full h-1 bg-gradient-to-l from-purple-500 to-pink-500 opacity-50 group-hover:opacity-100 transition-opacity"></div>

                        <div className="flex items-center gap-4 mb-10">
                            <div className="w-14 h-14 rounded-2xl bg-purple-500/10 flex items-center justify-center text-purple-400 border border-purple-500/20 shadow-[0_0_15px_rgba(168,85,247,0.15)]">
                                <PenTool size={28} />
                            </div>
                            <h3 className="text-2xl font-bold text-white">Tools & Platforms</h3>
                        </div>

                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                            {tools.map((tool, index) => {
                                const Icon = tool.icon;
                                return (
                                    <motion.div
                                        key={index}
                                        variants={itemVariants}
                                        className={`bg-slate-800/40 border border-slate-700/50 p-6 rounded-2xl flex flex-col items-center justify-center gap-4 cursor-pointer group/item shadow-lg transition-all duration-300 hover:-translate-y-2 hover:scale-105 ${tool.hoverBorder} ${tool.hoverGlow}`}
                                    >
                                        <Icon className={`w-12 h-12 ${tool.color} group-hover/item:scale-110 drop-shadow-md transition-transform duration-300`} />
                                        <span className="text-slate-300 font-medium text-sm text-center group-hover/item:text-white transition-colors">{tool.name}</span>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </motion.div>
                </div>

            </div>
        </section>
    );
};

export default Skills;
