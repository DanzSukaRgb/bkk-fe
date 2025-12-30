import { Search } from "lucide-react";

export default function CompaniesHeader() {
    return (
        <section className="bg-grid pt-28 md:pt-36 pb-10 md:pb-14">
            <div className="max-w-7xl mx-auto px-4 md:px-6">
                <h1 className="text-2xl md:text-3xl font-bold">Mitra Perusahaan</h1>
                <p className="text-gray-600 mt-2 mb-6">
                    Perusahaan resmi yang bekerja sama dengan BKK SMKN 6 Jember
                </p>

                <div className="
          bg-white border border-gray-200
          rounded-2xl p-3
          flex items-center gap-3
        ">
                    <Search className="w-4 h-4 text-gray-400" />
                    <input
                        placeholder="Cari perusahaan atau bidang industri"
                        className="w-full outline-none text-sm min-h-[44px]"
                    />
                </div>
            </div>
        </section>
    );
}
