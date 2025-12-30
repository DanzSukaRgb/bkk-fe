import { Link } from "react-router-dom";
import { CalendarDays, User, Folder } from "lucide-react";

export default function NewsDetailPage() {
    return (
        <main className="bg-grid pt-28 md:pt-36 pb-20 md:pb-28">
            <div className="max-w-5xl mx-auto px-4 md:px-6">

                {/* ================= BREADCRUMB ================= */}
                <nav className="text-sm text-gray-500 mb-6">
                    <Link to="/" className="inline-flex items-center min-h-[44px] md:min-h-0 hover:text-primary">
                        Beranda
                    </Link>
                    <span className="mx-2">/</span>
                    <Link to="/berita" className="inline-flex items-center min-h-[44px] md:min-h-0 hover:text-primary">
                        Berita Sekolah
                    </Link>
                </nav>

                {/* ================= HEADER ================= */}
                <header className="mb-8 md:mb-10">
                    <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-3">
                        <span className="flex items-center gap-1">
                            <Folder className="w-4 h-4" />
                            Prestasi
                        </span>
                        <span className="flex items-center gap-1">
                            <CalendarDays className="w-4 h-4" />
                            20 Juni 2025
                        </span>
                        <span className="flex items-center gap-1">
                            <User className="w-4 h-4" />
                            Humas SMKN 6 Jember
                        </span>
                    </div>

                    <h1 className="text-2xl md:text-4xl font-bold leading-snug">
                        Siswa SMKN 6 Jember Raih Juara Nasional
                        Lomba Kompetensi Siswa (LKS)
                    </h1>
                </header>

                {/* ================= FEATURE IMAGE ================= */}
                <div className="h-[240px] sm:h-[320px] md:h-[420px] bg-gray-200 rounded-3xl mb-8 md:mb-12" />

                {/* ================= CONTENT ================= */}
                <article
                    className="
            bg-white border border-gray-200
            rounded-3xl p-6 md:p-8
            text-gray-700
            leading-relaxed
            space-y-5
            text-[15px]
          "
                >
                    <p>
                        Prestasi membanggakan kembali diraih oleh siswa
                        SMKN 6 Jember dalam ajang Lomba Kompetensi Siswa
                        (LKS) tingkat nasional. Kegiatan ini diikuti oleh
                        perwakilan siswa dari seluruh provinsi di Indonesia.
                    </p>

                    <p>
                        Keberhasilan ini merupakan hasil dari kerja keras
                        siswa, bimbingan intensif guru pembimbing, serta
                        dukungan penuh dari pihak sekolah.
                    </p>

                    <p>
                        Kepala SMKN 6 Jember menyampaikan apresiasi dan
                        kebanggaannya atas prestasi yang diraih serta
                        berharap pencapaian ini dapat memotivasi siswa
                        lain untuk terus berprestasi.
                    </p>

                    <p>
                        Sekolah berkomitmen untuk terus meningkatkan
                        kualitas pembelajaran dan pembinaan siswa dalam
                        berbagai bidang akademik maupun non-akademik.
                    </p>
                </article>

                {/* ================= AUTHOR / SCHOOL INFO ================= */}
                <section
                    className="
            mt-8 md:mt-10
            bg-white border border-gray-200
            rounded-2xl p-5 md:p-6
            flex items-center gap-4
          "
                >
                    <div className="w-12 h-12 rounded-full bg-gray-100" />
                    <div>
                        <p className="font-semibold text-sm">
                            Humas SMKN 6 Jember
                        </p>
                        <p className="text-xs text-gray-500">
                            Informasi resmi kegiatan dan prestasi sekolah
                        </p>
                    </div>
                </section>

                {/* ================= RELATED NEWS ================= */}
                <section className="mt-10 md:mt-14">
                    <h2 className="font-semibold text-lg mb-6">
                        Berita Terkait
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {[1, 2, 3].map((i) => (
                            <Link
                                key={i}
                                to="/berita/berita-terkait"
                                className="
                  bg-white border border-gray-200
                  rounded-2xl overflow-hidden
                  hover:shadow-md transition
                "
                            >
                                <div className="h-32 bg-gray-100" />
                                <div className="p-4">
                                    <p className="text-xs text-gray-500 mb-1">
                                        Kegiatan Sekolah
                                    </p>
                                    <h3 className="text-sm font-semibold leading-snug">
                                        SMKN 6 Jember Gelar Kegiatan Literasi Digital
                                    </h3>
                                </div>
                            </Link>
                        ))}
                    </div>
                </section>

            </div>
        </main>
    );
}
