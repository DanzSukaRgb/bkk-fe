export default function LoginForm({ onSubmit }) {
    return (
        <form onSubmit={onSubmit} className="space-y-5">
            <Field
                label="Email"
                type="email"
                placeholder="contoh@perusahaan.com"
            />

            <Field
                label="Password"
                type="password"
                placeholder="Masukkan password Anda"
            />

            <button
                type="submit"
                className="
          w-full min-h-[48px]
          rounded-xl bg-primary
          text-white font-medium
          hover:opacity-90 transition
        "
            >
                Masuk
            </button>
        </form>
    );
}

function Field({ label, ...props }) {
    return (
        <div className="space-y-1">
            <label className="text-sm font-medium">
                {label}
            </label>
            <input
                {...props}
                className="
          w-full min-h-[48px]
          rounded-xl border
          px-4 text-sm
          outline-none
          focus:ring-2 focus:ring-primary/20
        "
            />
        </div>
    );
}
