import { Link } from "react-router-dom";
import { FiArrowUpRight, FiCheck } from "react-icons/fi";

const serviceList = [
  {
    title: "Signature Precision Haircut",
    subtitle: "Architectural Scissors & Zero Taper",
    description:
      "A bespoke haircut calculated to your head shape, facial contours, and natural hair texture. Includes consultation, precision scissor cut, taper or skin fade, and styling.",
    duration: "45 Mins",
    features: [
      "Custom bone structure consultation",
      "Scissor-over-comb & precision fading",
      "Wash, scalp massage & thermal finish",
    ],
  },
  {
    title: "Beard Architecture & Hot Towel",
    subtitle: "Traditional Straight Razor Ritual",
    description:
      "Sculpted beard detailing with straight razor outline, hot towel essential oil compress, cold towel pore closure, and conditioning beard balm massage.",
    duration: "35 Mins",
    features: [
      "Razor perimeter alignment",
      "Hot towel essential oil compress",
      "Facial contouring & beard hydration",
    ],
  },
  {
    title: "Dimensional Balayage & Color",
    subtitle: "High-Gloss Custom Toning",
    description:
      "Hand-painted balayage, subtle baby-lights, or global color transformations tailored to your skin undertone with restorative bond protectors.",
    duration: "2 - 3 Hours",
    features: [
      "Skin undertone & pigment analysis",
      "Freehand balayage or foil placement",
      "Glossing toner & neutralizing bath",
    ],
  },
  {
    title: "Hair Spa & Keratin Therapy",
    subtitle: "Intensive Cellular Repair",
    description:
      "Deep moisture infusion, keratin protein alignment, and restorative scalp therapy to tame frizz, seal split ends, and restore mirror shine.",
    duration: "60 - 90 Mins",
    features: [
      "Micro-mist deep steam penetration",
      "Keratin & amino acid bond sealing",
      "Scalp detox & revitalizing massage",
    ],
  },
];

const Services = () => {
  return (
    <section className="pt-20 sm:pt-28 pb-8 sm:pb-12 bg-white text-neutral-900">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-14 sm:mb-20">
          <span className="text-xs uppercase tracking-[0.25em] text-neutral-500 font-semibold block mb-3">
            Bespoke Hairdressing & Grooming
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-editorial font-bold text-neutral-950 tracking-tight">
            Signature Services
          </h2>
          <p className="text-base sm:text-lg text-neutral-700 font-normal leading-relaxed mt-4 max-w-2xl mx-auto">
            Each service at Damon Len is tailored specifically to the individual. Walk-ins and appointments are welcomed daily at Pulchowk, Lalitpur.
          </p>
        </div>

        {/* Services Grid (Clean white card, soft elevation, does NOT turn black on hover) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {serviceList.map((service, idx) => (
            <div
              key={idx}
              className="p-7 sm:p-9 rounded-2xl border border-neutral-200/90 bg-white text-neutral-900 hover:border-neutral-400 hover:shadow-lg cursor-pointer transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-4">
                  <span className="text-[11px] uppercase tracking-wider font-bold px-3 py-1 rounded-full bg-neutral-100 text-neutral-800 border border-neutral-200">
                    {service.duration}
                  </span>
                  <span className="text-xs font-semibold text-neutral-400 font-mono">
                    0{idx + 1}
                  </span>
                </div>

                <h3 className="text-2xl font-editorial font-bold tracking-tight text-neutral-950 mb-1">
                  {service.title}
                </h3>

                <p className="text-xs uppercase tracking-wider font-semibold text-neutral-500 mb-4">
                  {service.subtitle}
                </p>

                <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed mb-6 font-normal">
                  {service.description}
                </p>

                <div className="space-y-2 mb-8">
                  {service.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-2.5 text-xs sm:text-sm">
                      <FiCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span className="text-neutral-800">
                        {feat}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-neutral-100 flex items-center justify-between gap-3">
                <span className="text-xs text-neutral-500 font-mono">
                  Pulchowk Studio
                </span>

                <Link
                  to="/contact"
                  className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-lg text-xs uppercase tracking-wider font-semibold transition-all duration-300 bg-gradient-to-r from-black via-neutral-900 to-neutral-800 hover:from-neutral-900 hover:via-neutral-800 hover:to-neutral-700 text-white border border-neutral-700/60 shadow-md cursor-pointer"
                >
                  <span>Book Appointment</span>
                  <FiArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
