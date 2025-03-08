import DoubleSidedCard from "./buttons/double-sided-card/double-sided-card";
import HolographicCard from "./buttons/holographic-card/holographic-card";
import CursorAnimations from "./components/cursor-animations/cursor-animations";

export default function Home() {
  return (
    <div className="flex">
      <DoubleSidedCard />
      <HolographicCard />
      <CursorAnimations />
    </div>
  );
}
