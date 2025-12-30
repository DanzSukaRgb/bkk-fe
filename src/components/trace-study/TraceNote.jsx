import Reveal from "../Reveal";

export default function TraceNote() {
    return (
        <Reveal
            as="section"
            className="
        bg-gray-50 border border-gray-200
        rounded-3xl p-8
      "
        >
            <h2 className="font-semibold text-lg mb-3">
                Catatan Sekolah
            </h2>

            <p className="text-sm text-gray-600 leading-relaxed">
                Data trace study ini digunakan sebagai bahan evaluasi
                internal sekolah, peningkatan kerja sama industri,
                serta penyusunan program peningkatan kompetensi lulusan.
            </p>
        </Reveal>
    );
}
