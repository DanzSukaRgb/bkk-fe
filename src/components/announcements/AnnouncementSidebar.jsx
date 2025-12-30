import Reveal from "../Reveal";

export default function AnnouncementSidebar() {
    return (
        <Reveal as="aside" className="space-y-6 left">
            <div className="bg-white border border-gray-200 rounded-2xl p-5">
                <h3 className="font-semibold mb-3">
                    Kategori Pengumuman
                </h3>
                <ul className="text-sm text-gray-600 space-y-2">
                    <li>• Akademik</li>
                    <li>• Libur</li>
                    <li>• Ujian</li>
                    <li>• Administrasi</li>
                </ul>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-5">
                <h3 className="font-semibold mb-3">
                    Pengumuman Terbaru
                </h3>
                <ul className="text-sm text-gray-600 space-y-2">
                    <li>• Libur Hari Raya</li>
                    <li>• Jadwal Ujian Akhir</li>
                    <li>• Pengambilan Rapor</li>
                </ul>
            </div>
        </Reveal>
    );
}
