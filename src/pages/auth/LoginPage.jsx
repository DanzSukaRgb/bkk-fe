import AuthSplitLayout from "../../components/auth/AuthSplitLayout";
import LoginForm from "../../components/auth/LoginForm";
import { Link } from "react-router-dom";

export default function LoginPage() {
    return (
        <AuthSplitLayout
            title="Login"
            subtitle="Masuk ke sistem Bursa Kerja Khusus"
        >
            <LoginForm onSubmit={(e) => e.preventDefault()} />

            <p className="mt-8 text-sm text-center text-gray-600">
                Perusahaan belum punya akun?{" "}
                <Link to="/register-perusahaan" className="text-primary font-medium">
                    Daftar Perusahaan
                </Link>
            </p>
        </AuthSplitLayout>
    );
}
