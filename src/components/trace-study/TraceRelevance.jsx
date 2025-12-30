import {
    PieChart,
    Pie,
    Cell,
    ResponsiveContainer,
} from "recharts";
import Reveal from "../Reveal";

const data = [
    { name: "Sesuai Kompetensi", value: 72 },
    { name: "Cukup Sesuai", value: 18 },
    { name: "Tidak Sesuai", value: 10 },
];

const COLORS = ["#2563eb", "#60a5fa", "#e5e7eb"]; // primary, soft, gray

export default function TraceRelevance() {
    return (
        <Reveal
            as="section"
            className="
        mt-24
        bg-white
        border border-gray-200
        rounded-3xl
        p-10
      "
        >
            <h3 className="text-xl font-semibold mb-6">
                Kesesuaian Pekerjaan dengan Kompetensi
            </h3>

            <div className="grid md:grid-cols-2 gap-10 items-center">
                {/* CHART */}
                <div className="h-[260px]">
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                            <Pie
                                data={data}
                                innerRadius={70}
                                outerRadius={100}
                                paddingAngle={3}
                                dataKey="value"
                            >
                                {data.map((_, index) => (
                                    <Cell key={index} fill={COLORS[index]} />
                                ))}
                            </Pie>
                        </PieChart>
                    </ResponsiveContainer>
                </div>

                {/* LEGEND */}
                <div className="space-y-4">
                    {data.map((item, i) => (
                        <div key={i} className="flex items-center gap-4">
                            <span
                                className="w-3 h-3 rounded-full"
                                style={{ backgroundColor: COLORS[i] }}
                            />
                            <span className="flex-1 text-sm text-gray-600">
                                {item.name}
                            </span>
                            <span className="font-semibold text-sm">
                                {item.value}%
                            </span>
                        </div>
                    ))}

                    <p className="text-sm text-gray-500 mt-4">
                        Mayoritas alumni bekerja sesuai dengan kompetensi
                        keahlian yang diperoleh selama pendidikan.
                    </p>
                </div>
            </div>
        </Reveal>
    );
}
