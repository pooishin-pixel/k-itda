import Hero from "@/components/home/Hero";
import CurationSection from "@/components/home/CurationSection";
import ReservationPreview from "@/components/home/ReservationPreview";
import MastersSection from "@/components/home/MastersSection";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Curation Sneak Peek (Optional or simplified) */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-8">오늘의 발견</h2>
          <CurationSection />
        </div>
      </div>
    </main>
  );
}
