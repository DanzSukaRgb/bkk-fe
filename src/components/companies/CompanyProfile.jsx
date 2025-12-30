import { MapPin, Globe, Users, CalendarDays } from "lucide-react";

export default function CompanyProfile() {
    return (
        <section className="bg-white border border-gray-200 rounded-2xl p-5 md:p-6">
            <h2 className="font-semibold mb-4">
                Profil Perusahaan
            </h2>

            <p className="text-sm text-gray-700 leading-relaxed mb-6">
                PT Contoh Industri merupakan perusahaan manufaktur yang
                bergerak di bidang produksi komponen industri dan telah
                bekerja sama dengan BKK SMKN 6 Jember sejak tahun 2020.
            </p>

            <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-600">
                <Meta icon={<MapPin />} label="Lokasi" value="Jember" />
                <Meta icon={<Users />} label="Jumlah Karyawan" value="300+" />
                <Meta icon={<CalendarDays />} label="Berdiri" value="2008" />
                <Meta icon={<Globe />} label="Website" value="www.contoh.co.id" />
            </div>
        </section>
    );
}

function Meta({ icon, label, value }) {
    return (
        <div className="flex items-center gap-3">
            {icon}
            <div>
                <p className="text-xs text-gray-500">{label}</p>
                <p className="font-medium">{value}</p>
            </div>
        </div>
    );
}
