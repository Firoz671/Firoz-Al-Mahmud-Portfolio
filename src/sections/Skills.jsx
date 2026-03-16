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

    const SkillCard = ({ skill }) => {
        const Icon = skill.icon;
        return (
            <motion.div
                variants={itemVariants}
                className={`glass-premium p-6 rounded-2xl flex flex-col items-center justify-center gap-4 cursor-pointer group/item transition-all duration-300 hover:-translate-y-2 hover:scale-105 interactive-hover ${skill.hoverBorder} ${skill.hoverGlow}`}
            >
                <Icon className={`w-12 h-12 ${skill.color} group-hover/item:scale-110 drop-shadow-md transition-transform duration-300`} />

                <div className="w-full text-center mt-2">
                    <div className="flex justify-between items-center mb-2">
                        <span className="text-slate-700  font-bold text-sm tracking-wide group-hover/item:text-slate-900  transition-colors">
                            {skill.name}
                        </span>
                        <span className="text-cyan-600  text-xs font-bold opacity-0 group-hover/item:opacity-100 transition-opacity duration-300">
                            {skill.proficiency || 85}%
                        </span>
                    </div>
                    {/* Animated Progress Bar */}
                    <div className="w-full h-1.5 bg-slate-200  rounded-full overflow-hidden">
                        <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.proficiency || 85}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                            className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full group-hover/item:shadow-[0_0_10px_rgba(6,182,212,0.5)] relative"
                        >
                            <div className="absolute top-0 right-0 w-2 h-full bg-white/50 blur-[1px]"></div>
                        </motion.div>
                    </div>
                </div>
            </motion.div>
        );
    };

    return (
        <section id="skills" className="py-24 relative overflow-hidden bg-slate-50  transition-colors duration-500">
            {/* Decorative background vectors */}
            <div className="absolute inset-0 opacity-[0.03]  pointer-events-none" style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
            <div className="absolute inset-0 opacity-[0.03]  pointer-events-none " style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

            <div className="w-11/12 max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="text-center mb-20"
                >
                    <span className="inline-block py-1.5 px-4 rounded-full bg-cyan-500/10  text-cyan-600  font-bold text-sm mb-4 tracking-wider uppercase border border-cyan-500/20">My Arsenal</span>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900  mb-6 font-heading">
                        Technical <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Skills</span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full mb-6"></div>
                    <p className="text-slate-600  max-w-2xl mx-auto text-lg font-medium">
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
                        className="bg-white/80 backdrop-blur-xl border border-slate-100 p-8 sm:p-10 rounded-[2rem] relative overflow-hidden group shadow-[0_20px_40px_rgba(0,0,0,0.03)]"
                    >
                        <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>

                        <div className="flex items-center gap-5 mb-10">
                            <div className="w-16 h-16 rounded-2xl bg-cyan-50 flex items-center justify-center text-cyan-600 border border-cyan-100 shadow-[0_5px_15px_rgba(6,182,212,0.1)] group-hover:scale-105 transition-transform duration-300">
                                <Code2 size={32} />
                            </div>
                            <h3 className="text-3xl font-bold text-slate-900  font-heading tracking-tight">Frontend</h3>
                        </div>

                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                            {frontend.map((skill, index) => (
                                <SkillCard key={index} skill={skill} />
                            ))}
                        </div>
                    </motion.div>

                    {/* Tools Category */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        className="bg-white/80 backdrop-blur-xl border border-slate-100 p-8 sm:p-10 rounded-[2rem] relative overflow-hidden group shadow-[0_20px_40px_rgba(0,0,0,0.03)]"
                    >
                        <div className="absolute top-0 right-0 w-full h-1.5 bg-gradient-to-l from-purple-500 to-pink-500 opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>

                        <div className="flex items-center gap-5 mb-10">
                            <div className="w-16 h-16 rounded-2xl bg-purple-50 flex items-center justify-center text-purple-600 border border-purple-100 shadow-[0_5px_15px_rgba(168,85,247,0.1)] group-hover:scale-105 transition-transform duration-300">
                                <PenTool size={32} />
                            </div>
                            <h3 className="text-3xl font-bold text-slate-900  font-heading tracking-tight">Tools & Workflow</h3>
                        </div>

                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                            {tools.map((tool, index) => (
                                <SkillCard key={index} skill={tool} />
                            ))}
                        </div>
                    </motion.div>
                </div>

            </div>
        </section>
    );
};

export default Skills;
