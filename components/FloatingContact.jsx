import { Phone, MessageCircle } from "lucide-react";

export default function FloatingContact() {
  return (
    // md:hidden ensures these only show up on mobile/tablets. 
    // Remove md:hidden if you want them on desktop too!
    <div className="fixed bottom-6 right-4 z-50 flex flex-col gap-4 md:hidden">
      
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/917737877978?text=Hi%20Yash,%20I%20would%20like%20to%20inquire%20about%20your%20anchoring%20services."
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#25D366] text-white p-4 rounded-full shadow-[0_4px_15px_rgba(37,211,102,0.4)] flex items-center justify-center hover:scale-110 transition-transform active:scale-95"
        aria-label="WhatsApp Yash Soni"
      >
        <MessageCircle size={24} />
      </a>

      {/* Call Button */}
      <a
        href="tel:+917737877978"
        className="bg-[#D4AF37] text-black p-4 rounded-full shadow-[0_4px_15px_rgba(212,175,55,0.4)] flex items-center justify-center hover:scale-110 transition-transform active:scale-95"
        aria-label="Call Yash Soni"
      >
        <Phone size={24} />
      </a>

    </div>
  );
}