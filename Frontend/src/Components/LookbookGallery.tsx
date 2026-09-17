import { useState } from "react";
import { FiX, FiMaximize2 } from "react-icons/fi";

import Img1 from "../assets/Img1.jpg";
import Img2 from "../assets/Img2.jpg";
import Img3 from "../assets/Img3.jpg";
import Img4 from "../assets/Img4.jpg";
import img5 from "../assets/img5.jpeg";
import img6 from "../assets/img6.jpeg";
import img7 from "../assets/img7.jpeg";
import img8 from "../assets/img8.jpeg";
import img9 from "../assets/img9.jpeg";
import img10 from "../assets/img10.jpeg";

interface LookbookItem {
  id: number;
  src: string;
  title: string;
  category: "Men" | "Women" | "Color & Styling";
  aspect?: string;
}

const lookbookItems: LookbookItem[] = [
  {
    id: 1,
    src: Img1,
    title: "Signature Modern Crop & Texture",
    category: "Men",
    aspect: "aspect-[4/5]",
  },
  {
    id: 2,
    src: Img2,
    title: "Architectural Precision Taper",
    category: "Men",
    aspect: "aspect-[4/5]",
  },
  {
    id: 3,
    src: Img3,
    title: "Executive Clean Fade & Sculpt",
    category: "Men",
    aspect: "aspect-[4/5]",
  },
  {
    id: 4,
    src: Img4,
    title: "Bespoke Classic Scissor Cut",
    category: "Men",
    aspect: "aspect-[4/5]",
  },
  {
    id: 5,
    src: img5,
    title: "Dimensional Sun-Kissed Balayage",
    category: "Women",
    aspect: "aspect-[4/5]",
  },
  {
    id: 6,
    src: img6,
    title: "Luminous Mocha Brunette Gloss",
    category: "Women",
    aspect: "aspect-[4/5]",
  },
  {
    id: 7,
    src: img7,
    title: "Editorial Silk Finish & Waves",
    category: "Women",
    aspect: "aspect-[4/5]",
  },
  {
    id: 8,
    src: img8,
    title: "High-Contrast Tone & Contour",
    category: "Color & Styling",
    aspect: "aspect-[4/5]",
  },
  {
    id: 9,
    src: img9,
    title: "Velvet Soft Waves & Highlights",
    category: "Women",
    aspect: "aspect-[4/5]",
  },
  {
    id: 10,
    src: img10,
    title: "Precision Razor Fade & Beard Line",
    category: "Men",
    aspect: "aspect-[4/5]",
  },
];

type CategoryFilter = "All" | "Men" | "Women" | "Color & Styling";

const LookbookGallery = () => {
  const [activeFilter, setActiveFilter] = useState<CategoryFilter>("All");
  const [selectedImage, setSelectedImage] = useState<LookbookItem | null>(null);

  const filteredItems =
    activeFilter === "All"
      ? lookbookItems
      : lookbookItems.filter((item) => item.category === activeFilter);

  return (
    <section className="w-full">
      {/* Category Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
        {(["All", "Men", "Women", "Color & Styling"] as CategoryFilter[]).map(
          (filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              className={`px-5 py-2 rounded-full text-xs uppercase tracking-widest font-semibold transition-all cursor-pointer ${
                activeFilter === filter
                  ? "bg-black text-white shadow-sm"
                  : "bg-neutral-100 text-neutral-800 hover:bg-neutral-200"
              }`}
            >
              {filter === "All"
                ? "All Works"
                : filter === "Men"
                ? "Men's Portfolio"
                : filter === "Women"
                ? "Women's Artistry"
                : "Color & Styling"}
            </button>
          )
        )}
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            onClick={() => setSelectedImage(item)}
            className="group relative overflow-hidden rounded-2xl bg-neutral-100 border border-neutral-200 cursor-pointer shadow-xs hover:shadow-md transition-all duration-300"
          >
            {/* Image Frame */}
            <div className="aspect-[4/5] w-full overflow-hidden bg-neutral-100">
              <img
                src={item.src}
                alt={item.title}
                loading="lazy"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>

            {/* Subtle Gradient & Hover Details */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-white">
              <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-neutral-300 mb-1">
                {item.category}
              </span>
              <h4 className="text-base font-medium font-editorial tracking-wide">
                {item.title}
              </h4>
              <div className="mt-3 flex items-center gap-1.5 text-xs text-neutral-200 font-light">
                <FiMaximize2 className="w-3.5 h-3.5" />
                <span>View Full Size</span>
              </div>
            </div>

            {/* Static Minimal Bottom Label for quick viewing */}
            <div className="p-4 bg-white border-t border-neutral-100">
              <p className="text-xs font-semibold text-neutral-900 tracking-tight truncate">
                {item.title}
              </p>
              <p className="text-[11px] text-neutral-500 font-medium">
                {item.category}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Full Size Lightbox Modal */}
      {selectedImage && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 transition-all duration-200 animate-in fade-in"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-2xl w-full bg-neutral-950 rounded-2xl overflow-hidden border border-neutral-800 shadow-2xl"
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setSelectedImage(null)}
              aria-label="Close image"
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/70 text-white hover:bg-white hover:text-black transition-colors flex items-center justify-center cursor-pointer"
            >
              <FiX className="w-5 h-5" />
            </button>

            {/* Modal Image */}
            <div className="aspect-[4/5] sm:aspect-square w-full max-h-[75vh] overflow-hidden bg-black flex items-center justify-center">
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="w-full h-full object-contain"
              />
            </div>

            {/* Modal Footer Info */}
            <div className="p-5 sm:p-6 bg-neutral-950 border-t border-neutral-800">
              <span className="text-[10px] uppercase tracking-[0.25em] text-neutral-400 font-semibold block mb-1">
                Damon Len Studio Lookbook · {selectedImage.category}
              </span>
              <h3 className="text-lg sm:text-xl font-editorial font-medium text-white tracking-tight">
                {selectedImage.title}
              </h3>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default LookbookGallery;
