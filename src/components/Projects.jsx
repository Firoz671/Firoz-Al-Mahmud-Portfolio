import { motion } from 'framer-motion';
import { useGitHubRepos } from '../hooks/useGitHubRepos';
import { ExternalLink, Star, GitFork } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const Projects = () => {
    const { repos, loading, error } = useGitHubRepos('Firoz671');

    // Language color map for tags
    const getLanguageColor = (lang) => {
        const colors = {
            JavaScript: "bg-[#F7DF1E]/10 text-[#F7DF1E] border-[#F7DF1E]/20",
            HTML: "bg-[#E34F26]/10 text-[#E34F26] border-[#E34F26]/20",
            CSS: "bg-[#1572B6]/10 text-[#1572B6] border-[#1572B6]/20",
            TypeScript: "bg-[#3178C6]/10 text-[#3178C6] border-[#3178C6]/20",
            Python: "bg-[#3776AB]/10 text-[#3776AB] border-[#3776AB]/20",
        };
        return colors[lang] || "bg-cyan-500/10 text-cyan-400 border-cyan-500/20";
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
        hidden: { y: 30, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { type: 'spring', stiffness: 80 }
        }
    };

    return (
        <section id="projects" className="py-24 relative">
            {/* Decorative gradient orb */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-500/10 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="w-11/12 mx-auto px-6 sm:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="text-center mb-20"
                >
                    <span className="text-purple-400 font-semibold tracking-wider uppercase text-sm mb-2 block">My Portfolio</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Featured <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">Projects</span></h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full mb-6 shadow-[0_0_15px_rgba(168,85,247,0.5)]"></div>
                    <p className="text-slate-400 max-w-2xl mx-auto text-lg hover:text-slate-300 transition-colors">
                        Highlighting recent open-source repositories and personal experiments fetched live from my GitHub.
                    </p>
                </motion.div>

                {error && (
                    <div className="text-center text-red-400 bg-white/5 backdrop-blur-md p-6 rounded-2xl max-w-md mx-auto border border-red-500/30">
                        <span className="block text-3xl mb-2">⚠️</span>
                        <p className="font-medium">Failed to load projects: {error}</p>
                        <p className="text-sm mt-2 opacity-80">Please check your internet connection or try again later.</p>
                    </div>
                )}

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {loading ? (
                        // Premium Loading Skeletons
                        [...Array(6)].map((_, i) => (
                            <div key={i} className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 h-[340px] relative overflow-hidden shadow-2xl">
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full animate-[shimmer_2s_infinite]"></div>
                                <div className="flex justify-between items-start mb-6 w-full">
                                    <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center">
                                        <div className="w-6 h-6 bg-slate-700 rounded-md"></div>
                                    </div>
                                    <div className="w-8 h-8 rounded-full bg-slate-800"></div>
                                </div>
                                <div className="space-y-4 w-full">
                                    <div className="h-7 bg-slate-800 rounded-lg w-3/4"></div>
                                    <div className="space-y-2">
                                        <div className="h-4 bg-slate-800/80 rounded block w-full"></div>
                                        <div className="h-4 bg-slate-800/80 rounded block w-full"></div>
                                        <div className="h-4 bg-slate-800/80 rounded block w-2/3"></div>
                                    </div>
                                </div>
                                <div className="absolute bottom-8 left-8 right-8 flex justify-between items-center pt-6 border-t border-slate-700/50">
                                    <div className="h-6 w-20 bg-slate-800 rounded-full"></div>
                                    <div className="flex gap-3">
                                        <div className="h-5 w-10 bg-slate-800 rounded"></div>
                                        <div className="h-5 w-10 bg-slate-800 rounded"></div>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        repos.map((repo) => (
                            <motion.div
                                variants={cardVariants}
                                key={repo.id}
                                className="bg-white/5 backdrop-blur-md rounded-3xl p-8 flex flex-col justify-between group h-[340px] border border-white/10 hover:border-purple-500/50 transition-all duration-500 shadow-xl hover:shadow-[0_0_30px_rgba(168,85,247,0.15)] relative overflow-hidden"
                            >
                                {/* Hover gradient effect */}
                                <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 blur-[50px] rounded-full group-hover:bg-purple-500/20 transition-colors duration-500"></div>

                                <div className="relative z-10 flex flex-col h-full w-full">
                                    <div className="flex justify-between items-start mb-6">
                                        <div className="w-12 h-12 rounded-xl bg-slate-800/80 flex items-center justify-center text-white group-hover:-translate-y-1 group-hover:shadow-[0_0_15px_rgba(255,255,255,0.2)] transition-all duration-300 border border-slate-700/50">
                                            <FaGithub size={26} />
                                        </div>
                                        <a href={repo.html_url} target="_blank" rel="noreferrer" title="View Source" className="text-slate-400 hover:text-white hover:bg-white/10 p-2 rounded-full transition-all duration-300 hover:shadow-[0_0_10px_rgba(255,255,255,0.2)]">
                                            <ExternalLink size={20} />
                                        </a>
                                    </div>

                                    <div className="flex-1 w-full">
                                        <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors tracking-wide mb-3 line-clamp-1">
                                            {repo.name.replace(/-/g, ' ')}
                                        </h3>
                                        <p className="text-slate-400 text-sm leading-relaxed line-clamp-3 group-hover:text-slate-300 transition-colors">
                                            {repo.description || 'A fascinating project waiting to be explored. Dive into the code to see more!'}
                                        </p>
                                    </div>

                                    <div className="pt-6 mt-4 border-t border-slate-700/50 flex items-center justify-between w-full">
                                        <div className="flex items-center">
                                            {repo.language ? (
                                                <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${getLanguageColor(repo.language)} transition-colors`}>
                                                    {repo.language}
                                                </span>
                                            ) : (
                                                <span className="text-xs text-slate-500 italic">No language</span>
                                            )}
                                        </div>

                                        <div className="flex gap-4 text-slate-400 text-sm font-medium">
                                            <div className="flex items-center gap-1.5 hover:text-yellow-400 transition-colors cursor-help" title="Stars">
                                                <Star size={16} className="group-hover:fill-yellow-400/20 group-hover:text-yellow-400 transition-colors" />
                                                <span className="group-hover:text-yellow-400 transition-colors">{repo.stargazers_count}</span>
                                            </div>
                                            <div className="flex items-center gap-1.5 hover:text-emerald-400 transition-colors cursor-help" title="Forks">
                                                <GitFork size={16} className="group-hover:text-emerald-400 transition-colors" />
                                                <span className="group-hover:text-emerald-400 transition-colors">{repo.forks_count}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))
                    )}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-16 text-center"
                >
                    <a href="https://github.com/Firoz671" target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 px-8 py-4 bg-slate-800 text-white rounded-full font-semibold hover:bg-slate-700 transition-all shadow-lg hover:shadow-[0_0_20px_rgba(255,255,255,0.15)] hover:-translate-y-1 relative overflow-hidden group border border-slate-700">
                        <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></span>
                        <FaGithub size={22} className="relative z-10" />
                        <span className="relative z-10">Discover More on GitHub</span>
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
