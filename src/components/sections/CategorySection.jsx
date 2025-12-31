import {
    Briefcase,
    Cpu,
    PenTool,
    Calculator,
    Languages,
    Megaphone,
    Factory,
    Building2,
} from "lucide-react";

const categories = [
    { icon: Briefcase, label: "Umum" },
    { icon: Cpu, label: "Teknologi" },
    { icon: PenTool, label: "Desain" },
    { icon: Calculator, label: "Keuangan" },
    { icon: Languages, label: "Bahasa" },
    { icon: Megaphone, label: "Marketing" },
    { icon: Factory, label: "Manufaktur" },
    { icon: Building2, label: "Perkantoran" },
];

export default function CategorySection() {
    return (
        <section className="py-16 sm:py-20 bg-grid cv-auto">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <h2 className="text-xl sm:text-2xl font-bold mb-8 sm:mb-10 text-center">
                    Kategori Pekerjaan
                </h2>

                <div className="
                    grid
                    grid-cols-2
                    sm:grid-cols-3
                    md:grid-cols-4
                    lg:grid-cols-8
                    gap-4 sm:gap-6
                ">
                    {categories.map(({ icon: Icon, label }) => (
                        <div
                            key={label}
                            className="
                                flex flex-col items-center justify-center
                                gap-2
                                bg-white
                                border border-gray-200
                                rounded-xl sm:rounded-2xl
                                px-4 py-4
                                hover:border-primary
                                hover:shadow-md
                                transition
                                cursor-pointer
                                text-center
                            "
                        >
                            <Icon className="w-6 h-6 text-gray-600" />

                            {/* LABEL — penting di mobile */}
                            <span className="text-xs sm:text-sm text-gray-700 font-medium">
                                {label}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
