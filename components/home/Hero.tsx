'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Heart } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative min-h-[70vh] flex items-center pt-16 pb-12 overflow-hidden bg-background">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
                <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] rounded-full bg-secondary blur-[120px]"></div>
                <div className="absolute bottom-[-10%] right-[10%] w-[400px] h-[400px] rounded-full bg-primary blur-[100px]"></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-12 items-center">
                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="z-10"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary mb-6">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                        </span>
                        <span className="text-xs font-bold uppercase tracking-wider">Korea Heritage Connection</span>
                    </div>

                    <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-[1.1] mb-6 text-gray-900">
                        박물관 창 너머의 <br className="sm:hidden" /> 전통 콘텐츠를 <br />
                        <span className="text-primary italic">일상의 경험</span>으로
                    </h1>

                    <p className="text-xl text-gray-600 mb-10 leading-relaxed max-w-lg">
                        무형문화재 장인의 숨결을 직접 느끼고 소장하는 <br />
                        글로벌 체험 플랫폼, <strong>킷다(K-ItDa)</strong>에서 <br />
                        우리 문화의 새로운 가치를 발견하세요.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <button className="px-8 py-4 bg-primary text-white rounded-2xl font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all flex items-center gap-2 group">
                            체험 예약하기
                            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                        <button className="px-8 py-4 bg-white text-gray-800 border border-gray-200 rounded-2xl font-bold text-lg hover:bg-gray-50 flex items-center gap-2 transition-all">
                            <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                                <Play size={16} className="text-primary fill-primary" />
                            </div>
                            히스토리 보기
                        </button>
                    </div>

                    <div className="mt-12 flex items-center gap-6">
                        <div className="flex -space-x-4">
                            {[1, 2, 3, 4].map((i) => (
                                <div key={i} className="w-12 h-12 rounded-full border-4 border-white overflow-hidden bg-gray-200">
                                    <Image
                                        src={`/uploaded_image_2_1766931618916.png`}
                                        alt="user"
                                        width={48}
                                        height={48}
                                        className="object-cover"
                                    />
                                </div>
                            ))}
                        </div>
                        <div className="text-sm font-medium">
                            <span className="text-primary font-bold">2,400+</span> 명의 글로벌 여행객이 <br />
                            전통의 가치를 함께 잇고 있습니다.
                        </div>
                    </div>
                </motion.div>

                {/* Visual Content */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8, rotate: 2 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="relative"
                >
                    <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-[0_40px_100px_-20px_rgba(0,0,0,0.15)] bg-[#0A4C74]">
                        <Image
                            src="/uploaded_image_1_1766931618916.png"
                            alt="KITDA Heritage"
                            width={800}
                            height={1000}
                            className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
                            priority
                        />
                    </div>

                    {/* Floating Card */}
                    <motion.div
                        animate={{ y: [0, -15, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute -bottom-8 -left-8 z-20 glass p-6 rounded-3xl max-w-[240px] shadow-xl border border-white/20"
                    >
                        <div className="flex items-center gap-3 mb-3">
                            <div className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center">
                                <Heart size={20} className="text-accent fill-accent" />
                            </div>
                            <span className="text-xs font-bold text-gray-400 uppercase">Featured Master</span>
                        </div>
                        <h3 className="font-bold text-lg mb-1">국가무형유산 갓일</h3>
                        <p className="text-sm text-gray-500">갓일 보유자 정춘모 장인</p>
                    </motion.div>

                    {/* Decorative shapes */}
                    <div className="absolute top-1/2 -right-12 w-24 h-24 border-8 border-gold/30 rounded-full animate-spin-slow"></div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
