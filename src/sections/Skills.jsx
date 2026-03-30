import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data';
import { Code2, PenTool, Sparkles } from 'lucide-react';

const Skills = () => {
    const { frontend, tools } = portfolioData.skills;

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                // Add tiny delay to ensure lazy mounting doesn't block main thread
                delayChildren: 0.1 
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
        const [isHovered, setIsHovered] = useState(false);
        
        // Extract hex color for dynamic styling
        const match = skill.color.match(/text-\[([^\]]+)\]/);
        // Default GitHub to slate-800 if no match
        let hexColor = match ? match[1] : (skill.color.includes('slate') ? '#1e293b' : '#000000');
        if(skill.name === "GitHub") hexColor = '#1e293b';

        return (
            <motion.div
                variants={itemVariants}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="relative group rounded-2xl p-[1px] overflow-hidden transition-all duration-500 hover:-translate-y-2 cursor-pointer bg-white shadow-sm hover:shadow-xl dark:bg-slate-900"
            >
                {/* Colorful rotating gradient border effect on hover */}
                <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"
                    style={{
                        background: `linear-gradient(90deg, transparent, ${hexColor}, transparent)`,
                        backgroundSize: '200% 100%',
                        animation: 'shimmer 2s infinite linear'
                    }}
                />

                <div className="relative h-full bg-white dark:bg-slate-900 z-10 p-5 sm:p-6 rounded-2xl flex flex-col items-center justify-center gap-4 border border-slate-100 dark:border-slate-800 transition-all duration-500 group-hover:bg-opacity-95 dark:group-hover:bg-opacity-95">
                    
                    <div className="relative flex items-center justify-center">
                        <div 
                            className="absolute inset-0 opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500 rounded-full scale-150"
                            style={{ backgroundColor: hexColor }}
                        />
                        <Icon 
                            className="w-12 h-12 transition-all duration-500 group-hover:scale-110 relative z-10 text-slate-700 dark:text-slate-300" 
                            style={{ color: isHovered ? hexColor : undefined }}
                        />
                    </div>

                    <div className="w-full mt-1 text-center">
                        <span className="font-bold text-sm tracking-wide text-slate-700 dark:text-slate-200 transition-colors duration-300" style={{ color: isHovered ? hexColor : undefined }}>
                            {skill.name}
                        </span>
                    </div>

                    {/* Proficiency progress bar */}
                    <div className="w-full h-1.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden mt-1 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                        <motion.div 
                            className="h-full rounded-full"
                            style={{ backgroundColor: hexColor }}
                            initial={{ width: 0 }}
                            animate={{ width: isHovered ? `${skill.proficiency}%` : 0 }}
                            transition={{ duration: 0.8, type: 'spring' }}
                        />
                    </div>
                </div>
            </motion.div>
        );
    };

    return (
        <section id="skills" className="py-24 relative overflow-hidden bg-[#FAFAFA] dark:bg-slate-950 transition-colors duration-500 border-t border-slate-200 dark:border-slate-800">
            {/* Colorful background blobs */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-violet-400/20 dark:bg-violet-600/10 blur-[100px] mix-blend-multiply dark:mix-blend-screen animate-blob" />
                <div className="absolute top-[20%] right-[-10%] w-[30%] h-[50%] rounded-full bg-cyan-400/20 dark:bg-cyan-600/10 blur-[100px] mix-blend-multiply dark:mix-blend-screen animate-blob animation-delay-2000" />
                <div className="absolute bottom-[-20%] left-[20%] w-[50%] h-[50%] rounded-full bg-fuchsia-400/20 dark:bg-fuchsia-600/10 blur-[100px] mix-blend-multiply dark:mix-blend-screen animate-blob animation-delay-4000" />
            </div>

            <div className="w-11/12 max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.1, margin: "0px 0px -50px 0px" }}
                    className="text-center mb-20 md:mb-28"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm mb-6">
                        <Sparkles className="w-4 h-4 text-violet-500" />
                        <span className="text-slate-900 dark:text-white font-bold tracking-wider text-xs uppercase">Toolkit</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-violet-800 to-slate-900 dark:from-white dark:via-violet-300 dark:to-white mb-6 tracking-tight pb-2">
                        Technical Skills
                    </h2>
                    <p className="max-w-2xl mx-auto text-slate-600 dark:text-slate-400 text-lg">
                        A colorful spectrum of technologies I use to bring ideas to life, from pixel-perfect interfaces to robust architectures.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 relative">
                    {/* Frontend Category */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.1, margin: "0px 0px -50px 0px" }}
                        className="bg-white/60 dark:bg-slate-900/60 backdrop-blur-xl border border-white/50 dark:border-slate-800 p-8 sm:p-10 rounded-[2.5rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-none"
                    >
                        <div className="flex items-center gap-5 mb-10 pb-6 border-b border-slate-200 dark:border-slate-800">
                            <div className="p-3.5 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-2xl shadow-lg shadow-blue-500/30 text-white transform -rotate-3 transition-transform hover:rotate-0">
                                <Code2 size={28} strokeWidth={2.5} />
                            </div>
                            <h3 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">Frontend</h3>
                        </div>

                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-5">
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
                        viewport={{ once: false, amount: 0.1, margin: "0px 0px -50px 0px" }}
                        className="bg-white/60 dark:bg-slate-900/60 backdrop-blur-xl border border-white/50 dark:border-slate-800 p-8 sm:p-10 rounded-[2.5rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-none"
                    >
                        <div className="flex items-center gap-5 mb-10 pb-6 border-b border-slate-200 dark:border-slate-800">
                            <div className="p-3.5 bg-gradient-to-br from-violet-500 to-fuchsia-400 rounded-2xl shadow-lg shadow-violet-500/30 text-white transform rotate-3 transition-transform hover:rotate-0">
                                <PenTool size={28} strokeWidth={2.5} />
                            </div>
                            <h3 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">Workflow</h3>
                        </div>

                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-5">
                            {tools.map((tool, index) => (
                                <SkillCard key={index} skill={tool} />
                            ))}
                        </div>
                    </motion.div>
                </div>

            </div>
            
            <style>{`
                @keyframes shimmer {
                    0% { background-position: 200% center; }
                    100% { background-position: -200% center; }
                }
                @keyframes blob {
                    0% { transform: translate(0px, 0px) scale(1); }
                    33% { transform: translate(30px, -50px) scale(1.1); }
                    66% { transform: translate(-20px, 20px) scale(0.9); }
                    100% { transform: translate(0px, 0px) scale(1); }
                }
                .animate-blob {
                    animation: blob 7s infinite;
                }
                .animation-delay-2000 {
                    animation-delay: 2s;
                }
                .animation-delay-4000 {
                    animation-delay: 4s;
                }
            `}</style>
        </section>
    );
};

export default Skills;
