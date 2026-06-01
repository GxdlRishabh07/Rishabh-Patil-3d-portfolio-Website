import { motion } from "framer-motion";
import { Contact2 } from "@/components/ui/contact-2";

export function ContactSection() {
  return (
    <section id="contact" className="relative overflow-hidden bg-bg">
      {/* NeuralNoise removed to make the background solid black */}
      {/* <div className="absolute inset-0 opacity-40 pointer-events-none">
        <NeuralNoise color={[0.4, 0.5, 0.9]} opacity={0.6} speed={0.0005} />
      </div> */}

      {/* Top gradient fade to blend with previous section */}
      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-bg to-transparent pointer-events-none z-10" />
      
      {/* Bottom gradient fade to blend with footer */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-bg to-transparent pointer-events-none z-10" />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10"
      >
        <Contact2 
          title="Get in touch"
          description="I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions."
          phone="+91 9172605852"
          email="patilrishabh50@gmail.com"
          web={{ label: "github.com/GxdlRishabh07", url: "https://github.com/GxdlRishabh07" }}
        />
      </motion.div>
    </section>
  );
}
