export default function ContactForm() {
    return (
        <div className="py-14 bg-bg">
            <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16 text-muted">
                <div className="max-w-lg mx-auto space-y-3 sm:text-center">
                    <h3 className="text-accent font-semibold tracking-widest uppercase text-xs">
                        Contact
                    </h3>
                    <p className="text-text-primary text-3xl font-semibold sm:text-4xl font-display italic">
                        Get in <span className="text-accent">touch</span>
                    </p>
                    <p className="text-muted">
                        We’d love to hear from you! Please fill out the form below.
                    </p>
                </div>
                <div className="mt-12 max-w-lg mx-auto">
                    <form
                        onSubmit={(e) => e.preventDefault()}
                        className="space-y-5"
                    >
                        <div className="flex flex-col items-center gap-y-5 gap-x-6 [&>*]:w-full sm:flex-row">
                            <div>
                                <label className="font-medium text-text-primary text-sm">
                                    First name
                                </label>
                                <input
                                    type="text"
                                    required
                                    className="w-full mt-2 px-4 py-2 text-text-primary bg-surface border border-stroke outline-none focus:border-accent shadow-sm rounded-xl transition-colors"
                                />
                            </div>
                            <div>
                                <label className="font-medium text-text-primary text-sm">
                                    Last name
                                </label>
                                <input
                                    type="text"
                                    required
                                    className="w-full mt-2 px-4 py-2 text-text-primary bg-surface border border-stroke outline-none focus:border-accent shadow-sm rounded-xl transition-colors"
                                />
                            </div>
                        </div>
                        <div>
                            <label className="font-medium text-text-primary text-sm">
                                Email
                            </label>
                            <input
                                type="email"
                                required
                                className="w-full mt-2 px-4 py-2 text-text-primary bg-surface border border-stroke outline-none focus:border-accent shadow-sm rounded-xl transition-colors"
                            />
                        </div>
                        <div>
                            <label className="font-medium text-text-primary text-sm">
                                Phone number
                            </label>
                            <div className="relative mt-2">
                                <div className="absolute inset-y-0 left-3 my-auto h-6 flex items-center border-r border-stroke pr-2">
                                    <select className="text-xs bg-transparent outline-none rounded-lg h-full text-text-primary">
                                        <option className="bg-bg">US</option>
                                        <option className="bg-bg">IN</option>
                                        <option className="bg-bg">EU</option>
                                    </select>
                                </div>
                                <input
                                    type="number"
                                    placeholder="+1 (555) 000-000"
                                    required
                                    className="w-full pl-[4.5rem] pr-4 py-2 appearance-none text-text-primary bg-surface border border-stroke outline-none focus:border-accent shadow-sm rounded-xl transition-colors"
                                />
                            </div>
                        </div>
                        <div>
                            <label className="font-medium text-text-primary text-sm">
                                Message
                            </label>
                            <textarea 
                                required 
                                className="w-full mt-2 h-36 px-4 py-3 resize-none appearance-none text-text-primary bg-surface border border-stroke outline-none focus:border-accent shadow-sm rounded-xl transition-colors"
                            ></textarea>
                        </div>
                        <button
                            className="w-full px-4 py-3 text-bg font-bold bg-text-primary hover:bg-accent active:scale-95 rounded-xl duration-150 transition-all shadow-lg"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}
