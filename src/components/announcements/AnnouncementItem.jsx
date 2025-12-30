import { Link } from "react-router-dom";

export default function AnnouncementItem() {
    return (
        <article
            className="
        relative
        pl-6 md:pl-8 py-5 md:py-6
        border-l border-gray-200
        group
      "
        >
            {/* DOT */}
            <span className="
        absolute left-[-6px] top-6 md:top-8
        w-3 h-3
        rounded-full
        bg-primary
      " />

            {/* META */}
            <p className="text-xs text-gray-500 mb-2">
                18 Juni 2025 • Akademik
            </p>

            <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition">
                Jadwal Ujian Akhir Semester Genap
            </h3>

            <p className="text-sm text-gray-600 mb-3 max-w-xl">
                Ujian Akhir Semester Genap akan dilaksanakan mulai
                tanggal 24 Juni 2025 sesuai jadwal yang telah ditentukan.
            </p>

            <Link
                to="/pengumuman/ujian-akhir-semester"
                className="inline-flex items-center min-h-[44px] md:min-h-0 text-sm font-medium text-primary"
            >
                Detail →
            </Link>
        </article>
    );
}
