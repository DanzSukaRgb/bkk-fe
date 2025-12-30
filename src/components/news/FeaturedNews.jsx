import { Link } from "react-router-dom";
import Reveal from "../Reveal";

export default function FeaturedNews() {
    return (
        <Reveal
            as="article"
            className="
        bg-white border border-gray-200
        rounded-3xl overflow-hidden
        mb-10
      "
        >
            <div className="grid md:grid-cols-2">
                {/* IMAGE */}
                <div className="h-64 md:h-full bg-gray-200" />

                {/* CONTENT */}
                <div className="p-8">
                    <p className="text-xs text-gray-500 mb-2">
                        Prestasi • 20 Juni 2025
                    </p>

                    <h2 className="text-2xl font-bold mb-4 leading-snug">
                        Siswa SMKN 6 Jember Raih Juara Nasional LKS
                    </h2>

                    <p className="text-gray-600 text-sm mb-6">
                        Prestasi membanggakan kembali diraih oleh siswa
                        SMKN 6 Jember dalam ajang Lomba Kompetensi Siswa
                        tingkat nasional.
                    </p>

                    <Link
                        to="/berita/juara-nasional-lks"
                        className="text-sm font-medium text-primary"
                    >
                        Baca Berita Utama →
                    </Link>
                </div>
            </div>
        </Reveal>
    );
}
