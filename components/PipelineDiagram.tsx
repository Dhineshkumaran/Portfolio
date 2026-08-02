import { motion } from 'framer-motion';

export default function PipelineDiagram() {
    const stages = [
        { label: 'Learn', status: 'learning' },
        { label: 'Build', status: 'in-progress' },
        { label: 'Break', status: 'amber' },
        { label: 'Fix', status: 'in-progress' },
        { label: 'Ship', status: 'passed' }
    ];

    const getColors = (status: string) => {
        switch(status) {
            case 'passed': return 'border-teal text-teal bg-teal/5';
            case 'in-progress': return 'border-amber text-amber bg-amber/5';
            case 'amber': return 'border-amber text-amber bg-amber/10'; // Slightly more intense
            case 'learning': 
            default: return 'border-slateBlue text-slateBlue bg-slateBlue/5';
        }
    };

    return (
        <div className="w-full py-8 mt-4 overflow-x-auto no-scrollbar">
            <div className="flex items-center min-w-max px-2">
                {stages.map((stage, idx) => (
                    <div key={stage.label} className="flex items-center">
                        <div className={`px-4 py-2 border rounded-md font-mono text-sm uppercase tracking-wider ${getColors(stage.status)} relative overflow-hidden group`}>
                            {stage.label}
                            {/* Inner node data flash effect */}
                            <motion.div 
                                className="absolute inset-0 bg-current opacity-0"
                                animate={{ opacity: [0, 0.1, 0] }}
                                transition={{ duration: 2, repeat: Infinity, delay: idx * 0.5 }}
                            />
                        </div>
                        {idx < stages.length - 1 && (
                            <div className="w-8 md:w-16 h-px bg-border mx-2 relative overflow-hidden flex items-center">
                                {/* Flowing data packet animation */}
                                <motion.div 
                                    className="h-1 w-4 rounded-full bg-teal blur-[1px]"
                                    initial={{ x: -20, opacity: 0 }}
                                    animate={{ x: 60, opacity: [0, 1, 1, 0] }}
                                    transition={{ 
                                        duration: 1.5, 
                                        repeat: Infinity, 
                                        ease: "linear",
                                        delay: idx * 0.2 
                                    }}
                                />
                                <div className="absolute right-0 top-1/2 -translate-y-1/2 border-t-4 border-t-transparent border-b-4 border-b-transparent border-l-4 border-l-border"></div>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
