'use client';

import React from 'react';
import Link from 'next/link';
import { Facebook, Instagram, Youtube, Mail, MapPin, Phone, ArrowUpRight } from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const footerLinks = {
        platform: [
            { name: '서비스 소개', href: '#' },
            { name: '큐레이션 아카이브', href: '#' },
            { name: '마스터 스토리', href: '#' },
            { name: '체험 예약', href: '#' },
        ],
        support: [
            { name: '공지사항', href: '#' },
            { name: '자주 묻는 질문', href: '#' },
            { name: '이용약관', href: '#' },
            { name: '개인정보처리방침', href: '#' },
        ],
        partnership: [
            { name: '전수자 등록 신청', href: '#' },
            { name: 'B2B 단체 체험 문의', href: '#' },
            { name: '제휴 제안', href: '#' },
        ]
    };

    return (
        <footer className="bg-[#1A1C1E] text-gray-400 pt-20 pb-32 md:pb-20 border-t border-white/5">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">

                    {/* Brand Identity */}
                    <div className="lg:col-span-4">
                        <div className="flex items-center gap-2 mb-6">
                            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
                                <span className="text-white font-bold text-2xl">K</span>
                            </div>
                            <span className="text-2xl font-bold tracking-tight text-white">
                                K-ItDa <span className="text-sm font-medium opacity-50 ml-1">킷다</span>
                            </span>
                        </div>
                        <p className="text-gray-500 mb-8 leading-relaxed max-w-sm">
                            박물관 유리창 너머의 전통을 일상의 경험으로 잇습니다. <br />
                            무형문화재의 가치를 새로운 감각으로 전달하는 <br />
                            글로벌 전통문화 체험 플랫폼입니다.
                        </p>
                        <div className="flex gap-4">
                            {[Instagram, Facebook, Youtube, Mail].map((Icon, i) => (
                                <button key={i} className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all group">
                                    <Icon size={18} />
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Links - Responsive Grid */}
                    <div className="lg:col-span-6 grid grid-cols-2 sm:grid-cols-3 gap-8">
                        <div>
                            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-wider">플랫폼</h4>
                            <ul className="space-y-3 text-sm">
                                {footerLinks.platform.map((link) => (
                                    <li key={link.name}>
                                        <Link href={link.href} className="hover:text-primary transition-colors flex items-center gap-1 group">
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-wider">고객지원</h4>
                            <ul className="space-y-3 text-sm">
                                {footerLinks.support.map((link) => (
                                    <li key={link.name}>
                                        <Link href={link.href} className="hover:text-primary transition-colors">
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="col-span-2 sm:col-span-1">
                            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-wider">파트너쉽</h4>
                            <ul className="space-y-3 text-sm">
                                {footerLinks.partnership.map((link) => (
                                    <li key={link.name}>
                                        <Link href={link.href} className="hover:text-primary transition-colors">
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Contact Info */}
                    <div className="lg:col-span-2">
                        <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-wider">연락처</h4>
                        <ul className="space-y-4 text-sm">
                            <li className="flex items-start gap-3">
                                <MapPin size={18} className="text-primary mt-1 flex-shrink-0" />
                                <span>서울특별시 종로구 사직로 161 <br />킷다 스튜디오</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone size={18} className="text-primary flex-shrink-0" />
                                <span>02-1234-5678</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail size={18} className="text-primary flex-shrink-0" />
                                <span>hello@k-itda.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] md:text-xs font-medium tracking-wide text-center md:text-left">
                    <p>© {currentYear} K-ITDA. All rights reserved. </p>
                    <div className="flex flex-wrap justify-center gap-6 md:gap-8">
                        <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
                        <Link href="#" className="hover:text-white transition-colors">Global Content Policy</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
