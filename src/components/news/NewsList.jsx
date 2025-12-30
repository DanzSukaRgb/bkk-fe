import NewsCard from "./NewsCard";
import NewsPagination from "./NewsPagination";

export default function NewsList() {
    const news = Array.from({ length: 6 });

    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {news.map((_, i) => (
                    <NewsCard key={i} />
                ))}
            </div>

            <NewsPagination />
        </>
    );
}
