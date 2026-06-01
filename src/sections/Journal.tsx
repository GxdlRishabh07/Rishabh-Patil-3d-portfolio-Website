import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";

const ENTRIES = [
  {
    title: "Java Servlets & MVC Architecture",
    date: "May 12, 2026",
    readTime: "System Design",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=200",
  },
  {
    title: "Optimizing React & Vite Pipelines",
    date: "Apr 28, 2026",
    readTime: "Performance",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=200",
  },
  {
    title: "Relational Database Schema Design",
    date: "Mar 15, 2026",
    readTime: "Data Modeling",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=200",
  },
  {
    title: "Implementing OWASP Security",
    date: "Feb 02, 2026",
    readTime: "Security",
    image: "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?auto=format&fit=crop&q=80&w=200",
  },
];

export function Journal() {
  return (
    <section id="journal" className="bg-bg py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12 md:mb-16"
        >
          <div className="max-w-xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-8 h-px bg-stroke" />
              <span className="text-xs text-muted uppercase tracking-[0.3em]">
                Expertise
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl text-text-primary tracking-tight mb-4">
              Core <span className="font-display italic text-accent">expertise</span>
            </h2>
            <p className="text-sm md:text-base text-muted">
              A deep dive into the technologies and architectures that power my applications.
            </p>
          </div>

          <button className="hidden md:inline-flex group relative rounded-full items-center gap-2 text-sm px-6 py-3 bg-surface text-text-primary transition-all duration-300">
            <div className="absolute -inset-[1px] rounded-full accent-gradient opacity-0 group-hover:opacity-100 transition-opacity" />
            <span className="relative z-10 flex items-center gap-2 bg-surface px-6 py-3 rounded-full -m-[12px] group-hover:bg-bg transition-colors">
              View all <ArrowRight className="w-4 h-4" />
            </span>
          </button>
        </motion.div>

        {/* Entries */}
        <div className="flex flex-col gap-4">
          {ENTRIES.map((entry, index) => (
            <motion.a
              key={index}
              href="#"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
              className="group flex flex-col sm:flex-row items-start sm:items-center gap-6 p-4 sm:p-6 bg-surface/30 hover:bg-surface border border-stroke rounded-[32px] sm:rounded-full transition-colors duration-300"
            >
              {/* Image */}
              <div className="w-full sm:w-16 h-32 sm:h-16 rounded-3xl sm:rounded-full overflow-hidden shrink-0">
                <img
                  src={entry.image}
                  alt={entry.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="flex-1 flex flex-col sm:flex-row sm:items-center justify-between gap-4 w-full">
                <div className="flex flex-col gap-1">
                  <h3 className="text-lg md:text-xl font-medium text-text-primary group-hover:text-accent transition-colors">
                    {entry.title}
                  </h3>
                  <div className="flex items-center gap-3 text-xs md:text-sm text-muted">
                    <span>{entry.date}</span>
                    <span className="w-1 h-1 rounded-full bg-stroke" />
                    <span>{entry.readTime}</span>
                  </div>
                </div>

                <div className="w-10 h-10 rounded-full border border-stroke flex items-center justify-center group-hover:border-accent group-hover:bg-accent group-hover:text-bg transition-all duration-300 shrink-0 text-text-primary mt-2 sm:mt-0">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}