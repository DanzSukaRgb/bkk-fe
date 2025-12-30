export default function TraceFields() {
    return (
        <section className="mt-16 md:mt-24 grid md:grid-cols-2 gap-8 md:gap-10">
            <div>
                <h3 className="text-lg md:text-xl font-semibold mb-3">
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
        </section>
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
