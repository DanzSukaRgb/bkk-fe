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
import Reveal from "../Reveal";

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
        <section className="py-20 bg-grid">
            <Reveal as="div" className="max-w-7xl mx-auto px-6">
                <h2 className="text-2xl font-bold mb-10 text-center">
                    Kategori Pekerjaan
                </h2>

                <div className="grid grid-cols-4 md:grid-cols-8 gap-6 justify-center">
                    {categories.map(({ icon: Icon, label }, i) => (
                        <Reveal
                            key={label}
                            as="div"
                            delay={i * 80}
                            className="
                flex flex-col items-center justify-center
                gap-2
                bg-white
                border border-gray-200
                rounded-2xl
                w-20 h-20
                mx-auto
                hover:border-primary
                hover:shadow-md
                transition
                cursor-pointer
              "
                            title={label}
                        >
                            <Icon className="w-6 h-6 text-gray-600" />
                        </Reveal>
                    ))}
                </div>
            </Reveal>
        </section>
    );
}
