import { Link } from "react-router-dom";

export default function AnnouncementHighlight() {
    return (
        <section
            className="
        bg-white border border-gray-200
        rounded-3xl p-6 md:p-8 mb-8 md:mb-12
        relative overflow-hidden
      "
        >
            {/* ACCENT */}
            <div className="absolute inset-y-0 left-0 w-1 bg-primary" />

            <span className="
        inline-block
        text-xs font-semibold
        text-primary
        mb-3
      ">
                PENGUMUMAN PENTING
            </span>

            <h2 className="text-xl md:text-2xl font-bold mb-3">
                Pengumuman Libur Hari Raya Idul Adha
            </h2>

            <p className="text-gray-600 max-w-2xl mb-6">
                Sehubungan dengan Hari Raya Idul Adha, kegiatan belajar
                mengajar diliburkan pada tanggal 17–18 Juni 2025.
            </p>

            <Link
                to="/pengumuman/libur-idul-adha"
                className="inline-flex items-center min-h-[44px] md:min-h-0 text-sm font-medium text-primary"
            >
                Baca Pengumuman →
            </Link>
        </section>
    );
}
