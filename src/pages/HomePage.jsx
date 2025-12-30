import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import HeroSection from "../components/sections/HeroSection";
import CategorySection from "../components/sections/CategorySection";
import AdvantageSection from "../components/sections/AdvantageSection";
import ProgramSection from "../components/sections/ProgramSection";
import ServiceSection from "../components/sections/ServiceSection";
import FaqSection from "../components/sections/FaqSection";

import TraceStudySection from "../components/sections/TraceStudySection";
export default function HomePage() {
    return (
        <>
            <HeroSection />
            <CategorySection />
            <AdvantageSection />
            <TraceStudySection />
            <ServiceSection />
            <FaqSection />
        </>
    );
}
