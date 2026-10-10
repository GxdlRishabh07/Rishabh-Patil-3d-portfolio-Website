import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

import { TextReveal } from "@/components/ui/cascade-text";
import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { Phone, Mail, Globe, ArrowRight, CheckCircle2, AlertCircle } from "lucide-react";

interface Contact2Props {
  title?: string;
  description?: string;
  phone?: string;
  email?: string;
  web?: { label: string; url: string };
}

export const Contact2 = ({
  title = "Contact Us",
  description = "We are available for questions, feedback, or collaboration opportunities. Let us know how we can help!",
  phone = "(123) 34567890",
  email = "email@example.com",
  web = { label: "shadcnblocks.com", url: "https://shadcnblocks.com" },
}: Contact2Props) => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSubmit = async () => {
    if (!formData.firstname || !formData.email || !formData.message) {
      setSubmitMessage("Please fill in the required fields (First Name, Email, Message).");
      return;
    }
    
    setIsSubmitting(true);
    setSubmitMessage("");

    try {
      const { error } = await supabase
        .from('contacts')
        .insert([
          { 
            first_name: formData.firstname, 
            last_name: formData.lastname, 
            email: formData.email, 
            subject: formData.subject, 
            message: formData.message 
          }
        ]);

      if (error) {
        console.error("Supabase insert error:", error);
        setSubmitMessage("Failed to send message. Please try again.");
      } else {
        setSubmitMessage("Message sent successfully!");
        setFormData({ firstname: "", lastname: "", email: "", subject: "", message: "" });
      }
    } catch (err) {
      console.error("Error submitting form:", err);
      setSubmitMessage("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-16 sm:py-24 md:py-32 bg-transparent text-text-primary">
      <div className="container mx-auto px-4 sm:px-6 md:px-10 lg:px-16">
        <div className="mx-auto flex max-w-screen-xl flex-col justify-between gap-10 lg:flex-row lg:gap-20">
          <div className="flex max-w-sm flex-col justify-between gap-8 lg:gap-10">
            <div className="text-left">
              <div className="mb-3">
                <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-text-primary tracking-tight flex flex-wrap items-center">
                  {title.split(' ').map((word, i) => (
                    <span key={i} className="flex items-center">
                      <TextReveal
                        as="span"
                        text={word}
                        fontSize="inherit"
                        color="hsl(0, 0%, 96%)"
                        hoverColor="hsl(0, 0%, 65%)"
                        direction="up"
                        staggerDelay={40}
                        duration={320}
                        className={i > 0 ? "font-display italic" : ""}
                        style={{ padding: "0 0.05em", lineHeight: "inherit" }}
                      />
                      {i < title.split(' ').length - 1 && <span>&nbsp;</span>}
                    </span>
                  ))}
                </h2>
              </div>
              <p className="text-muted text-sm sm:text-base leading-relaxed">{description}</p>
            </div>

            <div className="w-full text-left lg:mx-0">
              <h3 className="mb-4 sm:mb-5 text-left text-sm sm:text-base font-medium uppercase tracking-[0.2em] text-muted">
                Direct Channels
              </h3>
              <div className="space-y-3">
                <a
                  href={`tel:${phone.replace(/\s+/g, '')}`}
                  className="flex items-center gap-3.5 p-3 sm:p-3.5 rounded-xl border border-white/[0.06] border-t-white/[0.12] bg-surface/50 hover:bg-surface/80 hover:border-white/15 transition-all group"
                >
                  <div className="w-9 h-9 rounded-lg bg-white/[0.04] border border-white/10 flex items-center justify-center text-muted group-hover:text-text-primary transition-colors">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase tracking-wider text-muted font-medium">Phone</span>
                    <span className="text-xs sm:text-sm text-text-primary font-medium">{phone}</span>
                  </div>
                </a>

                <a
                  href={`mailto:${email}`}
                  className="flex items-center gap-3.5 p-3 sm:p-3.5 rounded-xl border border-white/[0.06] border-t-white/[0.12] bg-surface/50 hover:bg-surface/80 hover:border-white/15 transition-all group"
                >
                  <div className="w-9 h-9 rounded-lg bg-white/[0.04] border border-white/10 flex items-center justify-center text-muted group-hover:text-text-primary transition-colors">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <span className="block text-[10px] uppercase tracking-wider text-muted font-medium">Email</span>
                    <span className="text-xs sm:text-sm text-text-primary font-medium truncate block">{email}</span>
                  </div>
                </a>

                <a
                  href={web.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3.5 p-3 sm:p-3.5 rounded-xl border border-white/[0.06] border-t-white/[0.12] bg-surface/50 hover:bg-surface/80 hover:border-white/15 transition-all group"
                >
                  <div className="w-9 h-9 rounded-lg bg-white/[0.04] border border-white/10 flex items-center justify-center text-muted group-hover:text-text-primary transition-colors">
                    <Globe className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <span className="block text-[10px] uppercase tracking-wider text-muted font-medium">GitHub</span>
                    <span className="text-xs sm:text-sm text-text-primary font-medium truncate block">{web.label}</span>
                  </div>
                </a>
              </div>
            </div>
          </div>

          <div className="mx-auto flex w-full max-w-screen-md flex-col gap-5 sm:gap-6 rounded-2xl sm:rounded-3xl border border-white/[0.08] border-t-white/[0.2] bg-surface/70 p-6 sm:p-8 md:p-10 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="firstname" className="text-text-primary text-xs sm:text-sm font-medium">First Name <span className="text-red-400">*</span></Label>
                <Input type="text" id="firstname" value={formData.firstname} onChange={handleChange} placeholder="First Name" className="bg-bg/90 border-white/[0.08] focus:border-[#4E85BF] focus:ring-1 focus:ring-[#4E85BF]/40 rounded-xl text-base md:text-sm transition-all" />
              </div>
              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="lastname" className="text-text-primary text-xs sm:text-sm font-medium">Last Name</Label>
                <Input type="text" id="lastname" value={formData.lastname} onChange={handleChange} placeholder="Last Name" className="bg-bg/90 border-white/[0.08] focus:border-[#4E85BF] focus:ring-1 focus:ring-[#4E85BF]/40 rounded-xl text-base md:text-sm transition-all" />
              </div>
            </div>
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="email" className="text-text-primary text-xs sm:text-sm font-medium">Email <span className="text-red-400">*</span></Label>
              <Input type="email" id="email" value={formData.email} onChange={handleChange} placeholder="Email" className="bg-bg/90 border-white/[0.08] focus:border-[#4E85BF] focus:ring-1 focus:ring-[#4E85BF]/40 rounded-xl text-base md:text-sm transition-all" />
            </div>
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="subject" className="text-text-primary text-xs sm:text-sm font-medium">Subject</Label>
              <Input type="text" id="subject" value={formData.subject} onChange={handleChange} placeholder="Subject" className="bg-bg/90 border-white/[0.08] focus:border-[#4E85BF] focus:ring-1 focus:ring-[#4E85BF]/40 rounded-xl text-base md:text-sm transition-all" />
            </div>
            <div className="grid w-full gap-1.5">
              <Label htmlFor="message" className="text-text-primary text-xs sm:text-sm font-medium">Message <span className="text-red-400">*</span></Label>
              <Textarea placeholder="Type your message here." id="message" value={formData.message} onChange={handleChange} className="bg-bg/90 border-white/[0.08] focus:border-[#4E85BF] focus:ring-1 focus:ring-[#4E85BF]/40 min-h-[130px] sm:min-h-[150px] rounded-xl text-base md:text-sm transition-all" />
            </div>
            {submitMessage && (
              <div
                className={`flex items-center gap-2.5 text-xs sm:text-sm p-3.5 rounded-xl border transition-all ${
                  submitMessage.includes('successfully')
                    ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-300'
                    : 'bg-rose-500/10 border-rose-500/30 text-rose-300'
                }`}
              >
                {submitMessage.includes('successfully') ? (
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                ) : (
                  <AlertCircle className="w-4 h-4 shrink-0" />
                )}
                <span>{submitMessage}</span>
              </div>
            )}
            <Button 
              onClick={handleSubmit} 
              disabled={isSubmitting}
              className="w-full relative group overflow-hidden bg-white text-black hover:bg-white/90 font-semibold py-5 sm:py-6 rounded-xl transition-all duration-300 active:scale-[0.98] shadow-[0_10px_30px_rgba(0,0,0,0.4)] hover:shadow-[0_0_25px_rgba(255,255,255,0.2)] disabled:opacity-60 disabled:cursor-not-allowed text-sm sm:text-base cursor-pointer"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                {isSubmitting ? (
                  <>
                    <span className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
