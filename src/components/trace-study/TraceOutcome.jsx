import Reveal from "../Reveal";

export default function TraceOutcome() {
    return (
        <Reveal
            as="section"
            className="
        bg-white border border-gray-200
        rounded-3xl p-8
      "
        >
            <h2 className="font-semibold text-lg mb-4">
                Status Lulusan
            </h2>

            <p className="text-sm text-gray-600 mb-4">
                Mayoritas alumni terserap dunia kerja dalam kurun
                waktu kurang dari 3 bulan setelah lulus.
            </p>

            <p className="text-sm text-gray-800">
                Rata-rata waktu tunggu kerja:
                <strong> 2,3 bulan</strong>
            </p>
        </Reveal>
    );
}
