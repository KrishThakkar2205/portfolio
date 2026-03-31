export default function Footer() {
  return (
    <footer className="py-8 sm:py-12 border-t border-white/10 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8">
        <div className="text-lg sm:text-xl font-black tracking-tighter italic text-white">
          INFLU<span className="text-orange-500">RUNNER</span>
        </div>
        <div className="text-[8px] sm:text-[10px] font-bold uppercase tracking-widest text-gray-600">
          © 2026 Influrunner. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
