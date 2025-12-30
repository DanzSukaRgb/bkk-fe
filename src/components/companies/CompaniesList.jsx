import CompanyCard from "./CompanyCard";

export default function CompaniesList() {
    const companies = Array.from({ length: 8 });

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {companies.map((_, i) => (
                <CompanyCard key={i} />
            ))}
        </div>
    );
}
