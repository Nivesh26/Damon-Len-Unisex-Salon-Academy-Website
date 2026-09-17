import { Link } from "react-router-dom";
import { FiArrowUpRight, FiScissors, FiBookOpen } from "react-icons/fi";

const Duelidentity = () => {
  return (
    <section className="w-full bg-black text-white py-20 lg:py-28 border-b border-neutral-900">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <span className="text-xs uppercase tracking-[0.25em] text-neutral-400 font-semibold block mb-3">
            Two Pillars · One Philosophy
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-editorial font-bold text-white tracking-tight">
            The Salon & The Academy
          </h2>
          <p className="text-sm sm:text-base text-neutral-300 font-normal mt-3 leading-relaxed">
            Damon Len operates with a dual purpose in Pulchowk: delivering bespoke client artistry in our salon chairs while mentoring the next generation of master stylists in our academy.
          </p>
        </div>

        {/* Dual Identity Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {/* Card 1: The Salon Studio */}
          <div className="p-8 sm:p-10 rounded-3xl bg-neutral-900/90 border border-neutral-800 hover:border-neutral-700 transition-all flex flex-col justify-between space-y-8">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-white text-black flex items-center justify-center">
                <FiScissors className="w-6 h-6" />
              </div>

              <span className="text-xs uppercase tracking-[0.2em] text-emerald-400 font-semibold block">
                Bespoke Client Sanctuary
              </span>

              <h3 className="text-2xl sm:text-3xl font-editorial font-bold text-white tracking-tight">
                The Salon Experience
              </h3>

              <p className="text-sm text-neutral-300 font-normal leading-relaxed">
                Step into a calm, minimalist environment designed around personal attention. Every haircut, beard sculpt, and color treatment is executed with architectural precision to match your lifestyle and bone structure.
              </p>

              <div className="pt-2 space-y-2 text-xs text-neutral-400">
                <p>• Open 7 Days a Week: 10:00 AM – 7:00 PM</p>
                <p>• Walk-ins Welcome Anytime · Priority Appointments</p>
                <p>• Premium European & Japanese Hair Products</p>
              </div>
            </div>

            <div className="pt-6 border-t border-neutral-800 flex items-center justify-between">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white text-black text-xs uppercase tracking-widest font-semibold hover:bg-neutral-200 transition-colors shadow-sm"
              >
                <span>Reserve Appointment</span>
                <FiArrowUpRight className="w-4 h-4" />
              </Link>

              <Link
                to="/lookbook"
                className="text-xs uppercase tracking-wider text-neutral-400 hover:text-white transition-colors underline underline-offset-4"
              >
                View Lookbook
              </Link>
            </div>
          </div>

          {/* Card 2: The Academy */}
          <div className="p-8 sm:p-10 rounded-3xl bg-neutral-900/90 border border-neutral-800 hover:border-neutral-700 transition-all flex flex-col justify-between space-y-8">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-white text-black flex items-center justify-center">
                <FiBookOpen className="w-6 h-6" />
              </div>

              <span className="text-xs uppercase tracking-[0.2em] text-emerald-400 font-semibold block">
                Vocational Education & Apprenticeship
              </span>

              <h3 className="text-2xl sm:text-3xl font-editorial font-bold text-white tracking-tight">
                The Professional Academy
              </h3>

              <p className="text-sm text-neutral-300 font-normal leading-relaxed">
                Elevating hair craftsmanship in Nepal through structured vocational diplomas. Students learn technical head geometry, scissor mastery, fading mechanics, and live model execution directly from active senior educators.
              </p>

              <div className="pt-2 space-y-2 text-xs text-neutral-400">
                <p>• Cohort Cap: Maximum 6 Students per Batch</p>
                <p>• 100% Practical Drills & Supervised Live Client Models</p>
                <p>• Career Placement & Diploma Certification Included</p>
              </div>
            </div>

            <div className="pt-6 border-t border-neutral-800 flex items-center justify-between">
              <Link
                to="/academy"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white text-black text-xs uppercase tracking-widest font-semibold hover:bg-neutral-200 transition-colors shadow-sm"
              >
                <span>Explore Academy</span>
                <FiArrowUpRight className="w-4 h-4" />
              </Link>

              <a
                href="https://wa.me/9779765148958?text=Hello%20Damon%20Len%20Academy,%20I%20would%20like%20to%20inquire%20about%20upcoming%20courses."
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs uppercase tracking-wider text-neutral-400 hover:text-white transition-colors underline underline-offset-4"
              >
                WhatsApp Inquiry
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Duelidentity;
