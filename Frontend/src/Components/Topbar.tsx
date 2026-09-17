import { FiClock, FiMapPin, FiMail, FiPhone } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

const Topbar = () => {
  return (
    <div className="bg-neutral-900 text-neutral-300 text-[11px] tracking-wider py-2 px-4 sm:px-8 border-b border-neutral-800">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
        {/* Working Hours & Location */}
        <div className="flex items-center gap-4 sm:gap-6 font-sans-clean font-light text-neutral-400">
          <span className="flex items-center gap-1.5 hover:text-white transition-colors">
            <FiClock className="w-3.5 h-3.5 text-neutral-400" />
            <span>Mon – Sun: 10:00 AM – 7:00 PM</span>
          </span>
          <a
            href="https://maps.app.goo.gl/5RFsPaPPghAVXY566"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-1.5 hover:text-white transition-colors group cursor-pointer"
          >
            <FiMapPin className="w-3.5 h-3.5 text-neutral-400 group-hover:text-emerald-400 transition-colors" />
            <span className="underline-offset-2 group-hover:underline">Location & Directions</span>
          </a>
        </div>

        {/* Quick Contacts: Email, WhatsApp, Phone */}
        <div className="flex items-center gap-4 sm:gap-5 font-sans-clean">
          <a
            href="mailto:damonlenunisexsalonacademy@gmail.com"
            className="hidden xl:flex items-center gap-1.5 text-neutral-400 hover:text-white transition-colors text-[11px]"
          >
            <FiMail className="w-3 h-3 text-neutral-400" />
            <span>damonlenunisexsalonacademy@gmail.com</span>
          </a>
          <span className="hidden xl:inline text-neutral-700">|</span>
          <a
            href="https://wa.me/9779765148958"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 transition-colors font-medium tracking-wide"
          >
            <FaWhatsapp className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">WhatsApp</span>
          </a>
          <span className="text-neutral-700">|</span>
          <a
            href="tel:+9779765148958"
            className="flex items-center gap-1.5 text-neutral-200 hover:text-white transition-colors font-medium tracking-wide"
          >
            <FiPhone className="w-3 h-3 text-neutral-400" />
            <span>976-5148958</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
