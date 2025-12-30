export default function CompaniesToolbar() {
    return (
        <div className="flex justify-between items-center mb-6">
            <p className="text-sm text-gray-600">
                Menampilkan <strong>18</strong> perusahaan mitra
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
                <option>Semua Industri</option>
                <option>Manufaktur</option>
                <option>Perhotelan</option>
                <option>Retail</option>
                <option>Teknologi</option>
            </select>
        </div>
    );
}
