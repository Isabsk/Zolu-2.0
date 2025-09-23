'use client'

import Navaratri from './components/navaratri';
import ColorGrid from './components/ColorGrid';
import Hero from './components/Hero';
import { ScrollVelocityContainer, ScrollVelocityRow } from '@/components/ui/scroll-based-velocity';
import { WarpBackground } from '@/components/ui/warp-background';

export default function Home() {
  return (
    <>
      {/* Animated Gradient Background */}
      <div className="fixed inset-0 -z-10 animate-gradient bg-gradient-to-br from-pink-400 via-indigo-400 to-yellow-300" />

      <div className="bg-white/80 backdrop-blur-sm min-h-screen">
        <Hero />
        <Navaratri />
        <ColorGrid />
      </div>

      <style jsx global>{`
        @keyframes gradientBG {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        .animate-gradient {
          background: linear-gradient(270deg, #f472b6, #818cf8, #facc15, #34d399, #f472b6);
          background-size: 400% 400%;
          animation: gradientBG 15s ease infinite;
        }
      `}</style>
    </>
  );
}
