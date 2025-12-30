import { Link } from "react-router-dom";

export default function AnnouncementDetailPage() {
    return (
        <main className="bg-grid pt-28 md:pt-36 pb-20 md:pb-28">
            <div className="max-w-4xl mx-auto px-4 md:px-6">

                <Link
                    to="/pengumuman"
                    className="inline-flex items-center min-h-[44px] md:min-h-0 text-sm text-gray-500 hover:text-primary"
                >
                    ← Kembali ke Pengumuman
                </Link>

                <article className="mt-6 md:mt-8 bg-white border border-gray-200 rounded-3xl p-6 md:p-10">
                    <span className="text-xs font-semibold text-primary">
                        PENGUMUMAN RESMI
                    </span>

                    <h1 className="text-2xl md:text-3xl font-bold mt-3 mb-6">
                        Pengumuman Libur Hari Raya Idul Adha
                    </h1>

                    <div className="text-gray-700 leading-relaxed space-y-4 text-sm">
                        <p>
                            Sehubungan dengan Hari Raya Idul Adha, kegiatan
                            belajar mengajar di SMKN 6 Jember diliburkan pada
                            tanggal 17–18 Juni 2025.
                        </p>

                        <p>
                            Kegiatan belajar mengajar akan kembali dilaksanakan
                            pada tanggal 19 Juni 2025.
                        </p>

                        <p>
                            Demikian pengumuman ini disampaikan untuk menjadi
                            perhatian seluruh warga sekolah.
                        </p>
                    </div>
                </article>

            </div>
        </main>
    );
}
