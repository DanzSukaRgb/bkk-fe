import TraceIntro from "../components/trace-study/TraceIntro";
import TraceBigNumbers from "../components/trace-study/TraceBigNumbers";
import TraceJourney from "../components/trace-study/TraceJourney";
import TraceRelevance from "../components/trace-study/TraceRelevance";
import TraceFields from "../components/trace-study/TraceFields";
import TraceClosing from "../components/trace-study/TraceClosing";

export default function TraceStudyPage() {
    return (
        <main className="bg-grid pt-36 pb-32">
            <div className="max-w-7xl mx-auto px-6 space-y-28">
                <TraceIntro />
                <TraceBigNumbers />
                <TraceJourney />
                <TraceRelevance />
                <TraceFields />
                <TraceClosing />
            </div>
        </main>
    );
}
