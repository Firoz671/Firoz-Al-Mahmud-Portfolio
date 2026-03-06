import { useState } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { useGitHubRepos } from '../hooks/useGitHubRepos';
import { ExternalLink, Star, GitFork, ArrowRight } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import ProjectModal from './ProjectModal';

const ProjectCard = ({ repo, getLanguageColor, variants, onClick }) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x, { stiffness: 300, damping: 20 });
    const mouseYSpring = useSpring(y, { stiffness: 300, damping: 20 });

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"]);

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        x.set(mouseX / width - 0.5);
        y.set(mouseY / height - 0.5);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div variants={variants} className="relative z-10 cursor-pointer" style={{ perspective: 1000 }} onClick={() => onClick(repo)}>
            <motion.div
                style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                className="bg-white/80 dark:bg-slate-800/40 backdrop-blur-xl rounded-[2rem] p-8 flex flex-col justify-between group h-[380px] border border-slate-200 dark:border-white/10 hover:border-primary/50 dark:hover:border-primary/60 transition-colors duration-500 shadow-xl hover:shadow-[0_20px_40px_rgba(14,165,233,0.15)] relative overflow-hidden"
            >
                {/* Hover gradient effect */}
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/10 dark:bg-primary/20 blur-[50px] rounded-full group-hover:scale-150 transition-transform duration-700 ease-out"></div>
                <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-secondary/10 dark:bg-secondary/20 blur-[50px] rounded-full group-hover:scale-150 transition-transform duration-700 ease-out"></div>

                <div className="relative z-10 flex flex-col h-full w-full" style={{ transform: "translateZ(40px)" }}>
                    <div className="flex justify-between items-start mb-6">
                        <div className="w-14 h-14 rounded-2xl bg-white dark:bg-slate-800/80 flex items-center justify-center text-slate-800 dark:text-white shadow-[0_5px_15px_rgba(0,0,0,0.05)] dark:shadow-[0_5px_15px_rgba(0,0,0,0.2)] group-hover:-translate-y-1 group-hover:shadow-[0_10px_20px_rgba(14,165,233,0.2)] transition-all duration-300 border border-slate-100 dark:border-slate-700/50">
                            <FaGithub size={28} />
                        </div>
                        <div className="flex bg-slate-100 dark:bg-slate-800/80 items-center justify-center w-10 h-10 rounded-full opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 text-primary dark:text-sky-400">
                            <ArrowRight size={18} className="-rotate-45" />
                        </div>
                    </div>

                    <div className="flex-1 w-full mt-2">
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white group-hover:text-primary dark:group-hover:text-primary transition-colors tracking-wide mb-3 line-clamp-1 font-heading">
                            {repo.name.replace(/-/g, ' ')}
                        </h3>
                        <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed line-clamp-3 group-hover:text-slate-700 dark:group-hover:text-slate-300 transition-colors font-medium">
                            {repo.description || 'A fascinating project waiting to be explored. Dive into the code to see more!'}
                        </p>
                    </div>

                    <div className="pt-6 mt-4 border-t border-slate-200 dark:border-slate-700/50 flex items-center justify-between w-full">
                        <div className="flex items-center">
                            {repo.language ? (
                                <span className={`text-[11px] uppercase tracking-wider font-bold px-3 py-1.5 rounded-full border ${getLanguageColor(repo.language)} transition-colors backdrop-blur-md`}>
                                    {repo.language}
                                </span>
                            ) : (
                                <span className="text-xs text-slate-500 italic px-3 py-1">No language</span>
                            )}
                        </div>

                        <div className="flex gap-4 text-slate-500 dark:text-slate-400 text-sm font-bold">
                            <div className="flex items-center gap-1.5 hover:text-yellow-500 dark:hover:text-yellow-400 transition-colors cursor-help" title="Stars">
                                <Star size={16} className="group-hover:fill-yellow-500/20 group-hover:text-yellow-500 dark:group-hover:text-yellow-400 transition-colors" />
                                <span className="group-hover:text-yellow-500 dark:group-hover:text-yellow-400 transition-colors">{repo.stargazers_count}</span>
                            </div>
                            <div className="flex items-center gap-1.5 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors cursor-help" title="Forks">
                                <GitFork size={16} className="group-hover:text-emerald-500 dark:group-hover:text-emerald-400 transition-colors" />
                                <span className="group-hover:text-emerald-500 dark:group-hover:text-emerald-400 transition-colors">{repo.forks_count}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};

