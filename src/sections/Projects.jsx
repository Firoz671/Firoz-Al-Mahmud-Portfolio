import { useState } from 'react';
import { motion } from 'framer-motion';
import { useGitHubRepos } from '../hooks/useGitHubRepos';
import { ExternalLink, Star, GitFork, ArrowRight, Code2, Sparkles, FolderGit2 } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import ProjectModal from '../components/ui/ProjectModal';
import projectsData from '../data/projects.json';

const ManualProjectCard = ({ project, variants }) => {
    return (
        <motion.div variants={variants} className="group relative z-10 bg-white flex flex-col md:flex-row transition-all duration-500 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl border border-slate-100 hover:-translate-y-1">
            {/* Image container covering left half */}
            <div className="w-full md:w-5/12 h-64 md:h-auto relative overflow-hidden bg-slate-100 flex-shrink-0">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 via-transparent to-transparent z-10 opacity-70 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none"></div>
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                />
            </div>

            {/* Content container covering right half */}
            <div className="w-full md:w-7/12 p-8 md:p-10 lg:p-12 flex flex-col justify-center relative bg-white">
                <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 text-[10px] font-bold tracking-widest uppercase">
                        <Sparkles size={12} />
                        <span>Featured Showcase</span>
                    </div>
                </div>

                <h3 className="text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight mb-4 font-heading group-hover:text-indigo-600 transition-colors">
                    {project.title}
                </h3>

                <p className="text-slate-600 text-[15px] leading-relaxed mb-6 font-medium line-clamp-2">
                    {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                    {project.technologies.slice(0, 4).map((tech, idx) => (
                        <span key={idx} className="px-3 py-1 text-xs font-semibold bg-slate-50 text-slate-600 border border-slate-200 rounded-lg">
                            {tech}
                        </span>
                    ))}
                </div>

                <div className="pt-6 mt-auto border-t border-slate-100 flex flex-wrap items-center gap-4">
                    {project.demoLink && (
                        <a
                            href={project.demoLink}
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center gap-2 px-6 py-2.5 bg-slate-900 text-white font-bold text-xs uppercase tracking-widest rounded-xl hover:bg-indigo-600 hover:shadow-lg hover:shadow-indigo-500/30 transition-all duration-300"
                        >
                            <span>Live Demo</span>
                            <ExternalLink size={16} />
                        </a>
                    )}
                    {project.githubLink && (
                        <a
                            href={project.githubLink}
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center gap-2 px-6 py-2.5 bg-white text-slate-700 border border-slate-200 font-bold text-xs uppercase tracking-widest rounded-xl hover:bg-slate-50 hover:text-slate-900 transition-all duration-300"
                        >
                            <FaGithub size={18} />
                            <span>GitHub</span>
                        </a>
                    )}
                </div>
            </div>
        </motion.div>
    );
};

const RepoCard = ({ repo, getLanguageColor, variants, onClick }) => {
    return (
        <motion.div variants={variants} className="relative z-10 cursor-pointer h-full" onClick={() => onClick(repo)}>
            <div className="bg-white p-6 sm:p-8 flex flex-col justify-between group h-full rounded-2xl border border-slate-200 transition-all duration-300 hover:shadow-md hover:border-slate-300 hover:-translate-y-1 relative">
                <div className="flex flex-col h-full w-full">
                    <div className="flex justify-between items-start mb-5">
                        <div className="w-11 h-11 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-600 group-hover:text-amber-500 group-hover:border-amber-200 group-hover:bg-amber-50 transition-colors duration-300">
                            <FolderGit2 size={22} />
                        </div>
                        <div className="flex items-center justify-center w-8 h-8 rounded-full opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300 text-slate-400 group-hover:text-amber-500">
                            <ArrowRight size={18} />
                        </div>
                    </div>

                    <div className="flex-1 w-full">
                        <h3 className="text-xl font-bold text-slate-900 group-hover:text-amber-600 transition-colors tracking-tight mb-3 line-clamp-1">
                            {repo.name.replace(/-/g, ' ')}
                        </h3>
                        <p className="text-slate-500 text-sm leading-relaxed line-clamp-2">
                            {repo.description || 'A fascinating project waiting to be explored. Dive into the code to see more!'}
                        </p>
                    </div>

                    <div className="pt-5 mt-5 border-t border-slate-100 flex items-center justify-between w-full">
                        <div className="flex items-center">
                            {repo.language ? (
                                <div className="flex items-center gap-2 text-xs font-semibold text-slate-600">
                                    <span className={`w-2 h-2 rounded-full ${getLanguageColor(repo.language).dot}`}></span>
                                    {repo.language}
                                </div>
                            ) : (
                                <span className="text-[10px] text-slate-400 italic font-medium">No language</span>
                            )}
                        </div>

                        <div className="flex gap-4 text-slate-500 text-xs font-semibold">
                            <div className="flex items-center gap-1.5 hover:text-yellow-600 transition-colors" title="Stars">
                                <Star size={14} className="group-hover:text-yellow-500 group-hover:fill-yellow-500/20 transition-colors" />
                                <span>{repo.stargazers_count}</span>
                            </div>
                            <div className="flex items-center gap-1.5 hover:text-emerald-600 transition-colors" title="Forks">
                                <GitFork size={14} className="group-hover:text-emerald-500 transition-colors" />
                                <span>{repo.forks_count}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

const Projects = () => {
    const { repos, loading, error } = useGitHubRepos('Firoz671');
    const [selectedProject, setSelectedProject] = useState(null);

    // GitHub Language color map for dots
    const getLanguageColor = (lang) => {
        const colors = {
            JavaScript: { dot: "bg-[#F7DF1E]" },
            HTML: { dot: "bg-[#E34F26]" },
            CSS: { dot: "bg-[#1572B6]" },
            TypeScript: { dot: "bg-[#3178C6]" },
            Python: { dot: "bg-[#3572A5]" },
            Java: { dot: "bg-[#b07219]" },
            "C++": { dot: "bg-[#f34b7d]" },
        };
        return colors[lang] || { dot: "bg-slate-400" };
    };

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 }
        }
    };

    const cardVariants = {
        hidden: { y: 40, opacity: 0, scale: 0.98 },
        visible: {
            y: 0, opacity: 1, scale: 1,
            transition: { type: 'spring', stiffness: 100, damping: 20 }
        }
    };

    // Filter or sort logic could go here; currently defaults to hook data
    const totalRepos = repos ? repos.length : 0;
    const totalStars = repos ? repos.reduce((acc, repo) => acc + repo.stargazers_count, 0) : 0;

    return (
        <section id="projects" className="py-24 relative overflow-hidden bg-[#F8F9FA] transition-colors duration-500">
            <div className="w-11/12 max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="text-center mb-20 md:mb-28"
                >
                    <span className="inline-block py-1.5 px-4 text-indigo-600 bg-indigo-50 border border-indigo-100 rounded-full font-bold tracking-[0.2em] text-[10px] uppercase mb-6">Portfolio</span>
                    <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold text-slate-900 mb-8 font-heading tracking-tight">
                        Featured Works.
                    </h2>
                    <p className="max-w-2xl mx-auto text-slate-500 text-lg">
                        A curated selection of my finest projects and open-source contributions.
                    </p>
                </motion.div>

                {/* Subsection 1: Featured Projects (Manual JSON) */}
                <div className="mb-32">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="flex items-center gap-4 mb-10"
                    >
                        <div className="w-12 h-12 rounded-2xl bg-indigo-50 flex items-center justify-center text-indigo-600">
                            <Code2 size={24} />
                        </div>
                        <h3 className="text-3xl font-extrabold text-slate-900 font-heading">Project Showcase</h3>
                    </motion.div>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        className="space-y-12"
                    >
                        {projectsData.map((project) => (
                            <ManualProjectCard
                                key={project.id}
                                project={project}
                                variants={cardVariants}
                            />
                        ))}
                    </motion.div>
                </div>

                {/* Subsection 2: Open Source (GitHub API) */}
                <div>
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-6 border-b border-slate-200"
                    >
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-2xl bg-slate-100 flex items-center justify-center text-slate-700">
                                <FaGithub size={24} />
                            </div>
                            <div>
                                <h3 className="text-3xl font-bold text-slate-900 font-heading tracking-tight">Open Source</h3>
                                <p className="text-slate-500 text-sm mt-1">Contributions and repositories on GitHub</p>
                            </div>
                        </div>

                        {!loading && !error && (
                            <div className="flex gap-4 text-sm font-semibold text-slate-600 bg-white border border-slate-200 px-4 py-2 rounded-xl shadow-sm">
                                <div className="flex items-center gap-2">
                                    <span className="text-slate-400">Repos:</span>
                                    <span className="text-slate-900">{totalRepos}</span>
                                </div>
                                <div className="w-px h-4 bg-slate-200"></div>
                                <div className="flex items-center gap-2">
                                    <span className="text-slate-400">Stars:</span>
                                    <span className="text-slate-900">{totalStars}</span>
                                </div>
                            </div>
                        )}
                    </motion.div>

                    {error && (
                        <div className="text-center text-red-500 bg-red-50 border border-red-100 p-8 rounded-3xl max-w-md mx-auto mb-12 shadow-sm">
                            <span className="block text-4xl mb-4">⚠️</span>
                            <p className="font-bold text-lg mb-1">Failed to load repositories</p>
                            <p className="text-sm opacity-80">{error}</p>
                        </div>
                    )}

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
                    >
                        {loading ? (
                            // Clean Loading Skeletons
                            [...Array(6)].map((_, i) => (
                                <div key={i} className="bg-white rounded-2xl border border-slate-100 p-6 sm:p-8 h-full relative overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-slate-50 to-transparent -translate-x-full animate-[shimmer_2s_infinite]"></div>
                                    <div className="flex justify-between items-start mb-6">
                                        <div className="w-11 h-11 rounded-xl bg-slate-100 relative"></div>
                                    </div>
                                    <div className="space-y-4 w-full mt-4 relative z-10">
                                        <div className="h-6 bg-slate-100 w-3/4 rounded-md"></div>
                                        <div className="space-y-2">
                                            <div className="h-3 bg-slate-50 w-full rounded-md"></div>
                                            <div className="h-3 bg-slate-50 w-full rounded-md"></div>
                                            <div className="h-3 bg-slate-50 w-2/3 rounded-md"></div>
                                        </div>
                                    </div>
                                    <div className="mt-8 pt-5 border-t border-slate-50 flex justify-between items-center w-full relative z-10">
                                        <div className="h-4 w-20 bg-slate-100 rounded-md"></div>
                                        <div className="flex gap-3">
                                            <div className="h-4 w-8 bg-slate-100 rounded-md"></div>
                                            <div className="h-4 w-8 bg-slate-100 rounded-md"></div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            repos.map((repo) => (
                                <RepoCard
                                    key={repo.id}
                                    repo={repo}
                                    getLanguageColor={getLanguageColor}
                                    variants={cardVariants}
                                    onClick={setSelectedProject}
                                />
                            ))
                        )}
                    </motion.div>
                </div>

                <ProjectModal
                    project={selectedProject}
                    isOpen={!!selectedProject}
                    onClose={() => setSelectedProject(null)}
                />

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="mt-20 text-center flex justify-center"
                >
                    <a
                        href="https://github.com/Firoz671"
                        target="_blank"
                        rel="noreferrer"
                        className="group relative inline-flex items-center gap-3 px-8 py-4 bg-white border border-slate-200 text-slate-800 font-bold rounded-2xl hover:bg-slate-50 hover:border-slate-300 hover:shadow-sm transition-all duration-300 pointer-events-auto"
                    >
                        <FaGithub size={20} className="text-slate-700 group-hover:scale-110 transition-transform duration-300" />
                        <span>Discover More on GitHub</span>
                        <ArrowRight size={16} className="text-slate-400 group-hover:translate-x-1 group-hover:text-slate-800 transition-all duration-300" />
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
