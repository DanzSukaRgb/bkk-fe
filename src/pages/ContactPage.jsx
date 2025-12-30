import ContactHeader from "../components/contact/ContactHeader";
import ContactInfo from "../components/contact/ContactInfo";
import ContactForm from "../components/contact/ContactForm";
import ContactMap from "../components/contact/ContactMap";

export default function ContactPage() {
    return (
        <main className="bg-grid pb-28">
            <ContactHeader />

            <section className="max-w-7xl mx-auto px-6 mt-10 grid lg:grid-cols-2 gap-10">
                <ContactInfo />
                <ContactForm />
            </section>

            <section className="max-w-7xl mx-auto px-6 mt-14">
                <ContactMap />
            </section>
        </main>
    );
}
