'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Search, Globe, Menu, X, User } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: '큐레이션', href: '/curation' },
    { name: '마스터 스토리', href: '/masters' },
    { name: '체험 예약', href: '/reservation' },
    { name: '커머스', href: '/shop' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-white/90 backdrop-blur-lg shadow-sm py-3' : 'bg-transparent py-5'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className={`w-8 h-8 ${isScrolled ? 'bg-primary' : 'bg-white'} rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110`}>
            <span className={`${isScrolled ? 'text-white' : 'text-primary'} font-bold text-xl`}>K</span>
          </div>
          <span className={`text-2xl font-bold tracking-tight transition-colors duration-300 ${isScrolled ? 'text-primary' : 'text-white'}`}>
            K-ItDa <span className={`text-sm font-medium opacity-70`}>킷다</span>
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`text-sm font-semibold transition-colors duration-300 ${isScrolled ? 'text-gray-700 hover:text-primary' : 'text-white/90 hover:text-white'
                }`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Top Icons */}
        <div className="flex items-center gap-4">
          <button className={`p-2 rounded-full transition-colors hidden sm:block ${isScrolled ? 'hover:bg-gray-100' : 'hover:bg-white/10'}`}>
            <Search size={20} className={isScrolled ? 'text-gray-600' : 'text-white'} />
          </button>
          <button className={`flex items-center gap-1 p-2 rounded-full transition-colors ${isScrolled ? 'hover:bg-gray-100' : 'hover:bg-white/10'}`}>
            <Globe size={20} className={isScrolled ? 'text-gray-600' : 'text-white'} />
            <span className={`text-xs font-bold ${isScrolled ? 'text-gray-600' : 'text-white'}`}>KO</span>
          </button>
          <div className={`h-6 w-px ${isScrolled ? 'bg-gray-200' : 'bg-white/20'} mx-1 hidden sm:block`}></div>
          <button className={`p-2 rounded-full transition-colors ${isScrolled ? 'hover:bg-gray-100' : 'hover:bg-white/10'}`}>
            <User size={20} className={isScrolled ? 'text-gray-600' : 'text-white'} />
          </button>

          {/* Mobile Menu Toggle */}
          <button
            className={`md:hidden p-2 rounded-full ${isScrolled ? 'hover:bg-gray-100 text-gray-800' : 'hover:bg-white/10 text-white'}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white shadow-xl p-6 flex flex-col gap-4 md:hidden border-t"
          >
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-lg font-medium text-gray-800 py-2 border-b border-gray-50 last:border-0"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

