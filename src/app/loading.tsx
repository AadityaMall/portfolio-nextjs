export default function Loader() {
  return (
    <div className="flex items-center justify-center min-h-screen" style={{ background: "#020206" }}>
      <div className="flex flex-col items-center gap-6">
        {/* Dual-ring spinner */}
        <div className="relative size-16">
          <div
            className="absolute inset-0 rounded-full border-2 border-transparent border-t-[#00f5ff] animate-spin"
            style={{ animationDuration: "1s" }}
          />
          <div
            className="absolute inset-2 rounded-full border-2 border-transparent border-b-[#a855f7] animate-spin"
            style={{ animationDuration: "1.5s", animationDirection: "reverse" }}
          />
          <div className="absolute inset-0 rounded-full"
            style={{ background: "radial-gradient(ellipse, rgba(0,245,255,0.08), transparent)", filter: "blur(4px)" }}
          />
        </div>
        <span className="text-xs font-mono text-[#00f5ff]/60 tracking-widest uppercase animate-pulse">
          Loading…
        </span>
      </div>
    </div>
  );
}
