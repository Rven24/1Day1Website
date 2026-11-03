import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Copy, Check, ArrowRight } from 'lucide-react';

export default function Modal({ isOpen, onClose, category }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(category);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6">
          <motion.div
            initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            animate={{ opacity: 1, backdropFilter: 'blur(16px)' }}
            exit={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            onClick={onClose}
            className="absolute inset-0 bg-black/40"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20, filter: 'blur(10px)' }}
            animate={{ opacity: 1, scale: 1, y: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, scale: 0.95, y: 10, filter: 'blur(10px)' }}
            transition={{ type: 'spring', damping: 25, stiffness: 300, mass: 0.8 }}
            className="relative w-full max-w-lg overflow-hidden rounded-[2rem] border border-white/10 bg-[#0a0a0a]/80 p-8 shadow-[0_0_80px_-20px_rgba(255,255,255,0.1)] backdrop-blur-2xl"
          >
            <div className="absolute -top-24 -left-24 h-48 w-48 rounded-full bg-white/5 blur-[50px]" />
            
            <div className="relative z-10 flex items-center justify-between pb-8">
              <div className="flex items-center gap-2 rounded-full border border-white/5 bg-white/5 px-3 py-1.5 backdrop-blur-md">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-white" />
                <span className="text-[10px] font-bold tracking-[0.2em] text-white/70 uppercase">
                  Tantangan Terpilih
                </span>
              </div>
              <button
                onClick={onClose}
                className="group flex h-8 w-8 items-center justify-center rounded-full bg-white/5 text-white/50 transition-all hover:bg-white/10 hover:text-white"
              >
                <X className="h-4 w-4 transition-transform group-hover:rotate-90" />
              </button>
            </div>

            <div className="relative z-10 my-4 text-center">
              <motion.h2 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.5, ease: 'easeOut' }}
                className="bg-gradient-to-b from-white to-white/50 bg-clip-text text-3xl font-extrabold leading-tight tracking-tight text-transparent sm:text-4xl"
              >
                {category}
              </motion.h2>
            </div>

            <div className="relative z-10 mt-10 flex gap-3 sm:gap-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                onClick={handleCopy}
                className="group flex flex-1 items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-xs font-semibold text-white/70 transition-colors hover:bg-white/10 hover:text-white"
              >
                {copied ? <Check className="h-4 w-4 text-green-400" /> : <Copy className="h-4 w-4 transition-transform group-hover:scale-110" />}
                <span>{copied ? 'Tersalin' : 'Salin Teks'}</span>
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                onClick={onClose}
                className="group flex flex-1 items-center justify-center gap-2 rounded-2xl bg-white px-4 py-4 text-xs font-bold text-black transition-all hover:bg-gray-200"
              >
                <span>Mulai Sekarang</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}