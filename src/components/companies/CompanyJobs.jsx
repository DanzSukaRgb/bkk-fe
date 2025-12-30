import { Link } from "react-router-dom";
import Reveal from "../Reveal";

export default function CompanyJobs() {
    return (
        <Reveal
            as="section"
            className="bg-white border border-gray-200 rounded-2xl p-6"
        >
            <h2 className="font-semibold mb-4">
                Lowongan di Perusahaan Ini
            </h2>

            <div className="space-y-4">
                <div className="flex justify-between items-center">
                    <div>
                        <p className="font-medium">
                            Operator Produksi
                        </p>
                        <p className="text-sm text-gray-600">
                            Full Time • Jember
                        </p>
                    </div>

                    <Link
                        to="/lowongan/operator-produksi-pt-contoh"
                        className="text-sm text-primary font-medium"
                    >
                        Lihat →
                    </Link>
                </div>
            </div>
        </Reveal>
    );
}
