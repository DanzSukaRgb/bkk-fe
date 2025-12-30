import CompaniesHeader from "../components/companies/CompaniesHeader";
import CompaniesToolbar from "../components/companies/CompaniesToolbar";
import CompaniesList from "../components/companies/CompaniesList";

export default function CompaniesPage() {
    return (
        <main className="bg-grid pb-20 md:pb-28">
            <CompaniesHeader />

            <section className="max-w-7xl mx-auto px-4 md:px-6 mt-8 md:mt-10">
                <CompaniesToolbar />
                <CompaniesList />
            </section>
        </main>
    );
}
