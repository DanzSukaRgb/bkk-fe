import Reveal from "../Reveal";

export default function AnnouncementsHeader() {
    return (
        <section className="bg-grid pt-36 pb-20">
            <Reveal as="div" className="max-w-7xl mx-auto px-6">
                <span className="text-sm font-semibold text-primary">
                    Informasi Resmi
                </span>

                <h1 className="text-3xl md:text-4xl font-bold mt-3 mb-4">
                    Pengumuman Sekolah
                </h1>

                <p className="text-gray-600 max-w-2xl">
                    Informasi penting dan bersifat resmi yang perlu diketahui
                    oleh siswa, orang tua, dan seluruh warga sekolah.
                </p>
            </Reveal>
        </section>
    );
}
