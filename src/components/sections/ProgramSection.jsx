import Reveal from "../Reveal";

export default function ProgramSection() {
    return (
        <section className="py-32 bg-gray-50 bg-grid">
            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">

                {/* LEFT — IMAGE WITH ELEMENT */}
                <Reveal as="div" className="relative right">
                    {/* BACKGROUND SHAPE */}
                    <div className="absolute inset-0 bg-primary/5 rounded-[40px]" />

                    <div className="relative p-10">
                        {/* MAIN IMAGE */}
                        <div className="relative rounded-3xl overflow-hidden shadow-xl">
                            <img
                                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c"
                                alt="Program Karier BKK"
                                className="w-full h-[420px] object-cover"
                            />

                            {/* BADGE */}
                            <Reveal
                                as="div"
                                delay={150}
                                className="
                  absolute top-4 left-4
                  bg-white/90 backdrop-blur
                  px-4 py-2
                  rounded-full
                  text-xs font-semibold
                  shadow
                  scale
                "
                            >
                                Program Aktif
                            </Reveal>

                            {/* PROGRESS CARD */}
                            <Reveal
                                as="div"
                                delay={300}
                                className="
                  absolute bottom-4 left-4
                  bg-white
                  rounded-xl
                  p-4
                  shadow-md
                  w-48
                  scale
                "
                            >
                                <p className="text-xs font-medium mb-2">
                                    Progress Pembinaan
                                </p>
                                <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                                    <div className="w-3/4 h-full bg-primary rounded-full" />
                                </div>
                                <p className="text-[10px] text-gray-500 mt-1">
                                    Tahap 3 dari 4
                                </p>
                            </Reveal>

                            {/* CONTEXT LABEL */}
                            <Reveal
                                as="div"
                                delay={450}
                                className="
                  absolute bottom-4 right-4
                  bg-white
                  rounded-full
                  px-4 py-2
                  shadow-md
                  text-xs font-medium
                "
                            >
                                CV & Interview
                            </Reveal>
                        </div>
                    </div>
                </Reveal>

                {/* RIGHT — CONTENT (TETAP) */}
                <Reveal as="div" className="left">
                    <span className="text-sm font-semibold text-primary">
                        Program BKK
                    </span>

                    <h2 className="text-4xl font-bold mt-3 mb-6">
                        Program Pembinaan Karier
                    </h2>

                    <p className="text-gray-600 max-w-md mb-8">
                        BKK tidak hanya menyalurkan alumni ke dunia kerja,
                        tetapi membina mereka agar siap secara mental,
                        administratif, dan kompetensi sesuai kebutuhan industri.
                    </p>

                    <ul className="space-y-3 text-sm text-gray-700">
                        <li>• Pembekalan sikap & etika kerja</li>
                        <li>• Penyusunan CV & dokumen seleksi</li>
                        <li>• Simulasi interview & rekrutmen</li>
                    </ul>
                </Reveal>

            </div>
        </section>
    );
}
