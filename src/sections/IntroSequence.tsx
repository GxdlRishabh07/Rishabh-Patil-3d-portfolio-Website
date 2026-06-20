import { ScrollyCanvas } from "./intro/ScrollyCanvas";

export function IntroSequence() {
  return (
    <div className="w-full bg-black text-white selection:bg-blue-500/30">
      <ScrollyCanvas />
    </div>
  );
}
