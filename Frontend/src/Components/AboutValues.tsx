import { FiScissors, FiFeather, FiBookOpen, FiShield } from "react-icons/fi";

const pillars = [
  {
    icon: FiScissors,
    title: "Architectural Precision",
    description:
      "Every scissor angle and fade taper is calculated to compliment bone structure and ensure longevity between visits.",
  },
  {
    icon: FiFeather,
    title: "Bespoke Hair Chemistry",
    description:
      "Advanced color formulation, dimensional balayage, and restorative keratin treatments prioritizing hair health and shine.",
  },
  {
    icon: FiBookOpen,
    title: "The Professional Academy",
    description:
      "A structured curriculum mentoring emerging stylists in foundational geometry, scissor mastery, and client communication.",
  },
  {
    icon: FiShield,
    title: "Uncompromising Standards",
    description:
      "Hospitality, unhurried consultations, rigorous tool sterilization, and high-performance salon products.",
  },
];

const AboutValues = () => {
  return (
    <section className="w-full bg-black text-white py-20 lg:py-28 border-y border-neutral-900">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-16">
          <h3 className="text-xs uppercase tracking-[0.25em] text-neutral-400 font-semibold mb-3">
            Our Foundation
          </h3>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-editorial font-bold text-white tracking-tight">
            Pillars of Damon Len
          </h2>
          <p className="text-sm sm:text-base text-neutral-300 font-normal mt-3 leading-relaxed">
            The four principles that define every cut, color, and lecture across our studio and academy.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="p-6 sm:p-7 rounded-2xl bg-neutral-900/90 border border-neutral-800 hover:border-neutral-700 transition-all duration-200 space-y-4"
              >
                <div className="w-10 h-10 rounded-xl bg-white text-black flex items-center justify-center">
                  <Icon className="w-5 h-5" />
                </div>
                <h4 className="text-base font-semibold text-white">
                  {pillar.title}
                </h4>
                <p className="text-xs sm:text-sm text-neutral-400 font-normal leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutValues;
