import { Search, MapPin } from "lucide-react";

export default function HomeHero() {
    return (
        <section className="pt-28 md:pt-36 pb-16 md:pb-24 bg-grid bg-gradient-to-br flex items-center from-indigo-50 to-white min-h-[100dvh]">
            <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">
                <h1 className="text-3xl md:text-5xl font-extrabold mb-4">
                    Pusat Karier & BKK Sekolah
                </h1>

                <p className="text-gray-600 max-w-2xl mx-auto mb-8 md:mb-10 text-base md:text-lg">
                    Temukan lowongan kerja resmi dari mitra industri terpercaya
                    dan persiapkan karier masa depanmu bersama BKK.
                </p>

                {/* SEARCH BAR */}
                <div className="max-w-3xl mx-auto bg-white border border-gray-200 rounded-2xl p-3 flex flex-col md:flex-row gap-3 shadow-sm">
                    <div className="flex items-center gap-2 flex-1 px-3 min-h-[44px]">
                        <Search className="w-4 h-4 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Cari pekerjaan"
                            className="w-full outline-none text-sm"
                        />
                    </div>

                    <div className="flex items-center gap-2 flex-1 px-3 min-h-[44px]">
                        <MapPin className="w-4 h-4 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Lokasi"
                            className="w-full outline-none text-sm"
                        />
                    </div>

                    <button className="px-6 py-2 rounded-xl bg-primary text-white text-sm min-h-[44px]">
                        Cari
                    </button>
                </div>
            </div>
        </section>
    );
}
