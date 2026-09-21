import { motion } from "framer-motion";
import { Contact2 } from "@/components/ui/contact-2";
import { AuroraBackground } from "@/components/ui/aurora-background";

export function ContactSection() {
  return (
    <section id="contact" className="relative overflow-hidden">
      <AuroraBackground>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 w-full"
        >
          <Contact2
            title="Get in touch"
            description="I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions."
            phone="+91 9933266938"
            email="patilrishabh50@gmail.com"
            web={{ label: "github.com/GxdlRishabh07", url: "https://github.com/GxdlRishabh07" }}
          />
        </motion.div>
      </AuroraBackground>

      {/* Top gradient fade to blend with previous section */}
      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-black to-transparent pointer-events-none z-20" />

      {/* Bottom gradient fade to blend with footer */}
      <div className="absolute bottom-0 left-0 right-0 h-60 bg-gradient-to-t from-black via-black/60 to-transparent pointer-events-none z-20" />
    </section>
  );
}
