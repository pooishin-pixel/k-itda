'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative h-screen min-h-[850px] flex flex-col justify-start overflow-hidden bg-black">
            {/* Full Screen Background Image with Warm, Bright Treatment */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                <Image
                    src="/uploaded_image_1_1766931618916.png"
                    alt="KITDA Heritage"
                    fill
                    className="object-cover brightness-[0.85] contrast-[1.05] saturate-[1.1] scale-105"
                    priority
                />
                {/* Refined Overlays: Natural and Premium */}
                {/* Top gradient for Navbar visibility (white text) */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/50"></div>
                {/* Suble brand tint */}
                <div className="absolute inset-0 bg-[#0A4C74]/5 mix-blend-multiply"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-44 sm:pt-52 text-center text-white">
                {/* Text Content - Positioned high to clear the architecture in the photo */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/20 backdrop-blur-md border border-white/10 text-white mb-8"
                    >
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                        </span>
                        <span className="text-xs font-bold uppercase tracking-wider">Korea Heritage Connection</span>
                    </motion.div>

                    <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.1] mb-8 drop-shadow-[0_4px_20px_rgba(0,0,0,0.4)]">
                        박물관 창 너머의 <br />
                        <span className="text-gold">일상의 경험</span>으로
                    </h1>

                    <p className="text-xl sm:text-2xl text-white/95 mb-16 leading-relaxed max-w-4xl mx-auto drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)] font-medium">
                        무형문화재 장인의 숨결을 직접 느끼고 소장하는 글로벌 체험 플랫폼, <br className="hidden sm:block" />
                        <strong>킷다(K-ItDa)</strong>에서 우리 문화의 새로운 가치를 발견하세요.
                    </p>

                    {/* Buttons - Spaced to overlap the mid-section of the house in the image */}
                    <div className="mt-4 flex flex-col sm:flex-row items-center justify-center gap-6">
                        <button className="w-full sm:w-auto px-10 py-5 bg-secondary text-white rounded-2xl font-bold text-xl hover:shadow-[0_0_40px_rgba(42,138,130,0.6)] hover:bg-secondary/90 hover:scale-105 transition-all flex items-center justify-center gap-2 group">
                            체험 예약하기
                            <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                        <button className="w-full sm:w-auto px-10 py-5 bg-white/10 backdrop-blur-xl text-white border border-white/20 rounded-2xl font-bold text-xl hover:bg-white/20 flex items-center justify-center gap-3 transition-all min-w-[240px]">
                            <div className="w-11 h-11 rounded-full bg-white flex items-center justify-center shadow-lg">
                                <Play size={20} className="text-primary fill-primary ml-1" />
                            </div>
                            히스토리 보기
                        </button>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
            >
                <div className="w-[1px] h-12 bg-gradient-to-b from-white/0 via-gold to-white/0 animate-bounce"></div>
                <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-gold/80">Scroll Down</span>
            </motion.div>
        </section>
    );
};

export default Hero;





