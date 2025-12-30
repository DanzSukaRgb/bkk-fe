export default function ContactForm() {
    const handleSubmit = (event) => {
        event.preventDefault();
    };

    return (
        <form
            className="
        bg-white border border-gray-200
        rounded-3xl p-6 md:p-8
        space-y-5
      "
            onSubmit={handleSubmit}
        >
            <h2 className="font-semibold text-lg mb-2">
                Kirim Pesan
            </h2>

            <Input label="Nama Lengkap" placeholder="Nama Anda" />
            <Input label="Email" placeholder="email@example.com" />
            <Input label="Subjek" placeholder="Perihal pesan" />

            <div>
                <label className="text-sm font-medium">
                    Pesan
                </label>
                <textarea
                    rows="4"
                    placeholder="Tulis pesan Anda..."
                    className="
            mt-1 w-full
            border border-gray-300
            rounded-xl px-4 py-2 min-h-[120px]
            text-sm outline-none
          "
                />
            </div>

            <button
                type="submit"
                className="
          w-full py-3 rounded-xl
          bg-primary text-white
          font-medium
          hover:opacity-90
          min-h-[44px]
        "
            >
                Kirim Pesan
            </button>

            <p className="text-xs text-gray-500 text-center">
                Pesan akan diproses oleh pihak sekolah
            </p>
        </form>
    );
}

function Input({ label, placeholder }) {
    return (
        <div>
            <label className="text-sm font-medium">
                {label}
            </label>
            <input
                placeholder={placeholder}
                className="
          mt-1 w-full
          border border-gray-300
          rounded-xl px-4 py-2 min-h-[44px]
          text-sm outline-none
        "
            />
        </div>
    );
}
