import Reveal from "../Reveal";

export default function TraceDistribution() {
    return (
        <Reveal
            as="section"
            className="
        bg-white border border-gray-200
        rounded-3xl p-8
      "
        >
            <h2 className="font-semibold text-lg mb-6">
                Sebaran Bidang Kerja Alumni
            </h2>

            <List label="Manufaktur" value="132 Alumni" />
            <List label="Perhotelan" value="64 Alumni" />
            <List label="Retail" value="58 Alumni" />
            <List label="Teknologi" value="32 Alumni" />
        </Reveal>
    );
}

function List({ label, value }) {
    return (
        <div className="flex justify-between text-sm mb-3">
            <span>{label}</span>
            <span className="font-medium">{value}</span>
        </div>
    );
}
