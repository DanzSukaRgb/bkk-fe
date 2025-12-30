export default function TraceSummary() {
    return (
        <section
            className="
        bg-white border border-gray-200
        rounded-3xl p-6 md:p-8
      "
        >
            <h2 className="font-semibold text-base md:text-lg mb-6">
                Ringkasan Lulusan Tahun 2024
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <Item label="Total Lulusan" value="420" />
                <Item label="Bekerja" value="286" />
                <Item label="Kuliah" value="88" />
                <Item label="Wirausaha" value="46" />
            </div>
        </section>
    );
}

function Item({ label, value }) {
    return (
        <div className="bg-gray-50 rounded-2xl p-5">
            <p className="text-2xl font-bold">{value}</p>
            <p className="text-sm text-gray-600">{label}</p>
        </div>
    );
}
