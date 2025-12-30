import { useState } from "react";
import { Menu } from "lucide-react";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";
import Reveal from "../Reveal";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <>
            <header className="fixed top-4 left-0 right-0 z-50">
                <div className="max-w-7xl mx-auto px-6">
                    <Reveal
                        as="div"
                        className="
              bg-white/80 backdrop-blur-md
              border border-gray-200
              rounded-2xl
              shadow-sm
              px-6 py-3
              flex items-center justify-between
              down
            "
                    >
                        {/* LOGO */}
                        <div className="flex items-center gap-3">
                            <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center font-bold text-primary">
                                B
                            </div>
                            <span className="font-bold text-lg">
                                SMKN 6 JEMBER
                            </span>
                        </div>

                        {/* DESKTOP MENU */}
                        <nav className="hidden xl:flex items-center gap-2 bg-gray-100 rounded-full px-3 py-2 text-sm">
                            {[
                                { label: "Beranda", to: "/" },
                                { label: "Lowongan", to: "/lowongan" },
                                { label: "Perusahaan", to: "/perusahaan" },
                                { label: "Berita", to: "/berita" },
                                { label: "Pengumuman", to: "/pengumuman" },
                                { label: "Kontak", to: "/kontak" },
                            ].map((item) => (
                                <Link
                                    key={item.label}
                                    to={item.to}
                                    className="
                    px-4 py-1.5 rounded-full
                    text-gray-600
                    hover:bg-white hover:text-primary
                    transition
                  "
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </nav>

                        {/* ACTION */}
                        <div className="flex items-center gap-3">
                            <button className="hidden xl:block text-sm text-gray-600 hover:text-primary">
                                Masuk
                            </button>

                            <button className="
                hidden xl:block
                text-sm px-4 py-2
                rounded-xl
                bg-primary text-white
              ">
                                Daftar Perusahaan
                            </button>

                            {/* HAMBURGER (≤1200px) */}
                            <button
                                onClick={() => setOpen(true)}
                                className="xl:hidden p-2 rounded-lg hover:bg-gray-100"
                            >
                                <Menu className="w-5 h-5" />
                            </button>
                        </div>
                    </Reveal>
                </div>
            </header>

            {/* SIDEBAR */}
            <Sidebar open={open} onClose={() => setOpen(false)} />
        </>
    );
}
