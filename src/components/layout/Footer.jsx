import {
    Briefcase,
    Building2,
    Phone,
    Mail,
    MapPin,
    GraduationCap,
    ShieldCheck,
} from "lucide-react";

export default function Footer() {
    return (
        <footer className="mt-20 md:mt-24 bg-gray-50 border-t border-gray-200 cv-auto">
            <div className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-16">
                {/* TOP */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

                    {/* BRAND */}
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                                <GraduationCap className="w-5 h-5 text-primary" />
                            </div>
                            <span className="font-bold text-lg">BKK SMKN 6 JEMBER</span>
                        </div>

                        <p className="text-sm text-gray-600 leading-relaxed">
                            Bursa Kerja Khusus (BKK) adalah unit resmi sekolah yang
                            menjembatani lulusan dengan dunia usaha dan industri
                            secara transparan dan terverifikasi.
                        </p>
                    </div>

                    {/* MENU */}
                    <div>
                        <h4 className="font-semibold mb-4 flex items-center gap-2">
                            <Briefcase className="w-4 h-4 text-primary" />
                            Menu
                        </h4>

                        <ul className="space-y-2 text-sm text-gray-600">
                            <li className="flex items-center gap-2 hover:text-primary">
                                <Briefcase className="w-4 h-4" />
                                Lowongan
                            </li>
                            <li className="flex items-center gap-2 hover:text-primary">
                                <GraduationCap className="w-4 h-4" />
                                Program
                            </li>
                            <li className="flex items-center gap-2 hover:text-primary">
                                <Building2 className="w-4 h-4" />
                                Mitra Industri
                            </li>
                        </ul>
                    </div>

                    {/* LAYANAN */}
                    <div>
                        <h4 className="font-semibold mb-4 flex items-center gap-2">
                            <ShieldCheck className="w-4 h-4 text-primary" />
                            Layanan
                        </h4>

                        <ul className="space-y-2 text-sm text-gray-600">
                            <li className="flex items-center gap-2">
                                <Briefcase className="w-4 h-4" />
                                Penyaluran Kerja
                            </li>
                            <li className="flex items-center gap-2">
                                <GraduationCap className="w-4 h-4" />
                                Pendampingan Alumni
                            </li>
                            <li className="flex items-center gap-2">
                                <Building2 className="w-4 h-4" />
                                Rekrutmen Industri
                            </li>
                        </ul>
                    </div>

                    {/* KONTAK */}
                    <div>
                        <h4 className="font-semibold mb-4 flex items-center gap-2">
                            <Phone className="w-4 h-4 text-primary" />
                            Kontak
                        </h4>

                        <ul className="space-y-2 text-sm text-gray-600">
                            <li className="flex items-center gap-2">
                                <MapPin className="w-4 h-4" />
                                SMKN 6 Jember, Jl. Karimata No.49, Sumbersari, Kec. Sumbersari, Kabupaten Jember, Jawa Timur 68121
                            </li>
                            <li className="flex items-center gap-2">
                                <Phone className="w-4 h-4" />
                                08xxxxxxxxxx
                            </li>
                            <li className="flex items-center gap-2">
                                <Mail className="w-4 h-4" />
                                bkk@sekolah.sch.id
                            </li>
                        </ul>
                    </div>

                </div>

                {/* BOTTOM */}
                <div className="border-t border-gray-200 mt-10 md:mt-12 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 gap-3 text-center md:text-left">
                    <p className="leading-relaxed">
                        © {new Date().getFullYear()} BKK Sekolah. All rights reserved.
                    </p>
                    <p className="flex items-center gap-2">
                        <ShieldCheck className="w-4 h-4 text-primary" />
                        Dibina oleh Skanamber
                    </p>
                </div>
            </div>
        </footer>
    );
}
