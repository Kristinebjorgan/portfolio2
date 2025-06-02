export default function Home() {
  return (
    <section className="relative min-h-screen bg-[#fdf9ed] flex items-center justify-center font-grotesk overflow-hidden">
      {/* Golden overlays */}
      <div className="absolute inset-0 flex justify-center gap-4 pointer-events-none">
        <div className="w-1/12 bg-[#fdc751]/30 mix-blend-multiply"></div>
        <div className="w-1/12 bg-[#fdc751]/30 mix-blend-multiply"></div>
        <div className="w-1/12 bg-[#296f5c]/30 mix-blend-multiply"></div>
      </div>

      {/* Name split */}
      <div className="z-10 w-full px-10 flex justify-between text-[#296f5c] text-5xl md:text-7xl font-light tracking-wide">
        <span className="text-left">Kristine</span>
        <span className="text-right">Bjørgan</span>
      </div>
    </section>
  );
}
