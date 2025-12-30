import { Briefcase, GraduationCap, Store, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function TraceStudySection() {
    return (
        <section className="bg-grid py-20 sm:py-28">
            <div className="
                max-w-7xl mx-auto
                px-4 sm:px-6
                grid grid-cols-1 lg:grid-cols-2
                gap-10 sm:gap-14
                items-center
            ">

                {/* LEFT — CONTENT */}
                <div>
                    <span className="text-xs sm:text-sm font-semibold text-primary">
                        Data Lulusan
                    </span>

                    <h2 className="text-2xl sm:text-3xl font-bold mt-3 mb-4">
                        Trace Study Alumni
                    </h2>

                    <p className="text-sm sm:text-base text-gray-600 max-w-xl mb-8">
                        Hasil penelusuran alumni SMKN 6 Jember setelah lulus
                        sebagai bentuk evaluasi dan peningkatan mutu lulusan.
                    </p>

                    {/* STATS */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                        <Stat icon={<Briefcase />} value="68%" label="Bekerja" />
                        <Stat icon={<GraduationCap />} value="21%" label="Melanjutkan Kuliah" />
                        <Stat icon={<Store />} value="11%" label="Wirausaha" />
                    </div>

                    <Link
                        to="/trace-study"
                        className="
                            inline-flex items-center gap-2
                            min-h-[44px] sm:min-h-0
                            text-sm font-medium text-primary
                            hover:underline
                        "
                    >
                        Lihat Laporan Lengkap
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>

                {/* RIGHT — VISUAL */}
                <div
                    className="
                        bg-white border border-gray-200
                        rounded-2xl sm:rounded-3xl
                        p-6 sm:p-8
                        relative
                        overflow-hidden sm:overflow-visible
                    "
                >
                    {/* DECORATIVE */}
                    <div className="
                        absolute -top-4 -right-4 sm:-top-6 sm:-right-6
                        w-16 h-16 sm:w-24 sm:h-24
                        bg-primary/10
                        rounded-2xl
                    " />

                    <h3 className="text-base sm:text-lg font-semibold mb-6">
                        Ringkasan Alumni Tahun 2024
                    </h3>

                    <div className="space-y-4 text-sm text-gray-600">
                        <Row label="Total Lulusan" value="420 Alumni" />
                        <Row label="Terserap Dunia Kerja" value="286 Alumni" />
                        <Row label="Melanjutkan Pendidikan" value="88 Alumni" />
                        <Row label="Berwirausaha" value="46 Alumni" />
                    </div>
                </div>

            </div>
        </section>
    );
}

/* ===== KOMPONEN KECIL ===== */

function Stat({ icon, value, label }) {
    return (
        <div className="
            bg-white border border-gray-200
            rounded-xl sm:rounded-2xl
            p-4 sm:p-5
            text-center
        ">
            <div className="
                w-9 h-9 sm:w-10 sm:h-10
                mx-auto mb-2
                rounded-full bg-primary/10
                flex items-center justify-center
                text-primary
            ">
                {icon}
            </div>

            <p className="text-lg sm:text-xl font-bold">
                {value}
            </p>

            <p className="text-xs text-gray-500">
                {label}
            </p>
        </div>
    );
}

function Row({ label, value }) {
    return (
        <div className="flex items-center justify-between gap-4">
            <span>{label}</span>
            <span className="font-medium text-gray-800 whitespace-nowrap">
                {value}
            </span>
        </div>
    );
}
