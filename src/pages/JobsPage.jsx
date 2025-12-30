import JobsHeader from "../components/jobs/JobsHeader";
import JobsFilter from "../components/jobs/JobsFilter";
import JobsToolbar from "../components/jobs/JobsToolbar";
import JobsList from "../components/jobs/JobsList";

export default function JobsPage() {
    return (
        <main className="bg-grid pb-20 md:pb-28">
            <JobsHeader />

            <section className="max-w-7xl mx-auto px-4 md:px-6 mt-8 md:mt-10 grid md:grid-cols-4 gap-8">
                {/* FILTER */}
                <div className="md:col-span-1">
                    <JobsFilter />
                </div>

                {/* LIST */}
                <div className="md:col-span-3 space-y-6">
                    <JobsToolbar />
                    <JobsList />
                </div>
            </section>
        </main>
    );
}
