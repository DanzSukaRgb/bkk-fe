import { Search, MapPin } from "lucide-react";
import Reveal from "../Reveal";

export default function JobsHeader() {
    return (
        <section className="bg-grid pt-36 pb-16">
            <Reveal as="div" className="max-w-7xl mx-auto px-6">
                <h1 className="text-3xl font-bold">
                    Lowongan Kerja
                </h1>
                <p className="text-gray-600 mt-2 mb-6">
                    Lowongan resmi dari mitra industri BKK SMKN 6 Jember
                </p>

                {/* SEARCH BAR */}
                <div className="
          bg-white border border-gray-200
          rounded-2xl p-3
          flex flex-col md:flex-row gap-3
        ">
                    <div className="flex items-center gap-2 flex-1 px-3">
                        <Search className="w-4 h-4 text-gray-400" />
                        <input
                            placeholder="Cari posisi atau perusahaan"
                            className="w-full outline-none text-sm"
                        />
                    </div>

                    <div className="flex items-center gap-2 flex-1 px-3">
                        <MapPin className="w-4 h-4 text-gray-400" />
                        <input
                            placeholder="Lokasi penempatan"
                            className="w-full outline-none text-sm"
                        />
                    </div>

                    <button className="
            px-6 py-2 rounded-xl
            bg-primary text-white text-sm
          ">
                        Cari
                    </button>
                </div>
            </Reveal>
        </section>
    );
}
