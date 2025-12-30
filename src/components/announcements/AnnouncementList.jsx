import AnnouncementItem from "./AnnouncementItem";

export default function AnnouncementList() {
    const items = Array.from({ length: 5 });

    return (
        <div className="space-y-2">
            {items.map((_, i) => (
                <AnnouncementItem key={i} />
            ))}
        </div>
    );
}
