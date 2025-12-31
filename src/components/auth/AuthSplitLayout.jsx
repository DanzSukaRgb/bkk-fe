import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const slides = [
    {
        image: "/images/auth/slide-1.webp",
        title: "Kolaborasi Sekolah & Industri",
        desc: "Bangun kerja sama rekrutmen yang terarah dan terpercaya.",
    },
    {
        image: "/images/auth/slide-2.webp",
        title: "Rekrut Talenta Siap Kerja",
        desc: "Temukan lulusan SMK yang sesuai kebutuhan perusahaan.",
    },
    {
        image: "/images/auth/slide-3.webp",
        title: "Proses Aman & Terverifikasi",
        desc: "Setiap perusahaan diverifikasi oleh admin sekolah.",
    },
];

export default function AuthSplitLayout({ title, subtitle, children }) {
    const [active, setActive] = useState(0);

    useEffect(() => {
        // preload images (cache browser)
        slides.forEach((s) => {
            const img = new Image();
            img.src = s.image;
        });

        const interval = setInterval(() => {
            setActive((p) => (p + 1) % slides.length);
        }, 4500);

        return () => clearInterval(interval);
    }, []);

    return (
        <main className="min-h-screen grid lg:grid-cols-2 bg-gray-50">
            {/* LEFT – FORM */}
            <div className="flex items-center justify-center px-6 py-10">
                <div className="w-full max-w-md">
                    <Link
                        to="/"
                        className="block text-center mb-8 font-bold text-xl"
                    >
                        BKK SMKN 6 JEMBER
                    </Link>

                    <div className="bg-white border rounded-3xl shadow-sm px-6 py-8">
                        <h1 className="text-2xl font-bold mb-1">
                            {title}
                        </h1>
                        <p className="text-sm text-gray-600 mb-8">
                            {subtitle}
                        </p>

                        {children}
                    </div>
                </div>
            </div>

            {/* RIGHT – IMAGE SLIDESHOW */}
            <div className="hidden lg:flex relative overflow-hidden">
                {/* IMAGE */}
                <img
                    src={slides[active].image}
                    alt={slides[active].title}
                    width="1920"
                    height="1080"
                    loading="eager"
                    decoding="async"
                    className="
            absolute inset-0 w-full h-full
            object-cover
            transition-opacity duration-700
          "
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/60 to-white/90" />

                {/* TEXT */}
                <div className="relative z-10 flex items-center px-16">
                    <div>
                        <h2 className="text-3xl font-bold mb-4">
                            {slides[active].title}
                        </h2>
                        <p className="text-lg text-gray-700 max-w-md">
                            {slides[active].desc}
                        </p>

                        {/* DOTS */}
                        <div className="flex gap-2 mt-8">
                            {slides.map((_, i) => (
                                <span
                                    key={i}
                                    className={`h-2 w-2 rounded-full ${i === active
                                        ? "bg-primary"
                                        : "bg-primary/30"
                                        }`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
