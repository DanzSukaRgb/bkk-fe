import Reveal from "../Reveal";

export default function TraceBigNumbers() {
    return (
        <Reveal
            as="section"
            className="grid md:grid-cols-3 gap-10 mt-20"
        >
            <Item value="68%" label="Alumni Bekerja" />
            <Item value="21%" label="Melanjutkan Pendidikan" />
            <Item value="11%" label="Berwirausaha" />
        </Reveal>
    );
}

function Item({ value, label }) {
    return (
        <div className="text-center">
            <p className="text-5xl font-bold text-primary">
                {value}
            </p>
            <p className="text-gray-600 mt-2">
                {label}
            </p>
        </div>
    );
}
