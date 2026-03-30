import React from 'react';

const SkillsSkeleton = () => {
    return (
        <section className="py-24 relative overflow-hidden bg-[#FAFAFA] dark:bg-slate-950 transition-colors duration-500 border-t border-slate-200 dark:border-slate-800 min-h-[800px]">
            <div className="w-11/12 max-w-7xl mx-auto px-4 sm:px-6 relative z-10 mt-10">
                <div className="text-center mb-20 md:mb-28 flex flex-col items-center">
                    <div className="w-24 h-8 rounded-full bg-slate-200 dark:bg-slate-800 animate-pulse mb-6"></div>
                    <div className="w-64 md:w-96 h-12 md:h-16 bg-slate-200 dark:bg-slate-800 rounded-xl animate-pulse mb-6"></div>
                    <div className="w-full max-w-lg h-6 bg-slate-200 dark:bg-slate-800 rounded-lg animate-pulse"></div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                    {[1, 2].map((category) => (
                        <div key={category} className="bg-white/60 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800 p-8 sm:p-10 rounded-[2.5rem] shadow-sm">
                            <div className="flex items-center gap-5 mb-10 pb-6 border-b border-slate-200 dark:border-slate-800">
                                <div className="p-3.5 w-14 h-14 rounded-2xl bg-slate-200 dark:bg-slate-800 animate-pulse"></div>
                                <div className="w-32 h-8 bg-slate-200 dark:bg-slate-800 rounded-lg animate-pulse"></div>
                            </div>
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-5">
                                {[1, 2, 3, 4, 5, 6].map((item) => (
                                    <div key={item} className="h-40 rounded-2xl bg-slate-100/80 dark:bg-slate-800/50 animate-pulse"></div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SkillsSkeleton;
