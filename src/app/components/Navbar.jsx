'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import Image from 'next/image';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-black/90 text-white z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-2xl font-bold text-[#BF1501]"
        >
          <div className='flex flex-row items-center gap-2'>
            <Image
              src="/logo_bruno_2.png"
              alt="Bruno Costa Filmes"
              width={140}
              height={100}
            />

          </div>
        </motion.div>

        <div className="hidden md:flex space-x-6">
          <a href="#home" className="hover:text-[#BF1501] transition-colors">Home</a>
          <a href="#sobre" className="hover:text-[#BF1501] transition-colors">Sobre</a>
          <a href="#servicos" className="hover:text-[#BF1501] transition-colors">Serviços</a>
          <a href="#videos" className="hover:text-[#BF1501] transition-colors">Videos</a>
          <a href="#portfolio" className="hover:text-[#BF1501] transition-colors">Portfólio</a>
          <a href="#contato" className="hover:text-[#BF1501] transition-colors">Contato</a>
        </div>

        <button
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            className="absolute top-full right-0 bg-black/90 w-64 py-4 md:hidden"
          >
            <div className="flex flex-col space-y-4 px-6">
              <a href="#home" className="hover:text-[#BF1501] transition-colors">Home</a>
              <a href="#sobre" className="hover:text-[#BF1501] transition-colors">Sobre</a>
              <a href="#servicos" className="hover:text-[#BF1501] transition-colors">Serviços</a>
              <a href="#videos" className="hover:text-[#BF1501] transition-colors">Videos</a>
              <a href="#portfolio" className="hover:text-[#BF1501] transition-colors">Portfólio</a>
              <a href="#contato" className="hover:text-[#BF1501] transition-colors">Contato</a>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
}