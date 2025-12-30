import AnnouncementsHeader from "../components/announcements/AnnouncementsHeader";
import AnnouncementHighlight from "../components/announcements/AnnouncementHighlight";
import AnnouncementList from "../components/announcements/AnnouncementList";

export default function AnnouncementsPage() {
    return (
        <main className="bg-grid pb-28">
            <AnnouncementsHeader />

            <section className="max-w-7xl mx-auto px-6 mt-10">
                <AnnouncementHighlight />
                <AnnouncementList />
            </section>
        </main>
    );
}
