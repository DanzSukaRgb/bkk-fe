export default function TraceBigNumbers() {
    return (
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-10 mt-16 md:mt-20">
            <Item value="68%" label="Alumni Bekerja" />
            <Item value="21%" label="Melanjutkan Pendidikan" />
            <Item value="11%" label="Berwirausaha" />
        </section>
    );
}

function Item({ value, label }) {
    return (
        <div className="text-center">
            <p className="text-4xl md:text-5xl font-bold text-primary">
                {value}
            </p>
            <p className="text-gray-600 mt-2">
                {label}
            </p>
        </div>
    );
}
