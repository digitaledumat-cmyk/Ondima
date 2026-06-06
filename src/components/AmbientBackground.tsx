export default function AmbientBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden" aria-hidden>
      <div className="ambient-orb -left-32 top-1/4 h-[500px] w-[500px] bg-purple-600/15" />
      <div className="ambient-orb -right-24 top-1/3 h-[400px] w-[400px] bg-purple-500/10" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-void/30 to-void" />
    </div>
  );
}
