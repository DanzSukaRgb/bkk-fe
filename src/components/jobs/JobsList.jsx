import JobItem from "./JobItem";

export default function JobsList() {
    const jobs = [1, 2, 3, 4, 5];

    if (!jobs.length) {
        return (
            <div className="bg-white border border-gray-200 rounded-2xl p-6 md:p-10 text-center">
                <p className="text-gray-600">
                    Tidak ada lowongan yang tersedia
                </p>
            </div>
        );
    }

    return (
        <div className="space-y-5">
            {jobs.map((job) => (
                <JobItem key={job} />
            ))}
        </div>
    );
}
