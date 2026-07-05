import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

import { TextReveal } from "@/components/ui/cascade-text";
import { useState } from "react";
import { supabase } from "@/lib/supabase";

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
    <section className="py-32 bg-transparent text-text-primary">
      <div className="container mx-auto px-6 md:px-10 lg:px-16">
        <div className="mx-auto flex max-w-screen-xl flex-col justify-between gap-10 lg:flex-row lg:gap-20">
          <div className="flex max-w-sm flex-col justify-between gap-10">
            <div className="text-left">
              <div className="mb-2">
                <h2 className="text-4xl md:text-6xl lg:text-7xl text-text-primary tracking-tight flex flex-nowrap items-center whitespace-nowrap">
                  {title.split(' ').map((word, i) => (
                    <span key={i} className="flex">
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
              <p className="text-muted">{description}</p>
            </div>
            <div className="mx-auto w-fit lg:mx-0">
              <h3 className="mb-6 text-left text-2xl font-semibold">
                Contact Details
              </h3>
              <ul className="ml-4 list-disc space-y-2 text-muted">
                <li>
                  <span className="font-bold text-text-primary">Phone: </span>
                  {phone}
                </li>
                <li>
                  <span className="font-bold text-text-primary">Email: </span>
                  <a href={`mailto:${email}`} className="underline hover:text-accent transition-colors">
                    {email}
                  </a>
                </li>
                <li>
                  <span className="font-bold text-text-primary">Web: </span>
                  <a href={web.url} target="_blank" className="underline hover:text-accent transition-colors">
                    {web.label}
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mx-auto flex w-full max-w-screen-md flex-col gap-6 rounded-3xl border border-stroke bg-surface/50 p-6 sm:p-10 backdrop-blur-sm">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="firstname" className="text-text-primary">First Name <span className="text-red-500">*</span></Label>
                <Input type="text" id="firstname" value={formData.firstname} onChange={handleChange} placeholder="First Name" className="bg-bg border-stroke focus:border-accent rounded-xl" />
              </div>
              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="lastname" className="text-text-primary">Last Name</Label>
                <Input type="text" id="lastname" value={formData.lastname} onChange={handleChange} placeholder="Last Name" className="bg-bg border-stroke focus:border-accent rounded-xl" />
              </div>
            </div>
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="email" className="text-text-primary">Email <span className="text-red-500">*</span></Label>
              <Input type="email" id="email" value={formData.email} onChange={handleChange} placeholder="Email" className="bg-bg border-stroke focus:border-accent rounded-xl" />
            </div>
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="subject" className="text-text-primary">Subject</Label>
              <Input type="text" id="subject" value={formData.subject} onChange={handleChange} placeholder="Subject" className="bg-bg border-stroke focus:border-accent rounded-xl" />
            </div>
            <div className="grid w-full gap-1.5">
              <Label htmlFor="message" className="text-text-primary">Message <span className="text-red-500">*</span></Label>
              <Textarea placeholder="Type your message here." id="message" value={formData.message} onChange={handleChange} className="bg-bg border-stroke focus:border-accent min-h-[150px] rounded-xl" />
            </div>
            {submitMessage && (
              <div className={`text-sm p-3 rounded-xl ${submitMessage.includes('successfully') ? 'bg-green-500/20 text-green-200' : 'bg-red-500/20 text-red-200'}`}>
                {submitMessage}
              </div>
            )}
            <Button 
              onClick={handleSubmit} 
              disabled={isSubmitting}
              className="w-full bg-text-primary text-bg hover:bg-accent hover:text-bg font-bold py-6 rounded-xl transition-all active:scale-95 shadow-lg disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
