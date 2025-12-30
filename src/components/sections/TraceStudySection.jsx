import { Briefcase, GraduationCap, Store, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Reveal from "../Reveal";

export default function TraceStudySection() {
    return (
        <section className="bg-grid py-28">
            <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center">

                {/* LEFT — CONTENT */}
                <Reveal as="div">
                    <span className="text-sm font-semibold text-primary">
                        Data Lulusan
                    </span>

                    <h2 className="text-3xl font-bold mt-3 mb-4">
                        Trace Study Alumni
                    </h2>

                    <p className="text-gray-600 max-w-xl mb-8">
                        Hasil penelusuran alumni SMKN 6 Jember setelah lulus
                        sebagai bentuk evaluasi dan peningkatan mutu lulusan.
                    </p>

                    {/* STATS */}
                    <div className="grid sm:grid-cols-3 gap-4 mb-8">
                        <Stat
                            icon={<Briefcase />}
                            value="68%"
                            label="Bekerja"
                        />
                        <Stat
                            icon={<GraduationCap />}
                            value="21%"
                            label="Melanjutkan Kuliah"
                        />
                        <Stat
                            icon={<Store />}
                            value="11%"
                            label="Wirausaha"
                        />
                    </div>

                    <Link
                        to="/trace-study"
                        className="
              inline-flex items-center gap-2
              text-sm font-medium text-primary
              hover:underline
            "
                    >
                        Lihat Laporan Lengkap
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                </Reveal>

                {/* RIGHT — VISUAL */}
                <Reveal
                    as="div"
                    className="
            bg-white border border-gray-200
            rounded-3xl p-8
            relative
            left
          "
                >
                    {/* DECORATIVE ELEMENT */}
                    <div className="
            absolute -top-6 -right-6
            w-24 h-24
            bg-primary/10
            rounded-2xl
          " />

                    <h3 className="font-semibold mb-6">
                        Ringkasan Alumni Tahun 2024
                    </h3>

                    <div className="space-y-4 text-sm text-gray-600">
                        <Row label="Total Lulusan" value="420 Alumni" />
                        <Row label="Terserap Dunia Kerja" value="286 Alumni" />
                        <Row label="Melanjutkan Pendidikan" value="88 Alumni" />
                        <Row label="Berwirausaha" value="46 Alumni" />
                    </div>
                </Reveal>

            </div>
        </section>
    );
}

/* ===== COMPONENT KECIL ===== */

function Stat({ icon, value, label }) {
    return (
        <div className="
      bg-white border border-gray-200
      rounded-2xl p-5
      text-center
    ">
            <div className="
        w-10 h-10 mx-auto mb-2
        rounded-full bg-primary/10
        flex items-center justify-center
        text-primary
      ">
                {icon}
            </div>
            <p className="text-xl font-bold">
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
        <div className="flex justify-between">
            <span>{label}</span>
            <span className="font-medium text-gray-800">
                {value}
            </span>
        </div>
    );
}
