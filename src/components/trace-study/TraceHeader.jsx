import Reveal from "../Reveal";

export default function TraceHeader() {
    return (
        <section className="bg-grid pt-36 pb-20">
            <Reveal as="div" className="max-w-7xl mx-auto px-6">
                <span className="text-sm font-semibold text-primary">
                    Laporan Resmi
                </span>

                <h1 className="text-3xl md:text-4xl font-bold mt-3 mb-4">
                    Trace Study Alumni
                </h1>

                <p className="text-gray-600 max-w-2xl">
                    Penelusuran lulusan SMKN 6 Jember sebagai evaluasi
                    mutu pendidikan dan kesiapan kerja alumni.
                </p>
            </Reveal>
        </section>
    );
}
