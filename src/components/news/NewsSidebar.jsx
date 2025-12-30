import Reveal from "../Reveal";

export default function NewsSidebar() {
    return (
        <Reveal as="aside" className="space-y-6 left">
            <Box title="Kategori">
                <ul>
                    <li>• Kegiatan Sekolah</li>
                    <li>• Akademik</li>
                    <li>• Prestasi</li>
                    <li>• Ekstrakurikuler</li>
                </ul>
            </Box>

            <Box title="Arsip">
                <ul>
                    <li>• Juni 2025</li>
                    <li>• Mei 2025</li>
                    <li>• April 2025</li>
                </ul>
            </Box>
        </Reveal>
    );
}

function Box({ title, children }) {
    return (
        <div className="bg-white border border-gray-200 rounded-2xl p-5">
            <h3 className="font-semibold mb-3">{title}</h3>
            <div className="text-sm text-gray-600 space-y-2">
                {children}
            </div>
        </div>
    );
}
