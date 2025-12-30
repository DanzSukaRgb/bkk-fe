import { Search, Building2 } from "lucide-react";
import Reveal from "../Reveal";

export default function CompaniesHeader() {
    return (
        <section className="bg-grid pt-36 pb-14">
            <Reveal as="div" className="max-w-7xl mx-auto px-6">
                <h1 className="text-3xl font-bold">Mitra Perusahaan</h1>
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
                        className="w-full outline-none text-sm"
                    />
                </div>
            </Reveal>
        </section>
    );
}
