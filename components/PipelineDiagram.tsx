import { motion } from 'framer-motion';

export default function PipelineDiagram() {
    const stages = [
        { label: 'Learn', status: 'learning', icon: '{}' },
        { label: 'Build', status: 'in-progress', icon: '</>' },
        { label: 'Break', status: 'amber', icon: '×' },
        { label: 'Fix', status: 'in-progress', icon: '!' },
        { label: 'Ship', status: 'passed', icon: '✓' }
    ];

    const getColors = (status: string) => {
        switch(status) {
            case 'passed': return 'border-teal text-teal bg-teal/5 shadow-[0_0_15px_rgba(93,202,165,0.15)]';
            case 'in-progress': return 'border-amber text-amber bg-amber/5 shadow-[0_0_15px_rgba(239,159,39,0.15)]';
            case 'amber': return 'border-amber text-amber bg-amber/10 shadow-[0_0_25px_rgba(239,159,39,0.25)]';
            case 'learning': 
            default: return 'border-slateBlue text-slateBlue bg-slateBlue/5 shadow-[0_0_15px_rgba(100,116,139,0.15)]';
        }
    };

    return (
        <div className="w-full py-12 mt-4 overflow-x-auto no-scrollbar relative">
            {/* SVG Background Path for Data Flow */}
            <svg className="absolute top-1/2 left-0 w-[800px] h-24 -translate-y-1/2 pointer-events-none z-0 hidden md:block" style={{ minWidth: '800px' }}>
                <motion.path 
                    d="M 50 48 L 750 48" 
                    stroke="rgba(232, 230, 221, 0.1)" 
                    strokeWidth="2" 
                    fill="none" 
                    strokeDasharray="4 4"
                />
                
                {/* Flowing animated data packets (circles on the line) */}
                {[0, 1, 2].map((i) => (
                    <motion.circle
                        key={i}
                        cx="50"
                        cy="48"
                        r="3"
                        fill="#5DCAA5"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ 
                            cx: ["50", "750"],
                            opacity: [0, 1, 1, 0]
                        }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "linear",
                            delay: i * 1
                        }}
                        className="blur-[1px]"
                    />
                ))}
            </svg>

            <div className="flex items-center justify-between min-w-max px-2 relative z-10 w-full md:w-[800px]">
                {stages.map((stage, idx) => (
                    <motion.div 
                        key={stage.label} 
                        className="flex flex-col items-center gap-3 relative"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.15, type: "spring", stiffness: 300 }}
                    >
                        <motion.div 
                            whileHover={{ scale: 1.1, y: -5 }}
                            className={`w-16 h-16 md:w-20 md:h-20 border-2 rounded-xl font-mono text-xl flex items-center justify-center backdrop-blur-md ${getColors(stage.status)} relative overflow-hidden group transition-all duration-300`}
                        >
                            <span className="relative z-10">{stage.icon}</span>
                            
                            {/* Inner node scan effect */}
                            <motion.div 
                                className="absolute inset-0 bg-gradient-to-b from-transparent via-current to-transparent opacity-0 group-hover:opacity-20"
                                animate={{ y: ['-100%', '100%'] }}
                                transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                            />
                        </motion.div>
                        
                        <div className="font-mono text-xs uppercase tracking-widest text-foreground/70">
                            {stage.label}
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
