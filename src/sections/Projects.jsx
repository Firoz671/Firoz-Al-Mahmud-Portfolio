import { useState } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { useGitHubRepos } from '../hooks/useGitHubRepos';
import { ExternalLink, Star, GitFork, ArrowRight, Code2 } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import ProjectModal from '../components/ui/ProjectModal';
import projectsData from '../data/projects.json';

const ManualProjectCard = ({ project, variants }) => {
    return (
        <motion.div variants={variants} className="group relative z-10 glass-premium rounded-[2.5rem] overflow-hidden flex flex-col md:flex-row shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-all duration-500 border border-slate-100 hover:border-slate-200">
            {/* Image container covering left half */}
            <div className="w-full md:w-5/12 h-64 md:h-auto relative overflow-hidden bg-slate-100 flex-shrink-0">
                <div className="absolute inset-0 bg-slate-900/10 mix-blend-multiply z-10 transition-opacity duration-500 group-hover:opacity-0"></div>
                <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" 
                    loading="lazy"
                />
            </div>
            
            {/* Content container covering right half */}
            <div className="w-full md:w-7/12 p-8 md:p-12 flex flex-col justify-center relative bg-white/60 backdrop-blur-md">
                <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.slice(0, 4).map((tech, idx) => (
                        <span key={idx} className="text-[11px] uppercase tracking-wider font-bold px-3 py-1.5 rounded-full border border-slate-200 bg-white text-slate-600 shadow-sm">
                            {tech}
                        </span>
                    ))}
                </div>

                <h3 className="text-3xl font-extrabold text-slate-900 tracking-tight mb-4 font-heading group-hover:text-primary transition-colors">
                    {project.title}
                </h3>
                
                <p className="text-slate-600 text-base leading-relaxed mb-8 max-w-lg font-medium">
                    {project.description}
                </p>

                <div className="flex items-center gap-4 mt-auto">
                    {project.demoLink && (
                        <a 
                            href={project.demoLink} 
                            target="_blank" 
                            rel="noreferrer" 
                            className="flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-full font-bold text-sm tracking-wide hover:bg-primary-dark transition-colors shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 hover:-translate-y-0.5"
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
                            className="flex items-center gap-2 px-6 py-3 bg-white text-slate-800 border border-slate-200 rounded-full font-bold text-sm tracking-wide hover:bg-slate-50 transition-colors shadow-sm hover:shadow-md hover:-translate-y-0.5"
                        >
                            <FaGithub size={18} />
                            <span>Repository</span>
                        </a>
                    )}
                </div>
            </div>
        </motion.div>
    );
};

