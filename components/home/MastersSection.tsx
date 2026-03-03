'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Quote, ArrowRight, Award, ExternalLink } from 'lucide-react';
import workshops from '@/lib/data/workshops.json';

const MastersSection = () => {
    // Pick the first one as featured
    const featuredMaster = workshops[0];
    // Pick the next few as other masters
    const otherMasters = workshops.slice(1, 4).map((w, idx) => ({
        id: idx + 2,
        name: w.masterName,
        field: w.heritageCategory,
        bio: `${w.location}의 정취가 담긴 ${w.workshopName}에서 전통의 숨결을 잇습니다.`,
        image: w.imageUrl,
    }));

    return (
        <section className="py-24 bg-[#F8F9FA]" id="masters">
            <div className="max-w-7xl mx-auto px-6">
                {/* Section Header */}
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white shadow-md text-primary mb-6"
                    >
                        <Award size={32} />
                    </motion.div>
                    <h2 className="text-4xl lg:text-5xl font-bold mb-6">전통을 잇는 <span className="text-primary">사람들</span></h2>
                    <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                        국립무형유산원의 데이터를 바탕으로 엄선한 국가무형문화재 전수자들을 소개합니다. <br />
                        박물관의 유물이 아닌, 우리 곁의 예술가를 만나보세요.
                    </p>
                </div>

                <div className="grid lg:grid-cols-12 gap-12 items-start">
                    {/* Main Featured Master Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="lg:col-span-8 bg-white rounded-[3rem] overflow-hidden shadow-2xl flex flex-col md:flex-row min-h-[500px]"
                    >
                        <div className="md:w-1/2 relative min-h-[400px] bg-gray-100">
                            <Image
                                src={featuredMaster.imageUrl}
                                alt={featuredMaster.masterName}
                                fill
                                sizes="(max-width: 768px) 100vw, 50vw"
                                className="object-cover"
                                onError={(e) => {
                                    (e.target as any).src = "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?auto=format&fit=crop&q=80"; // Fallback
                                }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
                        </div>
                        <div className="md:w-1/2 p-10 md:p-14 flex flex-col justify-center relative">
                            <div className="absolute top-10 right-10 text-primary/10">
                                <Quote size={80} fill="currentColor" />
                            </div>
                            <div className="mb-6">
                                <span className="text-sm font-bold text-primary uppercase tracking-[0.2em]">Featured Master</span>
                                <h3 className="text-3xl font-bold mt-2">{featuredMaster.masterName} <span className="text-lg font-medium text-gray-400 ml-2">보유자</span></h3>
                                <p className="text-secondary font-medium mt-1">{featuredMaster.heritageCategory}</p>
                            </div>
                            <blockquote className="text-xl font-serif italic text-gray-700 leading-relaxed mb-8">
                                "{featuredMaster.workshopName}에서 <br />
                                수만 번의 손길을 거쳐 <br />
                                비로소 하나의 혼이 탄생합니다."
                            </blockquote>
                            <div className="space-y-4">
                                <a
                                    href={featuredMaster.detailsLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-primary font-bold hover:gap-4 transition-all group"
                                >
                                    기록 정보 확인하기 <ArrowRight size={18} />
                                </a>
                                <div className="h-px bg-gray-100 w-full"></div>
                                <div className="flex items-center gap-2 text-gray-400 text-sm font-medium">
                                    {featuredMaster.location} <ExternalLink size={14} />
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Side Master List */}
                    <div className="lg:col-span-4 space-y-6">
                        <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">NIHC Workshops</h4>
                        {otherMasters.map((master, index) => (
                            <motion.div
                                key={master.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ x: 10 }}
                                className="bg-white p-5 rounded-3xl shadow-sm border border-gray-100 flex items-center gap-5 cursor-pointer group"
                            >
                                <div className="relative w-20 h-20 rounded-2xl overflow-hidden flex-shrink-0 bg-gray-100 border border-gray-100">
                                    <Image
                                        src={master.image}
                                        alt={master.name}
                                        fill
                                        sizes="80px"
                                        className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
                                        onError={(e) => {
                                            (e.target as any).src = "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&q=80"; // Fallback
                                        }}
                                    />
                                </div>
                                <div>
                                    <h5 className="font-bold text-gray-900 group-hover:text-primary transition-colors">{master.name}</h5>
                                    <p className="text-xs text-secondary font-semibold mb-1">{master.field}</p>
                                    <p className="text-sm text-gray-500 line-clamp-1">{master.bio}</p>
                                </div>
                            </motion.div>
                        ))}

                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="mt-8 p-8 rounded-3xl bg-primary text-white relative overflow-hidden group"
                        >
                            <div className="relative z-10">
                                <h5 className="text-xl font-bold mb-2">무형문화재 장인 찾기</h5>
                                <p className="text-white/70 text-sm mb-4">전국 곳곳의 전수교육관과 <br />공방 정보를 한눈에 확인하세요.</p>
                                <a
                                    href="https://support.nihc.go.kr/iptl/wshop/wshopL.do"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block px-5 py-2 bg-white text-primary rounded-xl text-sm font-bold hover:shadow-lg transition-all"
                                >
                                    공식 플랫폼 바로가기
                                </a>
                            </div>
                            <div className="absolute -bottom-4 -right-4 text-white/5 transform rotate-12">
                                < Award size={120} />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MastersSection;
