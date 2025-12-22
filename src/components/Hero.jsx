import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const Hero = () => {
    return (
        <section className="min-height-screen flex flex-col items-center justify-center pt-20 pb-32 px-4">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-center"
            >
                <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-blue-500 font-medium tracking-widest text-sm uppercase mb-4 block"
                >
                    Senior Frontend Developer
                </motion.span>

                <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-6 bg-gradient-to-b from-white to-zinc-500 bg-clip-text text-transparent">
                    CRAFTING DIGITAL <br />
                    <span className="text-white">EXPERIENCES</span>
                </h1>

                <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
                    Focused on building high-performance, visually stunning, and user-centric web applications with modern technologies.
                </p>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="flex gap-4 justify-center"
                >
                    <button className="px-8 py-3 bg-white text-black font-semibold rounded-full hover:bg-zinc-200 transition-all">
                        View Projects
                    </button>
                    <button className="px-8 py-3 bg-zinc-900 text-white font-semibold rounded-full border border-zinc-800 hover:bg-zinc-800 transition-all">
                        Contact Me
                    </button>
                </motion.div>
            </motion.div>

            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute bottom-10"
            >
                <ArrowDown className="text-zinc-500 w-6 h-6" />
            </motion.div>
        </section>
    );
};

export default Hero;
