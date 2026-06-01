import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

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
  return (
    <section className="py-32 bg-transparent text-text-primary">
      <div className="container mx-auto px-6 md:px-10 lg:px-16">
        <div className="mx-auto flex max-w-screen-xl flex-col justify-between gap-10 lg:flex-row lg:gap-20">
          <div className="flex max-w-sm flex-col justify-between gap-10">
            <div className="text-left">
              <h1 className="mb-2 text-5xl font-semibold lg:mb-1 lg:text-6xl font-display italic">
                {title.split(' ')[0]} <span className="text-accent">{title.split(' ').slice(1).join(' ')}</span>
              </h1>
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
          <div className="mx-auto flex w-full max-w-screen-md flex-col gap-6 rounded-3xl border border-stroke bg-surface/50 p-10 backdrop-blur-sm">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="firstname" className="text-text-primary">First Name</Label>
                <Input type="text" id="firstname" placeholder="First Name" className="bg-bg border-stroke focus:border-accent rounded-xl" />
              </div>
              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="lastname" className="text-text-primary">Last Name</Label>
                <Input type="text" id="lastname" placeholder="Last Name" className="bg-bg border-stroke focus:border-accent rounded-xl" />
              </div>
            </div>
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="email" className="text-text-primary">Email</Label>
              <Input type="email" id="email" placeholder="Email" className="bg-bg border-stroke focus:border-accent rounded-xl" />
            </div>
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="subject" className="text-text-primary">Subject</Label>
              <Input type="text" id="subject" placeholder="Subject" className="bg-bg border-stroke focus:border-accent rounded-xl" />
            </div>
            <div className="grid w-full gap-1.5">
              <Label htmlFor="message" className="text-text-primary">Message</Label>
              <Textarea placeholder="Type your message here." id="message" className="bg-bg border-stroke focus:border-accent min-h-[150px] rounded-xl" />
            </div>
            <Button className="w-full bg-text-primary text-bg hover:bg-accent hover:text-bg font-bold py-6 rounded-xl transition-all active:scale-95 shadow-lg">
              Send Message
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
