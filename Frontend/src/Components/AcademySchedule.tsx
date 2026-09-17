import { FiClock, FiCalendar, FiUsers } from "react-icons/fi";

const batches = [
  {
    name: "Morning Foundation Batch",
    time: "08:00 AM – 10:30 AM",
    days: "Monday – Friday",
    focus: "Head geometry, mannequin shear work, clipper drills, and hygiene theory.",
    seats: "6 Seats Available",
    idealFor: "Aspiring barbers and beginners seeking dedicated morning practice.",
  },
  {
    name: "Salon Floor Apprenticeship",
    time: "11:00 AM – 02:00 PM",
    days: "Monday – Friday",
    focus: "Live client models, skin fades, beard sculpting, chemical mixing, and salon speed.",
    seats: "4 Seats Available",
    idealFor: "Intermediate students and assistants transitioning to senior stylist chairs.",
  },
  {
    name: "Weekend Masterclass Intensive",
    time: "11:00 AM – 04:00 PM",
    days: "Saturday & Sunday",
    focus: "Advanced balayage techniques, editorial scissor textures, and business management.",
    seats: "6 Seats Available",
    idealFor: "Working stylists and salon owners aiming to level up their precision craftsmanship.",
  },
];

const AcademySchedule = () => {
  return (
    <section className="mb-20 sm:mb-28">
      <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
        <h3 className="text-xs uppercase tracking-[0.25em] text-neutral-900 font-bold mb-3">
          Training Timings & Batches
        </h3>
        <h2 className="text-3xl sm:text-4xl font-editorial font-bold text-neutral-950 tracking-tight">
          Academy Schedule
        </h2>
        <p className="text-sm sm:text-base text-neutral-700 font-normal mt-3">
          Structured batch timings designed to accommodate both full-time apprentices and working professionals.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
        {batches.map((batch, idx) => (
          <div
            key={idx}
            className="p-6 sm:p-7 rounded-2xl bg-neutral-50 border border-neutral-300 hover:border-neutral-500 transition-all flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[10px] uppercase tracking-wider font-bold px-2.5 py-1 rounded-full bg-black text-white">
                  Batch 0{idx + 1}
                </span>
                <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                  {batch.seats}
                </span>
              </div>

              <h4 className="text-lg font-bold text-neutral-950">
                {batch.name}
              </h4>

              <div className="space-y-2 text-xs font-medium text-neutral-800">
                <p className="flex items-center gap-2">
                  <FiClock className="w-4 h-4 text-neutral-950 shrink-0" />
                  <span className="font-bold text-neutral-950">{batch.time}</span>
                </p>
                <p className="flex items-center gap-2">
                  <FiCalendar className="w-4 h-4 text-neutral-950 shrink-0" />
                  <span>{batch.days}</span>
                </p>
                <p className="flex items-center gap-2">
                  <FiUsers className="w-4 h-4 text-neutral-950 shrink-0" />
                  <span>{batch.idealFor}</span>
                </p>
              </div>

              <div className="pt-3 border-t border-neutral-200">
                <p className="text-xs text-neutral-600 leading-relaxed font-normal">
                  <strong className="text-neutral-900 font-semibold">Core Focus: </strong>
                  {batch.focus}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AcademySchedule;
