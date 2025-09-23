'use client'

import { useState } from 'react'
import Image from "next/image";
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Navaratri from './components/navaratri';
import ColorGrid from './components/ColorGrid';
import Hero from './components/Hero';
import { ScrollProgress } from '@/components/ui/scroll-progress';

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>
      <div className="bg-white">
        <ScrollProgress />
        <Hero />
        <Navaratri />
        <ColorGrid />
      </div>
    </>
  );
}
