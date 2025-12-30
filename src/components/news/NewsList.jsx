import NewsCard from "./NewsCard";
import NewsPagination from "./NewsPagination";

export default function NewsList() {
    const news = Array.from({ length: 6 });

    return (
        <>
            <div className="grid md:grid-cols-3 gap-6">
                {news.map((_, i) => (
                    <NewsCard key={i} />
                ))}
            </div>

            <NewsPagination />
        </>
    );
}
