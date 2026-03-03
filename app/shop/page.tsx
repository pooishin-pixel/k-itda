'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, Star, Filter, Search, Heart, Share2, Award, Gift, ArrowUpRight, ShoppingCart } from 'lucide-react';
import products from '@/lib/data/products.json';

const ShopPage = () => {
    const [activeCategory, setActiveCategory] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');

    const categories = ['All', 'Heritage', 'Living', 'Stationery', 'Fashion', 'Gifts'];

    const filteredProducts = products.filter(p => {
        const matchesCategory = activeCategory === 'All' || p.category === activeCategory;
        const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    const featuredProduct = products[1]; // 조선왕실 와인마개

    return (
        <div className="pt-20 min-h-screen bg-[#FDFBF7]">
            {/* Premium Shop Hero */}
            <section className="relative h-[60vh] flex items-center overflow-hidden bg-[#0A0A0A] text-white">
                <div className="absolute inset-0 opacity-40">
                    <Image
                        src="https://www.khmall.or.kr/web/product/big/202512/c441a36c3854a1175a51de533808ab33.jpg"
                        alt="Background"
                        fill
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>
                </div>

                <div className="max-w-7xl mx-auto px-6 w-full relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/20 border border-secondary/30 text-secondary mb-6">
                            <span className="text-[10px] font-black uppercase tracking-widest">Premium Selection</span>
                        </div>
                        <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
                            장인의 <span className="text-secondary">숨결</span>이 <br />
                            닿은 고귀한 물건
                        </h1>
                        <p className="text-gray-400 text-lg mb-10 max-w-lg leading-relaxed">
                            국가무형문화재 장인들의 기술과 K-Heritage의 감각이 만난 <br />
                            우리 문화의 정수를 일상으로 소환합니다.
                        </p>
                        <div className="flex gap-4">
                            <button className="px-8 py-4 bg-secondary text-primary rounded-2xl font-bold hover:shadow-[0_0_30px_rgba(212,175,55,0.3)] hover:scale-105 transition-all">
                                베스트셀러 보기
                            </button>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="hidden lg:block relative"
                    >
                        <div className="relative aspect-square w-[450px] mx-auto rounded-[3rem] overflow-hidden border-4 border-white/10 shadow-2xl skew-y-3">
                            <Image
                                src={featuredProduct.imageUrl}
                                alt={featuredProduct.name}
                                fill
                                className="object-cover"
                            />
                            <div className="absolute bottom-6 left-6 right-6 p-6 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20">
                                <p className="text-secondary text-xs font-bold mb-1 uppercase tracking-tighter">New Collection</p>
                                <h3 className="text-xl font-bold">{featuredProduct.name}</h3>
                                <div className="flex justify-between items-center mt-4">
                                    <span className="text-xl font-black">₩{featuredProduct.price.toLocaleString()}</span>
                                    <button className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:bg-secondary transition-colors">
                                        <ArrowUpRight size={20} />
                                    </button>
                                </div>
                            </div>
                        </div>
                        {/* Decorative Circles */}
                        <div className="absolute -top-10 -right-10 w-40 h-40 bg-secondary/10 rounded-full blur-[80px]"></div>
                        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary/20 rounded-full blur-[80px]"></div>
                    </motion.div>
                </div>
            </section>

            {/* Smart Toolbar */}
            <section className="sticky top-16 z-30 bg-white/80 backdrop-blur-xl border-b border-gray-100 shadow-sm py-4">
                <div className="max-w-7xl mx-auto px-6 flex flex-wrap items-center justify-between gap-6">
                    <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 no-scrollbar">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all whitespace-nowrap ${activeCategory === cat
                                    ? 'bg-primary text-white shadow-xl translate-y-[-2px]'
                                    : 'bg-gray-100/50 text-gray-400 hover:bg-gray-100 hover:text-primary'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    <div className="flex items-center gap-4 flex-grow md:flex-grow-0">
                        <div className="relative flex-grow md:w-80">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                            <input
                                type="text"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                placeholder="작품명 또는 카테고리 검색"
                                className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-transparent rounded-2xl text-sm focus:bg-white focus:border-primary/20 transition-all outline-none"
                            />
                        </div>
                        <button className="w-12 h-12 flex items-center justify-center bg-gray-50 rounded-2xl text-gray-400 hover:bg-primary hover:text-white transition-all">
                            <Filter size={20} />
                        </button>
                    </div>
                </div>
            </section>

            {/* Product Display Grid */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex items-end justify-between mb-12">
                        <div>
                            <span className="text-secondary font-black text-xs uppercase tracking-widest block mb-2">Heritage Store</span>
                            <h2 className="text-3xl font-bold text-gray-900">우리 삶을 잇는 <span>전통의 가구</span></h2>
                        </div>
                        <span className="text-sm text-gray-400 font-medium">총 {filteredProducts.length}개의 작품</span>
                    </div>

                    {filteredProducts.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 gap-y-16">
                            <AnimatePresence mode='popLayout'>
                                {filteredProducts.map((product, index) => (
                                    <motion.div
                                        key={product.id}
                                        layout
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.95 }}
                                        transition={{ duration: 0.4, delay: index * 0.05 }}
                                        className="group"
                                    >
                                        <div className="relative aspect-square bg-[#F7F7F7] rounded-[2.5rem] overflow-hidden mb-6 group-hover:bg-white group-hover:shadow-2xl transition-all duration-500 border border-transparent group-hover:border-gray-100">
                                            <Image
                                                src={product.imageUrl}
                                                alt={product.name}
                                                fill
                                                className="object-cover p-8 group-hover:scale-110 group-hover:p-0 transition-all duration-700 ease-in-out"
                                            />

                                            {index < 3 && (
                                                <div className="absolute top-6 left-6 bg-primary text-white px-3 py-1 rounded-full text-[10px] font-black tracking-widest uppercase">
                                                    Best
                                                </div>
                                            )}

                                            <div className="absolute top-6 right-6 flex flex-col gap-2 transform translate-x-12 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500">
                                                <button className="w-11 h-11 rounded-full bg-white/80 backdrop-blur-md flex items-center justify-center text-gray-900 hover:bg-primary hover:text-white transition-all shadow-lg border border-white/20">
                                                    <Heart size={18} />
                                                </button>
                                                <button className="w-11 h-11 rounded-full bg-white/80 backdrop-blur-md flex items-center justify-center text-gray-900 hover:bg-primary hover:text-white transition-all shadow-lg border border-white/20">
                                                    <Share2 size={18} />
                                                </button>
                                            </div>

                                            <div className="absolute inset-x-6 bottom-6 transform translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                                                <button className="w-full py-4 bg-gray-900/90 backdrop-blur-md text-white rounded-2xl font-bold text-sm shadow-xl flex items-center justify-center gap-2 hover:bg-primary border border-white/10 uppercase tracking-widest">
                                                    <ShoppingCart size={18} />
                                                    Add to Bag
                                                </button>
                                            </div>
                                        </div>

                                        <div className="px-3">
                                            <div className="flex items-center gap-1 mb-2">
                                                <span className="text-[10px] font-black text-secondary uppercase tracking-[0.2em]">{product.category}</span>
                                            </div>
                                            <h3 className="font-bold text-gray-900 mb-2 leading-tight group-hover:text-primary transition-colors line-clamp-1 h-6">
                                                {product.name}
                                            </h3>
                                            <p className="text-xs text-gray-400 mb-4 line-clamp-2 h-8 leading-relaxed">
                                                {product.description}
                                            </p>
                                            <div className="flex items-center justify-between">
                                                <p className="font-black text-xl text-gray-900">₩{product.price.toLocaleString()}</p>
                                                <div className="flex items-center text-amber-500 bg-amber-50 px-2 py-0.5 rounded-md">
                                                    <Star size={12} fill="currentColor" />
                                                    <span className="text-[10px] font-black ml-1">4.9</span>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </AnimatePresence>
                        </div>
                    ) : (
                        <div className="py-40 text-center">
                            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Search size={32} className="text-gray-300" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-400">검색 결과가 없습니다.</h3>
                            <p className="text-gray-400 text-sm mt-2">다른 작품명으로 검색해 보세요.</p>
                        </div>
                    )}

                    <div className="mt-24 text-center">
                        <button className="group px-12 py-5 bg-white border border-gray-200 text-primary rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-primary hover:text-white hover:border-primary transition-all shadow-sm hover:shadow-2xl flex items-center gap-3 mx-auto">
                            더 많은 보물 찾아보기
                            <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </button>
                    </div>
                </div>
            </section>

            {/* Authenticity Guarantee Section */}
            <section className="py-32 bg-primary relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-secondary/10 skew-x-12 translate-x-1/2"></div>
                <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 items-center gap-20">
                    <div className="relative">
                        <div className="relative aspect-[4/5] rounded-[4rem] overflow-hidden z-10 shadow-3xl">
                            <Image
                                src="https://www.khmall.or.kr/web/product/big/202508/71d328e744095ceb102edf490c958334.jpg"
                                alt="Certification"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent"></div>
                            <div className="absolute bottom-10 left-10 p-8 glass rounded-3xl border border-white/20">
                                <Award size={48} className="text-secondary mb-4" />
                                <h4 className="text-2xl font-bold text-white mb-2">국가공인 정품보증</h4>
                                <p className="text-gray-300 text-sm">모든 작품에는 장인의 직인이 찍힌 <br />디지털 보증서가 따라갑니다.</p>
                            </div>
                        </div>
                        {/* Decorative Badge */}
                        <div className="absolute -top-12 -right-12 w-40 h-40 bg-secondary rounded-full flex items-center justify-center p-8 text-center rotate-12 shadow-2xl z-20">
                            <span className="text-primary font-black text-xs uppercase leading-tight">Authentic <br />Heritage <br />Seal</span>
                        </div>
                    </div>

                    <div className="text-white">
                        <span className="text-secondary font-black text-xs uppercase tracking-widest mb-4 block">Quality & Trust</span>
                        <h2 className="text-4xl lg:text-6xl font-bold mb-10 leading-tight">당신의 곁에 머무는 <br /><span className="text-secondary">진짜</span>의 가치</h2>

                        <div className="space-y-10">
                            {[
                                {
                                    icon: <Award className="text-secondary" size={32} />,
                                    title: "디지털 블록체인 보증",
                                    desc: "NFT 기술을 활용하여 작품의 진위 여부와 소유 이력을 투명하게 증명합니다."
                                },
                                {
                                    icon: <Gift className="text-secondary" size={32} />,
                                    title: "장인 직인 패키징",
                                    desc: "장인이 직접 검수한 후 서명한 전용 오동나무함에 담아 품격을 완성합니다."
                                },
                                {
                                    icon: <ShoppingBag className="text-secondary" size={32} />,
                                    title: "전 세계 안전 배송",
                                    desc: "충격 방지 특수 특수 포장을 적용하여 전 세계 어디든 장인의 작품을 안전하게 전달합니다."
                                }
                            ].map((item, i) => (
                                <div key={i} className="flex gap-8 group">
                                    <div className="w-16 h-16 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-secondary group-hover:text-primary transition-all duration-500">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold mb-3">{item.title}</h4>
                                        <p className="text-gray-400 leading-relaxed text-sm md:text-base">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ShopPage;
