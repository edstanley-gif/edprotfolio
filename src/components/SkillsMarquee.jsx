import { motion } from "framer-motion";

const skills = [
    { name: "React", icon: "⚛️" },
    { name: "Tailwind CSS", icon: "🎨" },
    { name: "Framer Motion", icon: "✨" },
    { name: "Vite", icon: "⚡" },
    { name: "JavaScript", icon: "JS" },
    { name: "TypeScript", icon: "TS" },
    { name: "Next.js", icon: "N" },
    { name: "GitHub", icon: "🐙" },
];

const SkillsMarquee = () => {
    return (
        <div className="py-20 bg-zinc-950/50 border-y border-zinc-900 overflow-hidden">
            <div className="flex whitespace-nowrap">
                <motion.div
                    animate={{ x: [0, -1000] }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    className="flex gap-12 items-center px-6"
                >
                    {[...skills, ...skills, ...skills].map((skill, index) => (
                        <div key={index} className="flex items-center gap-3">
                            <span className="text-2xl">{skill.icon}</span>
                            <span className="text-xl font-bold text-zinc-500 hover:text-white transition-colors cursor-default tracking-tight uppercase">
                                {skill.name}
                            </span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default SkillsMarquee;
