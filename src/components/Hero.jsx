import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import { Github, Linkedin, Mail, Download } from 'lucide-react';
import { portfolioData } from '../data';

const Hero = () => {
    const { name, title, github, linkedin } = portfolioData.personalInfo;

    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
            {/* Animated Background Elements */}
            <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/20 rounded-full mix-blend-screen filter blur-[100px] animate-blob"></div>
            <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-secondary/20 rounded-full mix-blend-screen filter blur-[100px] animate-blob" style={{ animationDelay: '2s' }}></div>
            <div className="absolute bottom-1/4 left-1/2 w-72 h-72 bg-pink-500/20 rounded-full mix-blend-screen filter blur-[100px] animate-blob" style={{ animationDelay: '4s' }}></div>

            <div className="w-11/12 mx-auto px-6 sm:px-8 z-10 flex flex-col lg:flex-row items-center justify-between gap-12">

                {/* Text Content */}
                <div className="text-center lg:text-left flex-1">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-primary font-medium tracking-wide mb-4"
                    >
                        HELLO, WORLD! I AM
                    </motion.p>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight"
                    >
                        {name}
                    </motion.h1>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="text-2xl md:text-3xl font-bold text-slate-300 mb-8 h-12"
                    >
                        <span className="mr-2">I am a</span>
                        <span className="text-gradient">
                            <Typewriter
                                words={[title, 'React Enthusiast', 'Web Developer']}
                                loop={true}
                                cursor
                                cursorStyle='_'
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1000}
                            />
                        </span>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        className="max-w-2xl mx-auto lg:mx-0 text-slate-400 mb-10 text-lg leading-relaxed"
                    >
                        {portfolioData.about.description}
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.8 }}
                        className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
                    >
                        <a href="#projects" className="px-8 py-4 bg-primary text-white rounded-full font-semibold hover:bg-sky-400 transition-colors shadow-lg shadow-primary/30 w-full sm:w-auto text-center">
                            View Work
                        </a>
                        <a href="/FirozAlMahmud.pdf" download className="px-8 py-4 glass-card text-white rounded-full font-semibold flex items-center justify-center gap-2 w-full sm:w-auto hover:bg-white/10 transition-colors border-primary/30">
                            <Download size={20} /> Download Resume
                        </a>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 1 }}
                        className="flex items-center justify-center lg:justify-start gap-6 mt-12"
                    >
                        <a href={github} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors p-3 glass-card rounded-full hover:scale-110">
                            <Github size={24} />
                        </a>
                        <a href={linkedin} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-[#0a66c2] transition-colors p-3 glass-card rounded-full hover:scale-110">
                            <Linkedin size={24} />
                        </a>
                        <a href="#contact" className="text-slate-400 hover:text-red-400 transition-colors p-3 glass-card rounded-full hover:scale-110">
                            <Mail size={24} />
                        </a>
                    </motion.div>
                </div>

                {/* Profile Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="flex-1 flex justify-center lg:justify-end mt-12 lg:mt-0"
                >
                    {/* Perfect circle aspect ratio */}
                    <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-[400px] lg:h-[400px] flex items-center justify-center">
                        {/* Glow effect */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500 to-purple-500 rounded-full animate-pulse blur-3xl opacity-40"></div>

                        {/* Image wrapper */}
                        <div className="relative w-full h-full rounded-full border-[6px] border-slate-800 shadow-2xl p-2 bg-slate-900 flex items-center justify-center overflow-hidden">
                            <img
                                src="/profile.jpg"
                                alt={name}
                                className="w-full h-full object-cover rounded-full"
                                onError={(e) => { e.target.src = "https://ui-avatars.com/api/?name=Firoz+Al+Mahmud&background=0D8ABC&color=fff&size=512"; }}
                            />
                        </div>
                        {/* Floating Badges */}
                        <motion.div
                            animate={{ y: [-10, 10, -10] }}
                            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                            className="absolute -top-4 -right-4 glass-card px-4 py-2 rounded-xl border border-primary/30 z-20 flex items-center gap-2 shadow-xl shadow-primary/20"
                        >
                            <span className="text-2xl">💻</span>
                            <span className="text-xs font-bold text-white">React Dev</span>
                        </motion.div>
                        <motion.div
                            animate={{ y: [10, -10, 10] }}
                            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                            className="absolute bottom-10 -left-8 glass-card px-4 py-2 rounded-xl border border-secondary/30 z-20 flex items-center gap-2 shadow-xl shadow-secondary/20"
                        >
                            <span className="text-2xl">🚀</span>
                            <span className="text-xs font-bold text-white">Frontend</span>
                        </motion.div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default Hero;
