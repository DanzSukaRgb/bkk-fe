import { useState } from "react";
import { Plus, Minus, Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const faqs = [
    {
        q: "Apa itu BKK di SMKN 6 Jember?",
        a: "Bursa Kerja Khusus (BKK) adalah unit sekolah yang bertugas menyalurkan lulusan ke dunia kerja dan industri."
    },
    {
        q: "Siapa saja yang bisa mendaftar lowongan?",
        a: "Lowongan dapat diakses oleh alumni SMKN 6 Jember yang telah terdaftar dan melengkapi data profil."
    },
    {
        q: "Bagaimana cara perusahaan bekerja sama dengan sekolah?",
        a: "Perusahaan dapat mendaftar melalui website dan menunggu proses verifikasi oleh admin sekolah."
    },
    {
        q: "Apakah semua lowongan resmi?",
        a: "Ya. Semua lowongan yang ditampilkan merupakan lowongan resmi dari mitra industri sekolah."
    }
];

export default function FaqSection() {
    const [open, setOpen] = useState(null);

    return (
        <section className="bg-grid py-20 sm:py-28">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">

                {/* HEADER */}
                <div className="mb-10 sm:mb-12">
                    <span className="text-xs sm:text-sm font-semibold text-primary">
                        Bantuan
                    </span>

                    <h2 className="text-2xl sm:text-3xl font-bold mt-2">
                        Pertanyaan Umum
                    </h2>

                    <p className="text-sm sm:text-base text-gray-600 mt-2 max-w-2xl">
                        Jawaban atas pertanyaan yang sering diajukan seputar sekolah dan BKK.
                    </p>
                </div>

                {/* CONTENT */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-10">

                    {/* FAQ LIST */}
                    <div className="lg:col-span-2 space-y-3 sm:space-y-4">
                        {faqs.map((item, i) => (
                            <div
                                key={i}
                                className="
                                    bg-white border border-gray-200
                                    rounded-xl sm:rounded-2xl
                                    px-4 sm:px-6 py-4
                                "
                            >
                                <button
                                    onClick={() => setOpen(open === i ? null : i)}
                                    className="
                                        w-full flex items-center justify-between
                                        gap-3 text-left
                                        min-h-[44px] sm:min-h-0
                                    "
                                >
                                    <span className="text-sm sm:text-base font-medium">
                                        {item.q}
                                    </span>

                                    {open === i ? (
                                        <Minus className="w-5 h-5 text-primary shrink-0" />
                                    ) : (
                                        <Plus className="w-5 h-5 text-gray-500 shrink-0" />
                                    )}
                                </button>

                                {open === i && (
                                    <p className="text-sm text-gray-600 mt-3 leading-relaxed">
                                        {item.a}
                                    </p>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* CONTACT CTA */}
                    <div
                        className="
                            bg-white border border-gray-200
                            rounded-2xl sm:rounded-3xl
                            p-6 sm:p-8
                            h-fit
                        "
                    >
                        <span className="text-xs font-semibold text-primary">
                            BUTUH BANTUAN?
                        </span>

                        <h3 className="text-lg sm:text-xl font-bold mt-2 mb-3">
                            Tidak menemukan jawaban?
                        </h3>

                        <p className="text-sm text-gray-600 mb-6">
                            Jika pertanyaan Anda belum terjawab, silakan hubungi pihak sekolah
                            melalui halaman kontak resmi.
                        </p>

                        {/* QUICK CONTACT */}
                        <div className="space-y-3 mb-6">
                            <div className="flex items-center gap-3 text-sm text-gray-600">
                                <Mail className="w-4 h-4 text-primary" />
                                smkn6jember@sch.id
                            </div>
                            <div className="flex items-center gap-3 text-sm text-gray-600">
                                <Phone className="w-4 h-4 text-primary" />
                                (0331) 123456
                            </div>
                        </div>

                        <Link
                            to="/kontak"
                            className="
                                inline-flex items-center justify-center
                                w-full py-3
                                rounded-xl
                                bg-primary text-white
                                text-sm font-medium
                                hover:opacity-90
                                min-h-[44px]
                            "
                        >
                            Hubungi Sekolah
                        </Link>
                    </div>

                </div>
            </div>
        </section>
    );
}
