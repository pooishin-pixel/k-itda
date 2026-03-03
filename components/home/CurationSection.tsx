'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowUpRight, Sparkles, Hammer, Heart } from 'lucide-react';
import workshops from '@/lib/data/workshops.json';

const CurationSection = () => {
    // Pick some interesting ones for curation
    // 5: 매듭공방, 23: 광양장도박물관, 27: 안성맞춤유기공방
    const curationItems = [
        {
            ...workshops[4],
            category: 'Heritage',
            color: 'bg-primary',
            icon: <Sparkles size={18} />,
            desc: '한 올의 실에 담긴 정성, 전통 매듭의 미학을 경험해보세요.'
        },
        {
            ...workshops[23],
            category: 'Craft',
            color: 'bg-secondary',
            icon: <Hammer size={18} />,
            desc: '일편단심의 상징, 광양 장도의 고결한 예술 세계를 만납니다.'
        },
        {
            ...workshops[27],
            category: 'Life',
            color: 'bg-accent',
            icon: <Heart size={18} />,
            desc: '안성맞춤의 대명사, 대를 이어온 유기장의 정직한 놋그릇.'
        }
    ];

    return (
        <section className="pt-12 pb-24 bg-white overflow-hidden" id="curation">
            <div className="max-w-7xl mx-auto px-6">
                {/* Section Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-[10px] font-bold text-primary tracking-widest uppercase mb-2 flex items-center gap-2">
                            <span className="w-6 h-px bg-primary"></span>
                            Today's Curation
                        </h2>
                        <h3 className="text-3xl lg:text-5xl font-bold text-gray-900 leading-tight">
                            당신의 취향을 잇는 <br />
                            <span className="text-primary font-serif">오늘의 발견</span>
                        </h3>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-gray-500 max-w-sm text-sm leading-relaxed"
                    >
                        국립무형유산원의 실제 데이터를 통해 <br className="hidden md:block" /> 장인들의 숨결을 한눈에 만나보세요.
                    </motion.p>
                </div>

                {/* Curation Cards - Vertical Stack on Mobile / Desktop Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                    {curationItems.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="group cursor-pointer relative w-full"
                        >
                            {/* Card Image Container */}
                            <div className="relative h-[200px] md:h-[480px] w-full rounded-3xl md:rounded-[2.5rem] overflow-hidden shadow-lg bg-gray-100">
                                <Image
                                    src={item.imageUrl}
                                    alt={item.workshopName}
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    priority={index === 0}
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    onError={(e) => {
                                        (e.target as any).src = `https://images.unsplash.com/photo-${index === 0 ? '1582555172866-f73bb12a2ab3' : index === 1 ? '1590602847861-f357a9332bbc' : '1590602847861-f357a9332bbc'}?auto=format&fit=crop&q=80`;
                                    }}
                                />

                                {/* Overlay Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>

                                {/* Category Tag */}
                                <div className="absolute top-4 right-4 z-10">
                                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/50 backdrop-blur-md border border-white/10 text-[10px] font-bold text-white tracking-tight">
                                        <span className={`w-2 h-2 rounded-full ${item.color}`}></span>
                                        {item.category}
                                    </div>
                                </div>

                                {/* Content inside Image for Mobile/Default */}
                                <div className="absolute bottom-10 left-8 right-8 text-white z-10 transition-transform duration-500">
                                    <div className="mb-4 w-10 h-10 rounded-xl glass flex items-center justify-center text-white">
                                        {item.icon}
                                    </div>
                                    <h4 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">{item.masterName}의 {item.workshopName}</h4>
                                    <p className="text-gray-200 text-sm line-clamp-2 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                                        {item.desc}
                                    </p>
                                </div>

                                {/* Arrow Icon */}
                                <a
                                    href={item.detailsLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="absolute bottom-10 right-8 z-10 opacity-0 group-hover:opacity-100 transition-all transform translate-x-4 group-hover:translate-x-0"
                                >
                                    <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-primary shadow-lg">
                                        <ArrowUpRight size={24} />
                                    </div>
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="mt-16 flex justify-center">
                    <a
                        href="/curation"
                        className="flex items-center gap-3 text-lg font-bold text-gray-900 group"
                    >
                        전체 큐레이션 보기
                        <span className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all">
                            <ArrowUpRight size={20} />
                        </span>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default CurationSection;
