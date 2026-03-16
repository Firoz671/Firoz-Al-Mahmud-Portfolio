import { motion } from 'framer-motion';
import { portfolioData } from '../data';
import { GraduationCap, Award, Calendar, MapPin } from 'lucide-react';

const Education = () => {
    const { education, certifications } = portfolioData;

    return (
        <section id="education" className="py-24 relative overflow-hidden bg-white  transition-colors duration-500">
            {/* Decorative Orbs */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5  rounded-full blur-[100px] pointer-events-none translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/5  rounded-full blur-[100px] pointer-events-none -translate-x-1/2 translate-y-1/2"></div>

            <div className="w-11/12 max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="text-center mb-20"
                >
                    <span className="inline-block py-1.5 px-4 rounded-full bg-primary/10  text-primary  font-bold text-sm mb-4 tracking-wider uppercase border border-primary/20">Journey</span>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900  mb-6 font-heading">
                        Education & <span className="text-gradient">Certifications</span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-6"></div>
                    <p className="text-slate-600  max-w-2xl mx-auto text-lg font-medium">
                        My academic background and professional training that shaped my development journey.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
                    {/* Education Timeline */}
                    <div>
                        <div className="flex items-center gap-5 mb-12">
                            <div className="w-16 h-16 rounded-2xl bg-blue-100  flex items-center justify-center text-blue-600  border border-blue-200  shadow-[0_5px_15px_rgba(14,165,233,0.15)]">
                                <GraduationCap size={32} />
                            </div>
                            <h3 className="text-3xl font-bold text-slate-900  font-heading">Education</h3>
                        </div>

                        <div className="relative border-l-2 border-slate-200  pl-8 ml-8 space-y-12">
                            {education.map((edu, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="relative group"
                                >
                                    {/* Timeline Dot */}
                                    <div className="absolute -left-[41px] top-2 w-5 h-5 rounded-full bg-white  border-4 border-primary group-hover:scale-150 group-hover:bg-primary transition-all duration-300 shadow-[0_0_10px_rgba(14,165,233,0.5)]"></div>

                                    <div className="bg-slate-50  border border-slate-200  p-8 rounded-2xl group-hover:-translate-y-2 hover:border-primary/40  transition-all duration-300 shadow-lg hover:shadow-[0_10px_30px_rgba(14,165,233,0.1)] relative overflow-hidden backdrop-blur-sm">
                                        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5  rounded-full blur-[40px] group-hover:bg-primary/10  transition-colors"></div>

                                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10  text-primary  text-sm font-bold mb-4 border border-primary/20">
                                            <Calendar size={14} />
                                            <span>{edu.duration}</span>
                                        </div>

                                        <h4 className="text-2xl font-bold text-slate-900  mb-2 font-heading tracking-wide group-hover:text-primary transition-colors">{edu.degree}</h4>
                                        <p className="text-slate-700  font-bold mb-4 text-lg">{edu.institution}</p>

                                        <div className="flex items-center gap-2 text-slate-500  font-medium text-sm">
                                            <MapPin size={16} className="text-slate-400" />
                                            <span>{edu.location}</span>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Certifications Timeline */}
                    <div>
                        <div className="flex items-center gap-5 mb-12">
                            <div className="w-16 h-16 rounded-2xl bg-purple-100  flex items-center justify-center text-purple-600  border border-purple-200  shadow-[0_5px_15px_rgba(168,85,247,0.15)]">
                                <Award size={32} />
                            </div>
                            <h3 className="text-3xl font-bold text-slate-900  font-heading">Certifications</h3>
                        </div>

                        <div className="relative border-l-2 border-slate-200  pl-8 ml-8 space-y-12">
                            {certifications.map((cert, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="relative group"
                                >
                                    {/* Timeline Dot */}
                                    <div className="absolute -left-[41px] top-2 w-5 h-5 rounded-full bg-white  border-4 border-secondary group-hover:scale-150 group-hover:bg-secondary transition-all duration-300 shadow-[0_0_10px_rgba(168,85,247,0.5)]"></div>

                                    <div className="bg-slate-50  border border-slate-200  p-8 rounded-2xl group-hover:-translate-y-2 hover:border-secondary/40  transition-all duration-300 shadow-lg hover:shadow-[0_10px_30px_rgba(168,85,247,0.1)] relative overflow-hidden backdrop-blur-sm">
                                        <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5  rounded-full blur-[40px] group-hover:bg-secondary/10  transition-colors"></div>

                                        <h4 className="text-xl font-bold text-slate-900  mb-3 font-heading tracking-wide group-hover:text-secondary transition-colors leading-tight">{cert.title}</h4>

                                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-200  text-slate-700  text-sm font-bold border border-slate-300 ">
                                            <Award size={14} className="text-secondary" />
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
