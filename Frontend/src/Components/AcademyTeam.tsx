import { FiCheckCircle } from "react-icons/fi";
import MasterEducatorImg from "../assets/master-educator.jpg";

const AcademyTeam = () => {
  return (
    <section className="w-full bg-black text-white py-20 lg:py-28 border-y border-neutral-900">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-16">
          <h3 className="text-xs uppercase tracking-[0.25em] text-neutral-400 font-semibold mb-3">
            Instructor & Mentorship
          </h3>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-editorial font-bold text-white tracking-tight">
            The Academy Faculty
          </h2>
          <p className="text-sm sm:text-base text-neutral-300 font-normal mt-3 leading-relaxed">
            Learn directly under our Master Educator with dedicated 1-on-1 technical feedback and live salon floor supervision.
          </p>
        </div>

        {/* Spotlight: Master Educator */}
        <div className="max-w-4xl mx-auto bg-neutral-900/90 border border-neutral-800 rounded-3xl overflow-hidden shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-12 items-center">
            {/* Educator Photo (5 columns) */}
            <div className="md:col-span-5 h-full min-h-[380px] sm:min-h-[460px] relative bg-neutral-950">
              <img
                src={MasterEducatorImg}
                alt="Damon Len Master Educator"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent md:hidden" />
            </div>

            {/* Educator Information (7 columns) */}
            <div className="md:col-span-7 p-7 sm:p-10 space-y-5">
              <div>
                <h3 className="text-2xl sm:text-3xl font-editorial font-bold text-white tracking-tight">
                  Master Educator
                </h3>
                <p className="text-sm font-semibold text-neutral-300 mt-1">
                  Precision Fading, Scissor Geometry & Traditional Shave Mastery
                </p>
              </div>

              <p className="text-xs sm:text-sm text-neutral-400 font-normal leading-relaxed">
                Directing the academy curriculum at Damon Len, our Master Educator brings disciplined salon artistry and technical expertise to Pulchowk. With an emphasis on hand ergonomics, shear balance, and blade angles, students receive direct personal instruction on live models to build true commercial confidence.
              </p>

              <div className="pt-2 space-y-2 text-xs sm:text-sm text-neutral-200">
                <div className="flex items-center gap-2.5">
                  <FiCheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>1-on-1 Personal Mentorship & Live Model Drills</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <FiCheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Advanced Architectural Scissor & Razor Mechanics</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <FiCheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Post-Graduation Career & Salon Placement Guidance</span>
                </div>
              </div>

              <div className="pt-4 border-t border-neutral-800 flex items-center justify-between text-xs text-neutral-400 font-mono">
                <span>10+ Years Mentorship</span>
                <span>Pulchowk Studio</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AcademyTeam;
