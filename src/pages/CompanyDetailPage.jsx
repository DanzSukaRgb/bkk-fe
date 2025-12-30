import { Link } from "react-router-dom";
import CompanyProfile from "../components/companies/CompanyProfile";
import CompanyJobs from "../components/companies/CompanyJobs";

export default function CompanyDetailPage() {
    return (
        <main className="bg-grid pt-28 md:pt-36 pb-20 md:pb-28">
            <div className="max-w-7xl mx-auto px-4 md:px-6 grid lg:grid-cols-4 gap-8 md:gap-12">

                {/* MAIN */}
                <div className="lg:col-span-3 space-y-6 md:space-y-8">
                    <section>
                        <Link
                            to="/perusahaan"
                            className="inline-flex items-center min-h-[44px] md:min-h-0 text-sm text-gray-500 hover:text-primary"
                        >
                            ← Kembali ke Perusahaan
                        </Link>

                        <h1 className="text-2xl md:text-3xl font-bold mt-4">
                            PT Contoh Industri
                        </h1>
                        <p className="text-gray-600">
                            Manufaktur
                        </p>
                    </section>

                    <CompanyProfile />
                    <CompanyJobs />
                </div>

                {/* SIDEBAR */}
                <aside className="lg:col-span-1">
                    <div className="bg-white border border-gray-200 rounded-2xl p-5">
                        <p className="text-sm font-medium">
                            Status Kemitraan
                        </p>
                        <p className="text-xs text-green-700 mt-1">
                            Aktif bekerja sama dengan BKK
                        </p>
                    </div>
                </aside>
            </div>
        </main>
    );
}
