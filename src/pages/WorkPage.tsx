import { motion } from "motion/react";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import React, { useState, useRef, useEffect, useCallback } from "react";

const projects = [
  {
    id: 1,
    title: "Lord Patrick By Lapinoz Offer Campaign",
    category: "Promotional Campaign",
    videoUrl: "/Lord Patrick.mp4"
  },
  {
    id: 2,
    title: "Brand Gallery Collaboration with RJ Devang on the Opening Day",
    category: "Featured Campaign",
    videoUrl: "/brand-gallery.mp4"
  },
  {
    id: 3,
    title: "27 Year of Vidhya Group Tuition",
    category: "Education Campaign",
    videoUrl: "/Vidhya group tuition.mp4"
  },
  {
    id: 4,
    title: "New Store Opening Campaign of Puffing the Live Puff",
    category: "Retail Campaign",
    videoUrl: "/Puffing-the-live-puff.mp4"
  },
  {
    id: 5,
    title: "Post Opening Campaign of Puffing the Live Puff",
    category: "Retail Campaign",
    videoUrl: "/post-opening-video- puffing- the- live- puff.mp4"
  },
  {
    id: 6,
    title: "Tummy Bites Maninagar",
    category: "Food Campaign",
    videoUrl: "/Tummy Bites.mp4"
  },
  {
    id:7,
    title:"Real Estate\nSharddha Pioneer",
    category:"Real Estate",
    videoUrl:"/shraddha-pioneer.mp4"
  },{
    id:8,
    title:"Gill Sir Spoken English",
    category:"Education",
    videoUrl:"/Gill Sir.mp4"
  }
];

interface VideoCardProps {
  item: typeof projects[0];
  isActive: boolean;
  onPlay: (id: number) => void;
}

const VideoCard: React.FC<VideoCardProps> = ({ item, isActive, onPlay }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Pause this video whenever another card becomes active
  useEffect(() => {
    if (!isActive && isPlaying) {
      videoRef.current?.pause();
      setIsPlaying(false);
    }
  }, [isActive]);

  const togglePlay = useCallback(() => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      onPlay(item.id); // notify parent → pauses all others
      videoRef.current.play();
      setIsPlaying(true);
      setIsMuted(false);
    }
  }, [isPlaying, item.id, onPlay]);

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsMuted((m) => !m);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="group"
    >
      <div 
        onClick={togglePlay}
        className="relative aspect-[9/16] max-w-sm mx-auto rounded-2xl sm:rounded-[32px] overflow-hidden border border-white/10 shadow-2xl shadow-orange-500/5 group-hover:shadow-orange-500/10 transition-all duration-500 cursor-pointer"
      >
        {/* Play/Pause Overlay */}
        <div className={`absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent transition-all z-10 flex flex-col items-center justify-end pb-16 px-8 text-center ${isPlaying ? 'opacity-0 group-hover:opacity-100' : 'opacity-100'}`}>
          {/* Play Button - Centered */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 sm:w-20 sm:h-20 bg-orange-500 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform shadow-xl shadow-orange-500/40">
            {isPlaying ? (
              <Pause className="w-5 h-5 sm:w-8 sm:h-8 text-white fill-current" />
            ) : (
              <Play className="w-5 h-5 sm:w-8 sm:h-8 text-white fill-current ml-1" />
            )}
          </div>

          {!isPlaying && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-xs"
            >
              <p className="text-[10px] sm:text-xs font-bold text-orange-500 uppercase tracking-widest mb-3">Featured Campaign</p>
              <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-white leading-tight drop-shadow-2xl">
                {item.title}
              </h3>
            </motion.div>
          )}
        </div>

        {/* Mute Toggle */}
        <button 
          onClick={toggleMute}
          className="absolute bottom-6 right-6 z-20 w-10 h-10 sm:w-12 sm:h-12 bg-black/50 backdrop-blur-md border border-white/10 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors"
        >
          {isMuted ? <VolumeX className="w-4 h-4 sm:w-5 sm:h-5" /> : <Volume2 className="w-4 h-4 sm:w-5 sm:h-5" />}
        </button>

        <video 
          ref={videoRef}
          className="w-full h-full object-cover"
          muted={isMuted}
          loop
          playsInline
        >
          <source src={item.videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      
      {/* <div className="mt-4 sm:mt-6 flex flex-col gap-4 text-center">
        <div className="flex justify-center">
          <button className="text-[10px] sm:text-xs font-bold uppercase tracking-widest border border-white/20 px-5 py-2.5 rounded-full hover:bg-white hover:text-black transition-all">
            Case Study
          </button>
        </div>
      </div> */}
    </motion.div>
  );
};

export default function WorkPage() {
  const [activeVideoId, setActiveVideoId] = useState<number | null>(null);

  const handlePlay = useCallback((id: number) => {
    setActiveVideoId(id);
  }, []);
  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-orange-500 selection:text-white overflow-x-hidden">
      <Navbar />

      <section className="pt-32 pb-16 sm:pt-40 sm:pb-24 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="mb-12 sm:mb-20">
            <h2 className="text-[10px] sm:text-xs font-bold text-orange-500 uppercase tracking-[0.3em] mb-4">Portfolio</h2>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none">
              Our <span className="text-orange-500 italic">Work</span>
            </h1>
            <p className="max-w-2xl text-gray-500 text-sm sm:text-lg mt-6 italic">
              "A deep dive into the high-octane campaigns we've executed for global leaders and local heroes alike."
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
            {projects.map((item) => (
              <VideoCard
                key={item.id}
                item={item}
                isActive={activeVideoId === item.id}
                onPlay={handlePlay}
              />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
