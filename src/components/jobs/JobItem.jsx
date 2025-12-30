import { MapPin, Briefcase, GraduationCap, Wallet, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import Reveal from "../Reveal";

export default function JobItem() {
    return (
        <Reveal
            as="div"
            className="
        bg-white border border-gray-200
        rounded-2xl p-6
        hover:shadow-md transition
      "
        >
            <div className="flex justify-between gap-4">
                <div>
                    <h3 className="font-semibold text-lg">
                        Operator Produksi
                    </h3>
                    <p className="text-sm text-gray-600">
                        PT Contoh Industri
                    </p>
                </div>

                <span className="
          text-xs px-3 py-1
          rounded-full
          bg-green-100 text-green-700
          h-fit
        ">
                    Full Time
                </span>
            </div>

            {/* META */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-5 text-sm text-gray-600">
                <Meta icon={<MapPin />} value="Jember" />
                <Meta icon={<GraduationCap />} value="SMA / SMK" />
                <Meta icon={<Wallet />} value="Rp4 – 5 jt" />
                <Meta icon={<Clock />} value="Tutup 30 Jun" />
                <Meta icon={<Briefcase />} value="Manufaktur" />
            </div>

            {/* ACTION */}
            <div className="mt-6 flex justify-between items-center">
                <p className="text-xs text-gray-500">
                    Diposting 3 hari lalu
                </p>

                <Link
                    to="/lowongan/operator-produksi-pt-contoh"
                    className="text-sm font-medium text-primary"
                >
                    Lihat Detail →
                </Link>
            </div>
        </Reveal>
    );
}

function Meta({ icon, value }) {
    return (
        <div className="flex items-center gap-2">
            {icon}
            <span>{value}</span>
        </div>
    );
}
