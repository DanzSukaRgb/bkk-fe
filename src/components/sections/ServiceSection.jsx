import {
    Briefcase,
    Users,
    ClipboardList,
    BarChart3,
} from "lucide-react";

const services = [
    {
        icon: Briefcase,
        title: "Penyaluran Kerja",
        desc: "Menghubungkan alumni dengan perusahaan mitra.",
    },
    {
        icon: Users,
        title: "Pendampingan Alumni",
        desc: "Bimbingan berkelanjutan dari BK & BKK.",
    },
    {
        icon: ClipboardList,
        title: "Rekrutmen Industri",
        desc: "Fasilitasi seleksi & interview langsung.",
    },
    {
        icon: BarChart3,
        title: "Tracer Study",
        desc: "Pendataan alumni pasca kelulusan.",
    },
];

export default function ServiceSection() {
    return (
        <section className="py-20 md:py-32 bg-grid">
            <div className="max-w-7xl mx-auto px-4 md:px-6">

                {/* HEADER */}
                <div className="text-center max-w-xl mx-auto mb-20">
                    <span className="text-sm font-semibold text-primary">
                        Layanan BKK
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold mt-2">
                        Layanan Pendukung Karier
                    </h2>
                    <p className="text-gray-600 mt-4">
                        Layanan terintegrasi untuk mendukung alumni
                        dari persiapan hingga penempatan kerja.
                    </p>
                </div>

                {/* ICON WALL */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 md:gap-16">
                    {services.map((item, i) => {
                        const Icon = item.icon;
                        return (
                            <div
                                key={item.title}
                                className="text-center"
                            >
                                <div className="
                  w-20 h-20 mx-auto mb-6
                  rounded-full
                  bg-primary/10
                  flex items-center justify-center
                ">
                                    <Icon className="w-8 h-8 text-primary" />
                                </div>

                                <h3 className="font-semibold text-lg mb-2">
                                    {item.title}
                                </h3>
                                <p className="text-sm text-gray-600">
                                    {item.desc}
                                </p>
                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}
