import { Link } from "react-router-dom";
import { FiArrowUpRight, FiPhone } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa6";

const LookbookCta = () => {
  return (
    <section className="border-t border-neutral-200 mt-20 sm:mt-28 pt-16 sm:pt-20 pb-8">
      <div className="max-w-3xl mx-auto text-center space-y-6">
        <h3 className="text-3xl sm:text-4xl font-editorial font-bold text-neutral-950 tracking-tight">
          Experience Bespoke Craftsmanship
        </h3>
        <p className="text-base text-neutral-700 font-normal leading-relaxed max-w-xl mx-auto">
          Every cut, color, and finish is tailored specifically to your facial structure, hair texture, and personal style. Walk-ins and appointments are welcome daily at Pulchowk, Lalitpur.
        </p>

        <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-black text-white text-xs uppercase tracking-widest font-semibold hover:bg-neutral-800 transition-colors shadow-sm"
          >
            <span>Book an Appointment</span>
            <FiArrowUpRight className="w-4 h-4" />
          </Link>

          <a
            href="https://wa.me/9779765148958"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-neutral-300 text-neutral-900 text-xs uppercase tracking-widest font-semibold hover:bg-neutral-100 transition-colors"
          >
            <FaWhatsapp className="w-4 h-4 text-emerald-600" />
            <span>Chat on WhatsApp</span>
          </a>

          <a
            href="tel:+9779765148958"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-neutral-300 text-neutral-900 text-xs uppercase tracking-widest font-semibold hover:bg-neutral-100 transition-colors"
          >
            <FiPhone className="w-3.5 h-3.5" />
            <span>976-5148958</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default LookbookCta;
