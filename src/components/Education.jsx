import { motion } from 'framer-motion';
import { portfolioData } from '../data';
import { GraduationCap, Award } from 'lucide-react';

const Education = () => {
    const { education, certifications } = portfolioData;

    return (
        <section id="education" className="py-20 relative">
            <div className="w-11/12 mx-auto px-6 sm:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold text-white mb-4">Education & <span className="text-gradient">Certifications</span></h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">My academic background and professional training that shaped my development journey.</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Education Timeline */}
                    <div>
                        <div className="flex items-center gap-3 mb-8">
                            <div className="p-3 glass-card rounded-lg text-primary">
                                <GraduationCap size={24} />
                            </div>
                            <h3 className="text-2xl font-bold text-white">Education</h3>
                        </div>

                        <div className="relative border-l-2 border-slate-700/50 pl-8 ml-4 space-y-10">
                            {education.map((edu, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="relative"
                                >
                                    <div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-darker border-4 border-primary"></div>
                                    <div className="glass-card p-6 rounded-xl hover:-translate-y-1 transition-transform">
                                        <span className="text-sm font-semibold text-primary mb-2 block">{edu.duration}</span>
                                        <h4 className="text-xl font-bold text-white mb-1">{edu.degree}</h4>
                                        <p className="text-slate-300 font-medium mb-2">{edu.institution}</p>
                                        <p className="text-slate-400 text-sm">{edu.location}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Certifications Timeline */}
                    <div>
                        <div className="flex items-center gap-3 mb-8">
                            <div className="p-3 glass-card rounded-lg text-secondary">
                                <Award size={24} />
                            </div>
                            <h3 className="text-2xl font-bold text-white">Certifications</h3>
                        </div>

                        <div className="relative border-l-2 border-slate-700/50 pl-8 ml-4 space-y-8">
                            {certifications.map((cert, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="relative"
                                >
                                    <div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-darker border-4 border-secondary"></div>
                                    <div className="glass-card p-6 rounded-xl hover:-translate-y-1 transition-transform">
                                        <h4 className="text-lg font-bold text-white mb-2">{cert.title}</h4>
                                        <p className="text-slate-400">{cert.issuer}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;
