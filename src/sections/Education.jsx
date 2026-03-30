import { motion } from 'framer-motion';
import { portfolioData } from '../data';
import { GraduationCap, Award, Calendar, MapPin } from 'lucide-react';

const Education = () => {
    const { education, certifications } = portfolioData;

    return (
        <section id="education" className="py-24 relative overflow-hidden bg-white transition-colors duration-500 border-t border-slate-900">
            <div className="w-11/12 max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="text-center mb-20 md:mb-28"
                >
                    <span className="inline-block py-1 px-4 text-slate-900 font-bold tracking-[0.2em] text-xs uppercase mb-6 border-b border-slate-900">Journey</span>
                    <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold text-slate-900 mb-8 font-heading uppercase tracking-tighter">
                        Education
                    </h2>
                    <div className="w-16 h-1 bg-slate-900 mx-auto mb-10"></div>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
                    {/* Education Timeline */}
                    <div>
                        <div className="flex items-center gap-5 mb-16 border-b border-slate-900 pb-6">
                            <div className="text-slate-900">
                                <GraduationCap size={36} strokeWidth={1} />
                            </div>
                            <h3 className="text-3xl font-bold text-slate-900 font-heading tracking-tighter uppercase">Academic</h3>
                        </div>

                        <div className="relative border-l border-slate-900 pl-8 ml-4 space-y-16">
                            {education.map((edu, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="relative group"
                                >
                                    {/* Timeline Square instead of dot */}
                                    <div className="absolute -left-[37px] top-0 w-3 h-3 bg-slate-900 transition-transform duration-300 group-hover:rotate-45"></div>

                                    <div className="bg-[#F4F4F1] border border-slate-900 p-8 group-hover:-translate-y-2 hover:bg-slate-900 hover:text-white transition-colors duration-500 relative flex flex-col items-start">
                                        
                                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-white text-slate-900 text-xs font-mono uppercase tracking-widest mb-6 border border-slate-900 group-hover:bg-transparent group-hover:text-white group-hover:border-white">
                                            <Calendar size={14} />
                                            <span>{edu.duration}</span>
                                        </div>

                                        <h4 className="text-2xl font-bold text-slate-900 mb-4 font-heading tracking-tight group-hover:text-white transition-colors">{edu.degree}</h4>
                                        <p className="font-medium mb-6 text-sm uppercase tracking-wide opacity-80">{edu.institution}</p>

                                        <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest opacity-60">
                                            <MapPin size={14} />
                                            <span>{edu.location}</span>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Certifications Timeline */}
                    <div>
                        <div className="flex items-center gap-5 mb-16 border-b border-slate-900 pb-6">
                            <div className="text-slate-900">
                                <Award size={36} strokeWidth={1} />
                            </div>
                            <h3 className="text-3xl font-bold text-slate-900 font-heading tracking-tighter uppercase">Certifications</h3>
                        </div>

                        <div className="relative border-l border-slate-900 pl-8 ml-4 space-y-16">
                            {certifications.map((cert, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="relative group"
                                >
                                    {/* Timeline Square instead of dot */}
                                    <div className="absolute -left-[37px] top-0 w-3 h-3 bg-slate-900 transition-transform duration-300 group-hover:rotate-45"></div>

                                    <div className="bg-[#F4F4F1] border border-slate-900 p-8 group-hover:-translate-y-2 hover:bg-slate-900 hover:text-white transition-colors duration-500 relative flex flex-col items-start">
                                        
                                        <h4 className="text-xl font-bold text-slate-900 mb-6 font-heading tracking-tight group-hover:text-white transition-colors leading-tight">{cert.title}</h4>

                                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-white text-slate-900 text-xs font-mono uppercase tracking-widest border border-slate-900 group-hover:bg-transparent group-hover:text-white group-hover:border-white">
                                            <Award size={14} />
                                            <span>{cert.issuer}</span>
                                        </div>
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
