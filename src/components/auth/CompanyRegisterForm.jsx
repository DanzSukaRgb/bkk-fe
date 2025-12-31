export default function CompanyRegisterForm({ onSubmit }) {
    return (
        <form onSubmit={onSubmit} className="space-y-8">
            <Section title="Informasi Perusahaan">
                <Field label="Nama Perusahaan" required />
                <Field label="Bidang Usaha" required />
                <Textarea label="Alamat Perusahaan" />
            </Section>

            <Section title="Kontak & Penanggung Jawab">
                <Field label="Nama PIC" required />
                <Field label="Email Perusahaan" type="email" required />
                <Field label="Nomor WhatsApp" required />
            </Section>

            <Section title="Akun Login">
                <Field label="Password" type="password" required />
                <Field label="Konfirmasi Password" type="password" required />
            </Section>

            <label className="flex items-start gap-3 text-sm text-gray-600">
                <input type="checkbox" required className="mt-1" />
                Saya menyatakan data perusahaan benar dan siap diverifikasi oleh admin.
            </label>

            <button
                type="submit"
                className="
          w-full
          min-h-[48px]
          rounded-xl
          bg-primary
          text-white
          font-medium
          transition
          hover:opacity-90
        "
            >
                Daftar Perusahaan
            </button>
        </form>
    );
}

/* === helpers === */

function Section({ title, children }) {
    return (
        <div className="space-y-4">
            <h3 className="font-semibold text-lg">
                {title}
            </h3>
            {children}
        </div>
    );
}

function Field({ label, ...props }) {
    return (
        <div className="space-y-1">
            <label className="text-sm font-medium text-gray-700">
                {label}
            </label>
            <input
                {...props}
                className="
          w-full
          min-h-[48px]
          rounded-xl
          border border-gray-300
          px-4
          text-sm
          outline-none
          focus:border-primary
          focus:ring-2 focus:ring-primary/20
        "
            />
        </div>
    );
}

function Textarea({ label }) {
    return (
        <div className="space-y-1">
            <label className="text-sm font-medium text-gray-700">
                {label}
            </label>
            <textarea
                rows="3"
                className="
          w-full
          rounded-xl
          border border-gray-300
          px-4 py-2
          text-sm
          outline-none
          focus:border-primary
          focus:ring-2 focus:ring-primary/20
        "
            />
        </div>
    );
}
