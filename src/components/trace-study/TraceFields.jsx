import Reveal from "../Reveal";

export default function TraceFields() {
    return (
        <Reveal
            as="section"
            className="mt-24 grid md:grid-cols-2 gap-10"
        >
            <div>
                <h3 className="text-xl font-semibold mb-3">
                    Bidang Pekerjaan Alumni
                </h3>
                <p className="text-gray-600">
                    Alumni tersebar di berbagai sektor industri.
                </p>
            </div>

            <div className="space-y-3">
                <Row name="Manufaktur" value="132 Alumni" />
                <Row name="Perhotelan" value="64 Alumni" />
                <Row name="Retail" value="58 Alumni" />
                <Row name="Teknologi" value="32 Alumni" />
            </div>
        </Reveal>
    );
}

function Row({ name, value }) {
    return (
        <div className="flex justify-between text-sm">
            <span>{name}</span>
            <span className="font-medium">{value}</span>
        </div>
    );
}
