import {
    ShieldCheck,
    Users,
    Briefcase,
    Building2,
    CheckCircle2,
} from "lucide-react";
import Reveal from "../Reveal";

export default function AdvantageSection() {
    return (
        <section className="py-28 bg-grid">
            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">

                {/* LEFT – TEXT */}
                <Reveal as="div" className="right">
                    <h2 className="text-3xl font-bold mb-5">
                        Keunggulan BKK
                    </h2>

                    <p className="text-gray-600 max-w-md mb-8">
                        Bursa Kerja Khusus (BKK) menjadi penghubung resmi antara
                        lulusan sekolah dengan dunia usaha dan industri secara
                        profesional dan terverifikasi.
                    </p>

                    <ul className="space-y-4">
                        <li className="flex gap-3">
                            <ShieldCheck className="w-5 h-5 text-primary mt-1" />
                            <span className="text-gray-700">
                                Unit resmi di bawah pembinaan sekolah & Disnaker
                            </span>
                        </li>
                        <li className="flex gap-3">
                            <Users className="w-5 h-5 text-primary mt-1" />
                            <span className="text-gray-700">
                                Pendampingan BK hingga alumni siap kerja
                            </span>
                        </li>
                        <li className="flex gap-3">
                            <Briefcase className="w-5 h-5 text-primary mt-1" />
                            <span className="text-gray-700">
                                Lowongan kerja valid dari mitra industri
                            </span>
                        </li>
                        <li className="flex gap-3">
                            <Building2 className="w-5 h-5 text-primary mt-1" />
                            <span className="text-gray-700">
                                Kerja sama langsung dengan perusahaan
                            </span>
                        </li>
                    </ul>
                </Reveal>

                {/* RIGHT – IMAGE + ELEMENT */}
                <Reveal as="div" className="relative left">
                    {/* IMAGE */}
                    <img
                        src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
                        alt="BKK Activity"
                        className="rounded-3xl shadow-lg"
                    />

                    {/* FLOATING CARD 1 */}
                    <Reveal
                        as="div"
                        delay={200}
                        className="
              absolute -top-6 -left-6
              bg-white border border-gray-200
              rounded-2xl p-4 shadow-md
              flex items-center gap-3
              scale
            "
                    >
                        <CheckCircle2 className="w-5 h-5 text-primary" />
                        <div>
                            <p className="text-sm font-semibold">Resmi</p>
                            <p className="text-xs text-gray-500">
                                Terdaftar Disnaker
                            </p>
                        </div>
                    </Reveal>

                    {/* FLOATING CARD 2 */}
                    <Reveal
                        as="div"
                        delay={350}
                        className="
              absolute bottom-6 -right-6
              bg-white border border-gray-200
              rounded-2xl p-4 shadow-md
              scale
            "
                    >
                        <p className="text-lg font-bold text-primary">
                            1000+
                        </p>
                        <p className="text-xs text-gray-500">
                            Alumni terserap industri
                        </p>
                    </Reveal>
                </Reveal>

            </div>
        </section>
    );
}
