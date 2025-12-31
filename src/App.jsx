import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";

/* ===== LAYOUT ===== */
import PublicLayout from "./components/layout/PublicLayout";

/* ===== PAGES ===== */
const HomePage = lazy(() => import("./pages/HomePage"));
const JobsPage = lazy(() => import("./pages/JobsPage"));
const JobDetailPage = lazy(() => import("./pages/JobDetailPage"));
const CompaniesPage = lazy(() => import("./pages/CompaniesPage"));
const CompanyDetailPage = lazy(() => import("./pages/CompanyDetailPage"));
const NewsPage = lazy(() => import("./pages/NewsPage"));
const NewsDetailPage = lazy(() => import("./pages/NewsDetailPage"));
const AnnouncementsPage = lazy(() => import("./pages/AnnouncementsPage"));
const AnnouncementDetailPage = lazy(() => import("./pages/AnnouncementDetailPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const TraceStudyPage = lazy(() => import("./pages/TraceStudyPage"));

/* ===== AUTH ===== */
const LoginPage = lazy(() => import("./pages/auth/LoginPage"));
const CompanyRegisterPage = lazy(() =>
    import("./pages/auth/CompanyRegisterPage")
);

export default function App() {
    return (
        <BrowserRouter>
            <Suspense fallback={null}>
                <Routes>
                    {/* ===== AUTH (NO NAVBAR / FOOTER) ===== */}
                    <Route path="/login" element={<LoginPage />} />
                    <Route
                        path="/register-perusahaan"
                        element={<CompanyRegisterPage />}
                    />

                    {/* ===== PUBLIC (WITH NAVBAR / FOOTER) ===== */}
                    <Route element={<PublicLayout />}>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/trace-study" element={<TraceStudyPage />} />

                        <Route path="/lowongan" element={<JobsPage />} />
                        <Route path="/lowongan/:slug" element={<JobDetailPage />} />

                        <Route path="/perusahaan" element={<CompaniesPage />} />
                        <Route path="/perusahaan/:slug" element={<CompanyDetailPage />} />

                        <Route path="/berita" element={<NewsPage />} />
                        <Route path="/berita/:slug" element={<NewsDetailPage />} />

                        <Route path="/pengumuman" element={<AnnouncementsPage />} />
                        <Route
                            path="/pengumuman/:slug"
                            element={<AnnouncementDetailPage />}
                        />

                        <Route path="/kontak" element={<ContactPage />} />
                    </Route>
                </Routes>
            </Suspense>
        </BrowserRouter>
    );
}
