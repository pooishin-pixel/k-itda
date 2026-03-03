'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
    Settings,
    ChevronRight,
    Heart,
    MessageSquare,
    CreditCard,
    Bell,
    ShieldCheck,
    HelpCircle,
    CalendarCheck,
    Package
} from 'lucide-react';

const ProfilePage = () => {
    const menuItems = [
        { icon: <CalendarCheck className="text-primary" size={20} />, label: '예약 내역' },
        { icon: <Package className="text-primary" size={20} />, label: '주문 배송' },
        { icon: <Heart className="text-primary" size={20} />, label: '찜한 체험' },
        { icon: <MessageSquare className="text-primary" size={20} />, label: '나의 리뷰' },
        { icon: <CreditCard className="text-primary" size={20} />, label: '결제 수단' },
    ];

    const serviceItems = [
        { icon: <Bell className="text-gray-400" size={20} />, label: '알림 설정' },
        { icon: <ShieldCheck className="text-gray-400" size={20} />, label: '개인정보 관리' },
        { icon: <HelpCircle className="text-gray-400" size={20} />, label: '고객센터' },
    ];

    return (
        <div className="min-h-screen bg-background pb-32">
            {/* 1. Header with simple title & settings */}
            <div className="px-6 pt-12 flex justify-between items-center">
                <h1 className="text-2xl font-bold font-serif">마이 킷다</h1>
                <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                    <Settings size={24} className="text-gray-600" />
                </button>
            </div>

            {/* 2. Profile Section */}
            <section className="px-6 mt-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 flex items-center gap-5"
                >
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white text-2xl font-bold shadow-lg overflow-hidden">
                        {/* Placeholder for avatar, or initials */}
                        JD
                    </div>
                    <div>
                        <div className="flex items-center gap-2">
                            <span className="text-xl font-bold">김다빈님</span>
                            <span className="bg-gold/10 text-gold text-[10px] px-2 py-0.5 rounded-full font-bold border border-gold/20">
                                PREMIUM
                            </span>
                        </div>
                        <p className="text-sm text-gray-500 mt-1">k-itda@example.com</p>
                    </div>
                </motion.div>
            </section>

            {/* 3. Stats/Quick Access */}
            <section className="px-6 mt-6">
                <div className="flex justify-between gap-4">
                    <div className="flex-1 bg-white p-4 rounded-2xl border border-gray-100 shadow-sm text-center">
                        <span className="text-[10px] text-gray-400 font-bold uppercase block mb-1">내 쿠폰</span>
                        <span className="text-lg font-bold text-primary">3</span>
                    </div>
                    <div className="flex-1 bg-white p-4 rounded-2xl border border-gray-100 shadow-sm text-center">
                        <span className="text-[10px] text-gray-400 font-bold uppercase block mb-1">적립 포인트</span>
                        <span className="text-lg font-bold text-primary">12,400P</span>
                    </div>
                </div>
            </section>

            {/* 4. Activity Menu */}
            <section className="px-6 mt-10">
                <h2 className="text-sm font-bold text-gray-400 mb-4 px-1">활동 관리</h2>
                <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
                    {menuItems.map((item, index) => (
                        <button
                            key={index}
                            className={`w-full flex items-center justify-between p-5 hover:bg-gray-50 transition-colors ${index !== menuItems.length - 1 ? 'border-b border-gray-50' : ''}`}
                        >
                            <div className="flex items-center gap-4">
                                {item.icon}
                                <span className="font-semibold text-gray-700">{item.label}</span>
                            </div>
                            <ChevronRight size={18} className="text-gray-300" />
                        </button>
                    ))}
                </div>
            </section>

            {/* 5. Service Menu */}
            <section className="px-6 mt-10">
                <h2 className="text-sm font-bold text-gray-400 mb-4 px-1">서비스 정보</h2>
                <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
                    {serviceItems.map((item, index) => (
                        <button
                            key={index}
                            className={`w-full flex items-center justify-between p-5 hover:bg-gray-50 transition-colors ${index !== serviceItems.length - 1 ? 'border-b border-gray-50' : ''}`}
                        >
                            <div className="flex items-center gap-4">
                                {item.icon}
                                <span className="font-semibold text-gray-700">{item.label}</span>
                            </div>
                            <ChevronRight size={18} className="text-gray-300" />
                        </button>
                    ))}
                </div>
            </section>

            {/* 6. Logout Button */}
            <div className="px-6 mt-12 text-center">
                <button className="text-gray-400 text-sm font-medium underline underline-offset-4 decoration-gray-200">
                    로그아웃
                </button>
            </div>
        </div>
    );
};

export default ProfilePage;
