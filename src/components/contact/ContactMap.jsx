import Reveal from "../Reveal";

export default function ContactMap() {
    return (
        <Reveal
            as="div"
            className="
        bg-white border border-gray-200
        rounded-3xl overflow-hidden
      "
        >
            <iframe
                title="Lokasi SMKN 6 Jember"
                src="https://www.google.com/maps?q=SMKN+6+Jember&output=embed"
                className="w-full h-[360px] border-0"
                loading="lazy"
            />
        </Reveal>
    );
}
