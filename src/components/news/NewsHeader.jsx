import Reveal from "../Reveal";

export default function NewsHeader() {
    return (
        <section className="bg-grid pt-36 pb-16">
            <Reveal as="div" className="max-w-7xl mx-auto px-6">
                <h1 className="text-3xl font-bold">
                    Berita Sekolah
                </h1>
                <p className="text-gray-600 mt-2">
                    Informasi dan kegiatan resmi SMKN 6 Jember
                </p>
            </Reveal>
        </section>
    );
}
