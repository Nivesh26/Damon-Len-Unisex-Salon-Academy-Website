import { Link } from "react-router-dom";
import { FiArrowUpRight, FiPhone, FiMapPin } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa6";

const AcademyCta = () => {
  return (
    <section className="pt-16 sm:pt-24 pb-8">
      <div className="max-w-3xl mx-auto text-center space-y-6">
        <h3 className="text-3xl sm:text-4xl font-editorial font-bold text-neutral-950 tracking-tight">
          Reserve Your Seat for the Next Cohort
        </h3>
        <p className="text-base text-neutral-700 font-normal leading-relaxed max-w-xl mx-auto">
          Cohort sizes are capped at 6 students to maintain intensive 1-on-1 instruction. Contact our academy team for full syllabus details, fee installments, or to schedule an in-person studio visit in Pulchowk.
        </p>

        <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-neutral-300 bg-white text-neutral-900 text-xs uppercase tracking-widest font-semibold hover:bg-black hover:text-white hover:border-black transition-all cursor-pointer shadow-xs"
          >
            <span>Apply or Inquire</span>
            <FiArrowUpRight className="w-4 h-4" />
          </Link>

          <a
            href="https://wa.me/9779765148958?text=Hello%20Damon%20Len%20Academy,%20I%20would%20like%20to%20inquire%20about%20course%20admissions."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-neutral-300 bg-white text-neutral-900 text-xs uppercase tracking-widest font-semibold hover:bg-black hover:text-white hover:border-black transition-all cursor-pointer shadow-xs group"
          >
            <FaWhatsapp className="w-4 h-4 text-emerald-600 group-hover:text-emerald-400" />
            <span>WhatsApp Admissions</span>
          </a>

          <a
            href="tel:+9779765148958"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-neutral-300 bg-white text-neutral-900 text-xs uppercase tracking-widest font-semibold hover:bg-black hover:text-white hover:border-black transition-all cursor-pointer shadow-xs"
          >
            <FiPhone className="w-3.5 h-3.5" />
            <span>976-5148958</span>
          </a>

          <a
            href="https://maps.app.goo.gl/5RFsPaPPghAVXY566"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-neutral-300 bg-white text-neutral-900 text-xs uppercase tracking-widest font-semibold hover:bg-black hover:text-white hover:border-black transition-all cursor-pointer shadow-xs"
          >
            <FiMapPin className="w-3.5 h-3.5" />
            <span>Pulchowk, Lalitpur</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default AcademyCta;
