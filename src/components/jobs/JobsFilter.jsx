import Reveal from "../Reveal";

export default function JobsFilter() {
    return (
        <Reveal
            as="aside"
            className="
        bg-white border border-gray-200
        rounded-2xl p-6
        space-y-6
        right
      "
        >
            <div>
                <h3 className="font-semibold mb-3">
                    Jenis Pekerjaan
                </h3>
                <div className="space-y-2 text-sm text-gray-600">
                    <label className="flex items-center gap-2">
                        <input type="checkbox" />
                        Full Time
                    </label>
                    <label className="flex items-center gap-2">
                        <input type="checkbox" />
                        Magang
                    </label>
                    <label className="flex items-center gap-2">
                        <input type="checkbox" />
                        Kontrak
                    </label>
                </div>
            </div>

            <div>
                <h3 className="font-semibold mb-3">
                    Pendidikan
                </h3>
                <div className="space-y-2 text-sm text-gray-600">
                    <label className="flex items-center gap-2">
                        <input type="checkbox" />
                        SMA / SMK
                    </label>
                    <label className="flex items-center gap-2">
                        <input type="checkbox" />
                        D3
                    </label>
                </div>
            </div>
        </Reveal>
    );
}
