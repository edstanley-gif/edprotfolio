import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Github } from "lucide-react";

const ProjectCard = ({ project, onClick }) => {
    return (
        <motion.div
            whileHover={{ y: -10 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            onClick={() => onClick(project)}
            className="group cursor-pointer"
        >
            <div className="relative aspect-video overflow-hidden rounded-2xl bg-zinc-900 border border-zinc-800 transition-colors group-hover:border-zinc-700">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                    <span className="text-white font-medium text-sm">View Project Details</span>
                </div>
                <img
                    src={`https://picsum.photos/seed/${project.id}/800/450`}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
            </div>
            <div className="mt-4">
                <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">{project.title}</h3>
                <p className="text-zinc-500 text-sm mt-1">{project.category}</p>
            </div>
        </motion.div>
    );
};

const ProjectModal = ({ project, onClose }) => {
    if (!project) return null;

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
            onClick={onClose}
        >
            <motion.div
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                className="bg-zinc-900 border border-zinc-800 w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl p-6 md:p-10 relative shadow-2xl"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    onClick={onClose}
                    className="absolute top-6 right-6 p-2 rounded-full bg-zinc-800 text-zinc-400 hover:text-white transition-colors"
                >
                    <X className="w-6 h-6" />
                </button>

                <div className="grid md:grid-cols-2 gap-10 mt-4">
                    <div className="rounded-2xl overflow-hidden border border-zinc-800 h-fit">
                        <img src={`https://picsum.photos/seed/${project.id}/800/800`} alt={project.title} className="w-full" />
                    </div>
                    <div>
                        <span className="text-blue-500 font-medium text-sm uppercase tracking-widest">{project.category}</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-4">{project.title}</h2>
                        <p className="text-zinc-400 leading-relaxed mb-8">
                            {project.description}
                        </p>

                        <div className="space-y-6">
                            <div>
                                <h4 className="text-white font-semibold mb-2 italic">Technologies used</h4>
                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map((t, idx) => (
                                        <span key={idx} className="px-3 py-1 bg-zinc-800 text-zinc-300 rounded-lg text-sm border border-zinc-700">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <a href="#" className="flex items-center gap-2 px-6 py-3 bg-white text-black font-bold rounded-xl hover:bg-zinc-200 transition-colors">
                                    <ExternalLink className="w-4 h-4" /> Live Demo
                                </a>
                                <a href="#" className="flex items-center gap-2 px-6 py-3 bg-zinc-800 text-white font-bold rounded-xl hover:bg-zinc-700 border border-zinc-700 transition-colors">
                                    <Github className="w-4 h-4" /> Source
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};

const ProjectGrid = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    const universityProjects = [
        { id: 1, title: "Modernist Library", category: "University Project", tech: ["React", "Motion", "Three.js"], description: "A digital archive for modernist architecture and literature, featuring immersive 3D navigation." },
        { id: 2, title: "Eco-Hub Mobile", category: "University Project", tech: ["React Native", "Firebase"], description: "Community-driven app for sustainable living and local environmental monitoring." },
        { id: 3, title: "Data Viz Tool", category: "University Project", tech: ["D3.js", "React"], description: "Real-time visualization tool for urban traffic patterns and environmental sensors." },
    ];

    const professionalProjects = [
        { id: 4, title: "Zenith CRM", category: "Professional Work", tech: ["Next.js", "Tailwind", "Prisma"], description: "High-performance customer relationship management system with real-time analytics." },
        { id: 5, title: "Lumina Portfolio", category: "Professional Work", tech: ["React", "Framer Motion", "GSAP"], description: "A high-end creative agency portfolio with focus on smooth transitions and performance." },
        { id: 6, title: "CryptoDash Explorer", category: "Professional Work", tech: ["SvelteKit", "Tailwind", "Web3"], description: "Comprehensive dashboard for tracking decentralized finance assets and market trends." },
    ];

    return (
        <section className="py-32 px-4 max-w-7xl mx-auto">
            <div className="mb-20">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">University Work</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {universityProjects.map(p => (
                        <ProjectCard key={p.id} project={p} onClick={setSelectedProject} />
                    ))}
                </div>
            </div>

            <div>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Professional Projects</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {professionalProjects.map(p => (
                        <ProjectCard key={p.id} project={p} onClick={setSelectedProject} />
                    ))}
                </div>
            </div>

            <AnimatePresence>
                {selectedProject && (
                    <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
                )}
            </AnimatePresence>
        </section>
    );
};

export default ProjectGrid;
