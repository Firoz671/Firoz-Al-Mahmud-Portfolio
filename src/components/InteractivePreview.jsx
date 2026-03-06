import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Play, Layout, Terminal } from 'lucide-react';

const InteractivePreview = () => {
    const [activeTab, setActiveTab] = useState('react');
    const [demoTheme, setDemoTheme] = useState('dark');
    const [isCompiling, setIsCompiling] = useState(false);

    const handleRun = () => {
        setIsCompiling(true);
        setTimeout(() => setIsCompiling(false), 800);
    };

    const codeSnippets = {
        react: `export default function PremiumButton() {
  const [hover, setHover] = useState(false);
  
  return (
    <motion.button 
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={\`
        px-8 py-4 rounded-full font-bold
        transition-colors duration-300
        \${hover ? 'bg-sky-500' : 'bg-slate-800'}
      \`}
      onHoverStart={() => setHover(true)}
      onHoverEnd={() => setHover(false)}
    >
      Click Me
    </motion.button>
  );
}`,
        tailwind: `@layer components {
  .premium-btn {
    @apply px-8 py-4 rounded-full font-bold
           text-white shadow-lg transition-all
           hover:-translate-y-1;
  }
  .premium-btn-dark {
    @apply bg-slate-800 hover:bg-sky-500
           hover:shadow-sky-500/25;
  }
  .premium-btn-light {
    @apply bg-white text-slate-900 border 
           border-slate-200 hover:border-sky-500;
  }
}`
    };

    return (
        <section id="interactive" className="py-24 relative overflow-hidden bg-slate-50/50 dark:bg-[#020617] transition-colors duration-500">
            <div className="w-11/12 max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="text-center mb-16"
                >
                    <span className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-blue-500/10 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400 font-bold text-sm mb-4 tracking-wider uppercase border border-blue-500/20">
                        <Terminal size={16} /> Live Playground
                    </span>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6 font-heading tracking-tight">
                        Interactive <span className="text-gradient">Component</span>
                    </h2>
                    <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg font-medium">
                        Experience exactly how I architect modern UI components. Tweak the environment and run the code.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mt-12 items-center">

                    {/* Code Editor Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-[#0d1117] shadow-2xl relative group"
                    >
                        {/* Editor Header */}
                        <div className="flex items-center justify-between px-4 py-3 border-b border-slate-800 bg-[#161b22]">
                            <div className="flex space-x-2">
                                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                            </div>
                            <div className="flex bg-slate-800/50 rounded-lg p-1">
                                <button
                                    onClick={() => setActiveTab('react')}
                                    className={`px-3 py-1 text-xs font-semibold rounded-md transition-all ${activeTab === 'react' ? 'bg-slate-700 text-white shadow-sm' : 'text-slate-400 hover:text-slate-200'}`}
                                >
                                    Button.tsx
                                </button>
                                <button
                                    onClick={() => setActiveTab('tailwind')}
                                    className={`px-3 py-1 text-xs font-semibold rounded-md transition-all ${activeTab === 'tailwind' ? 'bg-slate-700 text-white shadow-sm' : 'text-slate-400 hover:text-slate-200'}`}
                                >
                                    styles.css
                                </button>
                            </div>
                            <button
                                onClick={handleRun}
                                className="flex items-center gap-1.5 px-3 py-1 bg-green-500/20 text-green-400 hover:bg-green-500/30 text-xs font-bold rounded-md transition-colors"
                            >
                                <Play size={12} fill="currentColor" /> Run
                            </button>
                        </div>

                        {/* Editor Body */}
                        <div className="p-6 overflow-x-auto text-sm font-mono text-slate-300 leading-relaxed font-light">
                            <AnimatePresence mode="wait">
                                <motion.pre
                                    key={activeTab}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <code>
                                        {activeTab === 'react' ? (
                                            <>
                                                <span className="text-pink-400">export default function</span> <span className="text-blue-400">PremiumButton</span>() {'{\n'}
                                                {'  '}<span className="text-pink-400">const</span> [hover, setHover] = <span className="text-blue-400">useState</span>(<span className="text-orange-300">false</span>);{'\n\n'}
                                                {'  '}<span className="text-pink-400">return</span> ({'\n'}
                                                {'    '}<span className="text-slate-400">{'<motion.button'}</span>{'\n'}
                                                {'      '}whileHover={`{{ scale: 1.05 }}`}{'\n'}
                                                {'      '}whileTap={`{{ scale: 0.95 }}`}{'\n'}
                                                {'      '}className={`{\`\n        px-8 py-4 rounded-full font-bold\n        transition-colors duration-300\n        \${hover ? 'bg-sky-500' : 'bg-slate-800'}\n      \`}`}{'\n'}
                                                {'      '}onHoverStart={`{() => setHover(true)}`}{'\n'}
                                                {'      '}onHoverEnd={`{() => setHover(false)}`}{'\n'}
                                                {'    '}<span className="text-slate-400">{'>'}</span>{'\n'}
                                                {'      '}Click Me{'\n'}
                                                {'    '}<span className="text-slate-400">{'</motion.button>'}</span>{'\n'}
                                                {'  '});{'\n'}
                                                {'}'}
                                            </>
                                        ) : (
                                            <>
                                                <span className="text-pink-400">@layer</span> components {'{\n'}
                                                {'  '}<span className="text-yellow-300">.premium-btn</span> {'{\n'}
                                                {'    '}<span className="text-blue-400">@apply</span> px-8 py-4 rounded-full font-bold{'\n'}
                                                {'           '}text-white shadow-lg transition-all{'\n'}
                                                {'           '}hover:-translate-y-1;{'\n'}
                                                {'  }\n'}
                                                {'  '}<span className="text-yellow-300">.premium-btn-dark</span> {'{\n'}
                                                {'    '}<span className="text-blue-400">@apply</span> bg-slate-800 hover:bg-sky-500{'\n'}
                                                {'           '}hover:shadow-sky-500/25;{'\n'}
                                                {'  }\n'}
                                                {'}'}
                                            </>
                                        )}
                                    </code>
                                </motion.pre>
                            </AnimatePresence>
                        </div>
                    </motion.div>

                    {/* Live Preview Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="h-full flex flex-col"
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                                <Layout size={20} className="text-primary" /> Preview Environment
                            </h3>
                            <div className="ml-auto flex bg-slate-200 dark:bg-slate-800 rounded-lg p-1">
                                <button
                                    onClick={() => setDemoTheme('light')}
                                    className={`px-4 py-1.5 text-sm font-bold rounded-md transition-all ${demoTheme === 'light' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
                                >
                                    Light
                                </button>
                                <button
                                    onClick={() => setDemoTheme('dark')}
                                    className={`px-4 py-1.5 text-sm font-bold rounded-md transition-all ${demoTheme === 'dark' ? 'bg-slate-900 text-white shadow-sm' : 'text-slate-400 hover:text-slate-200'}`}
                                >
                                    Dark
                                </button>
                            </div>
                        </div>

                        <div className={`flex-1 rounded-3xl border ${demoTheme === 'dark' ? 'bg-[#0f172a] border-slate-800' : 'bg-slate-100 border-slate-300'} flex items-center justify-center relative overflow-hidden transition-colors duration-500 min-h-[300px]`}>
                            {/* Abstract background for preview */}
                            <div className={`absolute inset-0 opacity-50 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] ${demoTheme === 'dark' ? 'from-slate-800 via-slate-900 to-slate-900' : 'from-white via-slate-100 to-slate-100'}`}></div>

                            <AnimatePresence mode="wait">
                                {isCompiling ? (
                                    <motion.div
                                        key="loading"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        className="flex flex-col items-center gap-4 z-10"
                                    >
                                        <div className="w-8 h-8 border-4 border-slate-300 border-t-primary rounded-full animate-spin"></div>
                                        <p className={`text-sm font-bold ${demoTheme === 'dark' ? 'text-slate-400' : 'text-slate-500'}`}>Compiling changes...</p>
                                    </motion.div>
                                ) : (
                                    <motion.button
                                        key="button"
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        whileHover={{ scale: 1.05, y: -4 }}
                                        whileTap={{ scale: 0.95 }}
                                        className={`relative z-10 px-10 py-5 rounded-full font-extrabold text-lg tracking-wide transition-all duration-300 shadow-xl overflow-hidden group ${demoTheme === 'dark'
                                                ? 'bg-slate-800 text-white hover:bg-sky-500 hover:shadow-[0_10px_30px_rgba(14,165,233,0.3)]'
                                                : 'bg-white text-slate-800 border border-slate-200 hover:border-sky-500 hover:text-sky-600 hover:shadow-[0_10px_30px_rgba(14,165,233,0.15)]'
                                            }`}
                                    >
                                        <span className="relative z-10">Click Me</span>
                                        {demoTheme === 'dark' && <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shimmer z-0"></div>}
                                    </motion.button>
                                )}
                            </AnimatePresence>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default InteractivePreview;
