import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-black/50 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-14 sm:h-16 flex items-center justify-between">
        <Link to="/" className="text-lg sm:text-xl font-black tracking-tighter italic">
          INFLU<span className="text-orange-500">RUNNER</span>
        </Link>
        <div className="hidden md:flex space-x-6 lg:space-x-8 text-[9px] sm:text-[10px] font-bold uppercase tracking-widest">
          <Link to="/work" className="hover:text-orange-500 transition-colors">Work</Link>
          {/* <a href="/#about" className="hover:text-orange-500 transition-colors">About Us</a> */}
          <a href="https://contact.influrunner.com/" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500 transition-colors">Contact</a>
        </div>
        <a 
          href="https://contact.influrunner.com/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-orange-500 hover:bg-orange-600 px-3 sm:px-5 py-1.5 rounded-full text-[9px] sm:text-[10px] font-bold transition-all transform hover:scale-105 active:scale-95"
        >
          LET'S TALK
        </a>
      </div>
    </nav>
  );
}
