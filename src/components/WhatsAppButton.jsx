import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  const phone = "201033662585";

  const handleWhatsApp = () => {
    window.open(`https://wa.me/${phone}`, "_blank");
  };

  return (
    <button
      onClick={handleWhatsApp}
      className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-lg transition"
    >
      <FaWhatsapp className="text-xl" />
      WhatsApp
    </button>
  );
}
