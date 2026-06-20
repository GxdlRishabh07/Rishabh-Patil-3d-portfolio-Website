import { motion } from "framer-motion";

const projects = [
  {
    title: "E-Commerce Experience",
    role: "Lead Developer",
    description: "A high-performance headless Shopify storefront with smooth page transitions and a custom 3D product viewer.",
    image: "/sequence/frame_020_delay-0.067s.png", // Using a sequence frame as placeholder
    link: "#"
  },
  {
    title: "Fintech Dashboard",
    role: "Frontend Engineer",
    description: "Real-time data visualization platform with complex state management and WebGL data representations.",
    image: "/sequence/frame_060_delay-0.067s.png",
    link: "#"
  },
  {
    title: "Creative Agency Portfolio",
    role: "Creative Developer",
    description: "Award-winning portfolio site featuring WebGL shaders, custom cursors, and advanced scroll animations.",
    image: "/sequence/frame_100_delay-0.067s.png",
    link: "#"
  }
];

export function Projects() {
  return (
    <section className="min-h-screen bg-[#121212] py-24 px-6 md:px-12 lg:px-24 text-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">Selected Works</h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl">
            A showcase of recent digital experiences, blending creative design with robust engineering.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.a
              href={project.link}
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              className="group relative flex flex-col rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-md transition-all duration-300 hover:border-white/20 hover:bg-white/10 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]"
            >
              <div className="aspect-[4/3] w-full overflow-hidden bg-black">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover opacity-80 transition-transform duration-700 group-hover:scale-105 group-hover:opacity-100"
                />
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <p className="text-sm text-gray-400 font-medium mb-2 uppercase tracking-wider">{project.role}</p>
                <h3 className="text-2xl font-semibold mb-3 text-white group-hover:text-blue-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>
                
                <div className="mt-auto flex items-center text-sm font-medium text-white group-hover:text-blue-400 transition-colors duration-300">
                  View Project
                  <svg className="w-4 h-4 ml-2 transform transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
