import { motion } from "motion/react";
import { ArrowRight, Eye, Users, Globe } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-orange-500 selection:text-white overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] sm:h-[80vh] flex items-center justify-center overflow-hidden pt-12 sm:pt-16">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/60 to-[#050505] z-10" />
          <img 
            src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=2000" 
            alt="Hero Background" 
            className="w-full h-full object-cover scale-110 animate-pulse-slow"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 text-center py-8 sm:py-0">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.9] uppercase mb-4 sm:mb-6">
              Run the <br />
              <span className="text-orange-500 italic">Influence</span>
            </h1>
            <p className="max-w-lg mx-auto text-sm sm:text-base md:text-lg text-gray-400 mb-6 sm:mb-8 font-medium px-4 sm:px-0">
              We bridge the gap between world-class brands and the creators who define culture. Fast, effective, and results-driven.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-6 sm:px-0">
              <Link to="/work" className="w-full sm:w-auto bg-white text-black px-6 sm:px-8 py-2.5 sm:py-3.5 rounded-full text-xs sm:text-sm font-black uppercase tracking-tighter flex items-center justify-center gap-2 hover:bg-orange-500 hover:text-white transition-all group">
                View Our Work <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a 
                href="https://contact.influrunner.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full sm:w-auto border border-white/20 px-6 sm:px-8 py-2.5 sm:py-3.5 rounded-full text-xs sm:text-sm font-black uppercase tracking-tighter flex items-center justify-center gap-2 hover:bg-white/10 transition-all"
              >
                Get Started
              </a>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 z-20 text-white/30 hidden sm:block"
        >
          <div className="w-[1px] sm:w-[2px] h-8 sm:h-12 bg-gradient-to-b from-orange-500 to-transparent" />
        </motion.div>
      </section>

      {/* Clients Section */}
      <section className="py-12 sm:py-16 bg-[#050505] border-y border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-8 sm:mb-12">
          <h2 className="text-[10px] sm:text-xs font-bold text-orange-500 uppercase tracking-[0.3em] text-center">Trusted By</h2>
        </div>
        
        <div className="relative flex overflow-x-hidden">
          <motion.div 
            className="flex whitespace-nowrap gap-8 sm:gap-16 items-center"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ 
              duration: 40, 
              repeat: Infinity, 
              ease: "linear" 
            }}
          >
            {[
              "Paribindu Jewels", "Lord Patrick", "Puffing the LIVE PUFF", "Gill sir", 
              "Vidhya Group Tuition", "Shraddha Pioneer", "The Brand Gallery", "Tummy Bites",
              "Paribindu Jewels", "Lord Patrick", "Puffing the LIVE PUFF", "Gill sir", 
              "Vidhya Group Tuition", "Shraddha Pioneer", "The Brand Gallery", "Tummy Bites"
            ].map((client, index) => (
              <span 
                key={index} 
                className="text-2xl sm:text-4xl md:text-5xl font-black uppercase tracking-tighter text-white/20 hover:text-orange-500/50 transition-colors cursor-default"
              >
                {client}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-10 sm:py-12 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="bg-[#111111] p-6 sm:p-8 md:p-10 rounded-[24px] sm:rounded-[40px] border border-white/5 shadow-2xl relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-orange-500/5 blur-[80px] sm:blur-[120px] rounded-full -mr-32 sm:-mr-48 -mt-32 sm:-mt-48" />
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center relative z-10">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-[10px] sm:text-xs font-bold text-orange-500 uppercase tracking-[0.3em] mb-3 sm:mb-4">Our Mission</h2>
                <h3 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tighter leading-[0.95] mb-4 sm:mb-6">
                  Democratizing the <br /> 
                  <span className="text-white">Influencer Economy.</span>
                </h3>
                <p className="text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed font-medium">
                  InfluRunner changes the game by connecting everyone—from corner coffee shops to global enterprises—with influencers who genuinely align with their values. We eliminate fragmentation and lack of transparency in the current market.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-6 sm:y-8"
              >
                <div className="flex items-start gap-3 sm:gap-4 group">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-500/10 rounded-lg sm:rounded-xl flex items-center justify-center shrink-0 group-hover:bg-orange-500/20 transition-all border border-orange-500/10">
                    <Eye className="w-5 h-5 sm:w-6 sm:h-6 text-orange-500" />
                  </div>
                  <div>
                    <h4 className="text-base sm:text-xl font-black uppercase tracking-tight mb-0.5 sm:mb-1">Total Transparency</h4>
                    <p className="text-gray-500 text-xs sm:text-base">Clear metrics and honest pricing for all participants.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 sm:gap-4 group">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-500/10 rounded-lg sm:rounded-xl flex items-center justify-center shrink-0 group-hover:bg-orange-500/20 transition-all border border-orange-500/10">
                    <Users className="w-5 h-5 sm:w-6 sm:h-6 text-orange-500" />
                  </div>
                  <div>
                    <h4 className="text-base sm:text-xl font-black uppercase tracking-tight mb-0.5 sm:mb-1">Inclusive Network</h4>
                    <p className="text-gray-500 text-xs sm:text-base">A spotlight for micro-influencers often overlooked by niche brands.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 sm:gap-4 group">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-500/10 rounded-lg sm:rounded-xl flex items-center justify-center shrink-0 group-hover:bg-orange-500/20 transition-all border border-orange-500/10">
                    <Globe className="w-5 h-5 sm:w-6 sm:h-6 text-orange-500" />
                  </div>
                  <div>
                    <h4 className="text-base sm:text-xl font-black uppercase tracking-tight mb-0.5 sm:mb-1">Local to Global</h4>
                    <p className="text-gray-500 text-xs sm:text-base">From small shopkeepers to massive enterprises, we bridge the gap.</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-10 sm:py-12 relative bg-[#0a0a0a]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-[10px] sm:text-xs font-bold text-orange-500 uppercase tracking-[0.3em] mb-4">Get In Touch</h2>
          <h3 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tighter mb-6 sm:mb-8">Ready to <br /> <span className="italic">Sprint?</span></h3>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            <p className="text-gray-400 text-sm sm:text-base md:text-lg mb-6 sm:mb-8 max-w-xl px-4 sm:px-0">
              Take the first step towards explosive growth. Connect with our team and let's build something legendary together.
            </p>
            <a 
              href="https://contact.influrunner.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center px-6 sm:px-10 py-3 sm:py-5 font-black uppercase tracking-tighter text-white bg-orange-500 rounded-full overflow-hidden transition-all hover:bg-orange-600 shadow-2xl shadow-orange-500/20 transform hover:scale-105 active:scale-95"
            >
              <span className="relative z-10 flex items-center gap-2 sm:gap-3 text-base sm:text-xl">
                Contact Us Now <ArrowRight className="w-4 h-4 sm:w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </span>
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
