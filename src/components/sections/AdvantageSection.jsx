import {
    ShieldCheck,
    Users,
    Briefcase,
    Building2,
    CheckCircle2,
} from "lucide-react";

export default function AdvantageSection() {
    return (
        <section className="py-20 sm:py-28 bg-grid">
            <div className="
                max-w-7xl mx-auto
                px-4 sm:px-6
                grid grid-cols-1 md:grid-cols-2
                gap-12 md:gap-20
                items-center
            ">

                {/* LEFT – TEXT */}
                <div>
                    <h2 className="text-2xl sm:text-3xl font-bold mb-5">
                        Keunggulan BKK
                    </h2>

                    <p className="text-sm sm:text-base text-gray-600 max-w-md mb-8">
                        Bursa Kerja Khusus (BKK) menjadi penghubung resmi antara
                        lulusan sekolah dengan dunia usaha dan industri secara
                        profesional dan terverifikasi.
                    </p>

                    <ul className="space-y-4">
                        <li className="flex gap-3">
                            <ShieldCheck className="w-5 h-5 text-primary mt-1 shrink-0" />
                            <span className="text-sm sm:text-base text-gray-700">
                                Unit resmi di bawah pembinaan sekolah & Disnaker
                            </span>
                        </li>
                        <li className="flex gap-3">
                            <Users className="w-5 h-5 text-primary mt-1 shrink-0" />
                            <span className="text-sm sm:text-base text-gray-700">
                                Pendampingan BK hingga alumni siap kerja
                            </span>
                        </li>
                        <li className="flex gap-3">
                            <Briefcase className="w-5 h-5 text-primary mt-1 shrink-0" />
                            <span className="text-sm sm:text-base text-gray-700">
                                Lowongan kerja valid dari mitra industri
                            </span>
                        </li>
                        <li className="flex gap-3">
                            <Building2 className="w-5 h-5 text-primary mt-1 shrink-0" />
                            <span className="text-sm sm:text-base text-gray-700">
                                Kerja sama langsung dengan perusahaan
                            </span>
                        </li>
                    </ul>
                </div>

                {/* RIGHT – IMAGE */}
                <div className="relative overflow-hidden md:overflow-visible">
                    <img
                        src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
                        alt="BKK Activity"
                        width="800"
                        height="600"
                        loading="lazy"
                        decoding="async"
                        className="
                            w-full
                            rounded-2xl sm:rounded-3xl
                            shadow-lg
                            object-cover
                        "
                    />

                    {/* FLOATING CARD 1 */}
                    <div
                        className="
                            absolute top-3 left-3
                            sm:-top-6 sm:-left-6
                            bg-white border border-gray-200
                            rounded-xl sm:rounded-2xl
                            p-3 sm:p-4
                            shadow-md
                            flex items-center gap-3
                        "
                    >
                        <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                        <div>
                            <p className="text-xs sm:text-sm font-semibold">
                                Resmi
                            </p>
                            <p className="text-[10px] sm:text-xs text-gray-500">
                                Terdaftar Disnaker
                            </p>
                        </div>
                    </div>

                    {/* FLOATING CARD 2 */}
                    <div
                        className="
                            absolute bottom-3 right-3
                            sm:bottom-6 sm:-right-6
                            bg-white border border-gray-200
                            rounded-xl sm:rounded-2xl
                            p-3 sm:p-4
                            shadow-md
                        "
                    >
                        <p className="text-base sm:text-lg font-bold text-primary">
                            1000+
                        </p>
                        <p className="text-[10px] sm:text-xs text-gray-500">
                            Alumni terserap industri
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
}
