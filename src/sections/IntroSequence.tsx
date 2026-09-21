import { ScrollyCanvas } from "./intro/ScrollyCanvas";

export function IntroSequence() {
  return (
    <section id="hero" className="w-full bg-black text-white selection:bg-blue-500/30 relative">
      <ScrollyCanvas />
    </section>
  );
}

