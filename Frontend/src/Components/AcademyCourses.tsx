import { Link } from "react-router-dom";
import { FiCheck, FiArrowUpRight } from "react-icons/fi";

const courses = [
  {
    title: "Master Barbering Diploma",
    duration: "3 Months (12 Weeks)",
    level: "Beginner to Professional",
    description:
      "A comprehensive foundation covering the entire modern barbering craft, from architectural scissor geometry to seamless skin fades and traditional hot towel razor services.",
    modules: [
      "Head anatomy, bone structure & client consultation",
      "Scissor-over-comb & structural hair sectioning",
      "Skin fades, tapers, and low/mid/high blend gradients",
      "Straight razor shave & beard sculpt architecture",
      "Sanitation, tool maintenance & salon guest relations",
    ],
  },
  {
    title: "Advanced Unisex Hairdressing",
    duration: "4 Months (16 Weeks)",
    level: "Comprehensive",
    description:
      "Master the art of contemporary men's and women's hair design. Learn directional cutting, graduation, disconnection, and salon-speed execution.",
    modules: [
      "Precision blunt, textured, and layered cutting",
      "Face framing, curtain bangs, and perimeter control",
      "Blowouts, volume control & thermal iron styling",
      "Client retention, portfolio curation & career pathways",
    ],
  },
  {
    title: "Hair Color & Chemistry Masterclass",
    duration: "6 Weeks Intensive",
    level: "Intermediate to Advanced",
    description:
      "A specialized technical program breaking down color theory, lightening chemistry, balayage ergonomics, and restorative keratin treatments.",
    modules: [
      "Melanin physics & developer volume calculations",
      "Freehand balayage, foliage & micro-weave foils",
      "Neutralization, corrective toning & glossing",
      "Deep hair spa, keratin therapy & bond restoration",
    ],
  },
  {
    title: "Weekend Barbering Bootcamp",
    duration: "4 Weeks (Sat & Sun)",
    level: "Fast-Track Workshop",
    description:
      "Designed for working stylists seeking to refine their fading speeds, razor precision, and modern textured crop executions.",
    modules: [
      "Zero fade transitions & foil shaver ergonomics",
      "Modern fringe texturizing & point cutting",
      "Beard alignment & clean hairline detailing",
      "Practical speed tests & live instructor critique",
    ],
  },
];

const AcademyCourses = () => {
  return (
    <section className="mb-20 sm:mb-28">
      <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
        <h3 className="text-xs uppercase tracking-[0.25em] text-neutral-900 font-bold mb-3">
          Diploma & Masterclass Curriculum
        </h3>
        <h2 className="text-3xl sm:text-4xl font-editorial font-bold text-neutral-950 tracking-tight">
          Academy Programs
        </h2>
        <p className="text-sm sm:text-base text-neutral-700 font-normal mt-3">
          Each program is 100% practical, combining dummy head drills with live client models supervised by senior educators.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {courses.map((course, idx) => (
          <div
            key={idx}
            className="group p-7 sm:p-9 rounded-2xl border border-neutral-300 bg-white text-neutral-900 hover:bg-neutral-950 hover:text-white hover:border-neutral-900 hover:shadow-2xl cursor-pointer transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                <span className="text-[11px] uppercase tracking-wider font-bold px-3 py-1 rounded-full bg-black text-white group-hover:bg-white group-hover:text-black transition-colors duration-300">
                  {course.duration}
                </span>
                <span className="text-xs font-semibold text-neutral-600 group-hover:text-neutral-400 transition-colors duration-300">
                  {course.level}
                </span>
              </div>

              <h4 className="text-2xl font-editorial font-bold tracking-tight mb-3 text-neutral-950 group-hover:text-white transition-colors duration-300">
                {course.title}
              </h4>

              <p className="text-xs sm:text-sm leading-relaxed mb-6 font-normal text-neutral-700 group-hover:text-neutral-300 transition-colors duration-300">
                {course.description}
              </p>

              <div className="space-y-2.5 mb-8">
                <p className="text-xs uppercase tracking-wider font-bold text-neutral-900 group-hover:text-neutral-200 transition-colors duration-300">
                  Key Modules Covered:
                </p>
                {course.modules.map((mod, mIdx) => (
                  <div key={mIdx} className="flex items-start gap-2.5 text-xs sm:text-sm">
                    <FiCheck className="w-4 h-4 shrink-0 mt-0.5 text-emerald-600 group-hover:text-emerald-400 transition-colors duration-300" />
                    <span className="text-neutral-800 group-hover:text-neutral-200 transition-colors duration-300">
                      {mod}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-neutral-200 group-hover:border-neutral-800 transition-colors duration-300 flex flex-wrap items-center justify-between gap-3">
              <span className="text-xs font-medium text-neutral-600 group-hover:text-neutral-400 transition-colors duration-300">
                Certification included upon completion
              </span>

              <Link
                to="/contact"
                className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-lg text-xs uppercase tracking-wider font-semibold transition-all duration-300 bg-black text-white hover:bg-neutral-800 group-hover:bg-white group-hover:text-black group-hover:hover:bg-neutral-200"
              >
                <span>Enroll or Inquire</span>
                <FiArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AcademyCourses;
