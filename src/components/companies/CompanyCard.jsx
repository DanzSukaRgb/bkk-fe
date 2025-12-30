import { Link } from "react-router-dom";
import { MapPin, Briefcase } from "lucide-react";

export default function CompanyCard() {
    return (
        <div
            className="
        bg-white border border-gray-200
        rounded-2xl p-5 md:p-6
        hover:shadow-md transition
      "
        >
            {/* LOGO */}
            <div className="w-14 h-14 bg-gray-100 rounded-xl mb-4" />

            <h3 className="font-semibold text-base md:text-lg">
                PT Contoh Industri
            </h3>

            <p className="text-sm text-gray-600 mb-4">
                Manufaktur
            </p>

            {/* META */}
            <div className="space-y-2 text-sm text-gray-600 mb-4">
                <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    Jember
                </div>
                <div className="flex items-center gap-2">
                    <Briefcase className="w-4 h-4" />
                    3 Lowongan Aktif
                </div>
            </div>

            <Link
                to="/perusahaan/pt-contoh-industri"
                className="inline-flex items-center min-h-[44px] md:min-h-0 text-sm text-primary font-medium"
            >
                Lihat Profil →
            </Link>
        </div>
    );
}
