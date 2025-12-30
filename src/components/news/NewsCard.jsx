import { Link } from "react-router-dom";

export default function NewsCard() {
    return (
        <article
            className="
        bg-white border border-gray-200
        rounded-2xl overflow-hidden
        hover:shadow-md transition
      "
        >
            <div className="h-40 bg-gray-100" />

            <div className="p-4 md:p-5">
                <p className="text-xs text-gray-500 mb-2">
                    Kegiatan Sekolah • 12 Juni 2025
                </p>

                <h3 className="font-semibold text-base md:text-lg mb-2 leading-snug">
                    SMKN 6 Jember Gelar Literasi Digital
                </h3>

                <p className="text-sm text-gray-600 line-clamp-3 mb-4">
                    Kegiatan literasi digital dilaksanakan untuk
                    meningkatkan pemahaman siswa terhadap teknologi.
                </p>

                <Link
                    to="/berita/literasi-digital"
                    className="inline-flex items-center min-h-[44px] md:min-h-0 text-sm text-primary font-medium"
                >
                    Baca →
                </Link>
            </div>
        </article>
    );
}