const Projects = () => {
    const { repos, loading, error } = useGitHubRepos('Firoz671');
    const [selectedProject, setSelectedProject] = useState(null);

    // Language color map for tags
    const getLanguageColor = (lang) => {
        const colors = {
            JavaScript: "bg-[#F7DF1E]/10 text-yellow-600 dark:text-[#F7DF1E] border-[#F7DF1E]/30",
            HTML: "bg-[#E34F26]/10 text-orange-600 dark:text-[#E34F26] border-[#E34F26]/30",
            CSS: "bg-[#1572B6]/10 text-blue-600 dark:text-[#1572B6] border-[#1572B6]/30",
            TypeScript: "bg-[#3178C6]/10 text-blue-700 dark:text-[#3178C6] border-[#3178C6]/30",
            Python: "bg-[#3776AB]/10 text-blue-800 dark:text-[#3776AB] border-[#3776AB]/30",
        };
        return colors[lang] || "bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border-cyan-500/30";
    };

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15
            }
        }
    };

    const cardVariants = {
        hidden: { y: 40, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { type: 'spring', stiffness: 80, damping: 15 }
        }
    };

    return (
        <section id="projects" className="py-24 relative overflow-hidden">
            {/* Decorative gradient orb */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 dark:bg-primary/10 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="w-11/12 max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="text-center mb-20"
                >
                    <span className="inline-block py-1.5 px-4 rounded-full bg-primary/10 dark:bg-primary/20 text-primary dark:text-sky-300 font-semibold text-sm mb-4 border border-primary/20 tracking-wider uppercase">My Portfolio</span>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6 font-heading">
                        Featured <span className="text-gradient">Case Studies</span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-6"></div>
                    <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg font-medium">
                        Click on any project to dive deep into the architecture, challenges overcome, and performance metrics.
                    </p>
                </motion.div>

                {error && (
                    <div className="text-center text-red-500 dark:text-red-400 bg-red-500/10 backdrop-blur-md p-6 rounded-3xl max-w-md mx-auto border border-red-500/20">
                        <span className="block text-4xl mb-3">⚠️</span>
                        <p className="font-bold text-lg">Failed to load projects</p>
                        <p className="text-sm mt-1 opacity-80">{error}</p>
                    </div>
                )}

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
                >
                    {loading ? (
                        // Premium Loading Skeletons
                        [...Array(6)].map((_, i) => (
                            <div key={i} className="bg-white/60 dark:bg-slate-800/40 backdrop-blur-md border border-slate-200 dark:border-white/10 rounded-[2rem] p-8 h-[380px] relative overflow-hidden shadow-xl">
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 dark:via-white/5 to-transparent -translate-x-full animate-[shimmer_2s_infinite]"></div>
                                <div className="flex justify-between items-start mb-6 w-full relative z-10">
                                    <div className="w-14 h-14 rounded-2xl bg-slate-200 dark:bg-slate-700 overflow-hidden relative">
                                        <div className="absolute inset-0 w-full h-full bg-slate-300 dark:bg-slate-600 animate-pulse"></div>
                                    </div>
                                    <div className="w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-700 animate-pulse"></div>
                                </div>
                                <div className="space-y-5 w-full mt-8 relative z-10">
                                    <div className="h-8 bg-slate-200 dark:bg-slate-700 rounded-xl w-3/4 animate-pulse"></div>
                                    <div className="space-y-3">
                                        <div className="h-4 bg-slate-200 dark:bg-slate-700/80 rounded block w-full animate-pulse"></div>
                                        <div className="h-4 bg-slate-200 dark:bg-slate-700/80 rounded block w-full animate-pulse"></div>
                                        <div className="h-4 bg-slate-200 dark:bg-slate-700/80 rounded block w-2/3 animate-pulse"></div>
                                    </div>
                                </div>
                                <div className="absolute bottom-8 left-8 right-8 flex justify-between items-center pt-6 border-t border-slate-200 dark:border-slate-700/50">
                                    <div className="h-7 w-20 bg-slate-200 dark:bg-slate-700 rounded-full animate-pulse"></div>
                                    <div className="flex gap-4">
                                        <div className="h-6 w-12 bg-slate-200 dark:bg-slate-700 rounded animate-pulse"></div>
                                        <div className="h-6 w-12 bg-slate-200 dark:bg-slate-700 rounded animate-pulse"></div>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        repos.map((repo) => (
                            <ProjectCard
                                key={repo.id}
                                repo={repo}
                                getLanguageColor={getLanguageColor}
                                variants={cardVariants}
                                onClick={setSelectedProject}
                            />
                        ))
                    )}
                </motion.div>

                <ProjectModal
                    project={selectedProject}
                    isOpen={!!selectedProject}
                    onClose={() => setSelectedProject(null)}
                />

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-20 text-center flex justify-center"
                >
                    <a href="https://github.com/Firoz671" target="_blank" rel="noreferrer" className="group relative inline-flex items-center gap-3 px-8 py-4 bg-slate-900 dark:bg-slate-800 text-white rounded-full font-bold hover:bg-slate-800 dark:hover:bg-slate-700 transition-all shadow-[0_5px_20px_rgba(0,0,0,0.1)] hover:shadow-[0_10px_30px_rgba(14,165,233,0.3)] hover:-translate-y-1 overflow-hidden border border-slate-700">
                        <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-primary/20 to-secondary/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></span>
                        <FaGithub size={22} className="relative z-10 group-hover:rotate-12 transition-transform duration-300" />
                        <span className="relative z-10">Discover More on GitHub</span>
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
