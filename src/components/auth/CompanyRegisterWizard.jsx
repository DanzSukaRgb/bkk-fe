import { useState } from "react";

export default function CompanyRegisterWizard() {
    const [step, setStep] = useState(1);

    return (
        <div className="space-y-8">
            <Stepper step={step} />

            {step === 1 && <Step1 />}
            {step === 2 && <Step2 />}
            {step === 3 && <Step3 />}
            {step === 4 && <Step4 />}

            <div className="flex justify-between pt-4">
                {step > 1 && (
                    <button
                        onClick={() => setStep(step - 1)}
                        className="text-sm text-gray-600"
                    >
                        Kembali
                    </button>
                )}

                <button
                    onClick={() =>
                        step < 4 ? setStep(step + 1) : alert("Submit ke backend")
                    }
                    className="ml-auto px-6 py-3 rounded-xl bg-primary text-white"
                >
                    {step < 4 ? "Lanjut" : "Kirim Pendaftaran"}
                </button>
            </div>
        </div>
    );
}

/* ===== STEPS ===== */

function Stepper({ step }) {
    return (
        <div className="flex justify-between text-xs text-gray-500">
            {["Perusahaan", "Kontak", "Akun", "Selesai"].map((label, i) => (
                <div
                    key={label}
                    className={`flex-1 text-center ${step >= i + 1 ? "text-primary font-medium" : ""
                        }`}
                >
                    {label}
                </div>
            ))}
        </div>
    );
}

function Step1() {
    return (
        <Section title="Informasi Perusahaan">
            <Field label="Nama Perusahaan" placeholder="PT Contoh Sejahtera" />
            <Field label="Bidang Usaha" placeholder="Manufaktur / IT / Retail" />
            <Textarea label="Alamat Perusahaan" />
        </Section>
    );
}

function Step2() {
    return (
        <Section title="Kontak & PIC">
            <Field label="Nama PIC" placeholder="Nama penanggung jawab" />
            <Field label="Email Perusahaan" placeholder="email@perusahaan.com" />
            <Field label="Nomor WhatsApp" placeholder="08xxxxxxxxxx" />
        </Section>
    );
}

function Step3() {
    return (
        <Section title="Akun Login">
            <Field label="Password" type="password" />
            <Field label="Konfirmasi Password" type="password" />
        </Section>
    );
}

function Step4() {
    return (
        <div className="text-sm text-gray-600">
            <p className="font-medium text-gray-800 mb-2">
                Review & Konfirmasi
            </p>
            <p>
                Pastikan data yang diisi sudah benar. Akun perusahaan akan
                diverifikasi oleh admin sebelum aktif.
            </p>
        </div>
    );
}

/* ===== UI ===== */

function Section({ title, children }) {
    return (
        <div className="space-y-4">
            <h3 className="font-semibold text-lg">{title}</h3>
            {children}
        </div>
    );
}

function Field({ label, ...props }) {
    return (
        <div className="space-y-1">
            <label className="text-sm font-medium">{label}</label>
            <input
                {...props}
                className="w-full min-h-[48px] rounded-xl border px-4 text-sm"
            />
        </div>
    );
}

function Textarea({ label }) {
    return (
        <div className="space-y-1">
            <label className="text-sm font-medium">{label}</label>
            <textarea
                rows="3"
                className="w-full rounded-xl border px-4 py-2 text-sm"
            />
        </div>
    );
}
