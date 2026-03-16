import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, FileText, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../../data';

const ResumeModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    const { name, title } = portfolioData.personalInfo;

    return (
        <AnimatePresence>
            <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 pb-20 sm:pb-6 overflow-y-auto">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                    className="fixed inset-0 bg-slate-900/60  backdrop-blur-sm"
                ></motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 30 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: 30 }}
                    transition={{ type: "spring", damping: 25, stiffness: 300 }}
                    className="relative w-full max-w-3xl glass-premium rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col z-10 border border-slate-200 "
                >
                    {/* Header */}
                    <div className="p-6 sm:p-8 bg-gradient-to-br from-slate-100 to-slate-50   border-b border-slate-200  flex justify-between items-start relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 pointer-events-none"></div>
                        <div className="relative z-10 flex gap-5 items-center">
                            <div className="w-16 h-16 rounded-2xl bg-primary/10  flex flex-col items-center justify-center text-primary  border border-primary/20">
                                <FileText size={28} />
                            </div>
                            <div>
                                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900  font-heading tracking-tight">
                                    {name}
                                </h2>
                                <p className="text-slate-600  font-medium">{title} Résumé</p>
                            </div>
                        </div>
                        <button
                            onClick={onClose}
                            className="p-2 sm:p-3 bg-slate-200/50 hover:bg-slate-200   rounded-full text-slate-600  hover:text-slate-900  transition-colors relative z-10"
                        >
                            <X size={20} />
                        </button>
                    </div>

                    {/* Content Preview */}
                    <div className="p-6 sm:p-8 bg-slate-50/50  overflow-y-auto max-h-[50vh] sm:max-h-[60vh] space-y-8 custom-scrollbar">
                        <div>
                            <h3 className="font-bold text-slate-900  text-lg mb-4 border-l-4 border-primary pl-3">Executive Summary</h3>
                            <p className="text-slate-600  leading-relaxed font-medium">
                                Frontend engineer architecting scalable, high-performance web applications using React and modern ecosystem tools. Specializing in highly interactive UIs and delivering uncompromising performance budgets.
                            </p>
                        </div>

                        <div>
                            <h3 className="font-bold text-slate-900  text-lg mb-4 border-l-4 border-secondary pl-3">Core Competencies</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {["React & Next.js Architecture", "Advanced State Management", "Framer Motion Animations", "Core Web Vitals Optimization", "Responsive System Design", "TypeScript / JavaScript Mastery"].map((skill, idx) => (
                                    <div key={idx} className="flex items-center gap-2 text-slate-700  font-medium bg-white  px-4 py-3 rounded-xl border border-slate-200  shadow-sm">
                                        <CheckCircle2 size={18} className="text-emerald-500 flex-shrink-0" />
                                        <span className="text-sm">{skill}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h3 className="font-bold text-slate-900  text-lg mb-4 border-l-4 border-accent pl-3">Education & Distinctions</h3>
                            <div className="space-y-4">
                                {portfolioData.education.slice(0, 1).map((edu, idx) => (
                                    <div key={idx} className="bg-white  p-5 rounded-xl border border-slate-200  shadow-sm">
                                        <h4 className="font-bold text-slate-800  text-lg">{edu.degree}</h4>
                                        <p className="text-primary  text-sm font-semibold mt-1">{edu.institution}</p>
                                        <p className="text-slate-500 text-sm mt-2">{edu.duration} | {edu.location}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Footer / CTA */}
                    <div className="p-6 sm:p-8 border-t border-slate-200/50  flex flex-col sm:flex-row gap-4 items-center justify-between">
                        <p className="text-sm text-slate-500 font-medium">
                            Full comprehensive history available in PDF.
                        </p>
                        <a
                            href="/FirozAlMahmud.pdf"
                            download
                            onClick={onClose}
                            className="w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-primary to-sky-500 text-white rounded-full font-bold shadow-[0_4px_15px_rgba(14,165,233,0.3)] hover:shadow-[0_4px_25px_rgba(14,165,233,0.5)] transition-all flex items-center justify-center gap-2 hover:-translate-y-1 interactive-hover"
                        >
                            <Download size={18} />
                            Download Full PDF
                        </a>
                    </div>
                </motion.div>
            </div>
        </AnimatePresence>
    );
};

export default ResumeModal;
