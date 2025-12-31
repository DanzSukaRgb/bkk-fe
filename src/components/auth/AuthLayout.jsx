import { Link } from "react-router-dom";

export default function AuthLayout({ title, subtitle, children }) {
    return (
        <main className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
            <div className="w-full max-w-md">
                {/* BRAND */}
                <Link
                    to="/"
                    className="block text-center mb-8 font-bold text-xl tracking-tight"
                >
                    BKK SMKN 6 JEMBER
                </Link>

                {/* CARD */}
                <div
                    className="
            bg-white
            border border-gray-200
            rounded-3xl
            shadow-sm
            px-6 sm:px-8 py-8
          "
                >
                    <h1 className="text-2xl font-bold mb-1">
                        {title}
                    </h1>
                    <p className="text-sm text-gray-600 mb-8">
                        {subtitle}
                    </p>

                    {children}
                </div>
            </div>
        </main>
    );
}
