import Topbar from "../Components/Topbar";
import Header from "../Components/Header";
import AboutStory from "../Components/AboutStory";
import AboutValues from "../Components/AboutValues";
import AboutCta from "../Components/AboutCta";
import Footer from "../Components/Footer";
import Copyright from "../Components/Copyright";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white text-neutral-900 font-sans-clean selection:bg-neutral-900 selection:text-white">
      <Topbar />
      <Header />

      <main className="flex-1 w-full">
        {/* Minimal Centered Header & Story (White Section) */}
        <div className="max-w-7xl mx-auto px-6 sm:px-8 pt-16 sm:pt-20 pb-16 sm:pb-24 w-full">
          <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-editorial font-bold text-neutral-950 tracking-tight">
              About Damon Len
            </h1>
            <p className="text-base sm:text-lg text-neutral-800 font-normal leading-relaxed mt-4 max-w-2xl mx-auto">
              Precision barbering, bespoke hair artistry, and elite professional education founded at Pulchowk, Lalitpur.
            </p>
          </div>

          {/* Story Section */}
          <AboutStory />
        </div>

        {/* Core Pillars (Full-Width Black Section) */}
        <AboutValues />

        {/* Call to Action (White Section) */}
        <div className="max-w-7xl mx-auto px-6 sm:px-8 py-16 sm:py-20 w-full">
          <AboutCta />
        </div>
      </main>

      <Footer />
      <Copyright />
    </div>
  );
};

export default About;