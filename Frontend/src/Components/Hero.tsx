const Hero = () => {
    return (
        <section className="relative w-full h-[75vh] sm:h-[82vh] lg:h-[88vh] bg-black overflow-hidden flex items-center justify-center select-none">
            {/* Damon Len Official Salon Video (First Video, No Sound) */}
            <video
                src="src/assets/damon-len-hero.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover filter brightness-[0.76] contrast-[1.08]"
            />

            {/* Subtle Gradient Overlays for Video Depth and Typography Contrast */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/35 to-transparent pointer-events-none" />
            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black via-black/30 to-transparent pointer-events-none" />

            {/* Minimal Bold Modern Editorial Typography (Middle Left) */}
            <div className="absolute inset-0 z-10 flex flex-col justify-center px-6 sm:px-12 lg:px-16 max-w-7xl mx-auto w-full pointer-events-none">
                <div className="max-w-4xl space-y-2.5 sm:space-y-3.5">
                    <span className="inline-block text-[10px] sm:text-xs uppercase tracking-[0.35em] text-white/85 font-medium font-sans-clean">
                        Pulchowk, Lalitpur • Est. 2024
                    </span>

                    <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-editorial font-semibold text-white tracking-tight leading-[1.18] sm:leading-[1.14] drop-shadow-[0_4px_30px_rgba(0,0,0,0.9)]">
                        <span className="block">Bespoke Hair</span>
                        <span className="block mt-1 sm:mt-2 lg:mt-3">Artistry.</span>
                    </h1>

                    <p className="text-xs sm:text-sm uppercase tracking-[0.26em] text-neutral-200 font-light font-sans-clean drop-shadow-md pt-1">
                        Precision Barbering & Elite Education
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Hero;
