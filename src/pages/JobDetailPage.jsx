import { Link } from "react-router-dom";
import {
    MapPin,
    Briefcase,
    Clock,
    GraduationCap,
    Wallet,
    CalendarDays,
    Building2,
    CheckCircle2,
    FileText,
} from "lucide-react";
import Reveal from "../components/Reveal";

export default function JobDetailPage() {
    return (
        <main className="bg-grid pt-36 pb-28">
            <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-4 gap-12">

                {/* ================= MAIN ================= */}
                <div className="lg:col-span-3 space-y-10">

                    {/* HEADER */}
                    <Reveal as="section">
                        <Link
                            to="/lowongan"
                            className="text-sm text-gray-500 hover:text-primary"
                        >
                            ← Kembali ke Lowongan
                        </Link>

                        <h1 className="text-3xl font-bold mt-4">
                            Operator Produksi
                        </h1>

                        <p className="text-gray-600 mt-1">
                            PT Contoh Industri
                        </p>

                        {/* META GRID */}
                        <div className="
              grid grid-cols-2 md:grid-cols-3 gap-4
              mt-6
            ">
                            <Meta icon={<MapPin />} label="Lokasi" value="Jember" />
                            <Meta icon={<Briefcase />} label="Jenis" value="Full Time" />
                            <Meta icon={<GraduationCap />} label="Pendidikan" value="SMA / SMK" />
                            <Meta icon={<Wallet />} label="Gaji" value="Rp4.000.000 – Rp5.000.000" />
                            <Meta icon={<CalendarDays />} label="Penutupan" value="30 Juni 2025" />
                            <Meta icon={<Clock />} label="Diposting" value="3 hari lalu" />
                        </div>
                    </Reveal>

                    {/* TENTANG PEKERJAAN */}
                    <Section title="Tentang Pekerjaan">
                        <p>
                            Posisi Operator Produksi bertanggung jawab dalam menjalankan
                            proses produksi sesuai standar perusahaan untuk memastikan
                            kualitas, kuantitas, dan keselamatan kerja.
                        </p>
                    </Section>

                    {/* TANGGUNG JAWAB */}
                    <Section title="Tanggung Jawab">
                        <ul>
                            <li>Mengoperasikan mesin produksi sesuai SOP</li>
                            <li>Menjaga kualitas produk selama proses produksi</li>
                            <li>Mencatat hasil produksi harian</li>
                            <li>Mematuhi aturan K3</li>
                        </ul>
                    </Section>

                    {/* KUALIFIKASI */}
                    <Section title="Kualifikasi">
                        <ul>
                            <li>Lulusan SMA / SMK semua jurusan</li>
                            <li>Usia maksimal 25 tahun</li>
                            <li>Sehat jasmani dan rohani</li>
                            <li>Disiplin dan bertanggung jawab</li>
                        </ul>
                    </Section>

                    {/* BENEFIT */}
                    <Section title="Benefit & Fasilitas">
                        <ul>
                            <li>Gaji sesuai UMK</li>
                            <li>BPJS Kesehatan & Ketenagakerjaan</li>
                            <li>Lembur sesuai ketentuan</li>
                            <li>Makan & transport</li>
                        </ul>
                    </Section>

                    {/* DOKUMEN */}
                    <Section title="Dokumen yang Dibutuhkan">
                        <ul>
                            <li>CV terbaru</li>
                            <li>Surat lamaran</li>
                            <li>Ijazah & transkrip nilai</li>
                            <li>KTP & KK</li>
                        </ul>
                    </Section>

                    {/* ALUR SELEKSI */}
                    <Section title="Alur Seleksi">
                        <ol>
                            <li>Seleksi administrasi oleh BKK</li>
                            <li>Pemanggilan tes oleh perusahaan</li>
                            <li>Interview</li>
                            <li>Pengumuman hasil</li>
                        </ol>
                    </Section>

                </div>

                {/* ================= SIDEBAR ================= */}
                <Reveal as="aside" className="lg:col-span-1 space-y-5 left">

                    {/* STATUS */}
                    <div className="bg-white border border-gray-200 rounded-2xl p-5">
                        <div className="flex items-center gap-2 text-green-700 text-sm font-medium">
                            <CheckCircle2 className="w-4 h-4" />
                            Lowongan Aktif
                        </div>
                    </div>

                    {/* APPLY */}
                    <div className="bg-white border border-gray-200 rounded-2xl p-5">
                        <button className="
              w-full py-3 rounded-xl
              bg-primary text-white font-semibold
            ">
                            Lamar Sekarang
                        </button>

                        <p className="text-xs text-gray-500 mt-3 text-center">
                            Pastikan profil alumni sudah lengkap
                        </p>
                    </div>

                    {/* COMPANY */}
                    <div className="bg-white border border-gray-200 rounded-2xl p-5">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                                <Building2 className="w-5 h-5 text-gray-600" />
                            </div>
                            <div>
                                <p className="font-semibold text-sm">
                                    PT Contoh Industri
                                </p>
                                <p className="text-xs text-gray-500">
                                    Manufaktur
                                </p>
                            </div>
                        </div>

                        <Link
                            to="/perusahaan/pt-contoh-industri"
                            className="text-sm text-primary font-medium"
                        >
                            Lihat Profil Perusahaan →
                        </Link>
                    </div>

                </Reveal>
            </div>
        </main>
    );
}

/* ================= HELPER ================= */

function Meta({ icon, label, value }) {
    return (
        <div className="bg-white border border-gray-200 rounded-xl p-4">
            <div className="flex items-center gap-2 text-gray-500 text-xs mb-1">
                {icon}
                {label}
            </div>
            <p className="font-medium text-sm">
                {value}
            </p>
        </div>
    );
}

function Section({ title, children }) {
    return (
        <Reveal
            as="section"
            className="bg-white border border-gray-200 rounded-2xl p-6"
        >
            <h2 className="font-semibold mb-3">
                {title}
            </h2>

            <div className="text-sm text-gray-700 leading-relaxed space-y-2">
                {children}
            </div>
        </Reveal>
    );
}