const RepoCard = ({ repo, getLanguageColor, variants, onClick }) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x, { stiffness: 400, damping: 25 });
    const mouseYSpring = useSpring(y, { stiffness: 400, damping: 25 });

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["12deg", "-12deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-12deg", "12deg"]);

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
        <motion.div variants={variants} className="relative z-10 cursor-pointer interactive-hover" style={{ perspective: 1200 }} onClick={() => onClick(repo)}>
            <motion.div
                style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                className="bg-white/80 backdrop-blur-2xl rounded-[2rem] p-8 flex flex-col justify-between group h-[380px] border border-slate-100 transition-colors duration-500 shadow-[0_10px_30px_rgba(0,0,0,0.02)] hover:shadow-[0_30px_60px_rgba(0,0,0,0.06)] hover:border-slate-200 relative"
            >
                {/* Animated Border Glow Pattern */}
                <div className="absolute -inset-[1px] bg-gradient-to-r from-primary via-secondary to-primary rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[length:200%_auto] animate-[shimmer_3s_linear_infinite] z-[-1] blur-[8px]"></div>
                <div className="absolute -inset-[1px] bg-gradient-to-r from-primary via-secondary to-primary rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[length:200%_auto] animate-[shimmer_3s_linear_infinite] z-[-1]"></div>

                {/* Background base to cover the glow */}
                <div className="absolute inset-0 bg-white/90 rounded-[calc(2rem-1px)] z-[-1] backdrop-blur-3xl"></div>

                {/* Hover gradient effect interior */}
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/10 blur-[50px] rounded-full group-hover:scale-[2] transition-transform duration-700 ease-out pointer-events-none"></div>
                <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-secondary/10 blur-[50px] rounded-full group-hover:scale-[2] transition-transform duration-700 ease-out pointer-events-none"></div>

                <div className="relative z-10 flex flex-col h-full w-full pointer-events-none" style={{ transform: "translateZ(50px)" }}>
                    <div className="flex justify-between items-start mb-6">
                        <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center text-slate-800 shadow-[0_5px_15px_rgba(0,0,0,0.05)] group-hover:-translate-y-1 group-hover:shadow-[0_15px_30px_rgba(14,165,233,0.3)] transition-all duration-300 border border-slate-100">
                            <FaGithub size={28} />
                        </div>
                        <div className="flex bg-slate-100 items-center justify-center w-10 h-10 rounded-full opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 shadow-lg transition-all duration-300 text-primary">
                            <ArrowRight size={18} className="-rotate-45" />
                        </div>
                    </div>

                    <div className="flex-1 w-full mt-2">
                        <h3 className="text-2xl font-extrabold text-slate-900 group-hover:text-primary transition-colors tracking-wide mb-3 line-clamp-1 font-heading">
                            {repo.name.replace(/-/g, ' ')}
                        </h3>
                        <p className="text-slate-600 text-sm leading-relaxed line-clamp-3 group-hover:text-slate-700 transition-colors font-medium">
                            {repo.description || 'A fascinating project waiting to be explored. Dive into the code to see more!'}
                        </p>
                    </div>

                    <div className="pt-6 mt-4 border-t border-slate-200 flex items-center justify-between w-full">
                        <div className="flex items-center">
                            {repo.language ? (
                                <span className={`text-[11px] uppercase tracking-wider font-bold px-3 py-1.5 rounded-full border ${getLanguageColor(repo.language)} transition-colors backdrop-blur-md`}>
                                    {repo.language}
                                </span>
                            ) : (
                                <span className="text-xs text-slate-500 italic px-3 py-1">No language</span>
                            )}
                        </div>

                        <div className="flex gap-4 text-slate-500 text-sm font-bold">
                            <div className="flex items-center gap-1.5 hover:text-yellow-500 transition-colors" title="Stars">
                                <Star size={16} className="group-hover:fill-yellow-500/20 group-hover:text-yellow-500 transition-colors" />
                                <span className="group-hover:text-yellow-500 transition-colors">{repo.stargazers_count}</span>
                            </div>
                            <div className="flex items-center gap-1.5 hover:text-emerald-500 transition-colors" title="Forks">
                                <GitFork size={16} className="group-hover:text-emerald-500 transition-colors" />
                                <span className="group-hover:text-emerald-500 transition-colors">{repo.forks_count}</span>
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
            JavaScript: "bg-[#F7DF1E]/10 text-yellow-600 border-[#F7DF1E]/30",
            HTML: "bg-[#E34F26]/10 text-orange-600 border-[#E34F26]/30",
            CSS: "bg-[#1572B6]/10 text-blue-600 border-[#1572B6]/30",
            TypeScript: "bg-[#3178C6]/10 text-blue-700 border-[#3178C6]/30",
            Python: "bg-[#3776AB]/10 text-blue-800 border-[#3776AB]/30",
        };
        return colors[lang] || "bg-cyan-500/10 text-cyan-600 border-cyan-500/30";
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
        hidden: { y: 60, opacity: 0, scale: 0.95 },
        visible: {
            y: 0, opacity: 1, scale: 1,
            transition: { type: 'spring', stiffness: 100, damping: 20 }
        }
    };

    return (
        <section id="projects" className="py-24 relative overflow-hidden bg-slate-50/50">
            {/* Decorative gradient orb */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px] pointer-events-none"></div>

            <div className="w-11/12 max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="text-center mb-20 md:mb-28"
                >
                    <span className="inline-block py-1.5 px-4 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-4 border border-primary/20 tracking-wider uppercase backdrop-blur-md">My Portfolio</span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-6 font-heading">
                        Featured <span className="text-gradient">Work</span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-6 relative overflow-hidden"></div>
                    <p className="text-slate-600 max-w-2xl mx-auto text-lg font-medium">
                        A curated selection of my professional projects and latest open-source contributions.
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
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                            <Code2 size={24} />
                        </div>
                        <h3 className="text-3xl font-extrabold text-slate-900 font-heading">Featured Projects</h3>
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
                        className="flex items-center gap-4 mb-10"
                    >
                        <div className="w-12 h-12 rounded-xl bg-slate-900 flex items-center justify-center text-white shadow-xl shadow-slate-900/20">
                            <FaGithub size={24} />
                        </div>
                        <div>
                            <h3 className="text-3xl font-extrabold text-slate-900 font-heading">Open Source & Repositories</h3>
                        </div>
                    </motion.div>

                    {error && (
                        <div className="text-center text-red-500 bg-red-500/10 backdrop-blur-md p-6 rounded-3xl max-w-md mx-auto border border-red-500/20 mb-12">
                            <span className="block text-4xl mb-3">⚠️</span>
                            <p className="font-bold text-lg">Failed to load repositories</p>
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
                                <div key={i} className="glass-premium rounded-[2rem] p-8 h-[380px] relative overflow-hidden shadow-xl">
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full animate-[shimmer_2s_infinite]"></div>
                                    <div className="flex justify-between items-start mb-6 w-full relative z-10">
                                        <div className="w-14 h-14 rounded-2xl bg-slate-200 overflow-hidden relative">
                                            <div className="absolute inset-0 w-full h-full bg-slate-300 animate-pulse"></div>
                                        </div>
                                        <div className="w-10 h-10 rounded-full bg-slate-200 animate-pulse"></div>
                                    </div>
                                    <div className="space-y-5 w-full mt-8 relative z-10">
                                        <div className="h-8 bg-slate-200 rounded-xl w-3/4 animate-pulse"></div>
                                        <div className="space-y-3">
                                            <div className="h-4 bg-slate-200 rounded block w-full animate-pulse"></div>
                                            <div className="h-4 bg-slate-200 rounded block w-full animate-pulse"></div>
                                            <div className="h-4 bg-slate-200 rounded block w-2/3 animate-pulse"></div>
                                        </div>
                                    </div>
                                    <div className="absolute bottom-8 left-8 right-8 flex justify-between items-center pt-6 border-t border-slate-200">
                                        <div className="h-7 w-20 bg-slate-200 rounded-full animate-pulse"></div>
                                        <div className="flex gap-4">
                                            <div className="h-6 w-12 bg-slate-200 rounded animate-pulse"></div>
                                            <div className="h-6 w-12 bg-slate-200 rounded animate-pulse"></div>
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
                    <a href="https://github.com/Firoz671" target="_blank" rel="noreferrer" className="group relative inline-flex items-center gap-3 px-8 py-4 bg-slate-900 text-white rounded-full font-bold hover:bg-slate-800 transition-all shadow-[0_5px_20px_rgba(0,0,0,0.1)] hover:shadow-[0_15px_30px_rgba(14,165,233,0.3)] hover:-translate-y-1 overflow-hidden border border-slate-700 interactive-hover">
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
