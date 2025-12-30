import CompanyCard from "./CompanyCard";

export default function CompaniesList() {
    const companies = Array.from({ length: 8 });

    return (
        <div className="grid md:grid-cols-4 gap-6">
            {companies.map((_, i) => (
                <CompanyCard key={i} />
            ))}
        </div>
    );
}
