export default function JobsToolbar() {
    return (
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <p className="text-sm text-gray-600">
                Menampilkan <strong>12</strong> lowongan tersedia
            </p>

            <select
                className="
          text-sm
          border border-gray-200
          rounded-xl
          px-4 py-2
          bg-white
          min-h-[44px]
        "
            >
                <option>Terbaru</option>
                <option>Deadline Terdekat</option>
                <option>Gaji Tertinggi</option>
            </select>
        </div>
    );
}
