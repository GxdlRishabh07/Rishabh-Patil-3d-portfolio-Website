import { motion } from "framer-motion";
import ContactSections from "../components/ui/contact-sections";
import ContactForm from "../components/ui/contact-form";

export function Contact() {
  return (
    <section id="contact" className="bg-bg border-t border-stroke">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <ContactSections />
        <ContactForm />
      </motion.div>
    </section>
  );
}
