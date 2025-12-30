export default function NewsPagination() {
    return (
        <div className="flex justify-center gap-2 mt-8 md:mt-10">
            <button className="px-4 py-2 rounded-lg border text-sm min-h-[44px]">
                Sebelumnya
            </button>
            <button className="px-4 py-2 rounded-lg bg-primary text-white text-sm min-h-[44px]">
                1
            </button>
            <button className="px-4 py-2 rounded-lg border text-sm min-h-[44px]">
                2
            </button>
            <button className="px-4 py-2 rounded-lg border text-sm min-h-[44px]">
                Berikutnya
            </button>
        </div>
    );
}
