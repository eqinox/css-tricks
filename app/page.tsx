import DoubleSidedCard from "./buttons/double-sided-card/double-sided-card";
import HolographicCard from "./buttons/holographic-card/holographic-card";
import NextButton from "./buttons/next-button/next-button";
import PulseButton from "./buttons/pulse-button/pulse-button";
import PulseButton4 from "./buttons/pulse-button4/pulse-button4";
import CursorAnimations from "./components/cursor-animations/cursor-animations";
import DualImageEffect from "./components/dual-image-effect/dual-image-effect";
import HoverForUnderline from "./components/hover-for-underline/hover-for-underline";
import SameHeightCard from "./components/same-height-card/same-height-card";

export default function Home() {
  return (
    <div className="flex bg-amber-900 h-screen flex-wrap">
      <div className="flex flex-col">
        <DoubleSidedCard />
        <PulseButton4 />
      </div>
      <div className="flex flex-col">
        <HolographicCard />
        <HoverForUnderline />
        <SameHeightCard />
      </div>
      <CursorAnimations />
      <div className="flex flex-col">
        <NextButton />
        <DualImageEffect />
        <PulseButton />
      </div>
    </div>
  );
}
