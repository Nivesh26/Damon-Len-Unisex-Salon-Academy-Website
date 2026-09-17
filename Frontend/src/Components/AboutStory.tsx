import Img4 from "../assets/Img4.jpg";

const AboutStory = () => {
  return (
    <section className="w-full">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Story Text (7 columns) */}
        <div className="lg:col-span-7 space-y-6">
          <h3 className="text-xs uppercase tracking-[0.25em] text-neutral-900 font-bold">
            The Philosophy
          </h3>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-editorial font-bold text-neutral-950 tracking-tight leading-snug">
            Where Technical Discipline Meets Bespoke Elegance.
          </h2>

          <div className="space-y-4 text-sm sm:text-base text-neutral-700 font-normal leading-relaxed">
            <p>
              Located in the heart of Pulchowk, Lalitpur, <strong className="text-neutral-950 font-semibold">Damon Len Unisex Salon & Academy</strong> was founded with a singular purpose: to bridge architectural precision barbering with contemporary editorial hair artistry.
            </p>
            <p>
              We believe a haircut or color transformation should never follow a generic template. Every service begins with a personal consultation—studying head shape, natural hair fall, skin undertone, and lifestyle to create a tailored silhouette that grows out gracefully.
            </p>
            <p>
              Beyond our salon chairs, Damon Len operates as an academy dedicated to elevating Nepal’s grooming and styling standards through rigorous technical training, hands-on apprenticeship, and creative discipline.
            </p>
          </div>
        </div>

        {/* Editorial Photo (5 columns) */}
        <div className="lg:col-span-5">
          <div className="relative rounded-2xl overflow-hidden border border-neutral-200 shadow-sm aspect-[4/5] bg-neutral-100">
            <img
              src={Img4}
              alt="Damon Len Salon Craftsmanship"
              className="w-full h-full object-cover object-center"
              loading="lazy"
            />
            <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-white/90 backdrop-blur-xs border border-neutral-200 text-neutral-900 text-xs flex items-center justify-between">
              <span className="font-semibold uppercase tracking-wider text-[10px]">
                Pulchowk, Lalitpur Studio
              </span>
              <span className="font-mono text-neutral-500 text-[11px]">Est. Nepal</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutStory;
