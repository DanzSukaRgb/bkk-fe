import AuthSplitLayout from "../../components/auth/AuthSplitLayout";
import CompanyRegisterWizard from "../../components/auth/CompanyRegisterWizard";
import { Link } from "react-router-dom";

export default function CompanyRegisterPage() {
    return (
        <AuthSplitLayout
            title="Pendaftaran Perusahaan"
            subtitle="Lengkapi data perusahaan secara bertahap"
        >
            <CompanyRegisterWizard />

            <p className="mt-8 text-sm text-center text-gray-600">
                Sudah punya akun?{" "}
                <Link to="/login" className="text-primary font-medium">
                    Login
                </Link>
            </p>
        </AuthSplitLayout>
    );
}
