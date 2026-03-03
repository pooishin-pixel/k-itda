'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Calendar, Star, Clock, MapPin, ChevronRight, Globe, ArrowRight as ArrowRightIcon } from 'lucide-react';
import workshops from '@/lib/data/workshops.json';

const ReservationPreview = () => {
    const [currency, setCurrency] = useState<'KRW' | 'USD'>('KRW');

    // Pick some interesting ones for reservations
    // 13: 부천궁방, 24: 심경장석공방, 21: 소병진 전주장전수회관
    const reservationClasses = [
        {
            ...workshops[13],
            id: 1,
            title: `${workshops[13].heritageCategory} 체험`,
            rating: 4.9,
            reviews: 128,
            price: { KRW: 85000, USD: 65 },
            duration: '120분',
            tag: 'Popular',
        },
        {
            ...workshops[24],
            id: 2,
            title: `${workshops[24].heritageCategory}의 미학`,
            rating: 4.8,
            reviews: 95,
            price: { KRW: 90000, USD: 70 },
            duration: '180분',
            tag: 'Master Class',
        },
        {
            ...workshops[21],
            id: 3,
            title: `${workshops[21].heritageCategory} 나무 이야기`,
            rating: 5.0,
            reviews: 210,
            price: { KRW: 120000, USD: 92 },
            duration: '240분',
            tag: 'Heritage',
        }
    ];

    return (
        <section className="py-24 bg-white" id="reservation">
            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <div>
                        <h2 className="text-sm font-bold text-secondary tracking-widest uppercase mb-4 flex items-center gap-2">
                            <span className="w-8 h-px bg-secondary"></span>
                            Experience Booking
                        </h2>
                        <h3 className="text-4xl font-bold text-gray-900">
                            전통을 직접 <span className="text-secondary italic">손끝으로</span>
                        </h3>
                    </div>

                    {/* Currency Switcher Mockup */}
                    <div className="flex bg-gray-100 p-1 rounded-xl">
                        <button
                            onClick={() => setCurrency('KRW')}
                            className={`px-4 py-2 rounded-lg text-sm font-bold transition-all ${currency === 'KRW' ? 'bg-white shadow-sm text-primary' : 'text-gray-400'}`}
                        >
                            KRW (₩)
                        </button>
                        <button
                            onClick={() => setCurrency('USD')}
                            className={`px-4 py-2 rounded-lg text-sm font-bold transition-all ${currency === 'USD' ? 'bg-white shadow-sm text-primary' : 'text-gray-400'}`}
                        >
                            USD ($)
                        </button>
                    </div>
                </div>

                {/* Grid */}
                <div className="grid md:grid-cols-3 gap-8">
                    {reservationClasses.map((cls, index) => (
                        <motion.div
                            key={cls.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group bg-white rounded-[2rem] border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-500"
                        >
                            <div className="relative h-64 overflow-hidden bg-gray-100">
                                <Image
                                    src={cls.imageUrl}
                                    alt={cls.title}
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                                    onError={(e) => {
                                        (e.target as any).src = "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&q=80";
                                    }}
                                />
                                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-tighter text-gray-900 border border-black/5">
                                    {cls.tag}
                                </div>
                                <button className="absolute top-4 right-4 w-10 h-10 rounded-full glass flex items-center justify-center text-gray-900 hover:bg-primary hover:text-white transition-colors">
                                    <Calendar size={18} />
                                </button>
                            </div>

                            <div className="p-8">
                                <div className="flex items-center gap-2 mb-3">
                                    <div className="flex items-center text-[#F59E0B]">
                                        <Star size={14} fill="currentColor" />
                                        <span className="text-sm font-bold ml-1 text-gray-900">{cls.rating}</span>
                                    </div>
                                    <span className="text-gray-400 text-sm">({cls.reviews} reviews)</span>
                                </div>

                                <h4 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors line-clamp-1">{cls.title}</h4>
                                <p className="text-sm text-gray-500 mb-6 flex items-center gap-1">
                                    {cls.workshopName} · {cls.masterName} 장인
                                </p>

                                <div className="grid grid-cols-2 gap-4 mb-8">
                                    <div className="flex items-center gap-2 text-gray-400 text-xs">
                                        <Clock size={16} className="text-secondary" />
                                        {cls.duration}
                                    </div>
                                    <div className="flex items-center gap-2 text-gray-400 text-xs text-right justify-end">
                                        <MapPin size={16} className="text-secondary" />
                                        {cls.location}
                                    </div>
                                </div>

                                <div className="flex items-center justify-between pt-6 border-t border-gray-50">
                                    <div>
                                        <span className="text-xs text-gray-400 block font-medium">Starting from</span>
                                        <span className="text-2xl font-black text-gray-900">
                                            {currency === 'KRW' ? `₩${cls.price.KRW.toLocaleString()}` : `$${cls.price.USD}`}
                                        </span>
                                    </div>
                                    <a
                                        href={cls.detailsLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-5 py-3 bg-gray-900 text-white rounded-xl font-bold text-sm hover:bg-primary transition-colors flex items-center gap-2 group/btn"
                                    >
                                        Book Now
                                        <ChevronRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Global Support info */}
                <div className="mt-20 p-8 rounded-[2rem] bg-secondary/5 border border-secondary/10 flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-2xl bg-secondary/20 flex items-center justify-center text-secondary font-bold">
                            <Globe size={24} />
                        </div>
                        <div>
                            <h5 className="font-bold text-gray-900">Global Ready Anywhere</h5>
                            <p className="text-sm text-gray-500">전국 국립무형유산원 연계 공방의 실제 위치와 체험 정보를 확인하세요.</p>
                        </div>
                    </div>
                    <a
                        href="https://support.nihc.go.kr/iptl/wshop/wshopL.do"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-secondary font-bold flex items-center gap-2 hover:gap-3 transition-all"
                    >
                        모든 체험 둘러보기 <ArrowRightIcon size={18} />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default ReservationPreview;
