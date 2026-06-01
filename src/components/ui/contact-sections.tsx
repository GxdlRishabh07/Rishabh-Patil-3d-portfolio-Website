import { Globe, MessageSquare, ArrowRight } from "lucide-react";

export default function ContactSections() {
    const contactMethods = [
        {
            icon: <Globe className="w-6 h-6" />,
            title: "Join our community",
            desc: "Connect with like-minded developers and creators in our space.",
            link: {
                name: "Join our Discord",
                href: "#"
            },
        },
        {
            icon: <MessageSquare className="w-6 h-6" />,
            title: "Follow us on Twitter",
            desc: "Stay updated with the latest news, projects, and creative insights.",
            link: {
                name: "Send us DMs",
                href: "#"
            },
        },
    ]

    return (
        <section className="py-14 bg-bg">
            <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16 text-muted gap-12 lg:flex">
                <div className="max-w-md">
                    <h3 className="text-text-primary text-3xl font-semibold sm:text-4xl font-display italic">
                        Let’s <span className="text-accent">connect</span>
                    </h3>
                    <p className="mt-3 text-muted">
                        We’re here to help and answer any question you might have. We look forward to hearing from you.
                    </p>
                </div>
                <div className="flex-1">
                    <ul className="mt-12 gap-y-6 gap-x-12 items-center md:flex lg:gap-x-0 lg:mt-0">
                        {
                            contactMethods.map((item, idx) => (
                                <li key={idx} className="space-y-3 border-t border-stroke py-6 md:max-w-sm md:py-0 md:border-t-0 lg:border-l lg:px-12 lg:max-w-none">
                                    <div className="w-12 h-12 rounded-full border border-stroke flex items-center justify-center text-text-primary bg-surface/50">
                                        {item.icon}
                                    </div>
                                    <h4 className="text-text-primary text-lg font-medium xl:text-xl">
                                        {item.title}
                                    </h4>
                                    <p className="text-sm">
                                        {item.desc}
                                    </p>
                                    <a href={item.link.href} className="flex items-center gap-1 text-sm text-accent hover:text-accent/80 duration-150 font-medium group">
                                        {item.link.name}
                                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                    </a>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </section>
    )
}
