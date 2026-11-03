import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { CATEGORIES } from './data/categories';
import Modal from './components/Modal';
import { RefreshCw } from 'lucide-react';

export default function App() {
  const [displayText, setDisplayText] = useState('Tekan untuk Mengacak');
  const [isShuffling, setIsShuffling] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const lastIndexRef = useRef(-1);

  const getRandomIndex = () => {
    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * CATEGORIES.length);
    } while (newIndex === lastIndexRef.current && CATEGORIES.length > 1);

    lastIndexRef.current = newIndex;
    return newIndex;
  };

  const handleShuffle = () => {
    if (isShuffling) return;

    setIsShuffling(true);
    let stepCount = 0;
    let delay = 40;
    const maxSteps = 25;

    const animate = () => {
      const randomIndex = Math.floor(Math.random() * CATEGORIES.length);
      setDisplayText(CATEGORIES[randomIndex]);
      stepCount++;

      if (stepCount < maxSteps) {
        if (stepCount > 15) delay += 25; // perlambatan eksponensial di akhir
        setTimeout(animate, delay);
      } else {
        const finalIndex = getRandomIndex();
        const winnerCategory = CATEGORIES[finalIndex];

        setDisplayText(winnerCategory);
        setSelectedCategory(winnerCategory);
        
        // Sedikit jeda dramatis sebelum pop-up muncul
        setTimeout(() => {
          setIsShuffling(false);
          setIsModalOpen(true);
        }, 300);
      }
    };

    animate();
  };

  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-between overflow-hidden bg-black font-sans selection:bg-white/30 text-white">
      
      {/* 1. Fluid Background & Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_10%,transparent_100%)]" />
      
      <motion.div 
        animate={{ 
          rotate: [0, 5, -5, 0], 
          scale: [1, 1.05, 0.95, 1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="pointer-events-none absolute -top-[40%] left-1/2 h-[800px] w-[800px] -translate-x-1/2 rounded-full bg-white/[0.03] blur-[100px]" 
      />

      {/* 2. Header */}
      <header className="z-10 mt-8 flex flex-col items-center gap-4">
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.02] px-5 py-2 backdrop-blur-xl"
        >
          <div className="relative flex h-2 w-2 items-center justify-center">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-40"></span>
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-white"></span>
          </div>
          <span className="text-[10px] font-bold tracking-[0.25em] text-white/80 uppercase">
            1 Day 1 Website
          </span>
        </motion.div>
      </header>

      {/* 3. Main Display Area */}
      <main className="z-10 my-auto flex w-full max-w-3xl flex-col items-center justify-center px-6 text-center">
        <motion.div
          animate={{
            filter: isShuffling ? 'blur(4px)' : 'blur(0px)',
            opacity: isShuffling ? 0.6 : 1,
            scale: isShuffling ? 0.98 : 1,
          }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="flex min-h-[160px] flex-col items-center justify-center gap-6"
        >
          <span className="text-[10px] font-bold tracking-[0.3em] text-white/40 uppercase">
            {isShuffling ? 'Mengacak Kategori...' : 'Tantangan Hari Ini'}
          </span>
          
          <h1 className="bg-gradient-to-b from-white to-white/60 bg-clip-text text-4xl font-extrabold leading-tight tracking-tighter text-transparent sm:text-5xl md:text-6xl lg:text-7xl">
            {displayText}
          </h1>
        </motion.div>
      </main>

      {/* 4. Footer & Action Button */}
      <footer className="z-10 mb-12 flex flex-col items-center gap-6">
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleShuffle}
          disabled={isShuffling}
          className="group relative flex items-center justify-center gap-3 overflow-hidden rounded-full bg-white px-10 py-4 text-xs font-bold tracking-[0.2em] text-black transition-all disabled:pointer-events-none disabled:bg-white/10 disabled:text-white/30"
        >
          {/* Subtle button hover glow */}
          <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-black/10 to-transparent transition-transform duration-700 ease-in-out group-hover:translate-x-full" />
          
          <RefreshCw className={`h-4 w-4 transition-transform duration-500 ${isShuffling ? 'animate-spin' : 'group-hover:rotate-180'}`} />
          <span>ACAK SEKARANG</span>
        </motion.button>

        <motion.span 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-[10px] font-medium tracking-widest text-white/30"
        >
          {CATEGORIES.length} KATEGORI TERSEDIA
        </motion.span>
      </footer>

      {/* 5. Modal Result */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        category={selectedCategory}
      />
    </div>
  );
}