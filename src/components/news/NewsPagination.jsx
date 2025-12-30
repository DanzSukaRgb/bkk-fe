export default function NewsPagination() {
    return (
        <div className="flex justify-center gap-2 mt-10">
            <button className="px-4 py-2 rounded-lg border text-sm">
                Sebelumnya
            </button>
            <button className="px-4 py-2 rounded-lg bg-primary text-white text-sm">
                1
            </button>
            <button className="px-4 py-2 rounded-lg border text-sm">
                2
            </button>
            <button className="px-4 py-2 rounded-lg border text-sm">
                Berikutnya
            </button>
        </div>
    );
}
