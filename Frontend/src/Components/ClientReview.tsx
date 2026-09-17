import { useState, useEffect } from "react";
import { FiStar, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";

interface Review {
  name: string;
  avatar: string;
  role: string;
  date: string;
  review: string;
}

const reviews: Review[] = [
  {
    name: "Aarav Shrestha",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=250&q=80",
    role: "Signature Haircut & Beard Sculpt",
    date: "2 weeks ago",
    review:
      "Hands down the best fade and beard sculpting in Lalitpur. The scissor precision and attention to detail are on another level. The master educator really understands face structure and hair flow. Definitely my regular salon now.",
  },
  {
    name: "Pooja Maharjan",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=250&q=80",
    role: "Dimensional Balayage & Hair Spa",
    date: "1 month ago",
    review:
      "Had my balayage and deep hair spa done here at Damon Len Pulchowk. Absolutely in love with the result! The color blend is so smooth and natural, and my hair feels healthier than ever. Very clean and professional ambiance.",
  },
  {
    name: "Rohan Shakya",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=250&q=80",
    role: "Skin Fade & Hot Towel Shave",
    date: "3 weeks ago",
    review:
      "Super clean setup and elite barbering. Got a skin fade and hot towel straight razor shave. The service is top tier and they don’t rush through clients like other places. Worth every rupee.",
  },
  {
    name: "Sneha Thapa",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=250&q=80",
    role: "Academy Student & Hair Treatment",
    date: "a month ago",
    review:
      "Enrolled in their masterclass and also got a haircut. The instructors are genuinely passionate and teach you the actual geometry behind sectioning and texturizing. Top salon & academy in Nepal!",
  },
  {
    name: "Bikash Gurung",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=250&q=80",
    role: "Precision Taper & Styling",
    date: "2 months ago",
    review:
      "Best unisex salon in the Pulchowk area. Staff is courteous, hygiene is 10/10, and they listen carefully to what you want before starting. The fade and styling was spot on.",
  },
  {
    name: "Alisha Joshi",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=250&q=80",
    role: "Keratin Therapy & Layered Cut",
    date: "3 weeks ago",
    review:
      "Got a keratin treatment and layer cut. My frizzy hair was transformed into silky, manageable hair. The salon vibe is minimal, calm, and luxury. 5 stars all the way!",
  },
];

const ClientReview = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsVisible, setItemsVisible] = useState(3);
  const [isPaused, setIsPaused] = useState(false);

  // Responsive items visible calculation (3 on desktop, 2 on tablet, 1 on mobile)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setItemsVisible(3);
      } else if (window.innerWidth >= 768) {
        setItemsVisible(2);
      } else {
        setItemsVisible(1);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Auto scroll every 3 seconds (3000ms)
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [isPaused]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  // Duplicated list to allow seamless loop sliding
  const displayList = [...reviews, ...reviews];

  return (
    <section className="pt-8 sm:pt-12 pb-8 sm:pb-12 bg-white text-neutral-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-neutral-500 font-semibold block mb-3">
            Verified Feedback
          </span>
          <h2 className="text-4xl sm:text-5xl font-editorial font-bold text-neutral-950 tracking-tight">
            Client Experiences
          </h2>
          <p className="text-base sm:text-lg text-neutral-700 font-normal mt-3 leading-relaxed">
            Real 5-star Google reviews from clients who trust Damon Len Unisex Salon & Academy at Pulchowk, Lalitpur.
          </p>
        </div>

        {/* Carousel Container (Displays 3 at a time, slides every 5s, pause on hover) */}
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
              {displayList.map((rev, idx) => (
                <div
                  key={idx}
                  className="w-full md:w-1/2 lg:w-1/3 shrink-0 px-3 flex"
                >
                  {/* Clean card: does NOT turn black on hover, cursor pointer */}
                  <div className="w-full p-7 sm:p-8 rounded-2xl bg-white border border-neutral-200/90 hover:border-neutral-400 hover:shadow-lg transition-all duration-300 flex flex-col justify-between space-y-6 cursor-pointer">
                    <div className="space-y-4">
                      {/* Reviewer Header */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <img
                            src={rev.avatar}
                            alt={rev.name}
                            className="w-12 h-12 rounded-full object-cover border-2 border-neutral-200 shadow-xs"
                            loading="lazy"
                          />
                          <div>
                            <h4 className="text-sm font-bold text-neutral-950">
                              {rev.name}
                            </h4>
                            <p className="text-[11px] text-neutral-500 font-medium">
                              {rev.role}
                            </p>
                          </div>
                        </div>

                        <FcGoogle className="w-5 h-5 shrink-0 opacity-90" />
                      </div>

                      {/* Stars & Date */}
                      <div className="flex items-center justify-between pt-1">
                        <div className="flex items-center text-amber-500 gap-0.5">
                          {[...Array(5)].map((_, i) => (
                            <FiStar key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                          ))}
                        </div>
                        <span className="text-[11px] text-neutral-400 font-mono">
                          {rev.date}
                        </span>
                      </div>

                      {/* Review Text */}
                      <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed font-normal">
                        "{rev.review}"
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Floating Left and Right Arrow Buttons on the Sides (Clean hover, not black) */}
          <button
            type="button"
            onClick={handlePrev}
            aria-label="See previous review"
            className="hidden sm:flex absolute -left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full border border-neutral-300 bg-white/95 backdrop-blur-xs text-neutral-900 hover:bg-neutral-100 hover:border-neutral-400 shadow-md items-center justify-center transition-all cursor-pointer z-10"
          >
            <FiChevronLeft className="w-5 h-5" />
          </button>
          <button
            type="button"
            onClick={handleNext}
            aria-label="See next review"
            className="hidden sm:flex absolute -right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full border border-neutral-300 bg-white/95 backdrop-blur-xs text-neutral-900 hover:bg-neutral-100 hover:border-neutral-400 shadow-md items-center justify-center transition-all cursor-pointer z-10"
          >
            <FiChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ClientReview;
