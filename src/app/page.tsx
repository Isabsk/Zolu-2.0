'use client'

import Navaratri from './components/navaratri';
import ColorGrid from './components/ColorGrid';
import Hero from './components/Hero';

export default function Home() {

  return (
    <>
      <div className="bg-white">
        <Hero />
        <Navaratri />
        <ColorGrid />
      </div>
    </>
  );
}
