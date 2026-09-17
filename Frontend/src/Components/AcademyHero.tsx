const AcademyHero = () => {
  return (
    <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20">
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-editorial font-bold text-neutral-950 tracking-tight">
        Damon Len Academy
      </h1>
      <p className="text-base sm:text-lg text-neutral-800 font-normal leading-relaxed mt-4 max-w-2xl mx-auto">
        Professional hairdressing, master barbering, and creative color education founded at Pulchowk, Lalitpur.
      </p>

      {/* Highlights Bar */}
      <div className="mt-8 flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs font-semibold uppercase tracking-wider text-neutral-800">
        <span className="px-3.5 py-1.5 rounded-full bg-neutral-100 border border-neutral-300">
          Max 6 Students per Batch
        </span>
        <span className="text-neutral-400 hidden sm:inline">·</span>
        <span className="px-3.5 py-1.5 rounded-full bg-neutral-100 border border-neutral-300">
          100% Live Model Practice
        </span>
        <span className="text-neutral-400 hidden sm:inline">·</span>
        <span className="px-3.5 py-1.5 rounded-full bg-neutral-100 border border-neutral-300">
          Professional Certification
        </span>
      </div>
    </div>
  );
};

export default AcademyHero;
