'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Compass, Calendar, ShoppingBag, User } from 'lucide-react';
import { motion } from 'framer-motion';

const MobileNav = () => {
    const pathname = usePathname();

    const navItems = [
        { name: '홈', href: '/', icon: <Home size={20} /> },
        { name: '큐레이션', href: '/curation', icon: <Compass size={20} /> },
        { name: '예약', href: '/reservation', icon: <Calendar size={20} /> },
        { name: '상점', href: '/shop', icon: <ShoppingBag size={20} /> },
        { name: '마이', href: '/profile', icon: <User size={20} /> },
    ];

    return (
        <div className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-[400px]">
            <nav className="bg-white/80 backdrop-blur-xl border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.1)] rounded-3xl px-6 py-3 flex items-center justify-between">
                {navItems.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="flex flex-col items-center gap-1 relative"
                        >
                            <div className={`transition-colors duration-300 ${isActive ? 'text-primary' : 'text-gray-400'}`}>
                                {item.icon}
                            </div>
                            <span className={`text-[10px] font-bold ${isActive ? 'text-primary' : 'text-gray-400'}`}>
                                {item.name}
                            </span>
                            {isActive && (
                                <motion.div
                                    layoutId="activeTab"
                                    className="absolute -top-1 w-1 h-1 bg-primary rounded-full"
                                />
                            )}
                        </Link>
                    );
                })}
            </nav>
        </div>
    );
};

export default MobileNav;
