import { X } from "lucide-react";
import { Link } from "react-router-dom";

export default function Sidebar({ open, onClose }) {
    return (
        <>
            {/* OVERLAY */}
            <div
                onClick={onClose}
                className={`
          fixed inset-0 z-40
          bg-black/40 backdrop-blur-sm
          transition-opacity
          ${open ? "opacity-100" : "opacity-0 pointer-events-none"}
        `}
            />

            {/* SIDEBAR */}
            <aside
                className={`
          fixed top-0 right-0 z-50
          h-full w-[320px]
          bg-white
          border-l border-gray-200
          p-6
          transform transition-transform duration-300
          ${open ? "translate-x-0" : "translate-x-full"}
        `}
            >
                {/* HEADER */}
                <div className="flex items-center justify-between mb-8">
                    <span className="font-bold text-lg">
                        Menu
                    </span>
                    <button onClick={onClose} className="p-2 min-h-[44px] min-w-[44px]">
                        <X className="w-5 h-5" />
                    </button>
                </div>

                {/* MENU */}
                <nav className="space-y-4">
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
                block
                px-4 py-3
                min-h-[44px]
                rounded-xl
                text-gray-700
                hover:bg-gray-100
                transition
              "
                            onClick={onClose}
                        >
                            {item.label}
                        </Link>
                    ))}
                </nav>

                {/* ACTION */}
                <div className="mt-10 space-y-3">
                    <button className="
            w-full py-3
            rounded-xl
            border border-gray-300
            text-sm
            min-h-[44px]
          ">
                        Masuk
                    </button>

                    <button className="
            w-full py-3
            rounded-xl
            bg-primary text-white
            text-sm
            min-h-[44px]
          ">
                        Daftar Perusahaan
                    </button>
                </div>
            </aside>
        </>
    );
}
