import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

import Img1 from "../assets/Img1.jpg";
import Img2 from "../assets/Img2.jpg";
import Img3 from "../assets/Img3.jpg";
import Img4 from "../assets/Img4.jpg";
import img5 from "../assets/img5.jpeg";
import img6 from "../assets/img6.jpeg";
import img7 from "../assets/img7.jpeg";
import img8 from "../assets/img8.jpeg";

interface LookbookItem {
  id: number;
  title: string;
  category: string;
  image: string;
}

const highlights: LookbookItem[] = [
  {
    id: 1,
    title: "Signature Modern Crop & Texture",
    category: "Men's Artistry",
    image: Img1,
  },
  {
    id: 2,
    title: "Dimensional Sun-Kissed Balayage",
    category: "Color Studio",
    image: img5,
  },
  {
    id: 3,
    title: "Architectural Precision Taper",
    category: "Men's Grooming",
    image: Img2,
  },
  {
    id: 4,
    title: "Luminous Mocha Brunette Gloss",
    category: "Women's Hair",
    image: img6,
  },
  {
    id: 5,
    title: "Executive Clean Fade & Beard Sculpt",
    category: "Grooming Lounge",
    image: Img3,
  },
  {
    id: 6,
    title: "Editorial Silk Finish & Waves",
    category: "Women's Styling",
    image: img7,
  },
  {
    id: 7,
    title: "Bespoke Classic Scissor Cut",
    category: "Men's Artistry",
    image: Img4,
  },
  {
    id: 8,
    title: "High-Contrast Tone & Contour",
    category: "Color & Styling",
    image: img8,
  },
];

const LookbookHighlights = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsVisible, setItemsVisible] = useState(4);
  const [isPaused, setIsPaused] = useState(false);

  // Responsive items visible calculation (4 on desktop, 2 on tablet, 1 on mobile)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setItemsVisible(4);
      } else if (window.innerWidth >= 640) {
        setItemsVisible(2);
      } else {
        setItemsVisible(1);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Auto rotate every 3 seconds (3000ms)
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % highlights.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [isPaused]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? highlights.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % highlights.length);
  };

  // Duplicated list to allow seamless loop sliding
  const displayList = [...highlights, ...highlights];

  return (
    <section className="pt-8 sm:pt-12 pb-20 sm:pb-28 bg-white text-neutral-900 border-b border-neutral-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center flex flex-col items-center justify-center mb-14 sm:mb-20">
          <span className="text-xs uppercase tracking-[0.25em] text-neutral-500 font-semibold block mb-3 text-center">
            Craft & Precision
          </span>
          <h2 className="text-4xl sm:text-5xl font-editorial font-bold text-neutral-950 tracking-tight text-center">
            Lookbook Highlights
          </h2>
          <p className="text-base sm:text-lg text-neutral-700 font-normal mt-3 leading-relaxed max-w-2xl mx-auto text-center">
            A curated preview of bespoke haircuts, dimensional hair coloring, and editorial transformations created daily at our Pulchowk studio.
          </p>
        </div>

        {/* 8 Items Carousel (Rotating every 3 seconds, pauses on hover) */}
        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="overflow-hidden -mx-3 py-2">
            <div
              className="flex transition-transform duration-700 ease-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / itemsVisible)}%)`,
              }}
            >
              {displayList.map((item, idx) => (
                <div
                  key={idx}
                  className="w-full sm:w-1/2 lg:w-1/4 shrink-0 px-3 flex"
                >
                  <Link
                    to="/lookbook"
                    className="group w-full p-4 rounded-2xl border border-neutral-200/90 bg-white text-neutral-900 hover:border-neutral-400 hover:shadow-lg transition-all duration-300 flex flex-col justify-between cursor-pointer select-none"
                  >
                    <div className="cursor-pointer">
                      {/* Image Frame with Smooth Image Zoom */}
                      <div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-neutral-100 mb-4 cursor-pointer">
                        <img
                          src={item.image}
                          alt={item.title}
                          loading="lazy"
                          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out cursor-pointer"
                        />
                      </div>

                      {/* Card Meta */}
                      <div className="space-y-1.5 px-1 cursor-pointer">
                        <span className="text-[11px] uppercase tracking-widest font-semibold text-neutral-500 block cursor-pointer">
                          {item.category}
                        </span>
                        <h3 className="text-lg font-editorial font-bold text-neutral-950 group-hover:text-neutral-700 transition-colors duration-200 leading-snug cursor-pointer">
                          {item.title}
                        </h3>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Floating Left and Right Arrow Buttons on the Sides */}
          <button
            type="button"
            onClick={handlePrev}
            aria-label="See previous highlight"
            className="hidden sm:flex absolute -left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full border border-neutral-300 bg-white/95 backdrop-blur-xs text-neutral-900 hover:bg-neutral-100 hover:border-neutral-400 shadow-md items-center justify-center transition-all cursor-pointer z-10"
          >
            <FiChevronLeft className="w-5 h-5" />
          </button>
          <button
            type="button"
            onClick={handleNext}
            aria-label="See next highlight"
            className="hidden sm:flex absolute -right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full border border-neutral-300 bg-white/95 backdrop-blur-xs text-neutral-900 hover:bg-neutral-100 hover:border-neutral-400 shadow-md items-center justify-center transition-all cursor-pointer z-10"
          >
            <FiChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default LookbookHighlights;
