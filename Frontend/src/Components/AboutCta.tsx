import { Link } from "react-router-dom";
import { FiArrowUpRight, FiMapPin } from "react-icons/fi";

const AboutCta = () => {
  return (
    <section className="pt-10 sm:pt-14 pb-4">
      <div className="max-w-3xl mx-auto text-center space-y-6">
        <h3 className="text-3xl sm:text-4xl font-editorial font-bold text-neutral-950 tracking-tight">
          Visit Damon Len in Pulchowk
        </h3>
        <p className="text-base text-neutral-700 font-normal leading-relaxed max-w-xl mx-auto">
          We welcome walk-ins and appointments daily from 10:00 AM to 7:00 PM. Experience bespoke haircutting, color transformations, or consult with us regarding academy courses.
        </p>

        <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-black text-white text-xs uppercase tracking-widest font-semibold hover:bg-neutral-800 transition-colors shadow-sm"
          >
            <span>Contact & Inquiries</span>
            <FiArrowUpRight className="w-4 h-4" />
          </Link>

          <Link
            to="/lookbook"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-neutral-300 text-neutral-900 text-xs uppercase tracking-widest font-semibold hover:bg-neutral-100 transition-colors"
          >
            <span>View Our Lookbook</span>
            <FiArrowUpRight className="w-4 h-4" />
          </Link>

          <a
            href="https://maps.app.goo.gl/5RFsPaPPghAVXY566"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-neutral-300 text-neutral-900 text-xs uppercase tracking-widest font-semibold hover:bg-neutral-100 transition-colors"
          >
            <FiMapPin className="w-3.5 h-3.5 text-neutral-900" />
            <span>Pulchowk, Lalitpur</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutCta;
