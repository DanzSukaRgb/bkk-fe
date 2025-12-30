import Reveal from "../Reveal";

export default function TraceIntro() {
    return (
        <Reveal as="section" className="max-w-3xl">
            <span className="text-sm font-semibold text-primary">
                Laporan Mutu Lulusan
            </span>

            <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-6">
                Jejak Alumni Setelah Lulus
            </h2>

            <p className="text-gray-600 leading-relaxed text-lg">
                Trace Study dilakukan untuk mengetahui kondisi alumni
                setelah menyelesaikan pendidikan di SMKN 6 Jember.
                Data ini menjadi dasar evaluasi dan peningkatan mutu lulusan.
            </p>
        </Reveal>
    );
}
