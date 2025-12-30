import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function ContactInfo() {
    return (
        <div
            className="
        bg-white border border-gray-200
        rounded-3xl p-6 md:p-8
        space-y-6
      "
        >
            <InfoItem
                icon={<MapPin />}
                title="Alamat Sekolah"
                value="Jl. Contoh Raya No. 123, Jember, Jawa Timur"
            />

            <InfoItem
                icon={<Phone />}
                title="Telepon"
                value="(0331) 123456"
            />

            <InfoItem
                icon={<Mail />}
                title="Email Resmi"
                value="smkn6jember@sch.id"
            />

            <InfoItem
                icon={<Clock />}
                title="Jam Operasional"
                value="Senin – Jumat, 07.00 – 15.00 WIB"
            />
        </div>
    );
}

function InfoItem({ icon, title, value }) {
    return (
        <div className="flex gap-4">
            <div className="
        w-10 h-10 rounded-full
        bg-primary/10
        flex items-center justify-center
        text-primary
      ">
                {icon}
            </div>

            <div>
                <p className="text-sm font-medium">
                    {title}
                </p>
                <p className="text-sm text-gray-600">
                    {value}
                </p>
            </div>
        </div>
    );
}
