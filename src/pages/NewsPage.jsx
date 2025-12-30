import NewsHeader from "../components/news/NewsHeader";
import FeaturedNews from "../components/news/FeaturedNews";
import NewsList from "../components/news/NewsList";
import NewsSidebar from "../components/news/NewsSidebar";

export default function NewsPage() {
    return (
        <main className="bg-grid pb-28">
            <NewsHeader />

            <section className="max-w-7xl mx-auto px-6 mt-10">
                <FeaturedNews />

                <div className="grid lg:grid-cols-4 gap-10">
                    <div className="lg:col-span-3">
                        <NewsList />
                    </div>
                    <div className="lg:col-span-1">
                        <NewsSidebar />
                    </div>
                </div>
            </section>
        </main>
    );
}
